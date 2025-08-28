// Global Animation Controller
class AnimationController {
  constructor() {
    this.observers = new Map();
    this.particles = [];
    this.isInitialized = false;
  }

  // Initialize all animations
  init() {
    if (this.isInitialized) return;
    
    this.initScrollAnimations();
    this.initParticleSystem();
    this.initBackToTop();
    this.initSmoothScrolling();
    this.initHoverEffects();
    this.initParallaxScrolling();
    this.initGestureSupport();
    
    this.isInitialized = true;
  }

  // Scroll-triggered animations
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
          // Add a small delay to prevent layout shifts
          requestAnimationFrame(() => {
            entry.target.classList.add('animate');
          });
          
          // Trigger staggered animations for child elements
          const children = entry.target.querySelectorAll('.animate-stagger');
          children.forEach((child, index) => {
            setTimeout(() => {
              if (!child.classList.contains('animate')) {
                child.classList.add('animate');
              }
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach(el => observer.observe(el));

    this.observers.set('scroll', observer);
  }

  // Particle system
  initParticleSystem() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 6}s`;
      particle.style.animationDuration = `${Math.random() * 3 + 3}s`;
      
      particlesContainer.appendChild(particle);
      particles.push(particle);
    }

    this.particles = particles;

    // Mouse interaction with particles
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      particles.forEach((particle) => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
        );
        
        if (distance < 100) {
          const angle = Math.atan2(mouseY - particleY, mouseX - particleX);
          const force = (100 - distance) / 100;
          
          particle.style.transform = `translate(${Math.cos(angle) * force * 10}px, ${Math.sin(angle) * force * 10}px)`;
        } else {
          particle.style.transform = 'translate(0, 0)';
        }
      });
    });
  }



  // Back to top button
  initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        heroElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }

  // Smooth scrolling for anchor links
  initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
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

  // Enhanced hover effects
  initHoverEffects() {
    // 3D card effects
    document.querySelectorAll('.card-3d').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      });
    });

    // Skill tag hover effects
    document.querySelectorAll('.skill-tag').forEach(tag => {
      tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1) translateY(-2px)';
      });
      
      tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1) translateY(0px)';
      });
    });
  }

  // Typing animation
  typeWriter(element, text, speed = 100, onComplete = null) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
      if (i < text.length) {
        const char = text.charAt(i);
        if (char === '\n') {
          element.innerHTML += '<br>';
        } else {
          element.innerHTML += char;
        }
        i++;
        setTimeout(type, speed);
      } else {
        // Remove cursor when typing is complete
        element.classList.add('no-cursor');
        if (onComplete) onComplete();
      }
    }
    
    type();
  }

  // Initialize typing animations
  initTypingAnimations() {
    const typingElement = document.getElementById('typing-text');
    const headlineElement = document.getElementById('typing-headline');
    const name = 'Ryan Dielhenn';
    const headline = 'Software Engineer\nM.S. Computer Science Student';
    
    // Check if typing has already started to prevent duplicate animations
    if (typingElement && !typingElement.classList.contains('typing-started')) {
      typingElement.classList.add('typing-started');
      
      // Clear any existing content
      typingElement.innerHTML = '';
      if (headlineElement) {
        headlineElement.innerHTML = '';
      }
      
      // Small delay to let the fade-in animation start first
      setTimeout(() => {
        this.typeWriter(typingElement, name, 150, () => {
          // When name typing is complete, start typing headline after a pause
          setTimeout(() => {
            if (headlineElement && !headlineElement.classList.contains('typing-started')) {
              headlineElement.classList.add('typing-started');
              this.typeWriter(headlineElement, headline, 80);
            }
          }, 500); // 500ms pause between name and headline
        });
      }, 300);
    }
  }

  // Parallax scrolling
  initParallaxScrolling() {
    const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = element.classList.contains('parallax-slow') ? 0.5 : 
                     element.classList.contains('parallax-medium') ? 0.3 : 0.1;
        
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // Gesture support for mobile
  initGestureSupport() {
    const gestureContainer = document.querySelector('.gesture-container');
    if (!gestureContainer) return;

    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    gestureContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    gestureContainer.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      currentX = e.touches[0].clientX;
    });

    gestureContainer.addEventListener('touchend', () => {
      if (!isDragging) return;
      
      const diff = startX - currentX;
      const threshold = 50;
      
      if (Math.abs(diff) > threshold) {
        // Handle swipe gesture
        if (diff > 0) {
          // Swipe left - could navigate to next section
          console.log('Swipe left detected');
        } else {
          // Swipe right - could navigate to previous section
          console.log('Swipe right detected');
        }
      }
      
      isDragging = false;
    });
  }

  // Cleanup
  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.particles = [];
    this.isInitialized = false;
  }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Prevent multiple initializations
  if (window.animationController) {
    return;
  }
  
  const animationController = new AnimationController();
  animationController.init();
  animationController.initTypingAnimations();
  
  // Make it globally available for debugging
  window.animationController = animationController;
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AnimationController;
}
