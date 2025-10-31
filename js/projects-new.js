// Modern Projects Page JavaScript
class ProjectsPage {
    constructor() {
        this.projects = [
            {
                id: 'careerAdvisor',
                title: 'CareerPathGPT',
                subtitle: 'AI-powered career guidance with salary prediction',
                description: 'An AI-powered career guidance system that analyzes resumes, predicts salary ranges, and provides personalized career advice. Built with FastAPI and Streamlit, this full-stack application features intelligent resume parsing, machine learning-based salary prediction, and RAG-powered career recommendations.',
                image: 'assets/images/careerPathGPT_thumb.png',
                features: [
                    'Intelligent resume parsing with PDF/DOCX support',
                    'ML-powered salary prediction with confidence scores',
                    'RAG-based career advice for graduates and professionals',
                    'Personalized project recommendations',
                    'GitHub contribution opportunities',
                    'Interactive chat interface for career questions',
                    'Real-time analysis with progress tracking',
                    'Docker containerization for easy deployment'
                ],
                techStack: [
                    { name: 'FastAPI', icon: '🚀' },
                    { name: 'Streamlit', icon: '📊' },
                    { name: 'Python', icon: '🐍' },
                    { name: 'Machine Learning', icon: '🧠' },
                    { name: 'RAG', icon: '🔍' },
                    { name: 'Ollama', icon: '🤖' },
                    { name: 'scikit-learn', icon: '📈' },
                    { name: 'Docker', icon: '🐳' }
                ],
                stats: {
                    duration: '3 months',
                    features: '8+',
                    users: 'N/A'
                },
                links: [
                    { name: 'Demo Video', url: 'assets/videos/careerPathGPT.mp4', icon: 'fas fa-play' }
                ]
            },
            {
                id: 'aitutor',
                title: 'AI Tutor',
                subtitle: 'From Upload to Understanding - Upload material and learn right now!',
                description: 'An advanced AI tutoring system that combines LLM capabilities with MCP (Model Context Protocol) and RAG (Retrieval Augmented Generation) to provide personalized learning experiences. Upload your study materials and get instant, context-aware tutoring with real-time web research and document processing capabilities.',
                image: 'assets/images/aitutor_thumb.png',
                features: [
                    'Real-time AI Chat Interface with streaming responses',
                    'RAG (Retrieval Augmented Generation) for contextual learning',
                    'MCP (Model Context Protocol) integration for tool calling',
                    'Document upload and processing capabilities',
                    'Web scraping and research integration',
                    'Vector-based document similarity search',
                    'File system operations for saving generated content',
                    'Responsive web interface with modern UI/UX',
                    'Socket.io real-time communication',
                    'Typewriter effect for streaming text',
                    'Knowledge base integration',
                    'Multi-tool agent system'
                ],
                techStack: [
                    { name: 'Java', icon: '☕' },
                    { name: 'Spring Boot', icon: '🍃' },
                    { name: 'LangChain4j', icon: '🔗' },
                    { name: 'OpenAI', icon: '🤖' },
                    { name: 'RAG', icon: '🔍' },
                    { name: 'MCP', icon: '🔌' },
                    { name: 'Maven', icon: '📦' },
                    { name: 'SSE', icon: '📡' }
                ],
                stats: {
                    duration: '2 months',
                    features: '12+',
                    users: 'N/A'
                },
                links: [
                    { name: 'Demo Video', url: 'assets/videos/aitutor_demo.mp4', icon: 'fas fa-play' }
                ]
            },
            {
                id: 'ai-storybooks',
                title: 'Multilingual AI Storybook Platform',
                subtitle: 'Collaborative platform for AI-generated multilingual picture books (Team Work)',
                description: 'A collaborative platform for AI-generated picture books, designed to support multilingual learning with scalable database design and seamless team integration. Features normalized database schema and efficient content retrieval for multimedia storytelling.',
                image: 'assets/images/aistorybooks_thumbnail.png',
                features: [
                    'Normalized database schema for audio, images, and story data',
                    'Efficient content retrieval and scalable storage design',
                    'API specification and implementation for front-end and AI integration',
                    'Data contracts to standardize communication between teams',
                    'Cross-team collaboration workflows for smooth feature deployment',
                    'Support for multilingual content and media-rich storytelling'
                ],
                techStack: [
                    { name: 'Database Design', icon: '🗄️' },
                    { name: 'REST API', icon: '🌐' },
                    { name: 'SQL', icon: '📊' },
                    { name: 'Cross-team Integration', icon: '👥' },
                    { name: 'API Specification', icon: '📋' },
                    { name: 'Multimedia Content', icon: '🖼️' }
                ],
                stats: {
                    duration: '2 months',
                    features: '6+',
                    users: 'N/A'
                },
                links: [
                    { name: 'GitHub', url: 'https://github.com/yshyshyshyshysh/AI_PictureBooks_Web', icon: 'fab fa-github' },
                    { name: 'Demo Video', url: 'https://www.youtube.com/watch?v=iFsHQ6Nd-lY', icon: 'fas fa-play' }
                ]
            },
            {
                id: 'jigsaws-club',
                title: 'Jigsaws Club Digital Management System',
                subtitle: 'Full-stack membership and rental management system with AWS deployment',
                description: 'A full-stack membership and rental management system developed at National Taiwan University, built with NodeJS and MySQL, and deployed on AWS. Features rental tracking, access control, and intelligent search with SQL + OpenSearch.',
                image: 'assets/images/jigsaws_thumbnail.png',
                features: [
                    'Membership portal with account management',
                    'Rental tracking and overdue notifications (AWS CloudWatch scheduler)',
                    'Image upload and tagging (AWS S3 integration)',
                    'Access control for members and admins',
                    'Advanced search using SQL + OpenSearch',
                    'Scalable deployment on AWS'
                ],
                techStack: [
                    { name: 'Node.js', icon: '🟢' },
                    { name: 'MySQL', icon: '🐬' },
                    { name: 'AWS RDS', icon: '☁️' },
                    { name: 'AWS S3', icon: '☁️' },
                    { name: 'AWS CloudWatch', icon: '☁️' },
                    { name: 'OpenSearch', icon: '🔍' },
                    { name: 'JavaScript', icon: '🟨' },
                    { name: 'REST API', icon: '🌐' }
                ],
                stats: {
                    duration: '3 months',
                    features: '6+',
                    users: 'N/A'
                },
                links: [
                    { name: 'Demo Video', url: 'assets/videos/demo_jigsaws.mp4', icon: 'fas fa-play' }
                ]
            },
            {
                id: 'mycss',
                title: 'My Design System',
                subtitle: 'React + TypeScript component library',
                description: 'Premium, animated, accessible component library themed with styled-components, documented in Storybook, with a demo app.',
                image: 'assets/images/myCSS_thumb.png',
                features: [
                    'Buttons (solid/outline/ghost/link) with premium hover shine',
                    'Inputs, Select (animated listbox), Labels, Badges, Switch',
                    'Modal (glass surface, motion), Tooltip, Toast, Tabs',
                    'Accordion, Pagination, Breadcrumbs, Table (green zebra)',
                    'Avatar, Icon, SegmentedControl',
                    'Themed with tokens: colors, spacing, radii, elevation, motion',
                    'WCAG 2.1 AA-minded, keyboard support, visible focus'
                ],
                techStack: [
                    { name: 'React', icon: '⚛️' },
                    { name: 'TypeScript', icon: '📘' },
                    { name: 'styled-components', icon: '🎨' },
                    { name: 'Storybook', icon: '📚' },
                    { name: 'Vite', icon: '⚡' },
                    { name: 'Vitest', icon: '🧪' },
                    { name: 'RTL', icon: '🧩' },
                    { name: 'axe', icon: '♿' }
                ],
                stats: {
                    duration: 'ongoing',
                    features: '20+',
                    users: 'N/A'
                },
                links: [
                    { name: 'Repo', url: 'https://github.com/chao-dotcom/MyCSS', icon: 'fab fa-github' },
                    { name: 'Demo', url: 'https://strybk.surge.sh/', icon: 'fas fa-external-link-alt' }
                ]
            },
            {
                id: 'beatdrop',
                title: 'Beat Drop',
                subtitle: 'Simple rhythm game built with vanilla JavaScript',
                description: 'A Simple Rhythm Game built with vanilla JavaScript, HTML5, and CSS3. Features interactive gameplay with music synchronization and responsive design.',
                image: 'assets/images/beatdrop_thumb.png',
                features: [
                    'Interactive rhythm gameplay',
                    'Music synchronization',
                    'Responsive design',
                    'Score tracking',
                    'Multiple difficulty levels'
                ],
                techStack: [
                    { name: 'JavaScript', icon: '🟨' },
                    { name: 'HTML5', icon: '🌐' },
                    { name: 'CSS3', icon: '🎨' }
                ],
                stats: {
                    duration: '1 month',
                    features: '5+',
                    users: 'N/A'
                },
                links: [
                    { name: 'GitHub', url: 'https://github.com/chao-dotcom/beat-drop', icon: 'fab fa-github' },
                    { name: 'Demo Video', url: 'assets/videos/beatdrop_demo.mp4', icon: 'fas fa-play' }
                ]
            }
        ];
        
        this.init();
    }
    
