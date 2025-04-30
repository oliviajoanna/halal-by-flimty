
/*=============== ADD BLUR TO HEADER ===============*/
const blurlHeader = () => {
    const header = document.getElementById('header');
    if (!header) return;
    
    if (window.scrollY >= 50) {
        header.classList.add('blur-header');
    } else {
        header.classList.remove('blur-header');
    }
}
window.addEventListener('scroll', blurlHeader);


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');
    if (!scrollUpBtn) return; // prevent error if element not found

    if (window.scrollY >= 350) {
        scrollUpBtn.classList.add('show-scroll');
    } else {
        scrollUpBtn.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
})

sr.reveal(`.front_page_data, .explore__data`)
sr.reveal(`.front_page_card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.berita1_data`, {origin: 'right'})
sr.reveal(`.berita1_image`, {origin: 'left'})
sr.reveal(`.beritasmall_card`, {interval: 200})



