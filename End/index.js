let button = document.querySelector(".vivesti")
let enter_button = document.querySelector(".enter-button")
let balances = document.querySelectorAll(".balance-amount")
let balance = +balances[0].innerHTML
let vivod = document.querySelector(".b-2")

button.addEventListener("click", function () {
  if (balance > 0){
      balance -= 100
      for (let i = 0; i < balances.length; i++) {
        balances[i].innerHTML = balance
      }
      vivod.innerHTML = +vivod.innerHTML - 100
  }
})

enter_button.addEventListener("click", function () {
    window.open("./Images/picture.png")
})