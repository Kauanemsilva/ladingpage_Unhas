
        // Mobile menu toggle
        document.querySelector('button[aria-label="Menu"]').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('hidden');
        });
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to a server
            console.log('Form submitted:', {name, email, phone, service, date, message});
            
            // Show success message
            alert('Obrigada pelo seu agendamento! Entraremos em contato em breve para confirmar.');
            
            // Reset form
            this.reset();
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
