function calcul() {


const  a = Number(document.getElementById('nombre1').value);
const b = Number(document.getElementById('nombre2').value); 
const op = document.getElementById('operation').value;

let resultat; 

if(op === '+'){
    resultat = a + b; 
}
else if (op === '-'){
    resultat = a - b; 
}

else if (op === '*'){
    resultat = a * b; 
}

else if (op === '/'){
    if(b === 0){
        alert('Division par 0: impossible');
        return; 
    }
    else{
        resultat = a / b; 
    }
}

else{
    alert('Opération non reconnue');
    return;
}


document.getElementById('resultat').textContent = "resultat: " + resultat;
}