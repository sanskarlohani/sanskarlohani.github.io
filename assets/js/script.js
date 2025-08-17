'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * Enhanced animations and effects
 */

// Parallax effect for hero section
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.hero-banner');
  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
  }
});

// Intersection Observer for fade-in animations
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

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});

// Mouse follower effect
document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.cursor');
  if (!cursor) {
    const newCursor = document.createElement('div');
    newCursor.className = 'cursor';
    newCursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: rgba(255, 119, 48, 0.6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.1s ease;
    `;
    document.body.appendChild(newCursor);
  }
  
  const cursor2 = document.querySelector('.cursor');
  if (cursor2) {
    cursor2.style.left = e.clientX - 10 + 'px';
    cursor2.style.top = e.clientY - 10 + 'px';
  }
});

// Enhanced button interactions
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px) scale(1.05)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Text typing effect for hero title
function typeWriter(element, text, speed = 100) {
  if (!element) return;
  
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Apply typing effect to hero title
document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.hero-title strong');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 150);
    }, 1000);
  }
});

// Smooth scroll for anchor links
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

// Add loading animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  
  // Create and add loading overlay if it doesn't exist
  const loadingOverlay = document.createElement('div');
  loadingOverlay.className = 'loading-overlay';
  loadingOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--space-cadet);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
  `;
  
  const spinner = document.createElement('div');
  spinner.style.cssText = `
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 119, 48, 0.3);
    border-top: 3px solid var(--orange-soda);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  `;
  
  loadingOverlay.appendChild(spinner);
  document.body.appendChild(loadingOverlay);
  
  // Add spin animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
});

/**
 * Dynamic Blog System
 */

