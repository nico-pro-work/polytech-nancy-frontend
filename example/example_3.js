// example_2.js
// Script de démonstration pour la page example_2.html

const colors = ['#f0f0f0', '#ffe4e1', '#e0ffff', '#fafad2', '#d3ffd3', '#f4e1ff', '#ffd8a8'];
let currentColorIndex = 0;

const counter = {
  value: 0,
  display: document.getElementById('counter-value'),
  incrementBtn: document.getElementById('btn-increment'),
  decrementBtn: document.getElementById('btn-decrement')
};

const colorBox = {
  element: document.getElementById('color-box'),
  name: document.getElementById('color-name'),
  button: document.getElementById('btn-color')
};

const fetchBlock = {
  button: document.getElementById('btn-fetch'),
  result: document.getElementById('fetch-result')
};

function applyColor() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  const c = colors[currentColorIndex];
  colorBox.element.style.backgroundColor = c;
  colorBox.name.textContent = c;
}

function updateCounter() {
  counter.display.textContent = counter.value;
}

function handleFetch() {
  fetchBlock.result.textContent = 'Résultat : Chargement...';

  // Exemple avec JSONPlaceholder (requête GET) :
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      fetchBlock.result.textContent = `Résultat : ${JSON.stringify(data, null, 2)}`;
    })
    .catch((error) => {
      fetchBlock.result.textContent = `Erreur requête : ${error.message}`;
    });
}

function init() {
  // Changement de couleur
  colorBox.button.addEventListener('click', applyColor);

  // Compteur
  counter.incrementBtn.addEventListener('click', () => {
    counter.value += 1;
    updateCounter();
  });
  counter.decrementBtn.addEventListener('click', () => {
    counter.value -= 1;
    updateCounter();
  });

  // Requête
  fetchBlock.button.addEventListener('click', handleFetch);

  // État initial
  applyColor();
  updateCounter();
  console.log("🚀 ~ init ~ updateCounter:", updateCounter)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}


console.log('Script example_3.js chargé');