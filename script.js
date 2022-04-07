const tela = document.getElementById('tela');
const aumentarBtn = document.getElementById('aumentar');
const diminuirBtn = document.getElementById('diminuir');
const tamanhoEL = document.getElementById('tamanho');
const corEl = document.getElementById('cor');
const limparEl = document.getElementById('limpar');

const ctx = tela.getContext('2d');

let tamanho = 10
let ePressionado = false
corEl.value = 'black'
let cor = corEl.value
let x
let y

tela.addEventListener('mousedown', (e) => {
    ePressionado = true

    x = e.offsetX
    y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
    ePressionado= false

    x = undefined
    y = undefined
})

tela.addEventListener('mousemove', (e) => {
    if(ePressionado) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        desenheCirculo(x2, y2)
        desenheLinha(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function desenheCirculo(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, tamanho, 0, Math.PI * 2)
    ctx.fillStyle = cor
    ctx.fill()
}

function desenheLinha(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = cor
    ctx.lineWidth = tamanho * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    tamanhoEL.innerText = tamanho
}

aumentarBtn.addEventListener('click', () => {
    tamanho += 5

    if(tamanho > 50) {
        tamanho = 50
    }

    updateSizeOnScreen()
})

diminuirBtn.addEventListener('click', () => {
    tamanho -= 5

    if(tamanho < 5) {
        tamanho = 5
    }

    updateSizeOnScreen()
})

corEl.addEventListener('change', (e) => cor = e.target.value)

limparEl.addEventListener('click', () => ctx.clearRect(0,0, tela.width, tela.height))
