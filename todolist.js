    /*let addElement = document.getElementById('addBtn');
let input = document.getElementById('input');
let container = document.getElementById('container');


addElement.addEventListener('click', function(){
    var paragrafo = document.createElement('p');
    paragrafo.innerText = input.value;
    container.appendChild(paragrafo);
    input.value = "";

    addElement.addEventListener('click', function(){
        paragrafo.style.textDecoration= "line-through";
    })
    addElement.addEventListener('dblclick', function(){
        container.removeChild(paragrafo);
    })
})*/

/*let todo = [];
let input = [];

function addElement (){
    let inputValue= document.getElementById("input").value;
        if(inputValue === ""){
            alert("scrivi qualcosa!!!!");
        }
        else{
            todo.push(inputValue);
            console.log(inputValue);
           // document.getElementById("input").value = todo;
           document.write(input);
        }
    }*/

    /*let todo=[];

    function addElement(){
      let inputValue= document.getElementById("input").value;
      todo.push(inputValue);

      for(i=0; i<todo.length; i++){
          document.getElementById("destinazione").innerHTML+="<li>"+todo[i]+"</li>"
      }
      todo.pop();
    }

        if(inputValue===''){
            alert("scrivi qualcosa");
        }else {
            todo.push(inputValue);
            console.log(inputValue);
            console.log(destinazione);
        }*/



function addElement(){//accedo allinput di testo e mi prendo il contenuto scritto dentro
    if(document.getElementById("elementolista").value == ""){//se clicchi il bottone senza niente ti avvisa di scrivere con un alert
        alert("scrivi qualcosa");
    }
    
    else{
        let input_di_testo = document.getElementById("elementolista");
        let testo_lis = input_di_testo.value;
        //console.log('nodo: ', input_di_testo);
        //console.log('valore_node: ', testo_lis);
        //let elemento_lis = document.getElementById("inputtext").value; stessa cosa della sintax sopra
    
        /*
        let lista = document.getElementById('lista');*/
    
    
        //mi calcolo il numero della lista scorrendoli in un array
        let array_lista = document.getElementsByTagName('li');//va fatta prima di riga 76
        let numero_elementi = array_lista.length;//lunghezza array
        console.log(array_lista);
        console.log(numero_elementi);
    
    
        //METODO 1
        let id_elemento_lista = 'elemento_#' + (numero_elementi+1)//costruisce un id dinamico
        let elemento_lista = document.createElement('li');//crea un nuovo elemento 'li'
        elemento_lista.setAttribute('id', id_elemento_lista);//do un valore all'id
        //elemento_lista.setAttribute('value', testo_lis);NON FUNZIONA
        document.getElementById('lista').appendChild(elemento_lista);//inserisce un figlio o nodo in coda
        aggiungi_spaziotesto(id_elemento_lista, testo_lis);
        aggiungi_delete_button(id_elemento_lista);//richiama funzione per aggiungere un bottoneX all'elemnto li mettendolo dopo il testo


        //METODO 2
        /*let id_elemento_lista = 'elemento_#' + (numero_elementi+1);
        let elemento = "<li id='" + id_elemento_lista + "'>" + testo_lis + "</li";
        document.getElementById('lista').innerHTML += elemento;*/
    
        document.getElementById("elementolista").value = '';//
    }
    
}

function testo_selezionato(id_elemento_lista){ //aggiunge una sbarra sul testo(richiama classi da CSS)
   let elemento_li = document.getElementById(id_elemento_lista);
   elemento_li.classList.remove('cancella_sbarra');
   elemento_li.classList.add('testo_selezionato');
}

function cancella_sbarra(id_elemento_lista){ //toglie la sbarra sul testo (richiama classi da CSS)
    document.getElementById(id_elemento_lista).classList.remove('testo_selezionato');
    document.getElementById(id_elemento_lista).classList.add('cancella_sbarra');
}


function aggiungi_spaziotesto(id_elemento_lista, testo){
    let span_testo = document.createElement('span');
    let id_span_testo = 'testo' + id_elemento_lista;
    span_testo.setAttribute('id', id_span_testo);
    span_testo.setAttribute('class', 'style_text');
    span_testo.setAttribute('onclick', 'testo_selezionato(this.id)');
    span_testo.setAttribute('ondblclick', 'cancella_sbarra(this.id)');
    span_testo.innerHTML = testo;
    console.log(span_testo);
    document.getElementById(id_elemento_lista).appendChild(span_testo);
}

function aggiungi_delete_button(id_elemento_lista){//FUNZIONE CHE CREA UN BOTTONE ALL'INTERNO DI LI 
    let bottoneX = document.createElement('input');
    bottoneX.setAttribute('type', 'button');
    bottoneX.setAttribute('value', 'X');
    bottoneX.setAttribute('class', 'btn_style');
    let valore_onclick = "cancella_elemento('" + id_elemento_lista + "')";
    bottoneX.setAttribute('onclick', valore_onclick);
    document.getElementById(id_elemento_lista).appendChild(bottoneX);
}

function cancella_elemento(id_elemento_lista){
    document.getElementById(id_elemento_lista).remove();
}