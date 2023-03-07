let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (evento) {

    //anula todo evento padrao que o html possa fazer
    //nao atualiza a pagina
    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let paciente = obterValoresDoForm(form)

    adicionaPacienteNaTabela(paciente)
})

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
}

function montarTr(paciente) {
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function montarTd(dado, classe) {
    //criando uma td 
    let td = document.createElement('td')
    //criando um elemento td
    td.textContent = dado
    //classlist define a classe do elemento HTML
    td.classList.add(classe)

    return td
}

function obterValoresDoForm(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}