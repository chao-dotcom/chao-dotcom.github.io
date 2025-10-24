/* Projects functionality for Chao Hsuan's portfolio */

// Projects data
const projectsData = {
    'project-1': {
        id: 'project-1',
        title: 'E-commerce Platform',
        subtitle: 'React/Node.js/MongoDB, Dec. 2023',
        image: 'img/projects/ecommerce.jpg',
        category: 'web',
        description: 'A comprehensive full-stack e-commerce platform built with modern web technologies. This project demonstrates proficiency in React for frontend development, Node.js for backend services, and MongoDB for database management.',
        features: [
            'User authentication and authorization',
            'Product catalog with search and filtering',
            'Shopping cart and checkout process',
            'Payment integration with Stripe API',
            'Admin dashboard for inventory management',
            'Responsive design for all devices',
            'Real-time inventory updates',
            'Order tracking and notifications'
        ],
        techStack: [
            { name: 'React', icon: '⚛️', category: 'frontend' },
            { name: 'Node.js', icon: '🟢', category: 'backend' },
            { name: 'MongoDB', icon: '🍃', category: 'database' },
            { name: 'Express', icon: '🚀', category: 'backend' },
            { name: 'Stripe', icon: '💳', category: 'payment' },
            { name: 'AWS', icon: '☁️', category: 'cloud' }
        ],
        links: [
            { name: 'Live Demo', url: '#', icon: '🌐', class: 'demo' },
            { name: 'GitHub', url: '#', icon: '📱', class: 'github' }
        ],
        stats: {
            views: 156,
            likes: 23,
            forks: 8
        },
        screenshots: [
            'img/projects/ecommerce-1.jpg',
            'img/projects/ecommerce-2.jpg',
            'img/projects/ecommerce-3.jpg'
        ],
        video: 'videos/ecommerce-demo.mp4'
    },
    'project-2': {
        id: 'project-2',
        title: 'Task Manager App',
        subtitle: 'React Native/Firebase, Nov. 2023',
        image: 'img/projects/taskmanager.jpg',
        category: 'mobile',
        description: 'A cross-platform mobile application for task management with real-time synchronization. Built with React Native for consistent user experience across iOS and Android platforms.',
        features: [
            'Cross-platform compatibility (iOS & Android)',
            'Real-time task synchronization',
            'Offline support and data persistence',
            'Push notifications for reminders',
            'Team collaboration features',
            'Intuitive drag-and-drop interface',
            'Task categorization and tagging',
            'Progress tracking and analytics'
        ],
        techStack: [
            { name: 'React Native', icon: '📱', category: 'mobile' },
            { name: 'Firebase', icon: '🔥', category: 'backend' },
            { name: 'Redux', icon: '🔄', category: 'state' },
            { name: 'Expo', icon: '📦', category: 'framework' },
            { name: 'AsyncStorage', icon: '💾', category: 'storage' },
            { name: 'Push Notifications', icon: '🔔', category: 'notification' }
        ],
        links: [
            { name: 'App Store', url: '#', icon: '🍎', class: 'demo' },
            { name: 'Play Store', url: '#', icon: '🤖', class: 'demo' },
            { name: 'GitHub', url: '#', icon: '📱', class: 'github' }
        ],
        stats: {
            views: 89,
            likes: 15,
            downloads: 234
        },
        screenshots: [
            'img/projects/taskmanager-1.jpg',
            'img/projects/taskmanager-2.jpg',
            'img/projects/taskmanager-3.jpg'
        ],
        video: 'videos/taskmanager-demo.mp4'
    },
    'project-3': {
        id: 'project-3',
        title: 'Predictive Analytics Model',
        subtitle: 'Python/Scikit-learn/TensorFlow, Oct. 2023',
        image: 'img/projects/datascience.jpg',
        category: 'data',
        description: 'A comprehensive machine learning project focused on predictive analytics using real-world datasets. This project showcases expertise in data science, machine learning algorithms, and model optimization.',
        features: [
            'Multiple ML algorithms implementation',
            'Data preprocessing and feature engineering',
            'Model performance optimization',
            'Cross-validation and hyperparameter tuning',
            'Comprehensive data visualization',
            'Model interpretation and explainability',
            'Real-time prediction capabilities',
            'Automated model retraining pipeline'
        ],
        techStack: [
            { name: 'Python', icon: '🐍', category: 'language' },
            { name: 'Scikit-learn', icon: '🔬', category: 'ml' },
            { name: 'TensorFlow', icon: '🧠', category: 'ml' },
            { name: 'Pandas', icon: '🐼', category: 'data' },
            { name: 'NumPy', icon: '🔢', category: 'data' },
            { name: 'Matplotlib', icon: '📊', category: 'visualization' }
        ],
        links: [
            { name: 'Jupyter Notebook', url: '#', icon: '📓', class: 'demo' },
            { name: 'GitHub', url: '#', icon: '📱', class: 'github' },
            { name: 'Research Paper', url: '#', icon: '📄', class: 'demo' }
        ],
        stats: {
            views: 124,
            likes: 31,
            accuracy: '92%'
        },
        screenshots: [
            'img/projects/datascience-1.jpg',
            'img/projects/datascience-2.jpg',
            'img/projects/datascience-3.jpg'
        ],
        video: 'videos/datascience-demo.mp4'
    },
    'project-4': {
        id: 'project-4',
        title: 'Weather Dashboard',
        subtitle: 'JavaScript/API/Chart.js, Sep. 2023',
        image: 'img/projects/weather.jpg',
        category: 'web',
        description: 'An interactive weather dashboard that provides real-time weather data with beautiful visualizations. Features comprehensive weather information and intuitive user interface.',
        features: [
            'Real-time weather data integration',
            'Interactive weather maps',
            '5-day weather forecast',
            'Weather alerts and notifications',
            'Responsive design for all devices',
            'Multiple weather data sources',
            'Customizable dashboard layout',
            'Historical weather data analysis'
        ],
        techStack: [
            { name: 'JavaScript', icon: '🟨', category: 'language' },
            { name: 'Chart.js', icon: '📈', category: 'visualization' },
            { name: 'OpenWeather API', icon: '🌤️', category: 'api' },
            { name: 'Leaflet', icon: '🗺️', category: 'maps' },
            { name: 'CSS3', icon: '🎨', category: 'styling' },
            { name: 'HTML5', icon: '🌐', category: 'markup' }
        ],
        links: [
            { name: 'Live Demo', url: '#', icon: '🌐', class: 'demo' },
            { name: 'GitHub', url: '#', icon: '📱', class: 'github' }
        ],
        stats: {
            views: 203,
            likes: 42,
            apiCalls: '10K+'
        },
        screenshots: [
            'img/projects/weather-1.jpg',
            'img/projects/weather-2.jpg',
            'img/projects/weather-3.jpg'
        ],
        video: 'videos/weather-demo.mp4'
    }
};

