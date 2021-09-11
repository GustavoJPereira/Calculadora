class Calculadora {
    constructor(operacaoAnteriorElementoTexto, operacaoAtualElementoTexto) {
        this.operacaoAnteriorElementoTexto = operacaoAnteriorElementoTexto
        this.operacaoAtualElementoTexto = operacaoAtualElementoTexto
        this.limpar()
    }

    limpar() {
        this.operaracaoAtual = ''
        this.operaracaoAnterior = ''
        this.operaracao = undefined
    }

    delete() {

    }

    adicionarNumero(numero) {
        this.operaracaoAtual = this.operaracaoAtual.toString() + numero.toString()
    }

    escolherOperacao(operacao) {

    }

    computar() {

    }

    atualizarDisplay() {
        this.operacaoAtualElementoTexto.innerText = this.operaracaoAtual
    }
}


const botoesNumero = document.querySelectorAll('[data-numero]')
const botoesOperacao = document.querySelectorAll('[data-operacao]')
const botaoIgual = document.querySelector('[data-igual]')
const botaoDelete = document.querySelector('[data-delete]')
const botaoLimparTudo = document.querySelector('[data-limpar-tudo]')
const operacaoAnteriorElementoTexto = document.querySelector('[data-operacao-anterior]')
const operacaoAtualElementoTexto = document.querySelector('[data-operacao-atual]')

const calculadora = new Calculadora(operacaoAnteriorElementoTexto, operacaoAtualElementoTexto)

botoesNumero.forEach(button => {
    button.addEventListener('click', () =>{
        calculadora.adicionarNumero(button.innerText)
        calculadora.atualizarDisplay()
    })
})