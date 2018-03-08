/**
 * Tabbed Panel
 */
UK_Parliament.tabbedPanel = function () {

  var version__one = document.querySelector('.version--one');
  if (version__one) {
    // Tabbed content
    var tabList = document.querySelector('.list--tab__panel');
    if (tabList) {
      var tab = document.querySelectorAll('.tab');

      var displayTabPanel = function (e) {

        e.preventDefault();

        // remove selected indicator from all tabs
        for (var i = 0; i < tab.length; i++) {
          tab[i].setAttribute('aria-selected', 'false');
        }

        // add selected indicator to clicked tab
        var clickedTab = e.currentTarget;
        clickedTab.setAttribute('aria-selected', 'true');

        // add hidden indicator to all tab panels
        var contentPane = document.querySelectorAll('.tabPanel');
        for (var j = 0; j < contentPane.length; j++) {
          contentPane[j].setAttribute('aria-hidden', 'true');
        }

        var anchor = e.target;
        var activePaneId = anchor.getAttribute('href');
        var activePane = document.querySelector(activePaneId);

        // remove hidden indicator from select tab panels
        activePane.setAttribute('aria-hidden', 'false');
      };

      for (var k = 0; k < tab.length; k++) {
        tab[k].addEventListener('click', displayTabPanel, false);
      }
    }
  }

};
UK_Parliament.tabbedPanel();