var v4 = document.querySelector('body.version--four');
if (v4) {

  /**
   * Table of Contents
   */
  var UK_Parliament = {};
  UK_Parliament.tableOfContents = function () {
    var
      article = document.getElementById('content'),
      nav_wrapper = article.querySelector('.nav--wrapper'),
      nav_wrapper_offsetTop = nav_wrapper.offsetTop,
      nav = nav_wrapper.querySelector('nav'),
      list_toc_wrapper = nav.querySelector('.list--toc__wrapper'),
      toc_toggle_button = list_toc_wrapper.querySelector('button'),
      list_toc = list_toc_wrapper.querySelector('.list--toc'),
      toc_links = list_toc.querySelectorAll('a[href^="#"]'),
      main = article.querySelector('[role="main"]'),
      body_links = main.querySelectorAll('a[href^="#"]'),
      article_h2 = article.getElementsByTagName('h2'),

      selected;



    /**
     * Sticky toggle
     *
     * @param {*} element - the element to target
     * @param {*} elOffset - the element offset to compare against
     */
    function isSticky(element, elOffset) {
      if (window.pageYOffset >= elOffset) {
        element.classList.add('sticky');
      } else {
        element.classList.remove('sticky');
        list_toc_wrapper.classList.remove('open');
      }
    }
    isSticky(nav_wrapper, nav_wrapper_offsetTop);


    /**
     * scrollSpy like function
     *
     * @param {string} element - the element to target
     */
    function menuControl(element) {
      var
        scrollPos = window.pageYOffset,
        links = element.querySelectorAll('a[href^="#"]');

      for (var i = 0; i < links.length; i++) {
        var
          currentLink = links[i],
          refElement = document.querySelector(currentLink.getAttribute('href'));
        if (refElement.offsetTop <= scrollPos && refElement.offsetTop + refElement.clientHeight > scrollPos) {
          currentLink.parentElement.classList.add('selected');
          // Selected??
          selected = document.querySelector('.selected');
          selected.addEventListener('click', function () {
            list_toc_wrapper.classList.toggle('open');

            if (list_toc_wrapper.classList.contains('open')) {
              toc_toggle_button.innerHTML = 'Hide content';
            } else {
              toc_toggle_button.innerHTML = 'Show content';
            }
          });
        } else {
          currentLink.parentElement.classList.remove('selected');
        }
      }
    }
    menuControl(nav);


    /**
     * scroll to internal link
     *
     * @param {*} event
     */
    function scrollToSection(event) {
      event.preventDefault();
      var
        targetId = this.getAttribute('href').replace('#', ''),
        targetElement = document.getElementById(targetId);
      list_toc_wrapper.classList.remove('open');
      if (list_toc_wrapper.classList.contains('open')) {
        toc_toggle_button.innerHTML = 'Hide content';
      } else {
        toc_toggle_button.innerHTML = 'Show content';
      }

      window.scrollTo(0, targetElement.offsetTop);
    }


    for (var i = 0; i < toc_links.length; i++) {
      var tocLink = toc_links[i];
      if ((tocLink.href && tocLink.href.indexOf('#') != -1)) {
        tocLink.onclick = scrollToSection;
      }
    }


    for (var b = 0; b < body_links.length; b++) {
      var bodyLink = body_links[b];
      if ((bodyLink.href && bodyLink.href.indexOf('#') != -1)) {
        bodyLink.onclick = scrollToSection;
      }
    }



    document.addEventListener('scroll', function() {
      isSticky(nav_wrapper, nav_wrapper_offsetTop);
      menuControl(nav);
    });

    toc_toggle_button.addEventListener('click', function() {
      list_toc_wrapper.classList.toggle('open');

      if (list_toc_wrapper.classList.contains('open')) {
        toc_toggle_button.innerHTML = 'Hide content';
      } else {
        toc_toggle_button.innerHTML = 'Show content';
      }
    });

  };
  UK_Parliament.tableOfContents();
}