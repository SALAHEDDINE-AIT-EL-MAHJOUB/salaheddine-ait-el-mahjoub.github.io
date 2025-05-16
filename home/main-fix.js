document.addEventListener('DOMContentLoaded', function() {
    // Selecting all elements with data-nav-link attribute
    const navigationLinks = document.querySelectorAll('[data-nav-link]');
    const pages = document.querySelectorAll('[data-page]');
    
    // Only attach event listeners if elements exist
    if (navigationLinks.length > 0) {
        // Add click event to each nav link
        navigationLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Remove active class from all links and add to the clicked one
                navigationLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
                
                // Get the page name from the clicked link's text content
                const currentPage = this.textContent.trim().toLowerCase();
                
                // Show the corresponding page and hide others
                pages.forEach(page => {
                    if (page.dataset.page === currentPage) {
                        page.classList.add('active');
                    } else {
                        page.classList.remove('active');
                    }
                });
            });
        });
    }

    // Sidebar toggle functionality
    const sidebar = document.querySelector('[data-sidebar]');
    const sidebarBtn = document.querySelector('[data-sidebar-btn]');
    
    if (sidebar && sidebarBtn) {
        sidebarBtn.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
});