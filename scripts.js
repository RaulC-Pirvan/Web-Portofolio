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

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        var scrollBtn = document.getElementById("scrollTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});