// Blog data structure
const blogData = {
  1: {
    title: "Android Development Best Practices: Building Scalable Apps",
    category: "Mobile Development",
    author: "Sanskar Lohani",
    date: "August 15, 2025",
    readTime: "5 min read",
    image: "./assets/images/blog-1.jpg",
    content: `
      <h1>Android Development Best Practices: Building Scalable Apps</h1>
      <div class="meta-info">
        <span>By Sanskar Lohani</span>
        <span>August 15, 2025</span>
        <span>5 min read</span>
      </div>
      <div class="blog-content">
        <p>Building scalable Android applications requires following established best practices and architectural patterns. In this comprehensive guide, we'll explore the essential practices that every Android developer should implement.</p>
        
        <h2>Architecture Patterns</h2>
        <p>The foundation of any scalable Android app lies in its architecture. Consider implementing patterns like:</p>
        <ul>
          <li><strong>MVVM (Model-View-ViewModel):</strong> Provides clear separation of concerns</li>
          <li><strong>MVP (Model-View-Presenter):</strong> Excellent for testability</li>
          <li><strong>Clean Architecture:</strong> Promotes maintainability and scalability</li>
        </ul>
        
        <h2>Code Organization</h2>
        <p>Organize your code into logical packages and modules. Use dependency injection frameworks like <code>Dagger</code> or <code>Hilt</code> to manage dependencies effectively.</p>
        
        <pre><code>
// Example of proper dependency injection
@Module
@InstallIn(SingletonComponent::class)
object DatabaseModule {
    
    @Provides
    @Singleton
    fun provideAppDatabase(@ApplicationContext context: Context): AppDatabase {
        return Room.databaseBuilder(
            context,
            AppDatabase::class.java,
            "app_database"
        ).build()
    }
}
        </code></pre>
        
        <h2>Performance Optimization</h2>
        <p>Always consider performance implications of your design decisions. Use tools like Android Profiler to identify bottlenecks and optimize accordingly.</p>
        
        <h2>Testing Strategy</h2>
        <p>Implement a comprehensive testing strategy including unit tests, integration tests, and UI tests. This ensures your app remains stable as it scales.</p>
      </div>
    `
  },
  2: {
    title: "Modern Web Development: Choosing the Right Framework",
    category: "Web Development",
    author: "Sanskar Lohani",
    date: "August 12, 2025",
    readTime: "8 min read",
    image: "./assets/images/blog-2.jpg",
    content: `
      <h1>Modern Web Development: Choosing the Right Framework</h1>
      <div class="meta-info">
        <span>By Sanskar Lohani</span>
        <span>August 12, 2025</span>
        <span>8 min read</span>
      </div>
      <div class="blog-content">
        <p>The web development landscape is constantly evolving, with new frameworks and tools emerging regularly. Choosing the right framework for your project can significantly impact development speed, maintainability, and performance.</p>
        
        <h2>Popular Frontend Frameworks</h2>
        
        <h3>React</h3>
        <p>React remains one of the most popular choices for building user interfaces. Its component-based architecture and virtual DOM make it excellent for complex applications.</p>
        
        <h3>Vue.js</h3>
        <p>Vue offers a gentle learning curve and excellent documentation. It's perfect for both small projects and large-scale applications.</p>
        
        <h3>Angular</h3>
        <p>Angular provides a complete framework solution with built-in features like routing, forms, and HTTP client.</p>
        
        <h2>Decision Factors</h2>
        <p>When choosing a framework, consider:</p>
        <ul>
          <li>Project complexity and requirements</li>
          <li>Team expertise and learning curve</li>
          <li>Community support and ecosystem</li>
          <li>Performance requirements</li>
          <li>Long-term maintenance considerations</li>
        </ul>
        
        <p>Remember, there's no one-size-fits-all solution. The best framework is the one that fits your specific project needs and team capabilities.</p>
      </div>
    `
  },
  3: {
    title: "The Future of Software Development: AI and Beyond",
    category: "Technology",
    author: "Sanskar Lohani",
    date: "August 10, 2025",
    readTime: "6 min read",
    image: "./assets/images/blog-3.jpg",
    content: `
      <h1>The Future of Software Development: AI and Beyond</h1>
      <div class="meta-info">
        <span>By Sanskar Lohani</span>
        <span>August 10, 2025</span>
        <span>6 min read</span>
      </div>
      <div class="blog-content">
        <p>Artificial Intelligence is revolutionizing software development in ways we never imagined. From code generation to automated testing, AI is becoming an integral part of the development process.</p>
        
        <h2>AI-Powered Development Tools</h2>
        <p>Modern AI tools are transforming how we write code:</p>
        <ul>
          <li><strong>Code Completion:</strong> AI assistants like GitHub Copilot help write code faster</li>
          <li><strong>Bug Detection:</strong> AI can identify potential issues before they become problems</li>
          <li><strong>Code Review:</strong> Automated code review tools improve code quality</li>
        </ul>
        
        <h2>Emerging Technologies</h2>
        <p>Beyond AI, several other technologies are shaping the future:</p>
        
        <h3>Quantum Computing</h3>
        <p>While still in early stages, quantum computing promises to solve complex problems that are impossible with classical computers.</p>
        
        <h3>Edge Computing</h3>
        <p>Moving computation closer to data sources reduces latency and improves performance for real-time applications.</p>
        
        <h3>WebAssembly</h3>
        <p>WebAssembly enables high-performance applications in web browsers, opening new possibilities for web development.</p>
        
        <h2>Preparing for the Future</h2>
        <p>As developers, we must stay adaptable and continue learning. The key is to understand fundamental concepts while being open to new technologies and methodologies.</p>
      </div>
    `
  },
  4: {
    title: "Step-by-Step: Building Your First Android App",
    category: "Tutorials",
    author: "Sanskar Lohani",
    date: "August 8, 2025",
    readTime: "12 min read",
    image: "./assets/images/portfolio-1.jpg",
    content: `
      <h1>Step-by-Step: Building Your First Android App</h1>
      <div class="meta-info">
        <span>By Sanskar Lohani</span>
        <span>August 8, 2025</span>
        <span>12 min read</span>
      </div>
      <div class="blog-content">
        <p>Creating your first Android app can seem daunting, but with the right guidance, it's an exciting journey. This tutorial will walk you through building a simple but functional Android application.</p>
        
        <h2>Prerequisites</h2>
        <p>Before we start, make sure you have:</p>
        <ul>
          <li>Android Studio installed</li>
          <li>Basic understanding of Kotlin or Java</li>
          <li>An Android device or emulator for testing</li>
        </ul>
        
        <h2>Step 1: Setting Up Your Project</h2>
        <p>Open Android Studio and create a new project. Choose "Empty Activity" template for simplicity.</p>
        
        <pre><code>
// MainActivity.kt
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}
        </code></pre>
        
        <h2>Step 2: Designing the UI</h2>
        <p>Create a simple user interface using XML layouts. Start with basic elements like TextView and Button.</p>
        
        <h2>Step 3: Adding Functionality</h2>
        <p>Implement click listeners and basic app logic to make your app interactive.</p>
        
        <h2>Step 4: Testing</h2>
        <p>Run your app on an emulator or physical device to test functionality.</p>
        
        <h2>Next Steps</h2>
        <p>Once you've built your first app, consider exploring:</p>
        <ul>
          <li>Data persistence with Room database</li>
          <li>Network calls with Retrofit</li>
          <li>Modern UI with Jetpack Compose</li>
          <li>Architecture components like ViewModel and LiveData</li>
        </ul>
        
        <p>Remember, every expert was once a beginner. Keep practicing and building projects to improve your skills!</p>
      </div>
    `
  }
};

