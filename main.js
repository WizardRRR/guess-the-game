import { getMessageAttempt, getNumberRandom } from "./utils.js"

const d = document

const START_NUMBER = 100
const END_NUMBER = 150
const NUMBER_ATTEMPS = 1

// seleccionando elementos del dom
const input = d.querySelector('input')
const submit = d.querySelector('button')
const message = d.getElementById('message')
const wrappedAttempts = d.getElementById('wrappedAttemps')
const buttonReset = d.getElementById('reset')
const attempMessage = d.getElementById('attempMessage')

// añadiendo eventos
submit.addEventListener('click', handleClickSend)
buttonReset.addEventListener('click', resetGame)

let currentAttempt = 0
let attempts = []
let mysteriousNumber = getNumberRandom(START_NUMBER, END_NUMBER)
console.log(mysteriousNumber)
attempMessage.textContent = getMessageAttempt(NUMBER_ATTEMPS)

function handleClickSend() {
  if (!(validateNumber())) {
    input.value = ''
    return alert(`Alto ahi rufian, ingresa un número entre ${START_NUMBER} y ${END_NUMBER}!`)
  }

  let inputValue = parseInt(input.value)

  if (currentAttempt === NUMBER_ATTEMPS) {
    message.textContent = 'Ya has superado el limite de intentos, has perdido!'
    input.disabled = true
    return
  }

  if (inputValue === mysteriousNumber) {
    message.textContent = 'Felicidades adivinaste el número random'
    input.disabled = true
  } else if (inputValue > mysteriousNumber) {
    message.textContent = 'El número es muy grande!'
  } else if (inputValue < mysteriousNumber) {
    message.textContent = 'El número es muy bajo!'
  }

  attempts.push(inputValue)
  paintAttemps(attempts)
  input.value = ''
  ++currentAttempt
  attempMessage.textContent = `Te quedan ${NUMBER_ATTEMPS - currentAttempt} intentos!`
}

function paintAttemps(attempts) {
  const wrappedAttempts = d.getElementById('wrappedAttemps')
  let htmlAttemps = ''

  attempts.forEach(function (currentAttempt) {
    htmlAttemps += `<span>${currentAttempt}</span>`
  })

  wrappedAttempts.innerHTML = htmlAttemps
}


function resetGame() {
  attempts = []
  input.value = ''
  wrappedAttempts.innerHTML = ''
  currentAttempt = 0
  attempMessage.textContent = `Te quedan ${NUMBER_ATTEMPS - currentAttempt} intentos!`
  message.textContent = ''
  input.disabled = false
}

function validateNumber() {
  let inputValue = parseInt(input.value)
  const isValid =
    inputValue <= END_NUMBER &&
    inputValue >= START_NUMBER &&
    !isNaN(inputValue)
  return isValid
}