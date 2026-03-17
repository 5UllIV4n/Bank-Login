function logIn() {
    switchTo('login-modal');
}

function signUp() {
    switchTo('signup-modal');
}

function switchTo(id) {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    document.getElementById('modal-overlay').classList.add('active');
    document.getElementById(id).classList.add('active');
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    document.getElementById('modal-overlay').classList.remove('active');
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

document.querySelectorAll('.blog-info').forEach(p => {
    const words = p.textContent.trim().split(/\s+/);
    const MAX_WORDS = 7;

    if (words.length > MAX_WORDS) {
        const shortText = words.slice(0, MAX_WORDS).join(' ');
        const fullText = p.textContent;

        p.textContent = shortText + ' ';

        const more = document.createElement('span');
        more.textContent = '(more)';
        more.style.color = 'Blue'
        more.style.cursor = 'pointer'

        let expanded = false;

        more.addEventListener('click', () => {
            if (!expanded) {
                p.textContent = fullText + ' ';
                p.appendChild(more);
                more.textContent = ' (less)';
                expanded = true;
            } else {
                p.textContent = shortText + ' ';
                p.appendChild(more);
                more.textContent = '(more)';
                expanded = false;
            }
        });

        p.appendChild(more);
    }
});

function scollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });

}