function vote(commentId, direction) {
    const key = `vote_${commentId}`;
    const current = localStorage.getItem(key);
    if (current === direction) {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, direction);
    }

    updateVoteDisplay(commentId);
}

function updateVoteDisplay(commentId) {
    const key = `vote_${commentId}`;
    const current = localStorage.getItem(key);

    // Update count display
    const countEl = document.getElementById(`vote-count-${commentId}`);
    if (current === 'up') countEl.textContent = '+1';
    else if (current === 'down') countEl.textContent = '-1';
    else countEl.textContent = '0';

    const box = countEl.parentElement;
    box.querySelector('.vote-btn.up').classList.toggle('active', current === 'up');
    box.querySelector('.vote-btn.down').classList.toggle('active', current === 'down');
}

document.addEventListener('DOMContentLoaded', () => {
    updateVoteDisplay('cowmen');
});