// Initialize projects functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeProjects();
    initializeProjectFilters();
    initializeProjectSearch();
    initializeProjectModals();
});

// Initialize projects
function initializeProjects() {
    // Add project data attributes
    Object.keys(projectsData).forEach(projectId => {
        const projectElement = document.getElementById(projectId);
        if (projectElement) {
            projectElement.setAttribute('data-project', projectId);
        }
    });
}

// Initialize project filters
function initializeProjectFilters() {
    const filterTabs = document.querySelectorAll('.tab a');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            filterProjects(category);
        });
    });
}

// Filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('.scrollspy');
    const tabs = document.querySelectorAll('.tab a');
    
    // Update active tab
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('onclick').includes(category)) {
            tab.classList.add('active');
        }
    });
    
    // Show/hide projects based on category
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
            project.classList.add('fade-in');
        } else {
            project.style.display = 'none';
            project.classList.remove('fade-in');
        }
    });
    
    // Update section headers
    updateSectionHeaders(category);
    
    // Animate visible projects
    animateVisibleProjects();
}

// Update section headers based on filter
function updateSectionHeaders(category) {
    const headers = document.querySelectorAll('.filter_on, .filter_off');
    
    headers.forEach(header => {
        if (category === 'all') {
            header.classList.remove('filter_on');
            header.classList.add('filter_off');
        } else {
            if (header.classList.contains(category)) {
                header.classList.remove('filter_off');
                header.classList.add('filter_on');
            } else {
                header.classList.remove('filter_on');
                header.classList.add('filter_off');
            }
        }
    });
}

// Animate visible projects
function animateVisibleProjects() {
    const visibleProjects = document.querySelectorAll('.scrollspy[style*="block"] .gallery-curve-wrapper');
    
    visibleProjects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add('fade-in-up');
        }, index * 100);
    });
}

// Initialize project search
function initializeProjectSearch() {
    // Add search functionality if search input exists
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchProjects(this.value);
        });
    }
}

// Search projects
function searchProjects(query) {
    const projects = document.querySelectorAll('.gallery-expand');
    const searchTerm = query.toLowerCase();
    
    projects.forEach(project => {
        const projectId = project.id;
        const projectData = projectsData[projectId];
        
        if (projectData) {
            const title = projectData.title.toLowerCase();
            const description = projectData.description.toLowerCase();
            const features = projectData.features.join(' ').toLowerCase();
            
            if (title.includes(searchTerm) || 
                description.includes(searchTerm) || 
                features.includes(searchTerm)) {
                project.closest('.scrollspy').style.display = 'block';
            } else {
                project.closest('.scrollspy').style.display = 'none';
            }
        }
    });
}

