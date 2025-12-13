# Natours - Exciting Tours for Adventurous People

A modern, responsive landing page for Natours, an outdoor adventure tour company. This project showcases beautiful design and smooth user experience for promoting adventure tours.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern CSS Architecture**: Built with SASS using the 7-1 architecture pattern
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Interactive Navigation**: Mobile-friendly navigation with hamburger menu
- **Back-to-Top Button**: Smooth scroll to top functionality
- **Firebase Hosting**: Deployed and hosted on Firebase
- **Optimized Performance**: Compressed and prefixed CSS for production

## 🛠️ Tech Stack

- **Frontend**: HTML5, SASS/SCSS, Vanilla JavaScript
- **Build Tools**: Node.js, npm-run-all, PostCSS, Autoprefixer
- **Hosting**: Firebase Hosting
- **CSS Framework**: Custom SASS architecture (7-1 pattern)

## 📁 Project Structure

```
Front-end-Projects/
├── public/                    # Production files
│   ├── index.html            # Main HTML file
│   ├── app.js               # Main JavaScript file
│   ├── css/
│   │   └── style.css        # Compiled CSS
│   ├── img/                 # Images and assets
│   └── fonts/               # Font files
├── sass/                     # SASS source files
│   ├── main.scss            # Main SASS file
│   ├── abstracts/           # Variables, mixins, functions
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _functions.scss
│   ├── base/                # Base styles
│   │   ├── _base.scss
│   │   ├── _typography.scss
│   │   ├── _utilities.scss
│   │   └── _animation.scss
│   ├── components/          # Component styles
│   │   ├── _button.scss
│   │   ├── _card.scss
│   │   ├── _feature-box.scss
│   │   ├── _form.scss
│   │   ├── _popup.scss
│   │   ├── _story.scss
│   │   ├── _bg-video.scss
│   │   ├── _composition.scss
│   │   └── _back-to-top.scss
│   ├── layout/              # Layout styles
│   │   ├── _grid.scss
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   └── _navigation.scss
│   └── pages/               # Page-specific styles
│       └── _home.scss
├── firebase.json            # Firebase configuration
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mostafaEkbal/Front-end-Projects.git
   cd Front-end-Projects
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   ```bash
   # Watch SASS changes and compile CSS
   npm run watch:sass
   ```

4. **Open in browser**
   Open `public/index.html` in your browser or use a local server.

## 📜 Available Scripts

- `npm run watch:sass` - Watch SASS files and compile to CSS on changes
- `npm run compile:sass` - Compile SASS to CSS once
- `npm run build:css` - Full CSS build pipeline (compile, concat, prefix, compress)
- `npm run build` - Build JavaScript bundle with Browserify

## 🎨 SASS Architecture (7-1 Pattern)

This project follows the 7-1 SASS architecture pattern:

- **abstracts/**: Variables, mixins, and functions
- **base/**: Base styles, typography, utilities, animations
- **components/**: Reusable UI components
- **layout/**: Layout-specific styles (grid, header, footer, navigation)
- **pages/**: Page-specific styles

## 🌐 Deployment

The project is configured for Firebase Hosting:

1. **Build for production**
   ```bash
   npm run build:css
   ```

2. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

## 📱 Features Overview

### Navigation
- Responsive hamburger menu for mobile devices
- Smooth scrolling navigation
- Active section highlighting

### Hero Section
- Eye-catching header with call-to-action
- Background video/image support
- Animated text elements

### Tour Sections
- Feature boxes highlighting benefits
- Tour cards with pricing and details
- Customer stories and testimonials
- Booking form integration

### Interactive Elements
- Back-to-top button with smooth scrolling
- Modal popups for additional information
- Hover effects and animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [package.json](package.json) file for details.

## 👤 Author

**Mostafa Mohamed Ekbal**
- GitHub: [@mostafaEkbal](https://github.com/mostafaEkbal)

## 🙏 Acknowledgments

- Design inspiration from advanced CSS and SASS courses
- Icons and fonts from Google Fonts
- Firebase for hosting infrastructure</content>
<parameter name="filePath">/Users/mostafamohamedekbal/Desktop/Front-end-Projects/README.md