document.querySelectorAll('.tip-toggle').forEach((button) => {
    button.addEventListener('click', () => {
        const isDone = button.getAttribute('aria-pressed') === 'true';
        const title = button.closest('.tip').querySelector('h2').textContent;

        button.setAttribute('aria-pressed', String(!isDone));
        button.closest('.tip').classList.toggle('is-done', !isDone);
        button.textContent = isDone ? 'Marcar' : 'Hecho';
        button.setAttribute(
            'aria-label',
            `${isDone ? 'Marcar como hecho' : 'Desmarcar'}: ${title}`
        );
    });
});
