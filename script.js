const displayEl = document.getElementById("input")
const numbersEl = document.querySelectorAll(".number")

// Buttons
const deleteBtnEl = document.getElementById("delete-button")
const deleteAllBtnEl = document.getElementById("delete-all-button")

const plusBtnEl = document.getElementById("plus-button")
const minusBtnEl = document.getElementById("minus-button")
const multiplicationBtnEl = document.getElementById("multiplication-button")
const divisionBtnEl = document.getElementById("division-button")

const equalsBtnEl = document.getElementById("equals-button")

let calculationJustDone = false
let a = 0
let operator = null
let b = null

function displayValue(number) {
  displayEl.setAttribute('type', 'number')
  if (displayEl.value === "0" || calculationJustDone) {
    displayEl.value = number.innerHTML
  } else {
    displayEl.value += number.innerHTML
  }
}

function cleanValue() {
  displayEl.value = displayEl.value.slice(0, -1)
  if (displayEl.value === "") {
    displayEl.value = "0"
    calculationJustDone = false
  }
}

deleteAllBtnEl.addEventListener("click", () => {
  displayEl.value = "0";
  displayEl.setAttribute('type', 'number')
  calculationJustDone = false
})


numbersEl.forEach((number) => {
  number.addEventListener("click", () => displayValue(number))
})

deleteBtnEl.addEventListener("click", () => cleanValue())

plusBtnEl.addEventListener("click", () => {
  a = parseFloat(displayEl.value)
  operator = "+"
  displayEl.value = 0
  calculationJustDone = false
})

minusBtnEl.addEventListener("click", () => {
  a = parseFloat(displayEl.value)
  operator = "-"
  displayEl.value = 0
  calculationJustDone = false
})

multiplicationBtnEl.addEventListener("click", () => {
  a = parseFloat(displayEl.value)
  operator = "*"
  displayEl.value = 0
  calculationJustDone = false
})

divisionBtnEl.addEventListener("click", () => {
  a = parseFloat(displayEl.value)
  operator = "÷"
  displayEl.value = 0
  calculationJustDone = false
})

equalsBtnEl.addEventListener("click", () => {
  b = parseFloat(displayEl.value)
  switch (operator) {
    case "+":
      displayEl.value = a + b
      calculationJustDone = true
      break;
    case "-":
      displayEl.value = a - b
      calculationJustDone = true
      break;
    case "*":
      displayEl.value = a * b
      calculationJustDone = true
      break;
    case "÷":
      if (b === 0 || b === "0") {
        displayEl.setAttribute('type', 'text')
        displayEl.value = "we don't do that here"
        calculationJustDone = true
      } else {
        displayEl.value = a / b
        calculationJustDone = true
      }
      break;
    case null:
      displayEl.value = "0"
      calculationJustDone = false
  }
})

