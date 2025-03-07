const setahome = document.querySelector('.voltar-topo')
const menuButton = document.querySelector('#menu-button')
const menuNav = document.querySelector('#topo')
const cabecalho = document.querySelector('#cabecalho')

document.addEventListener('touchend', function(){
    if (menuNav.style.display === 'flex') {
        menuNav.style.display = 'none'

    } else {
        menuNav.style.display = 'flex'
    }
}) 