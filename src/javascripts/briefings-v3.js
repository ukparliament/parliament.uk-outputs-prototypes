(function () {
  /**
   * this is all prototype code,
   * take it with a pinch of salt
   */
  var version__three = document.querySelector('.version--three');
  if (version__three) {

    var UK_Parliament = {};

    UK_Parliament.stickySidenav = function () {
      var
        aside = document.querySelector('aside'),
        nav = aside.querySelector('.block'),
        sticky_nav = document.querySelector('.nav--sticky'),
        sticky_nav_menu = sticky_nav.querySelector('.nav--sticky__menu'),
        sticky_nav_menu_button = sticky_nav_menu.querySelector('button'),
        sticky_nav_menu_links = sticky_nav_menu.querySelectorAll('a'),
        sidenav_links = nav.querySelectorAll('a');

      // Scroll - sticky
      function toggleSticky() {
        if (window.scrollY - (nav.offsetTop + nav.offsetHeight) >= 0) {
          sticky_nav.classList.add('active');
        }
        else {
          sticky_nav.classList.remove('active');
          sticky_nav_menu.classList.remove('active');
        }
      }

      toggleSticky();
      window.onscroll = toggleSticky;

      // Click - menu
      function toggleStickyNavMenu() {
        if (sticky_nav_menu.classList.contains('active')) {
          sticky_nav_menu.classList.remove('active');
        }
        else {
          sticky_nav_menu.classList.add('active');
        }
      }

      sticky_nav_menu_button.onclick = toggleStickyNavMenu;

      for (var i = 0; i < sticky_nav_menu_links.length; i++) {
        sticky_nav_menu_links[i].onclick = function (e) {

          e.preventDefault();

          var
            target_id = this.getAttribute('href').replace('#', ''),
            target_element = document.getElementById(target_id);

          toggleStickyNavMenu();
          sticky_nav_menu_button.innerHTML = this.innerHTML;

          window.scrollTo(0, target_element.offsetTop - (sticky_nav.offsetHeight + 24));

        };

        sidenav_links[i].onclick = function (e) {

          e.preventDefault();

          var
            target_id = this.getAttribute('href').replace('#', ''),
            target_element = document.getElementById(target_id);

          sticky_nav_menu_button.innerHTML = this.innerHTML;

          window.scrollTo(0, target_element.offsetTop);
          setTimeout(function () {
            window.scrollTo(0, window.scrollY - (sticky_nav.offsetHeight + 24));
          }, 50);

        };
      }

    };

    if (document.querySelector('.nav--sticky')) {
      UK_Parliament.stickySidenav();
    }

    var
      eToggle = document.querySelector('.toggle'),
      toggled = undefined;

    if (eToggle) {
      var element = document.querySelectorAll('.toggle'),
        toggle = function (e) {
          e.preventDefault();

          toggled = this.nextElementSibling;

          if (toggled.style.display === 'none') {
            toggled.style.display = 'block';
            // toggled.classList.add('show');
          } else {
            toggled.style.display = 'none';
            // toggled.classList.remove('hide');
          }

        };

      for (var i = 0; i < element.length; i++) {
        element[i].addEventListener('click', toggle, false);
      }
    }

  }
})();
