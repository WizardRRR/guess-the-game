export function getNumberRandom(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

export function getMessageAttempt(attemp) {
  return `Te quedan ${attemp} intentos`
}