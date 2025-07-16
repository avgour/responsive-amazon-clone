// amazon.js - Responsive JavaScript for Amazon Clone

document.addEventListener('DOMContentLoaded', function() {
    // Responsive Navbar Adjustments
    function handleResponsiveNavbar() {
        const navbar = document.querySelector('.navbar');
        const searchContainer = document.querySelector('.nav-search');
        const panel = document.querySelector('.pannel');
        const windowWidth = window.innerWidth;

        // For tablets and smaller devices
        if (windowWidth <= 992) {
            // Adjust search bar width
            if (windowWidth <= 768) {
                searchContainer.style.width = '100%';
                
                // Stack navbar items vertically on very small screens
                if (windowWidth <= 576) {
                    navbar.style.flexDirection = 'column';
                    navbar.style.height = 'auto';
                    navbar.style.padding = '10px 0';
                    
                    // Hide some elements to save space
                    document.querySelector('.nav-adress').style.display = 'none';
                    document.querySelector('.nav-return').style.display = 'none';
                } else {
                    navbar.style.flexDirection = 'row';
                    navbar.style.height = '70px';
                    
                    // Show hidden elements when screen is larger
                    document.querySelector('.nav-adress').style.display = 'block';
                    document.querySelector('.nav-return').style.display = 'block';
                }
            } else {
                searchContainer.style.width = '400px';
            }
            
            // Simplify the panel options
            panel.querySelector('.pannel-opp').style.display = 'none';
            panel.querySelector('.panel-deals').style.display = 'none';
        } else {
            // Reset to desktop styles
            searchContainer.style.width = '620px';
            navbar.style.flexDirection = 'row';
            navbar.style.height = '70px';
            panel.querySelector('.pannel-opp').style.display = 'flex';
            panel.querySelector('.panel-deals').style.display = 'block';
            document.querySelector('.nav-adress').style.display = 'block';
            document.querySelector('.nav-return').style.display = 'block';
        }
    }

    // Responsive Shop Section
    function handleResponsiveShop() {
        const boxes = document.querySelectorAll('.box');
        const windowWidth = window.innerWidth;
        
        if (windowWidth <= 992) {
            // 2 boxes per row on tablets
            boxes.forEach(box => {
                box.style.width = '48%';
            });
            
            if (windowWidth <= 576) {
                // 1 box per row on mobile
                boxes.forEach(box => {
                    box.style.width = '100%';
                });
            }
        } else {
            // Reset to desktop styles (4 boxes per row)
            boxes.forEach(box => {
                box.style.width = '23%';
            });
        }
    }

    // Responsive Footer
    function handleResponsiveFooter() {
        const footerColumns = document.querySelectorAll('.foot_p2 ul');
        const windowWidth = window.innerWidth;
        
        if (windowWidth <= 768) {
            // Stack footer columns vertically on mobile/tablet
            document.querySelector('.foot_p2').style.flexDirection = 'column';
            document.querySelector('.foot_p2').style.height = 'auto';
            footerColumns.forEach(column => {
                column.style.marginBottom = '20px';
            });
        } else {
            // Reset to desktop styles
            document.querySelector('.foot_p2').style.flexDirection = 'row';
            document.querySelector('.foot_p2').style.height = '300px';
            footerColumns.forEach(column => {
                column.style.marginBottom = '0';
            });
        }
    }

    // Mobile Menu Toggle
    function setupMobileMenu() {
        const mobileMenuBtn = document.createElement('div');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i> Menu';
        mobileMenuBtn.style.display = 'none';
        mobileMenuBtn.style.padding = '10px';
        mobileMenuBtn.style.backgroundColor = '#131921';
        mobileMenuBtn.style.color = 'white';
        mobileMenuBtn.style.cursor = 'pointer';
        document.querySelector('header').prepend(mobileMenuBtn);

        mobileMenuBtn.addEventListener('click', function() {
            const navbar = document.querySelector('.navbar');
            if (navbar.style.display === 'none' || navbar.style.display === '') {
                navbar.style.display = 'flex';
            } else {
                navbar.style.display = 'none';
            }
        });

        // Show/hide mobile menu button based on screen size
        function toggleMobileMenuButton() {
            if (window.innerWidth <= 768) {
                mobileMenuBtn.style.display = 'block';
                document.querySelector('.navbar').style.display = 'none';
            } else {
                mobileMenuBtn.style.display = 'none';
                document.querySelector('.navbar').style.display = 'flex';
            }
        }

        return toggleMobileMenuButton;
    }

    // Initialize responsive functions
    const toggleMobileMenu = setupMobileMenu();
    
    function handleResponsive() {
        handleResponsiveNavbar();
        handleResponsiveShop();
        handleResponsiveFooter();
        toggleMobileMenu();
    }

    // Run on load and on resize
    handleResponsive();
    window.addEventListener('resize', handleResponsive);

    // Add some interactive elements
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            this.style.transition = 'all 0.3s ease';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    searchIcon.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
            // In a real implementation, you would submit a search form here
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
        }
    });
});