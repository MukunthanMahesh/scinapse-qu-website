export default function USCC() {
  return (
    // Main container for the gallery page
    <div className="min-h-screen flex items-center justify-center bg-brand-white gallery-container">
      {/* Under Construction GIF */}
      <div>
        <img
          src="/assets/under-construction.gif"
          alt="Under Construction"
          className="max-w-full h-auto"
        />
        <div className="h-full">
          <h1 className="text-2xl text-brand-black font-semibold font-serif text-center mt-4">Page Coming Soon!</h1>
        </div>
      </div>
    </div>
  );}
