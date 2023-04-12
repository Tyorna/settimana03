/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/


function area(l1, l2){
    let risultato = l1 * l2;
    console.log(risultato);
}
  area (3 , 4);


 /* function area(l1, l2){
    return l1 * l2;
}
  area (3 , 4);*/
  //console.log(area(3,4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (num1, num2){
    if(num1 !== num2){
        let somma = num1 + num2;
        console.log(somma);
    } else {
        let somma = (num1 + num2)*3;
        console.log(somma);
    }
}

crazySum (2, 2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff (numA){
    if(numA < 19){
        let diff = Math.abs(numA) - 19;
        console.log(diff);
    } else {
        let diff = (Math.abs(numA) - 19)*3;
        console.log(diff);
    }
}

crazyDiff (-4);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (nump){
    if (Math.abs(nump) > 20 && Math.abs(nump) <= 100 || Math.abs(nump) == 400){
        console.log('true');
    } else {
        console.log('false');
    }
}

boundary (105);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(frase){
    if ((frase.search('EPICODE') != 0)){
        console.log('EPICODE' + frase);
    } else {
        console.log(frase);
    }
}

epify('EPICODE ti fa impazzire con Js');

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(pos){
    if ((pos % 3) == 0 || (pos % 7) == 0){
        console.log('true');
    } else {
        console.log('false');
    }
}

check3and7(21);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(pos){
    var unire = "";
    for (let i = pos.length - 1; i >= 0; i--) {
         unire += pos[i];
      }
      console.log(unire);
    }


reverseString('epicode');


/*function reverseString1(pos){
    for (let i = pos.length - 1; i >= 0; i--) {
        var contro = pos.charAt[i] ;
        console.log(contro);
      }
    }*/

   // reverseString1('epicode');

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(capi){
         var upp = capi.split(" ");
         var upp1;
         for (let i = 0; i < upp.length; i++) {
            upp[i] = upp[i].charAt(0).toUpperCase() + upp[i].slice(1);;
        }
            upp1 = upp.join(' ');
            console.log(upp1);
      }
    

    upperFirst('tutte le iniziali devono essere maiuscole');
    

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(cut){
    let lung = cut.length;
    console.log(lung);
    var nuovo = cut.slice(1, 43);
    console.log(nuovo);
}

cutString("Non devo avere il prime è l'ultimo carattere");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(rand){
   var rnum =[];
   //= Math.floor(Math.random()*11);
   for (b = 0; b<rand; b++) {
       rnum.push(Math.floor(Math.random()*11));
   }
   console.log(rnum);
}


giveMeRandom(10);