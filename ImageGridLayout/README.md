# Image Grid Layout

![GitHub stars](https://img.shields.io/github/stars/TheRealSaiTama/SimpleHTML?style=social)
![GitHub forks](https://img.shields.io/github/forks/TheRealSaiTama/SimpleHTML?style=social)

## Overview

The **Image Grid Layout** project is designed to help you practice and master CSS Grid Layout. It showcases how to create responsive and visually appealing image grids using HTML and CSS. This project is an excellent way to enhance your understanding of CSS Grid and its capabilities.

## Features

- **Responsive Design**: The image grid adjusts seamlessly to different screen sizes.
- **Customizable Layout**: Easily modify the number of columns and rows in the grid.
- **Stylish UI**: Clean and modern design with smooth transitions and rounded corners.
- **Maintains Aspect Ratio**: Images maintain their aspect ratio while filling their grid cells.

## Screenshots

![Image Grid Layout Screenshot](screenshot.png)

## Getting Started

### Prerequisites

Ensure you have a modern web browser installed on your device.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheRealSaiTama/SimpleHTML.git
   ```

2. Navigate to the `ImageGridLayout` directory:
   ```bash
   cd SimpleHTML/ImageGridLayout
   ```

3. Open the `index.html` file in your web browser.

### Usage

The `index.html` file contains the HTML structure for the image grid, while the `style.css` file contains the CSS styles for the grid layout. You can customize the images and styles as needed.

#### HTML Structure
```html
<div class="container">
    <div class="gridImages">
        <img src="images/jasper-gribble-TTExgxV06KA-unsplash.jpg" alt="imag1">
        <img src="images/florian-schmid-f1PzRPbqt0M-unsplash.jpg" alt="img2">
        <img src="images/bernhard-uTd-kylh7bE-unsplash.jpg" alt="img3">
        <img src="images/pawel-czerwinski-Wuu6H3mI7UA-unsplash.jpg" alt="img4">
        <img src="images/Screenshot%20from%202025-02-25%2002-17-18.png" alt="img5">
        <img src="images/Screenshot%20from%202025-02-25%2002-18-20.png" alt="img6">
    </div>
</div>
```

#### CSS Styles
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container {
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.gridImages {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-gap: 10px; 
    width: 100%;
    max-width: 1200px; 
}
.gridImages img {
    width: 100%;
    height: auto; 
    object-fit: cover;
    border-radius: 8px;
}
```

### Customization

Feel free to customize the styles and functionality of the app according to your preferences. The CSS and HTML are straightforward and easy to modify.

## Technologies Used

- **HTML5**: For structuring the image grid elements.
- **CSS3**: For styling the grid and its components, particularly using CSS Grid Layout.

## File Structure

```
ImageGridLayout/
│
├── images/
│   └── (image files)
├── README.md
├── index.html
└── style.css
```

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](../../LICENSE) file for details.

## Contact

For any questions or feedback, feel free to contact me at [keshavsde@gmail.com](mailto:keshavsde@gmail.com).

