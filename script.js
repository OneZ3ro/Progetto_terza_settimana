/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;
console.log(
  "--------------- Esercizio A ---------------\nSomma tra 10 e 20:",
  sum
);

//______________________________________________________________________________________________

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const btn_esB = document.getElementById("esB");
const div_esB = document.getElementById("div_esB");

const esB = () => {
  const random_num = Math.floor(Math.random() * 21);
  const dentro_esB_div = document.createElement("div");

  div_esB.innerText = "";
  dentro_esB_div.innerText = `Numero casuale esB: ${random_num}`;
  div_esB.appendChild(dentro_esB_div);
};
btn_esB.onclick = esB;
console.log(
  "--------------- Esercizio B ---------------\nPremi il bottone nella pagina web"
);

//______________________________________________________________________________________________

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  nome: "Angelo",
  surname: "Moreno",
  age: 21,
};
console.log("--------------- Esercizio C ---------------\nObj 'me':", me);

//______________________________________________________________________________________________

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

const remove_me_age = () => {
  delete me.age;
  console.log("--------------- Esercizio D ---------------\nRemoved age:", me);
};
remove_me_age();

//______________________________________________________________________________________________

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

const skills = ["HTML", "CSS", "JS"];
console.log(
  "--------------- Esercizio E ---------------\nLe mie skills:",
  skills
);

//______________________________________________________________________________________________

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
const add_skills_to_me = () => {
  me.skills = [...skills];
  console.log(
    "--------------- Esercizio F ---------------\nAggiunto array 'skills' nell'obj 'me'",
    me
  );
};
add_skills_to_me();

//______________________________________________________________________________________________

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

const remove_last_skill = () => {
  for (let i = 0; i < me.skills.length; i++) {
    console.log(me.skills[i]);
    if (i === me.skills.length - 1) {
      me.skills.splice(i, 1);
    }
  }
  console.log(
    "--------------- Esercizio G ---------------\nTolto ultima skill",
    me
  );
};
remove_last_skill();

//______________________________________________________________________________________________

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => {
  const dice_num = Math.floor(Math.random() * 6) + 1;
  return dice_num;
};
console.log(
  "--------------- Esercizio 1 ---------------\nNumero casuale da 1 a 6:",
  dice()
);

//______________________________________________________________________________________________

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    console.log(
      `--------------- Esercizio 2 ---------------\nIl numero ${num1} è maggiore di ${num2}`
    );
  } else if (num2 > num1) {
    console.log(
      `--------------- Esercizio 2 ---------------\nIl numero ${num2} è maggiore di ${num1}`
    );
  } else {
    console.log(
      `--------------- Esercizio 2 ---------------\nIl numero ${num2} e il numero ${num1} sono uguali`
    );
  }
};
whoIsBigger(5, 6);

//______________________________________________________________________________________________

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (str) => {
  const str_splittata = str.split(" ");
  console.log("--------------- Esercizio 3 ---------------\n", str_splittata);
};
splitMe("Eiusmod veniam et ea anim veniam nulla");

//______________________________________________________________________________________________

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (str, boolean) => {
  if (boolean) {
    const stringa = str.slice(1);
    console.log(
      "--------------- Esercizio 4 ---------------\nRimosso il primo carattere:\n",
      stringa
    );
  } else {
    const stringa = str.slice(0, -1);
    console.log(
      "--------------- Esercizio 4 ---------------\nRimosso l'ultimo carattere:\n",
      stringa
    );
  }
};
deleteOne(
  "Consequat consectetur veniam irure anim voluptate do tempor fugiat ex officia nulla",
  true
);

