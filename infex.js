let resultado = subtracao( 30, 11)

let vitoria = 30
let derrota = 11

function subtracao(vitoria, derrota){
   let subt = vitoria - derrota
   return subt
}


if(vitoria < 10){
    nivel = "ferro"
}else if(vitoria > 10 && vitoria < 20){
    nivel = "bronze"
}else if(vitoria > 20 && vitoria < 50){
    nivel = "prata"
}else if(vitoria > 50 && vitoria < 80){
    nivel = "ouro"
}else if(vitoria > 80 && vitoria < 90){
    nivel = "diamante"
}else if(vitoria > 91 && vitoria < 100){
    nivel = "lendario"
}else if(vitoria >= 101){
    nivel = "imortal"
}

console.log ("O heroi de saldo de "+ resultado + " está no nível " + nivel)