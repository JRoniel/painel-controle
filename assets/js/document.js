$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

/* Centralizando Painel */
let set = document.querySelector('.form');
let pl = eval(set.parentElement.clientHeight - set.clientHeight);
set.style.paddingTop=eval(pl/2)+'px';
