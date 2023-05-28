const shareBtn = document.querySelector('.share');
const popup = document.querySelector('.popup');

shareBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})