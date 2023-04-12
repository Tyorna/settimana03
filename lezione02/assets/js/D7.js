/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

var str1 = "locandina";
var str2= "animale";
str1 = str1.slice(0,2);
str2 = str2.slice(str2.length-3, str2.length);
var nuovastr = str1.concat(str2).toUpperCase();

console.log(nuovastr);

//Metodo due;

var nuovastr1 =  (str1.slice(0,2)).concat(str2.slice(str2.length-3, str2.length)).toUpperCase();
console.log(nuovastr1)

// funzione;
/*str3 = ['alpe','marittimo'];
function str3(s3,s4){
   var str4 = (s3.slice(0,2)).concat(s4.slice(s4.length-3, s4.length)).toUpperCase();
   
}

console.log(str4);*/

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
var numero = (10);

/*casuale = (cas) => {
  var numero10 = [];
  for (i=0; i<cas; i++){
  numero10.push(Math.round(Math.random()* 101));
}
console.log(casuale());
}*/

function rand (n){
  var num = [];
  for (i=0; i<n; i++){
  num.push(Math.round(Math.random()* 101));
}
console.log(num);
}

rand(10);

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/


function pari (num){
  var pari2;
  if(num % 2 == 0){
    pari2.push(num);
    console.log(pari2);
  }
}

 pari[10, 5 ,6, 8, 7, 3];
 
/*function pdue (...due){
  return due % 2 == 0;
    //console.log(due);
  }


pdue [10, 5 ,6, 8, 7, 3];
pari2 = pari.filter(pdue);

console.log(pari2);*/

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
/*var arg = [2, 4, 5, 7, 9, 10];
var con = 0;

function arg(...summ){
   
   for (let s of summ) con += s;
   return con
  }

console.log(con);*/




/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
 var arr = [2, 4, 5, 7, 9, 10];
 var totale = arr.reduce(red);

function red(tot, valore){
  return tot + valore;
  }

console.log(totale);

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/


//var incrementa = (numero) => {

//}

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

/*function lung(...tot){
    tot.forEach(element => {
       let fine = tot.length;
    });
    console.log(fine);
  }

  lung = ["EPICODE", "is", "great"];
 var total = [];
function lung(){
  totale.forEach((element)=>{
    total += element.length;
  })
}
console.log(total);*/


/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
/*var dispar = [];

function dispari(){
  for (i = 0; i<100; i++){
    if (i % 2 == 1){
      return dispar += i;
    }
  }
}

console.log(dispar);*/


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

//movievecchio()

/*function movievecchio(){
  var old = movies[0].Year;
    var film;
    movies.map((element) => {
      if (element.movie < old) {
              old = element.Year;
              film = element.Title;
      }
    });
console.log(`Il film più vecchio è ${film.Title}`);
    }*/

var anni =[];
var film = movies[0].Year;
for (let i = 0; i < movies.length; i++) {
    anni.push(movies[i].Year);
    if (movies[i].Year < film){
        film = movies[i].Year + ' ' + movies[i].Title;
    }
}

console.log(anni);
console.log(film);


/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/*var totfilm = 0;
var totfilm2 = 0;
for (let i = 0; i < movies.length; i++) {
    totfilm += movies[i].Title; 
    totfilm2 += movies[i];
    }

    console.log(totfilm2);*/

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/


    var titoli = [];
for (let i = 0; i < movies.length; i++) {
    titoli.push(movies[i].Title);
    
}

console.log(titoli);


/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

var mill =[];
var filmmill = [];
for (let i = 0; i < movies.length; i++) {
    mill.push(movies[i].Year);
    if (movies[i].Year < 2000){
        filmmill +=  movies[i].Title + ' ,';
    }
}


console.log(filmmill);

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
var year = [];
var yeasum = 0;
for (let i = 0; i < movies.length; i++) {
    year.push(Number(movies[i].Year));
    yeasum = year.reduce(red);
    
    }


console.log(yeasum);
