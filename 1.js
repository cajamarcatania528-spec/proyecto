const factButton = document.querySelector('.fact-toggle');

if (factButton) {
    const factText = document.querySelector('#fact-text');

    factButton.addEventListener('click', () => {
        const isExpanded = factButton.getAttribute('aria-expanded') === 'true';
        factButton.setAttribute('aria-expanded', String(!isExpanded));
        factText.hidden = isExpanded;
        factButton.innerHTML = isExpanded
            ? 'Ver dato <span aria-hidden="true">＋</span>'
            : 'Ocultar dato <span aria-hidden="true">−</span>';
    });
}