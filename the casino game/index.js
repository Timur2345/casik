// Символы слота (массив изображений или названий изображений)
const symbols = [
    "Screenshot_1.png", "Screenshot_2.png", "Screenshot_3.png", "Screenshot_4.png", "Screenshot_5.png", "Screenshot_6.png", "Screenshot_7.png", "Screenshot_8.png", "Screenshot_9.png"
  ];
  
  // Количество барабанов
  const numReels = 3;
  
  // Количество символов на барабане
  const numSymbolsPerReel = 5;
  
  // Элементы HTML
  const reels = document.querySelectorAll('.reel');
  const spinButton = document.getElementById('spin');
  const resultDisplay = document.getElementById('result');
  
  // Функция для генерации случайных результатов вращения
  function spinReels() {
    const results = [];
    for (let i = 0; i < numReels; i++) {
      const randomIndex = Math.floor(Math.random() * numSymbolsPerReel);
      results.push(symbols[Math.floor(Math.random() * symbols.length)]); // Выбираем случайный символ
    }
    return results;
  }
  
  // Функция для отображения результатов вращения
  function displayResults(results) {
    for (let i = 0; i < numReels; i++) {
      reels[i].innerHTML = `<img src="${results[i]}" alt="Символ">`;
    }
  }
  
  
  // Функция проверки выигрыша (простая проверка на одинаковые символы)
  function checkWin(results) {
    if (results[0] === results[1] && results[1] === results[2]) {
      resultDisplay.textContent = "Вы выиграли!";
      // Здесь можно добавить логику начисления выигрыша
    } else {
      resultDisplay.textContent = "Вы проиграли!";
    }
  }
  
  // Обработчик события нажатия кнопки "Вращать"
  spinButton.addEventListener('click', () => {
    const results = spinReels();
    displayResults(results);
    checkWin(results);
  });