//______________________________________________________________________________________________

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (str) => {
  console.log(
    "--------------- Esercizio 5 ---------------\nStringa iniziale:\n",
    str
  );
  // metodo facile ma che ancora non abbiamo visto
  // const stringa = str.replace(/[0-9]/g, "");
  // console.log(stringa);

  // metodo classico
  const stringa = str.split(" ");
  const arr_num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < stringa.length; i++) {
    const prima_lettera = stringa[i].slice(0, 1);
    for (let j = 0; j < arr_num.length; j++) {
      if (prima_lettera === arr_num[j]) {
        stringa.splice(i, 1);
      }
    }
  }
  const result = stringa.join(" ");

  console.log("Stringa finale:\n", result);
};
onlyLetters("I have 444444 dogs and 2393 cats");

//______________________________________________________________________________________________

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (str) => {
  console.log("--------------- Esercizio 6 ---------------\n");
  let email = "";
  for (let i = 0; i < str.length; i++) {
    email += str[i];
    if (str[i] === "@") {
      if (email.length > 2 && email.length < 30) {
        console.log("La email è corretta");
      } else {
        console.log("Non è un email");
        break;
      }
      break;
    } else if (email.length === str.length) {
      console.log("Non è un email");
    }
  }
};
isThisAnEmail("prova@gmail.com");

//______________________________________________________________________________________________

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  console.log("--------------- Esercizio 7 ---------------\n");
  const adesso = new Date();
  const num_giorno_att = adesso.getDate();
  const num_mese = adesso.getMonth() + 1;
  const anno_att = adesso.getFullYear();
  const giorno_attuale = num_giorno_att + "/" + num_mese + "/" + anno_att;
  console.log(giorno_attuale);
};
whatDayIsIt();

//______________________________________________________________________________________________

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum": il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (par) => {
  const prop_dice = {
    sum: null,
    values: [],
  };

  for (let i = 0; i < par; i++) {
    let num_dice = dice();
    prop_dice.sum += num_dice;
    prop_dice.values[i] = num_dice;
  }

  console.log(prop_dice);
};
console.log("--------------- Esercizio 8 ---------------\n");
rollTheDices(10);

//______________________________________________________________________________________________

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (date) => {
  const date_now = new Date();
  const Difference_In_Time = date_now.getTime() - date.getTime();
  const Difference_In_Days = Math.floor(
    Difference_In_Time / (1000 * 3600 * 24)
  );
  console.log(
    "--------------- Esercizio 9 ---------------\nQuanti giorni sono passati:",
    Difference_In_Days
  );
};
howManyDays(new Date("07/10/2023"));

//______________________________________________________________________________________________

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = () => {
  const date_now = new Date();
  const num_giorno_att = date_now.getDate();
  const num_mese = date_now.getMonth();

  if (num_giorno_att === 17 && num_mese === 0) {
    console.log("Oggi è il tuo compleanno");
  } else {
    console.log("Oggi NON è il tuo compleanno");
  }
};
console.log("--------------- Esercizio 10 ---------------\n");
isTodayMyBirthday();

//______________________________________________________________________________________________

// Arrays & Oggetti

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const autos = [
  {
    Nome: "Audi",
    Year: "2001",
    Targa: "AB 123 CD",
    Modello: "S",
  },

  {
    Nome: "Fiat",
    Year: "1990",
    Targa: "EF 456 GH",
    Modello: "Panda",
  },
];

const deleteProp = (obj, str) => {
  for (let i = 0; i < autos.length; i++) {
    delete obj[i][str];
  }
  console.log(autos);
};
console.log("--------------- Esercizio 11 ---------------\n");

deleteProp(autos, "Year");

//______________________________________________________________________________________________

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = () => {
  let j = 0;
  for (let i = 0; i < movies.length; i++) {
    let year = parseInt(movies[i].Year);
    if (year > j) {
      j = year;
    }
  }
  console.log("Film più recente:", j);
};
console.log("--------------- Esercizio 12 ---------------\n");

newestMovie();

//______________________________________________________________________________________________

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = () => {
  let j = 0;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Type === "movie") {
      j++;
    }
  }
  console.log(`Nell'array ci sono ${j} films`);
};
console.log("--------------- Esercizio 13 ---------------\n");

