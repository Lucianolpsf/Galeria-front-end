const textoDigitado = document.getElementById("typed-name")
const cursor = document.getElementById("cursor")
const textos = ['Estudante de ADS.', "Apaixonada por programação."]
const digitarDelay = 100
const apagarDelay = 50
const novoTextoDelay = 2000
let textoIndex = 0
let charIndex = 0

function escrever() {
      if(charIndex < textos[textoIndex].length) {
          textoDigitado.textContent += textos[textoIndex].charAt(charIndex)
          charIndex++
          setTimeout(escrever, digitarDelay)
      } 
      else {
          setTimeout(apagar, novoTextoDelay)
      }
}

function apagar(){
      if(charIndex > 0) {
          textoDigitado.textContent = textos[textoIndex].substring(0, charIndex - 1)
          charIndex--
          setTimeout(apagar, apagarDelay)
      }
      else {
          textoIndex++
          if(textoIndex >= textos.length) textoIndex = 0;
          setTimeout(escrever, digitarDelay + 1100)
      }
}

document.addEventListener('DOMContentLoaded', function() {
      textoDigitado.textContent = ''
      if(textos.length) setTimeout(escrever, 0)
  })
