var UK_Parliament = {};
UK_Parliament.tableOfContents = function() {

  var v5 = document.querySelectorAll('body.version--five');
  if (v5.length < 1)
    return false;

  var
    article_nav = document.querySelector('.article--nav'),
    article_nav_bcr = article_nav.getBoundingClientRect(),
    nav = article_nav.querySelector('nav'),

    toc_wrapper = nav.querySelector('.toc--wrapper'),
    list_toc = nav.querySelector('.list--toc'),
    btn_toggle = nav.querySelector('.btn--toggle'),

    i = undefined,
    activeClass = 'active',
    openClass = 'open',
    stickyClass = 'sticky',
    openInnerHTML = 'Hide contents',
    closeInnerHTML = 'Show contents';

  if (article_nav) {
    isSticky();
    scrollSpy();

    document.addEventListener('click', function(e) {

      var article_nav_inner = article_nav.contains(e.target);
      // close sticky, if outside of nav is clicked
      if (!article_nav_inner)
        closeSticky();

      // toggle nav, when nav or nav children is clicked
      if (article_nav_inner)
        isOpen();

      scrollBy(e);

    });

    document.addEventListener('scroll', function() {
      isSticky();
      scrollSpy();
    });
  }


  /**
   * Toggle the stickyness of the ToC
   */
  function isSticky() {
    if (window.pageYOffset >= article_nav_bcr.bottom) {
      article_nav.classList.add(stickyClass);
    } else {
      article_nav.classList.remove(stickyClass);
      closeSticky();
    }
  }


  /**
   * Verify the state (open/close) of the ToC
   */
  function isOpen() {
    (toc_wrapper.classList.contains(openClass)) ? closeSticky() : openSticky();
  }


  /**
   * ToC 'open' state properties
   */
  function openSticky() {
    toc_wrapper.classList.add(openClass);
    btn_toggle.innerHTML = openInnerHTML;
  }


  /**
   * ToC 'close' state properties
   */
  function closeSticky() {
    toc_wrapper.classList.remove(openClass);
    btn_toggle.innerHTML = closeInnerHTML;
  }


  /**
   * Identify which section is currently within the viewport
   */
  function scrollSpy() {
    var
      scrollPos = window.pageYOffset,
      links = list_toc.querySelectorAll('[href^="#"]');

    for (i = 0; i < links.length; i++) {
      var
        link = links[i],
        refElement = document.querySelector(link.hash);

      if (scrollPos >= refElement.offsetTop && scrollPos < (refElement.offsetTop + refElement.clientHeight)) {
        link.parentElement.classList.add(activeClass);
      } else {
        link.parentElement.classList.remove(activeClass);
      }
    }
  }


  /**
   * Scrolls the document in the window by a given amount
   * @param {*} e
   */
  function scrollBy(e) {
    var anchor = e.target.closest('[href^="#"]');

    if (anchor) {
      e.preventDefault();
      e.stopPropagation();
      var
        hash = anchor.hash,
        targetId = hash.replace('#', ''),
        targetNode = document.getElementById(targetId);
      if (hash !== '') {
        closeSticky();
        window.location.hash = hash;
        window.scrollBy(0, -(article_nav.clientHeight));
      }
    }
  }

};
UK_Parliament.tableOfContents();