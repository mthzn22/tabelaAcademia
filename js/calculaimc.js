//usar let
//document -> significa que estamos trabalhando com html
//query.Selector é para selecionar no html
let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

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
    
    //toFixed para diminuir as classes decimais
}

function calculaImc(peso, altura){
    let imc = 0
    //calculando o imc do paciente
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}