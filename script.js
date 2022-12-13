const btnHide = document.getElementById('hide-menu');
const btnOpen = document.getElementById('open-menu');
const leftBar = document.querySelector('.left-sidebar');
const iconArr = document.querySelectorAll('.menu-left > ul > li > p');
const moreBtn = document.querySelector('.more-btn > p')
const mDBicon = document.getElementById('my-DB-icon');
const mDBiconShort = document.getElementById('my-DB-icon-short');


btnHide.addEventListener('click', () => {
    leftBar.classList.add('hidden-menu')
    iconArr.forEach(element => {
        element.classList.add('hide')
    });
    moreBtn.classList.add('hide')
    btnHide.classList.add('hide')
    mDBicon.classList.add('hide')

    btnOpen.classList.remove('hide')
    mDBiconShort.classList.remove('hide')
})

btnOpen.addEventListener('click', () => {
    leftBar.classList.remove('hidden-menu')
    iconArr.forEach(element => {
        element.classList.remove('hide')
    });
    moreBtn.classList.remove('hide')
    btnHide.classList.remove('hide')
    mDBicon.classList.remove('hide')

    btnOpen.classList.add('hide')
    mDBiconShort.classList.add('hide')
})