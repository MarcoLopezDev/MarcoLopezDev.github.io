var btnAbrirPopup = document.getElementById('play1'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active')
});

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active')
});


/*Mother*/
var btnAbrirPopup11 = document.getElementById('play11'),
    overlay11 = document.getElementById('overlay11'),
    popup11 = document.getElementById('popup11'),
    btnCerrarPopup11 = document.getElementById('btn-cerrar-popup11');

btnAbrirPopup11.addEventListener('click', function(){
    overlay11.classList.add('active');
    popup11.classList.add('active')
});

btnCerrarPopup11.addEventListener('click', function(){
    overlay11.classList.remove('active');
    popup11.classList.remove('active')
});