/*
* dev: Viki
* ig: @moe.sazumiviki
* gh: github.com/sazumivicky
* site: www.sazumiviki
*/

AOS.init({
    duration: 1000,
    once: true,
    delay: 100,
    anchorPlacement: 'top-bottom',
});
window.onload = function() {
    if (!sessionStorage.getItem('popupShown')) {
        document.getElementById('info-popup').classList.remove('hidden');
        document.querySelector('body').classList.add('blur-background');
        sessionStorage.setItem('popupShown', 'true');
    }

    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('info-popup').classList.add('hidden');
        document.querySelector('body').classList.remove('blur-effect');
    });
    document.getElementById('confirm-button').addEventListener('click', function() {
        document.getElementById('info-popup').classList.add('hidden');
        document.querySelector('body').classList.remove('blur-effect');
    });
};