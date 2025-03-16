document.addEventListener('DOMContentLoaded', () => {
  const reels = document.querySelectorAll('.reel');
  const spinButton = document.getElementById('spin');
  const resultDiv = document.getElementById('result');

  const symbols = ['🍒', '🍋', '🍊', '🍇', '🍉', '🍎', '🍓'];

  spinButton.addEventListener('click', () => {
      resultDiv.textContent = '';
      spinButton.disabled = true;

      reels.forEach((reel, index) => {
          const randomSymbols = Array.from({ length: 20 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
          const delay = index * 200; // Задержка для каждого барабана

          setTimeout(() => {
              reel.textContent = randomSymbols.join('');
              reel.style.transition = 'transform 2s ease-out';
              reel.style.transform = `translateY(-${100 * (randomSymbols.length - 1)}px)`;

              setTimeout(() => {
                  reel.style.transition = 'none';
                  reel.style.transform = 'translateY(0)';
                  reel.textContent = randomSymbols[randomSymbols.length - 1];

                  if (index === reels.length - 1) {
                      spinButton.disabled = false;
                      checkResult();
                  }
              }, 2000);
          }, delay);
      });
  });

  function checkResult() {
      const results = Array.from(reels).map(reel => reel.textContent);
      if (results.every((val, i, arr) => val === arr[0])) {
          resultDiv.textContent = 'Победа!';
      } else {
          resultDiv.textContent = 'Попробуйте еще раз!';
      }
  }
});

let total_button = document.querySelector(".total-button")
total_button.addEventListener("click", function () {
    window.location.href = "../End/index.html"
})

let enter_button = document.querySelector(".enter-button")
enter_button.addEventListener("click", function () {
    window.open("./Images/picture.png")
})