// Global variables
let projectsData = [];
let currentProject = null;

// DOM elements
const projectsGrid = document.getElementById('projectsGrid');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalSkills = document.getElementById('modalSkills');
const modalFeatures = document.getElementById('modalFeatures');
const modalScreenshots = document.getElementById('modalScreenshots');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.querySelector('.close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    setupEventListeners();
    setupTabNavigation();
});

// Load projects from JSON file
async function loadProjects() {
    try {
        showLoading();
        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        projectsData = data.projects;
        renderProjects();
    } catch (error) {
        console.error('Error loading projects:', error);
        showError('Failed to load projects. Please try again later.');
    }
}

// Show loading state
function showLoading() {
    projectsGrid.innerHTML = '<div class="loading">Loading projects...</div>';
}

// Show error state
function showError(message) {
    projectsGrid.innerHTML = `
        <div style="text-align: center; padding: 50px; color: #666;">
            <h3>Oops! Something went wrong</h3>
            <p>${message}</p>
            <button onclick="loadProjects()" style="margin-top: 20px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Try Again
            </button>
        </div>
    `;
}

// Render projects in the grid
function renderProjects() {
    if (!projectsData || projectsData.length === 0) {
        projectsGrid.innerHTML = '<div style="text-align: center; padding: 50px; color: #666;">No projects available</div>';
        return;
    }

    projectsGrid.innerHTML = projectsData.map((project, index) => `
        <div class="project-card" data-project-id="${project.id}" tabindex="0">
            <div class="project-thumbnail">
                <img src="${project.thumbnail}" alt="${project.title}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(45deg, #f0f0f0, #e0e0e0); color: #666;">
                    ${project.title}
                </div>
                ${index === 0 ? '<div class="current-badge">⭐ Currently Working</div>' : ''}
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.cardDescription || 'Click to view details, screenshots, and demo video'}</p>
            </div>
        </div>
    `).join('');

    // Add click event listeners to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            openModal(projectId);
        });
        
        // Add keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const projectId = this.getAttribute('data-project-id');
                openModal(projectId);
            }
        });
    });
}

// Open modal with project details
function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }

    currentProject = project;
    
    // Populate modal content
    modalTitle.textContent = project.title;
    
    // Populate description
    modalDescription.innerHTML = project.description || '<p>No description available for this project.</p>';
    
    // Populate skills
    modalSkills.innerHTML = project.skills.map(skill => `<li>${skill}</li>`).join('');
    
    // Populate features
    modalFeatures.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
    
    // Populate screenshots
    modalScreenshots.innerHTML = project.screenshots.map(screenshot => `
        <div class="screenshot-item">
            <img src="${screenshot}" alt="Screenshot" 
                 onerror="this.parentElement.style.display='none';">
        </div>
    `).join('');
    
    // Populate video
    modalVideo.innerHTML = `
        <video controls preload="metadata" style="width: 100%; max-height: 400px;">
            <source src="${project.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Focus management
    modal.focus();
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Pause any playing videos
    const video = modalVideo.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility function to handle image loading errors
function handleImageError(img) {
    img.style.display = 'none';
    const fallback = img.nextElementSibling;
    if (fallback) {
        fallback.style.display = 'flex';
    }
}

// Utility function to handle video loading errors
function handleVideoError(video) {
    const container = video.parentElement;
    container.innerHTML = `
        <div style="padding: 20px; text-align: center; background: #f8f9fa; border-radius: 10px; color: #666;">
            <p>Video not available</p>
            <p><small>Demo video for ${currentProject?.title || 'this project'} is not available at the moment.</small></p>
        </div>
    `;
}

// Add error handling for video elements
document.addEventListener('DOMContentLoaded', function() {
    // This will be called after the modal content is populated
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                const videos = modalVideo.querySelectorAll('video');
                videos.forEach(video => {
                    video.addEventListener('error', function() {
                        handleVideoError(this);
                    });
                });
            }
        });
    });
    
    observer.observe(modalVideo, { childList: true });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Tab Navigation
function setupTabNavigation() {
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            
            // Don't do anything if clicking the same section
            if (targetElement && targetElement.classList.contains('fade-in')) {
                return;
            }
            
            // Remove active class from all nav links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked nav link
            this.classList.add('active');
            
            // Find currently active section
            const currentActiveSection = document.querySelector('.content-section.fade-in');
            
            if (currentActiveSection) {
                // Fade out current section
                currentActiveSection.classList.remove('fade-in');
                currentActiveSection.classList.add('fade-out');
                
                // After fade out completes, fade in new section
                setTimeout(() => {
                    // Hide all content sections
                    contentSections.forEach(section => {
                        section.classList.remove('fade-in', 'fade-out');
                    });
                    
                    // Show target content section
                    if (targetElement) {
                        targetElement.classList.add('fade-in');
                    }
                }, 300); // Wait for fade out to complete
            } else {
                // No current section, just show target
                contentSections.forEach(section => {
                    section.classList.remove('fade-in', 'fade-out');
                });
                
                if (targetElement) {
                    targetElement.classList.add('fade-in');
                }
            }
        });
    });
}

// Export functions for global access
window.openModal = openModal;
window.closeModal = closeModal;
window.loadProjects = loadProjects;
