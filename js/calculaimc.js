let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

// usar-let
// document -> significa que estamos trabalhando com html
// query.Selector é para selecionar no html
//---------------------------------------------------------------------------------------------------

let pacientes = document.querySelectorAll('.paciente')

//cadastrar quantos pacientes
for(let i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i]

//recebendo o peso do paciente
    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.textContent

//recebendo a altura do paciente
    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.textContent

    //calculando imc do paciente
    let imcTd = paciente.querySelector('.info-imc')
    let imc = calculaImc(peso,altura)
    imcTd.textContent = imc

    let pesoEhValido = validaPeso(peso)
    let alturaEhValido = validaAltura(altura)

    if(pesoEhValido == false){
        console.log('Peso Invalido')
        pesoEhValido = false
        imcTd.textContent = 'Peso Invalido'
        paciente.classList.add('paciente-invalido')
    }

    if(!alturaEhValido){
        console.log('Altura invalida')
        alturaEhValido = false
        imcTd.textContent = 'Altura Invalido'
        paciente.classList.add = 'paciente-invalido'
    }

    if(pesoEhValido && alturaEhValido){
        let imc = calculaImc(peso, altura)
        imcTd.textContent = imc
    }
    
}

function calculaImc(peso, altura){
    let imc = 0
    //calculando o imc do paciente
    imc = peso / (altura * altura)
    return imc.toFixed(2)
    //toFixed para diminuir as classes decimais
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true 
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <=3){
        return true
    }else{
        return false
    }
}