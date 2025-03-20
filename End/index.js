let button = document.querySelector(".vivesti")
let enter_button = document.querySelector(".enter-button")
let balances = document.querySelectorAll(".balance-amount")
let balance = +balances[0].innerHTML
let vivod = document.querySelector(".b-2")
let price_1 = document.querySelector(".price-1")
let price_2 = document.querySelector(".price-2")
let price_3 = document.querySelector(".price-3")
let price_4 = document.querySelector(".price-4")
let price_5 = document.querySelector(".price-5")
let price_6 = document.querySelector(".price-6")

button.addEventListener("click", function () {
  if (balance > 0){
      balance -= 100
      for (let i = 0; i < balances.length; i++) {
        balances[i].innerHTML = balance
      }
      vivod.innerHTML = +vivod.innerHTML + 100
  }
})

enter_button.addEventListener("click", function () {
    window.open("./Images/picture.jpg")
})

price_1.addEventListener("click", function () {
  window.open("./Images/no_money1.png")
})

price_2.addEventListener("click", function () {
  window.open("./Images/no_money2.png")
})

price_3.addEventListener("click", function () {
  window.open("./Images/no_money3.png")
})

price_4.addEventListener("click", function () {
  window.open("./Images/no_money4.png")
})

price_5.addEventListener("click", function () {
  window.open("./Images/no_money5.png")
})

price_6.addEventListener("click", function () {
  window.open("./Images/no_money6.png")
})