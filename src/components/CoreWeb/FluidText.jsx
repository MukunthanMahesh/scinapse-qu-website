import { useState, useMemo } from "react";

/**
 * FluidText Component
 * 
 * Renders a heading (`<h1>`) where each letter is individually wrapped in a <span>
 * with hover effects. Hovering a letter highlights it and its adjacent letters
 * (within the same visual line) by scaling and changing their color.
 * 
 * Supports manual line breaks after specific words via the `breakAfterWords` prop.
 * 
 * Props:
 * - text: string (required) - the full sentence/phrase to render.
 * - breakAfterWords: array of words (optional) - each word after which a <br /> will be inserted.
 * 
 * Example usage:
 * <FluidText
 *   text="We prepare undergraduates to lead through research and innovation."
 *   breakAfterWords={["prepare", "to", "research"]}
 * />
 */

export default function FluidText({ text, breakAfterWords = [] }) {
  // Tracks which character index is currently being hovered
  const [hoverIndex, setHoverIndex] = useState(null);

  // Convert breakAfterWords array to a Set for fast lookup
  const breakAfter = useMemo(() => new Set(breakAfterWords), [breakAfterWords]);

  // Track the current line number for line-aware hover behavior
  let currentLine = 0;
  const charMeta = []; // Stores { index: globalCharIndex, line: lineNumber } for each letter

  // Preprocess the input text into word objects
  const words = text.split(" ").map((word, wordIndex) => {
    const letters = word.split(""); // Split word into characters

    // Map each letter while tagging it with the current line
    const mappedLetters = letters.map((char) => {
      const meta = { index: charMeta.length, line: currentLine };
      charMeta.push(meta);
      return char;
    });

    // Check if this word should be followed by a line break
    const shouldBreak = breakAfter.has(word);
    if (shouldBreak) currentLine++; // Advance line number after this word

    return {
      text: word,
      letters: mappedLetters,
      breakAfter: shouldBreak,
      wordIndex,
    };
  });

  return (
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-md sm:max-w-lg fluid-textcyanBlue text-center sm:text-left">
      {words.map((word, wordIndex) => (
        <span key={wordIndex}>
          {/* Render each letter in the word */}
          {word.letters.map((char, charIndex) => {
            // Determine the character's global index
            const globalIndex = charMeta.findIndex(
              (m, i) =>
                i ===
                words
                  .slice(0, wordIndex)
                  .reduce((acc, w) => acc + w.letters.length, 0) + charIndex
            );

            const thisLine = charMeta[globalIndex].line;

            // Check if this character is hovered or adjacent to the hovered one (on same line)
            let hoverType = null;
            if (
              hoverIndex !== null &&
              charMeta[hoverIndex]?.line === thisLine
            ) {
              if (globalIndex === hoverIndex) {
                hoverType = "main";
              } else if (
                globalIndex === hoverIndex - 1 ||
                globalIndex === hoverIndex + 1
              ) {
                hoverType = "adjacent";
              }
            }

            return (
              <span
                key={charIndex}
                onMouseEnter={() => setHoverIndex(globalIndex)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`inline-block transition duration-200 ease-in-out ${
                  hoverType === "main"
                    ? "text-brand-cyanBlue scale-125"
                    : hoverType === "adjacent"
                    ? "text-brand-cyanBlue scale-110"
                    : ""
                }`}
              >
                {char}
              </span>
            );
          })}

          {/* Insert <br /> after selected words, or a space between words */}
          {word.breakAfter ? (
            <br />
          ) : wordIndex < words.length - 1 ? (
            <span className="inline-block w-[0.25em]">{'\u00A0'}</span>
          ) : null}
        </span>
      ))}
    </h1>
  );
}
