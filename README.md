# Chao Hsuan - Personal Portfolio Website

A modern, responsive personal portfolio website built for GitHub Pages. Features a clean design with project showcase, resume viewer, and dynamic content management.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Project Showcase**: Interactive project cards with detailed modals
- **Resume Viewer**: Embedded PDF viewer for inline resume viewing
- **Dynamic Content**: JSON-based project management for easy updates
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: Keyboard navigation and screen reader support

## 📁 Project Structure

```
chaohsuan.github.io/
├── index.html              # Main portfolio page
├── resume.html             # Resume viewer page
├── projects.json           # Project data (easily editable)
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── assets/                 # Media files
│   ├── images/             # Project thumbnails and screenshots
│   ├── videos/             # Demo videos
│   └── resume.pdf          # Resume PDF file
└── README.md               # This file
```

## 🛠️ Setup Instructions

### 1. Add Your Content

#### Resume
- Place your resume PDF in `assets/resume.pdf`

#### Projects
- Add project images to `assets/images/`
- Add demo videos to `assets/videos/`
- Update `projects.json` with your project information

#### Project Images Needed:
- `ecommerce-thumb.jpg` - E-commerce project thumbnail
- `taskmanager-thumb.jpg` - Task manager project thumbnail
- `weather-thumb.jpg` - Weather app project thumbnail
- `blog-thumb.jpg` - Blog CMS project thumbnail
- Various screenshot files as referenced in projects.json

#### Demo Videos Needed:
- `ecommerce-demo.mp4` - E-commerce project demo
- `taskmanager-demo.mp4` - Task manager project demo
- `weather-demo.mp4` - Weather app project demo
- `blog-demo.mp4` - Blog CMS project demo

### 2. Customize Projects

Edit `projects.json` to add, remove, or modify projects:

```json
{
  "projects": [
    {
      "id": "unique-project-id",
      "title": "Project Title",
      "thumbnail": "assets/images/project-thumb.jpg",
      "skills": ["Skill 1", "Skill 2", "Skill 3"],
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "screenshots": [
        "assets/images/screenshot1.jpg",
        "assets/images/screenshot2.jpg"
      ],
      "video": "assets/videos/project-demo.mp4"
    }
  ]
}
```

### 3. Deploy to GitHub Pages

1. Push all files to your GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" → "main" branch
4. Your site will be available at `https://yourusername.github.io`

## 🎨 Customization

### Colors
The main color scheme uses:
- Primary: `#007bff` (blue)
- Secondary: `#667eea` to `#764ba2` (gradient)
- Background: `#f8f9fa` (light gray)

### Typography
- Font: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes with mobile optimization

### Layout
- Grid-based project layout
- Modal system for project details
- Smooth scrolling navigation

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **Vanilla JavaScript**: No frameworks, lightweight
- **JSON**: Data management
- **GitHub Pages**: Static hosting

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features
- Lazy loading for images
- Optimized CSS and JavaScript
- Minimal dependencies
- Fast loading times

## 📝 Adding New Projects

1. **Add Media Files**:
   - Add thumbnail image to `assets/images/`
   - Add screenshots to `assets/images/`
   - Add demo video to `assets/videos/`

2. **Update JSON**:
   - Add new project object to `projects.json`
   - Include all required fields (id, title, thumbnail, skills, features, screenshots, video)

3. **Test**:
   - Open `index.html` in browser
   - Verify project appears in grid
   - Test modal functionality

## 🐛 Troubleshooting

### Common Issues

**Projects not loading**:
- Check `projects.json` syntax
- Verify file paths in JSON
- Check browser console for errors

**Images not displaying**:
- Verify image files exist in correct paths
- Check file permissions
- Ensure proper file extensions

**Modal not opening**:
- Check JavaScript console for errors
- Verify project IDs match between HTML and JSON

**PDF not loading**:
- Ensure `resume.pdf` exists in `assets/` folder
- Check file size (GitHub has file size limits)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ for GitHub Pages**