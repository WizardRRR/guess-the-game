// seleccionando elementos del dom
const input = document.querySelector('input')
const submit = document.querySelector('button')
const message = document.getElementById('message')
const wrappedAttempts = document.getElementById('wrappedAttemps')
const buttonReset = document.getElementById('reset')
const attempMessage = document.getElementById('attempMessage')

attempMessage.textContent = 'Te quedan 10 intentos'

// variables
let attempt = 0
let attempts = []
let mysteriousNumber = getNumberRandom()

// funcionalidad de enviar un intento
submit.addEventListener('click', function () {
  if (isNaN(parseInt(input.value))) {
    return alert('Alto ahi rufian, ingresa un número valido!')
  }
  if (attempt === 10) {
    message.textContent = 'Ya has superado el limite de intentos, has perdido!'
    input.disabled = true
    return
  }
  if (parseInt(input.value) === mysteriousNumber) {
    message.textContent = 'Felicidades adivinaste el número random'
    input.disabled = true
  } else if (parseInt(input.value) > mysteriousNumber) {
    message.textContent = 'El número es muy grande!'
  } else if (parseInt(input.value) < mysteriousNumber) {
    message.textContent = 'El número es muy bajo!'
  }
  attempts.push(parseInt(input.value))

  let htmlAttemps = ''

  attempts.forEach(function (attempt) {
    htmlAttemps += `<span>${attempt}</span>`
  })


  wrappedAttempts.innerHTML = htmlAttemps
  input.value = ''
  ++attempt
  attempMessage.textContent = `Te quedan ${10 - attempt} intentos!`
  console.log('lista de intentos:', attempts)
  console.log('intentos:', attempt)
})

// funcionalidad de reiniciar el juego
buttonReset.addEventListener('click', function () {
  attempts = []
  input.value = ''
  wrappedAttempts.innerHTML = ''
  attempt = 0
  attempMessage.textContent = `Te quedan ${10 - attempt} intentos!`
  message.textContent = ''
  input.disabled = false
})

// contralando input
input.addEventListener('input', function (event) {
  if (!(parseInt(input.value) <= 100 && parseInt(input.value) >= 0)) {
    input.value = ''
  }
})

function getNumberRandom() {
  let num = Math.round(
    Math.random() * 100
  )
  return num
}