// Initialize project modals
function initializeProjectModals() {
    const projectElements = document.querySelectorAll('.gallery-expand');
    
    projectElements.forEach(element => {
        element.addEventListener('click', function() {
            const projectId = this.id;
            openProjectModal(projectId);
        });
    });
}

// Open project modal with enhanced content
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    
    if (project) {
        showEnhancedProjectModal(project);
    }
}

// Show enhanced project modal
function showEnhancedProjectModal(project) {
    const modalHtml = `
        <div id="project-modal" class="modal project-modal">
            <div class="modal-content">
                <div class="project-header">
                    <h3>${project.title}</h3>
                    <div class="project-meta">${project.subtitle}</div>
                </div>
                
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    ${project.video ? `
                        <div class="video-overlay">
                            <button class="btn-floating btn-large waves-effect waves-light" onclick="playProjectVideo('${project.video}')">
                                <i class="material-icons">play_arrow</i>
                            </button>
                        </div>
                    ` : ''}
                </div>
                
                <div class="project-description">
                    <p>${project.description}</p>
                </div>
                
                <div class="project-features">
                    <h4>Key Features</h4>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-tech-stack">
                    <h4>Technology Stack</h4>
                    <div class="tech-grid">
                        ${project.techStack.map(tech => `
                            <div class="tech-item" data-category="${tech.category}">
                                <div class="tech-icon">${tech.icon}</div>
                                <div class="tech-name">${tech.name}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                ${project.screenshots ? `
                    <div class="project-screenshots">
                        <h4>Screenshots</h4>
                        <div class="screenshot-gallery">
                            ${project.screenshots.map(screenshot => `
                                <img src="${screenshot}" alt="Screenshot" class="screenshot" onclick="openScreenshotModal('${screenshot}')">
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <div class="project-stats">
                    ${Object.entries(project.stats).map(([key, value]) => `
                        <div class="stat">
                            <span class="stat-number">${value}</span>
                            <span class="stat-label">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="project-links">
                    ${project.links.map(link => `
                        <a href="${link.url}" class="${link.class}" target="_blank">
                            <i class="material-icons">${link.icon}</i>
                            ${link.name}
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('project-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Initialize and open modal
    const modal = document.getElementById('project-modal');
    const instance = M.Modal.init(modal, {
        dismissible: true,
        opacity: 0.5,
        inDuration: 300,
        outDuration: 200,
        onOpenEnd: function() {
            initializeModalInteractions();
        }
    });
    
    instance.open();
}

// Initialize modal interactions
function initializeModalInteractions() {
    // Add click handlers for tech items
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showTechCategoryInfo(category);
        });
    });
}

// Show tech category information
function showTechCategoryInfo(category) {
    const categoryInfo = {
        'frontend': 'Frontend technologies handle the user interface and user experience.',
        'backend': 'Backend technologies manage server-side logic and data processing.',
        'database': 'Database technologies store and manage application data.',
        'mobile': 'Mobile technologies enable cross-platform app development.',
        'ml': 'Machine learning technologies for AI and data analysis.',
        'cloud': 'Cloud technologies for scalable deployment and hosting.',
        'api': 'API technologies for data integration and communication.',
        'visualization': 'Visualization technologies for data presentation.'
    };
    
    const info = categoryInfo[category] || 'Technology category information.';
    
    M.toast({
        html: info,
        classes: 'rounded',
        displayLength: 3000
    });
}

// Play project video
function playProjectVideo(videoSrc) {
    const videoModal = `
        <div id="video-modal" class="modal">
            <div class="modal-content">
                <video controls autoplay style="width: 100%; max-width: 800px;">
                    <source src="${videoSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', videoModal);
    
    const modal = document.getElementById('video-modal');
    const instance = M.Modal.init(modal);
    instance.open();
}

// Open screenshot modal
function openScreenshotModal(screenshotSrc) {
    const screenshotModal = `
        <div id="screenshot-modal" class="modal">
            <div class="modal-content">
                <img src="${screenshotSrc}" alt="Screenshot" style="width: 100%; max-width: 800px;">
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', screenshotModal);
    
    const modal = document.getElementById('screenshot-modal');
    const instance = M.Modal.init(modal);
    instance.open();
}

// Export functions for global access
window.filterProjects = filterProjects;
window.openProjectModal = openProjectModal;
window.playProjectVideo = playProjectVideo;
window.openScreenshotModal = openScreenshotModal;
window.searchProjects = searchProjects;
