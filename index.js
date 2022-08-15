jQuery("document").ready(function($) {
    var menuBtn = $(".menu-icon"),
    menu = $("navigation ul");

    menuBtn.click(function() {
        menu.addClass("show");

    });
    
});




// let tereceraVariable = "primera variable con let"
// const primeraConstante = 4
// const segundaConstante = 7
// let resultado = primeraConstante+segundaConstante
// console.log(resultado)
