const inputEl = document.getElementById("input")
const numberEl = document.querySelectorAll(".number")


numberEl.forEach(number => {
  number.addEventListener("click", function () {
    inputEl.value += parseInt(number.innerHTML)
  })
});
