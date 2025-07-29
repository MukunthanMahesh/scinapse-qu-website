require('dotenv').config();
const fs = require('fs');
const { list } = require('@vercel/blob');

const RW_TOKEN = process.env.VERCEL_BLOB_READ_WRITE_TOKEN;
const BLOB_HOST = 'sqfvtb9y6up1eyj2.public.blob.vercel-storage.com';

const EVENTS = [
  {
    id: 'STEM_Horizons_2025',
    title: 'STEM Horizons: AI in Healthcare Summit 2025',
    date: 'January 2025',
  },
  {
    id: 'SciNapse_USCC_2023-2024',
    title: 'Undergraduate Science Case Competition',
    date: '2023-2024',
  },
];

(async function generate() {
  const allBlobs = await list({ token: RW_TOKEN });

  const eventData = EVENTS.map(event => {
    const images = allBlobs.blobs
      .filter(blob =>
        blob.pathname.startsWith(`${event.id}/`) &&
        blob.size > 0 &&
        /\.\w+$/.test(blob.pathname) // ensures it has a file extension
      )
      .map((blob, i) => ({
        src: `https://${BLOB_HOST}/${blob.pathname}`,
        alt: `${event.title} - ${i + 1}`,
        aspectRatio: 1.33,
      }));

    return {
      title: event.title,
      date: event.date,
      images,
    };
  });

  fs.writeFileSync(
    'src/data/galleryEvents.js',
    `export const events = ${JSON.stringify(eventData, null, 2)};\n`
  );

  console.log('✅ galleryEvents.js updated.');
})();
