let introPage = document.querySelector('.intro-page');
let introBtn = document.querySelector('.intro-btn');
let closeBtn = document.querySelector('.fa-close');
let blackOverlay = document.querySelector('.black-overlay');
let footerBtnCtr = document.querySelector('.footer-btn-ctr');

introBtn.addEventListener("click", () => {
    introPage.style.transform = 'scale(1)'
    introPage.style.height = 'auto';
    introPage.style.width = '80%';
    blackOverlay.style.opacity = '1';
    blackOverlay.style.zIndex = '20';
    blackOverlay.style.transform = 'scale(1)';
    footerBtnCtr.style.zIndex = '-1';
})

closeBtn.addEventListener("click", () => {
    introPage.style.transform = 'scale(0)';
    blackOverlay.style.opacity = '0';
    blackOverlay.style.zIndex = '-20';
    blackOverlay.style.transform = 'scale(0)';
    footerBtnCtr.style.zIndex = '1';

})