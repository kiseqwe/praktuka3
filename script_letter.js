document.addEventListener("DOMContentLoaded", function () {
    // Функція для додавання анімаційних класів до тексту
    function addAnimationToText(containerId) {
      const textContainer = document.getElementById(containerId);
      const text = textContainer.innerText;
  
      // Clear the original text content
      textContainer.innerHTML = "";
  
      // Split the text into individual characters
      const characters = text.split("");
  
      // Create spans for each character with animation classes
      characters.forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add(`effect-${index % 4 + 1}`);
        textContainer.appendChild(span);
      });
    }
  
    // Додаємо анімацію для блоку з id="animated-text"
    addAnimationToText("animated-text");
  
    // Додаємо анімацію для блоку з id="animated-text-2"
    addAnimationToText("animated-text-2");
  
    // Додаємо анімацію для блоку з id="animated-text-3"
    addAnimationToText("animated-text-3");
  });
  