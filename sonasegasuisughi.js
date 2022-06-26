prodotto=["involtini primavera", "Ravioli al Vapore", "riso cantonese", "udon con verdure", "Nigiri Misto", "Pollo con Curry", "Ebiten Temako", "Spaghetti di riso", "Pinta", "Acqua"];
prezzi=[2.00, 4.00, 5.00, 5.00, 8.00, 7.00, 9.00, 5.00, 5.00, 4.00];
prezzi_selezionati= [];
totale = 0;



function prezzo(nome_prodotto){
    for(i=0;i<prodotto.length;i++){
        if(nome_prodotto === prodotto[i]){
            prezzi_selezionati.push(prodotto[i]);  
            prezzi_selezionati.push(prezzi[i]);    
        }
    }
    console.log(prezzi_selezionati);
}


function tot(){
    for(i=1; i < prezzi_selezionati.length; i=i+2){//partendo da1 con passo 2 sono i numeri
        totale= totale + prezzi_selezionati[i];    // calcola il totale
    }
    document.getElementById("display").setAttribute('value', totale +" $ ");
    //totale = 0;
    for(i=0; i < prezzi_selezionati.length; i=i+2){//partendo da 0 con passo 2 sono le string
        document.getElementById("lista").innerHTML += " "+ prezzi_selezionati[i] + "<br>"; // prodotti selezionati
        prezzi_selezionati=[];
    }
    
}
//QUESTA FUNZIONE SERVE PER RIMANDARE ALLO STATO INIZIALE IL PROGRAMMA
function reset (){
    document.getElementById("display").setAttribute("value", ""); // per pulire schermo
    resetlist();// pulisce lista
    totale = 0; // pulisce tot
    prezzi_selezionati = []; //pulisce l'array
}

function resetlist(){
    document.getElementById("lista").innerHTML = "";
}

