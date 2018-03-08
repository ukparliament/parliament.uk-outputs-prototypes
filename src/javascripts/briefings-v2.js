/**
 * Tabbed Panel
 */
UK_Parliament.tabbedPanel = function () {

  var version__two = document.querySelector('.version--two');
  if (version__two) {

    // Tabbed content
    var tabPanel = document.querySelector('.tab--panel');
    if (tabPanel) {
      var tabs = document.querySelectorAll('[data-component="list_tab"]'),
        displayPanel = function (event) {
          event.preventDefault();

          /**
           * Deselect all tabs in .tab--panel group
           * Select current tab in .tab--panel group
           */
          var list__tab__panel = this.parentElement;
          var currentTabs = list__tab__panel.querySelectorAll('[data-component="list_tab"]');
          for (i = 0; i < currentTabs.length; i++) {
            currentTabs[i].setAttribute('aria-selected', 'false');
          }

          this.setAttribute('aria-selected', 'true');


          /**
           * Hide all panels in .tab--panel group
           * Show current panel in .tab--panel group
           */
          var tab__panel = this.parentElement.parentElement;
          var currentPanels = tab__panel.querySelectorAll('[data-component="tab_panel"]');
          for (i = 0; i < currentPanels.length; i++) {
            currentPanels[i].setAttribute('aria-hidden', 'true');
          }

          var anchor = event.target;
          var activePanelId = anchor.getAttribute('href');
          var activePanel = document.querySelector(activePanelId);
          activePanel.setAttribute('aria-hidden', 'false');
        };

      for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', displayPanel, false);
      }
    }
  }

};
UK_Parliament.tabbedPanel();