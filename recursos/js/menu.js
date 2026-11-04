// Toggles the main navigation on small screens.
(function () {
    var button = document.querySelector('.menu-toggle');
    var nav = document.getElementById('site-nav');
    if (!button || !nav) {
        return;
    }

    button.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        button.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && nav.classList.contains('is-open')) {
            nav.classList.remove('is-open');
            button.setAttribute('aria-expanded', 'false');
            button.focus();
        }
    });
})();
