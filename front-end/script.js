
        // Mobile menu toggle
        document.querySelector('button[aria-label="Menu"]').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('hidden');
        });
       
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