// Blog filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const blogItems = document.querySelectorAll('.blog-item');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const viewAllBtn = document.getElementById('view-all-btn');
  const blogModal = document.getElementById('blog-modal');
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');

  let currentFilter = 'all';
  let visibleItems = 4;

  // Filter functionality
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        currentFilter = filter;
        visibleItems = 4; // Reset visible items
        
        filterBlogs(filter);
        updateButtonStates();
      });
    });
  }

  // Filter blogs based on category
  function filterBlogs(filter) {
    blogItems.forEach((item, index) => {
      const category = item.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        if (index < visibleItems) {
          item.classList.remove('hidden');
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, index * 100);
        } else {
          item.classList.add('hidden');
        }
      } else {
        item.classList.add('hidden');
      }
    });
  }

  // Load more functionality
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      visibleItems += 4;
      filterBlogs(currentFilter);
      updateButtonStates();
    });
  }

  // View all functionality
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', function() {
      visibleItems = blogItems.length;
      filterBlogs(currentFilter);
      updateButtonStates();
    });
  }

  // Update button states
  function updateButtonStates() {
    const visibleBlogItems = Array.from(blogItems).filter(item => {
      const category = item.getAttribute('data-category');
      return currentFilter === 'all' || category === currentFilter;
    });

    if (loadMoreBtn) {
      if (visibleItems >= visibleBlogItems.length) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'inline-block';
      }
    }

    if (viewAllBtn) {
      if (visibleItems >= visibleBlogItems.length) {
        viewAllBtn.style.display = 'none';
      } else {
        viewAllBtn.style.display = 'inline-block';
      }
    }
  }

  // Blog modal functionality
  if (blogModal && modalClose && modalOverlay && modalBody) {
    
    function openBlogModal(blogId) {
      const blog = blogData[blogId];
      if (blog && blog.content) {
        modalBody.innerHTML = blog.content;
        blogModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeBlogModal() {
      blogModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    // Close modal events
    modalClose.addEventListener('click', closeBlogModal);
    modalOverlay.addEventListener('click', closeBlogModal);
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && blogModal.classList.contains('active')) {
        closeBlogModal();
      }
    });

    // Set up blog link event listeners
    setTimeout(() => {
      const blogLinks = document.querySelectorAll('.blog-link');
      blogLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const blogId = this.getAttribute('data-blog-id');
          if (blogId) {
            openBlogModal(blogId);
          }
        });
      });
    }, 100);
  }

  // Initialize
  if (blogItems.length > 0) {
    filterBlogs('all');
    updateButtonStates();
  }

  // Search functionality for blog page
  const searchInput = document.getElementById('blog-search');
  const searchBtn = document.getElementById('search-btn');
  
  if (searchInput && searchBtn) {
    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase().trim();
      
      blogItems.forEach(item => {
        const title = item.querySelector('.card-title a').textContent.toLowerCase();
        const description = item.querySelector('.card-description').textContent.toLowerCase();
        const category = item.getAttribute('data-category');
        
        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        const matchesFilter = currentFilter === 'all' || category === currentFilter;
        
        if (matchesSearch && matchesFilter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
    
    // Real-time search
    searchInput.addEventListener('input', function() {
      if (this.value.length > 2 || this.value.length === 0) {
        performSearch();
      }
    });
  }

  // Pagination functionality for blog page
  const paginationNumbers = document.getElementById('pagination-numbers');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (paginationNumbers && prevBtn && nextBtn) {
    let currentPage = 1;
    const itemsPerPage = 6;
    
    function updatePagination() {
      const visibleItems = Array.from(blogItems).filter(item => !item.classList.contains('hidden'));
      const totalPages = Math.ceil(visibleItems.length / itemsPerPage);
      
      // Update pagination numbers
      paginationNumbers.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const pageSpan = document.createElement('span');
        pageSpan.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageSpan.textContent = i;
        pageSpan.addEventListener('click', () => goToPage(i));
        paginationNumbers.appendChild(pageSpan);
      }
      
      // Update button states
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages || totalPages === 0;
      
      // Show/hide items for current page
      visibleItems.forEach((item, index) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        if (index >= startIndex && index < endIndex) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
    
    function goToPage(page) {
      currentPage = page;
      updatePagination();
      document.getElementById('all-posts').scrollIntoView({ behavior: 'smooth' });
    }
    
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        goToPage(currentPage - 1);
      }
    });
    
    nextBtn.addEventListener('click', () => {
      const visibleItems = Array.from(blogItems).filter(item => !item.classList.contains('hidden'));
      const totalPages = Math.ceil(visibleItems.length / itemsPerPage);
      if (currentPage < totalPages) {
        goToPage(currentPage + 1);
      }
    });
    
    // Initialize pagination
    updatePagination();
    
    // Update pagination when filters change
    const originalFilterBlogs = filterBlogs;
    filterBlogs = function(filter) {
      originalFilterBlogs(filter);
      currentPage = 1;
      updatePagination();
    };
  }

  // Animate blog cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const blogObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe blog cards
  blogItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    blogObserver.observe(item);
  });
});