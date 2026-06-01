document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('video-modal');
    const openBtn = document.getElementById('see-how-it-works');
    const closeBtn = document.querySelector('.close-modal');
    const videoIframe = document.getElementById('modal-video');

    if (openBtn && modal && videoIframe) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const videoUrl = openBtn.getAttribute('data-video-url') || 'https://www.youtube.com/embed/_RZwGzElnIs';
            videoIframe.src = videoUrl;
            modal.style.display = 'flex';
        });
    }

    const closeModal = () => {
        if (modal) modal.style.display = 'none';
        if (videoIframe) videoIframe.src = '';
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
