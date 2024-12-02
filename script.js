let array = [];
const arrayLength = 50;
const container = document.getElementById("array-container");
const startButton = document.getElementById("startButton");
const randomizeButton = document.getElementById("randomizeButton");
const algorithmSelect = document.getElementById("algorithmSelect");

function initializeArray() {
  array = [];
  for (let i = 0; i < arrayLength; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  renderArray();
}

function renderArray() {
  container.innerHTML = "";
  array.forEach((value) => {
    const bar = document.createElement("div");
    bar.style.height = `${value * 3}px`;
    bar.classList.add("bar");
    container.appendChild(bar);
  });
}

async function bubbleSort() {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        renderArray();
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
  }
}

async function selectionSort() {
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
      renderArray();
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
}

async function insertionSort() {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
      renderArray();
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    array[j + 1] = key;
    renderArray();
  }
}

startButton.addEventListener("click", () => {
  const algorithm = algorithmSelect.value;
  if (algorithm === "bubbleSort") {
    bubbleSort();
  } else if (algorithm === "selectionSort") {
    selectionSort();
  } else if (algorithm === "insertionSort") {
    insertionSort();
  }
});

randomizeButton.addEventListener("click", initializeArray);

initializeArray();
