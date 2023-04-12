var btnVerifica = document.getElementById('verifica');
var btnReset = document.getElementById('reset');

var giocatore1 = document.getElementById('giocatore1');
var giocatore2 = document.getElementById('giocatore2');
var valore1;
var valore2;
var messaggio = document.getElementById('risultato');
var estratto;


//facciamo fare qualcosa a window

window.addEventListener('load', function () {
    btnReset.setAttribute('disabled', 'true');
    btnReset.style.backgroundColor = 'red';
    btnReset.style.color = 'white';
});

//dom traversing, fare aggiungere a java qualcosa che nell'html non c'è, facciamo aggiungere un attributo a button. 

btnVerifica.addEventListener('click', function () {
    valore1 = Number(giocatore1.value);
    valore2 = Number(giocatore2.value);
    verifica();//scritto numero, scritto no numero uguale 0 o sopra 100 che non abbiano scritto lo stesso numero. E poi possiamo partire.
});

verifica = () => {
    if (!valore1 || !valore2) {
        messaggio.innerHTML = "Attenzione! Entrambi i giocatori devono inserire un valore!";
        return;
    } else if (valore1 < 1 || valore2 < 1 || valore1 > 100 || valore2 > 100) {
        messaggio.innerHTML = "Attenzione! Inserire un valore numerico tra 1 e 100!";
        return;
    } else if (valore1 === valore2) {
        messaggio.innerHTML = "Attenzione! Inserire valori diversi!";
        return;
    }
    else {
        estrai();
        calcola();
    }
}

//ogni funzione deve sempre fare una cosa sola. Estrai deve estrarre un numero da 1 a 100.

estrai = () => {
    estratto = Math.floor((Math.random() * 100) + 1);
}

// estrae da 0 a 99 con più uno estrae da 1 a 100.


calcola = () => {
    btnReset.removeAttribute('disabled');
    btnReset.style.backgroundColor = "green";
    giocatore1.setAttribute('disabled', 'true'); //disabilitato i due campi di input e fatti grigi.
    giocatore1.style.backgroundColor = "lightgray";
    giocatore2.setAttribute('disabled', 'true');
    giocatore2.style.backgroundColor = "lightgray";

    document.getElementById('estratto').innerHTML = `Numero estratto: ${estratto}`;

    //casi possibili: vince giocatore 1 vince giocatroe 2, giocatore 1 si avvicina di piu, 2 si avvicina di più, entrambi stessa distanza. 

    /*if( valore1 !== estratto){
        //estratto = valore1  Questo lo dovrei escrivere prima di stamparla
        estrai(); //finche non estrai in numero continua a estrarre.
        calcola();
    }
    */

    //SI può fare in modo che ogni 10 estrazioni vinca qualcuno. o che ad ogni 10 vince sempre il banco. 

    switch (true) {//verificherà quali dei casi è vero
        case valore1 === estratto:
            messaggio.innerHTML = 'il giocatore 1 ha indovinato';
            break;
        case valore2 === estratto:
            messaggio.innerHTML = 'il giocatore 2 ha indovinato';
            break;

        case Math.abs(estratto - valore1) < Math.abs(estratto - valore2):
            messaggio.innerHTML = 'Nessuno ha vinto ma il giocatore 1 si è avvicinato di più';
            break;

        case Math.abs(estratto - valore2) < Math.abs(estratto - valore1): //il vaolore assoluto, perchè se il numero estratto è piu piccolo o piu grande non c'è problema ma se sta in mezzo l'esito negativo di una sia maggiore di un riusltato positivo dell'estrazione. Es: viene estratto il 15, giocatore 1 scrive 13 e giocatore 2 scrive 20. ANdando a confrontare le sottrazione il primo ha -2 l'altro ha 5. Il secondo è più grande ma chi si avvicina di più è il primo, quindi devo estrarre il numero assoluto, non negativo.
            messaggio.innerHTML = 'Nessuno ha vinto ma il giocatore 2 si è avvicinato di più';
            break;

            default:
                messaggio.innerHTML = 'Pareggio';
                break;

    }

    btnVerifica.setAttribute('disabled', 'true');
    btnVerifica.style.backgroundColor = 'red';
    btnVerifica.style.color = 'white';
}


btnReset.addEventListener('click', function(){
btnVerifica.removeAttribute('disabled');
btnVerifica.removeAttribute('style');
giocatore1.removeAttribute('disable');
giocatore1.removeAttribute('style');
giocatore2.removeAttribute('disable');
giocatore2.removeAttribute('style');
giocatore1.value =' ';
giocatore2.value =' ';
messaggio.innerHTML =' ';
document.getElementById('estratto').innerHTML =' ';
btnReset.setAttribute('disabled', 'true');
    btnReset.style.backgroundColor = 'red';
    btnReset.style.color = 'white';
});