countMovies();

//______________________________________________________________________________________________

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = () => {
  const arr_year = [];
  for (let i = 0; i < movies.length; i++) {
    arr_year.push(movies[i].Year);
  }
  console.log(arr_year);
};
console.log("--------------- Esercizio 14 ---------------\n");

onlyTheYears();

//______________________________________________________________________________________________

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = () => {
  const arr_last_mill = [];
  for (let i = 0; i < movies.length; i++) {
    let year = parseInt(movies[i].Year);
    if (year < 2000) {
      arr_last_mill.push(movies[i]);
    }
  }
  console.log(arr_last_mill);
};
console.log("--------------- Esercizio 15 ---------------\n");

onlyInLastMillennium();

//______________________________________________________________________________________________

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = () => {
  let result = 0;
  for (let i = 0; i < movies.length; i++) {
    let year = parseInt(movies[i].Year);
    result = result + year;
  }
  console.log("La somma di tutti gli anni dell'array è:", result);
};
console.log("--------------- Esercizio 16 ---------------\n");

sumAllTheYears();

//______________________________________________________________________________________________

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (str) => {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title === str) {
      console.log(movies[i].Title);
    }
  }
};
console.log("--------------- Esercizio 17 ---------------\nIl tuo film:");

searchByTitle("The Lord of the Rings: The Fellowship of the Ring");

//______________________________________________________________________________________________

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (str) => {
  const arr_movies_title = [];
  const arr_movies_match = [];
  for (let i = 0; i < movies.length; i++) {
    arr_movies_title.push(movies[i].Title.split(" "));
  }
  // console.log(arr_movies_title);
  for (let k = 0; k < arr_movies_title.length; k++) {
    for (let j = 0; j < arr_movies_title[k].length; j++) {
      if (arr_movies_title[k][j] === str) {
        arr_movies_match.push(movies[k]);
      }
    }
  }

  console.log("Array movies match\n", arr_movies_match);
};
console.log("--------------- Esercizio 18 ---------------\n");

searchAndDivide("Avengers:");

//______________________________________________________________________________________________

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (num) => {
  for (let i = 0; i < movies.length; i++) {
    if (i === num) {
      movies.splice(i, 1);
    }
  }
  console.log("Array movies", movies);
};

console.log("--------------- Esercizio 19 ---------------\n");
removeIndex(2);

//______________________________________________________________________________________________

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const es20 = () => {
  const div_container = document.getElementById("container");
  console.log("--------------- Esercizio 20 ---------------\n", div_container);
};
es20();

//______________________________________________________________________________________________

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const td = document.querySelectorAll("td");
const es21 = () => {
  console.log("--------------- Esercizio 21 ---------------\n", td);
};
es21();

//______________________________________________________________________________________________

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const es22 = () => {
  console.log("--------------- Esercizio 22 ---------------\n");
  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }
};
es22();

//______________________________________________________________________________________________

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const es23 = () => {
  console.log("--------------- Esercizio 23 ---------------\nDone");
  const a = document.querySelectorAll("a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = "red";
  }
};
es23();

//______________________________________________________________________________________________

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const ul = document.getElementById("myList");
const es24 = () => {
  console.log("--------------- Esercizio 24 ---------------\nDone");
  const li = document.createElement("li");
  li.innerText = "Nuovo elemento";
  ul.append(li);
};
es24();

//______________________________________________________________________________________________

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const es25 = () => {
  console.log("--------------- Esercizio 25 ---------------\nDone");
  ul.innerText = "";
};
es25();
//______________________________________________________________________________________________

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const es26 = () => {
  console.log("--------------- Esercizio 26 ---------------\nDone");
  const tr = document.querySelectorAll("tr");
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add("test");
  }
};
es26();

//______________________________________________________________________________________________

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

//______________________________________________________________________________________________

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

//______________________________________________________________________________________________
