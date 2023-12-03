## Customization Guide

This guide will help you customize the "La 404 Devinci" web template to fit your needs.

### Changing the Title and Logo

- Update the title:
  - Find the `<title>` tag in the `index.html` file.
  - Replace `La 404 Devinci` with your desired website title.

- Replace the logo:
  - In the `<header>` section of `index.html`, locate the `<img>` tag.
  - Change the `src` attribute from `assets/Logo.png` to the path of your new logo image.

### Modifying Description

- To change the website description:
  - Locate the `<p class="description">` tag in `index.html`.
  - Replace the existing text with your new description.

### Updating the Image Slider

- To update images in the slider:
  - Within the `<div class="slider">` in `index.html`, find each `<img>` tag.
  - Replace the `src` attributes with the paths to your new images.
  - You can add or remove `<img>` tags as needed for more or fewer images.
  - Do not forget to change the images file extension (.png and .jpg for example).

### Social Media Links

- To update social media links:
  - In the `.social-media-links` div in `index.html`, find each `<a>` tag.
  - Update the `href` attributes with the new URLs for each social media platform.
  - Optionally, change the text next to the icons if necessary.

### Styling Customization (CSS)

- To customize styles:
  - In the `styles.css` file, modify the color variables in the `:root` section to change the color scheme.
  - Update styles for elements like `.logo`, `.header`, `.description`, etc., to change their appearance.
  - Adjust responsive design settings under `@media only screen and (max-width: 768px)`.

### JavaScript Functionality

- To adjust JavaScript functionality:
  - In the `script.js` file, modify the slider's timing by changing the value in `setInterval(nextSlide, 5000);`.
  - Update functions like `getVisibleSlides()`, `setSlidesWidth()`, and `adjustSliderPosition()` for custom slider behavior.
