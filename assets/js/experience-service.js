(function () {
  'use strict';

  var section = document.getElementById('experience-service');
  if (!section) return;

  var tablist = section.querySelector('[role="tablist"]');
  var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
  var panels = tabs.map(function (tab) {
    return document.getElementById(tab.getAttribute('aria-controls'));
  });

  function selectTab(index, focus) {
    tabs.forEach(function (tab, i) {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (focus) tabs[index].focus();
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { selectTab(index, false); });
    tab.addEventListener('keydown', function (event) {
      var next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      selectTab(next, true);
    });
  });

  // Keep existing Services bookmarks working when their panel is hidden.
  function revealHash(hash, scroll) {
    var id;
    try { id = decodeURIComponent(hash.slice(1)); }
    catch (error) { return; }
    var target = document.getElementById(id);
    if (!target) return;
    var index = panels.indexOf(target.closest('.experience-panel'));
    if (index === -1) return;
    selectTab(index, false);
    if (scroll) panels[index].scrollIntoView({ block: 'start' });
    return panels[index];
  }

  section.classList.add('is-enhanced');
  tablist.hidden = false;
  selectTab(0, false);
  revealHash(window.location.hash, true);
  window.addEventListener('hashchange', function () {
    revealHash(window.location.hash, true);
  });

  // Handle panel links before the site's smooth-scroll handler sees hidden headings.
  document.addEventListener('click', function (event) {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    var link = event.target.closest('a[href]');
    if (!link) return;
    var url = new URL(link.href, window.location.href);
    if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.search === window.location.search) {
      var panel = revealHash(url.hash, false);
      if (!panel) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (window.location.hash !== url.hash) window.history.pushState(null, '', url.hash);
      panel.scrollIntoView({ block: 'start' });
    }
  }, true);
}());
