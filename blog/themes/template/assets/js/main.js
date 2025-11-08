// Reading progress bar
(function() {
  'use strict';

  function initReadingProgress() {
    const progressBar = document.getElementById('reading-progress');
    if (!progressBar) return;

    // Only show on posts and pages
    const isPost = document.querySelector('.post');
    const isPage = document.querySelector('.page');
    if (!isPost && !isPage) {
      progressBar.style.display = 'none';
      return;
    }

    let ticking = false;

    function updateProgress() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

      progressBar.style.width = Math.min(progress, 100) + '%';
      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }

    // Update on scroll
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Update on resize
    window.addEventListener('resize', requestTick, { passive: true });
    
    // Initial update
    updateProgress();
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReadingProgress);
  } else {
    initReadingProgress();
  }
})();

// Progressive loading for post cover and book cover images
(function() {
  'use strict';

  function initProgressiveImages() {
    // Handle post cover images
    const postCoverImg = document.querySelector('.post-cover-img');
    if (postCoverImg) {
      handleImageLoad(postCoverImg);
    }

    // Handle book cover images
    const bookCoverImages = document.querySelectorAll('.book-cover-img');
    bookCoverImages.forEach(function(img) {
      handleImageLoad(img);
    });
  }

  function handleImageLoad(img) {
    function markLoaded() {
      img.classList.add('loaded');
    }

    // If image is already loaded (cached), show it immediately without transition
    if (img.complete && img.naturalHeight !== 0) {
      img.style.transition = 'none';
      markLoaded();
    } else {
      img.addEventListener('load', markLoaded);
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProgressiveImages);
  } else {
    initProgressiveImages();
  }
})();

