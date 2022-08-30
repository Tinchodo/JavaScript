let continente = prompt( "Hola, eres de europa o america?")
let alcohol = prompt("Deseas comprar ron o vodka?")
let total
let ron = 1200
let vodka = 1500

if(continente === "europa"){
    iva = 21
    } if(alcohol === "ron"){
        total = ron + ((iva/100)*ron)
    } else if(alcohol === "vodka"){
        total = vodka + ((iva/100)*vodka)
    }else{
        alert("No tenemos ese producto")
    }

if(continente === "america"){
    iva = 0
    } if(alcohol === "ron"){
        total = ron
    } else if(alcohol === "vodka"){
        total = vodka
    } 

    else{
    alert("No hacemos envios a esa zona")
}

alert("El envio a "+continente+" tiene un costo de iva del "+iva+"%, y su total es "+total+"$ ,muchas gracias por su compra!")
