document.addEventListener('DOMContentLoaded', function() {
    // Function to handle smooth scrolling to sections
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Smooth scrolling for navigation buttons
    document.getElementById('aboutBtn').addEventListener('click', function() {
        scrollToSection('about');
    });

    document.getElementById('projectsBtn').addEventListener('click', function() {
        scrollToSection('projects');
    });

    document.getElementById('contactBtn').addEventListener('click', function() {
        scrollToSection('contact');
    });

    // Hide loading screen when the document is fully loaded
    document.getElementById('loading-screen').style.display = 'none';

    // Show/hide scroll-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        var scrollBtn = document.getElementById("scrollTopBtn");
        if (window.scrollY > 20) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Smooth scroll to top when scroll-to-top button is clicked
    document.getElementById("scrollTopBtn").addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