    init() {
        this.renderProjects();
        this.setupModal();
        this.setupEventListeners();
    }
    
    renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        
        projectsGrid.innerHTML = this.projects.map(project => `
            <div class="project-card" data-project-id="${project.id}">
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='">
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-subtitle">${project.subtitle}</p>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.techStack.slice(0, 3).map(tech => `
                            <span class="tech-tag">${tech.name}</span>
                        `).join('')}
                        ${project.techStack.length > 3 ? `<span class="tech-tag">+${project.techStack.length - 3} more</span>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    setupModal() {
        this.modal = document.getElementById('projectModal');
        this.modalClose = document.getElementById('modalClose');
        this.modalOverlay = this.modal.querySelector('.modal-overlay');
    }
    
    setupEventListeners() {
        // Project card clicks
        document.addEventListener('click', (e) => {
            const projectCard = e.target.closest('.project-card');
            if (projectCard) {
                const projectId = projectCard.dataset.projectId;
                this.openModal(projectId);
            }
        });
        
        // Modal close events
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', () => this.closeModal());
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'flex') {
                this.closeModal();
            }
        });
    }
    
    openModal(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;
        
        // Populate modal content
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalSubtitle').textContent = project.subtitle;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalImage').alt = project.title;
        
        // Features
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
        
        // Tech stack
        const techGrid = document.getElementById('modalTech');
        techGrid.innerHTML = project.techStack.map(tech => `
            <div class="tech-item">
                <div class="tech-icon">${tech.icon}</div>
                <div class="tech-name">${tech.name}</div>
            </div>
        `).join('');
        
        
        // Links
        const linksContainer = document.getElementById('modalLinks');
        linksContainer.innerHTML = project.links.map(link => `
            <a href="${link.url}" class="project-link" target="_blank">
                <i class="${link.icon}"></i>
                ${link.name}
            </a>
        `).join('');
        
        // Show modal
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Focus management
        this.modalClose.focus();
    }
    
    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsPage();
});
