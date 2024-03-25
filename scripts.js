document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('aboutBtn').addEventListener('click', function() {
        const projectsSection = document.getElementById('about');
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    
    document.getElementById('projectsBtn').addEventListener('click', function() {
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    
    document.getElementById('contactBtn').addEventListener('click', function() {
        const projectsSection = document.getElementById('contact');
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

