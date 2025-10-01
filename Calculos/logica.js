function subtracao (){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber

    var resposta = document.getElementById("respsubtracao")
    
    resposta.textContent = numero1 - numero2
    //console.log(numero!, numero2) 
}