export const events = [
  {
    title: 'Undergraduate Science Case Competition',
    date: '2023-2024',
    images: Object.entries(
      import.meta.glob('/src/assets/gallery/SciNapse_USCC_2023-2024/*.{jpg,jpeg,png}', {
        query: '?url', import: 'default',
        eager: true,
      })
    ).map(([path, src], i) => ({
      src,
      alt: `USCC 2023-2024 - ${i + 1}`,
      aspectRatio: 1.33,
    })),
  },
  {
    title: 'STEM Horizons: AI in Healthcare Summit 2025',
    date: 'January 2025',
    images: Object.entries(
      import.meta.glob('/src/assets/gallery/STEM_Horizons_2025/*.{jpg,jpeg,png}', {
        query: '?url', import: 'default',
        eager: true,
      })
    ).map(([path, src], i) => ({
      src,
      alt: `STEM Summit 2025 - ${i + 1}`,
      aspectRatio: 1.33,
    })),
  },
];
