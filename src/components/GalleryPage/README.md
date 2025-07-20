# GalleryPage (Simple Guide)

A minimal, easy-to-extend gallery for event photos.

## 🖼️ How It Works
- All gallery logic is in your `src/pages/Gallery.jsx` file.
- Each event has a title, date, and an array of images (with `src`, `alt`, and `aspectRatio`).
- No dynamic folder loading—just list your images directly.

## 📋 Adding a New Event or Image
1. **Add your images to the `public/gallery/your_event/` folder.**
2. **In `src/pages/Gallery.jsx`, add a new event object to the `events` array:**

```js
{
  title: 'My New Event',
  date: '2024',
  images: [
    { src: '/gallery/your_event/image1.jpg', alt: 'Description', aspectRatio: 1.3 },
    { src: '/gallery/your_event/image2.jpg', alt: 'Description', aspectRatio: 1.2 },
    // ...more images
  ]
}
```
- **Tip:** You can copy an existing event and just change the details.
- **Aspect ratio** is width/height (e.g. 1.33 for 4:3 images).

## 🏗️ Main Components
- **Gallery.jsx (page):** Sets up events and renders the gallery UI.
- **EventSection.jsx:** Shows each event and its images, with a show more/less toggle.
- **MasonryGrid.jsx:** Lays out images in a responsive grid.
- **ClickableImage.jsx:** Handles lazy loading and skeleton for each image.

## 🖊️ Example Event
```js
{
  title: 'Sample Event',
  date: '2024',
  images: [
    { src: '/gallery/sample_event/photo1.jpg', alt: 'Photo 1', aspectRatio: 1.33 },
    { src: '/gallery/sample_event/photo2.jpg', alt: 'Photo 2', aspectRatio: 1.33 },
  ]
}
```

## 🎨 Styling
- Uses brand colors from Tailwind CSS.
- Custom styles in `src/CSS/gallery.css`.

## 💡 Tips
- Use compressed images for faster loading.
- Provide good alt text for accessibility.
- To add more events, just add to the `events` array—no need to touch any other files!

---

**That’s it! Anyone can add new events or images by editing one array.** 