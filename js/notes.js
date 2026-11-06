// Switches between the note tabs. The open tab is kept in the
// address bar (notes.html#mumukshuppadi) so links go straight to it.
(function () {
  var tabs = document.querySelectorAll('.tab');
  var panels = document.querySelectorAll('.panel');

  function show(id) {
    var found = false;
    panels.forEach(function (p) {
      var match = p.id === id;
      p.hidden = !match;
      if (match) found = true;
    });
    if (!found) return show(panels[0].id);
    tabs.forEach(function (t) {
      t.setAttribute('aria-selected', t.dataset.panel === id ? 'true' : 'false');
    });
  }

  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      history.replaceState(null, '', '#' + t.dataset.panel);
      show(t.dataset.panel);
      window.scrollTo(0, 0);
    });
  });

  window.addEventListener('hashchange', function () {
    show(location.hash.slice(1));
  });

  show(location.hash.slice(1) || panels[0].id);
})();
