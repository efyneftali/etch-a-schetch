// cache the DOM
const container_div = document.getElementById("container");
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const myColor = document.getElementById("my-color");

const defaultColor = myColor.defaultValue;
const currentColor = myColor.value;

console.log(defaultColor);
console.log(currentColor);

output.innerHTML = `${slider.value} x ${slider.value}`;
slider.oninput = function() {
    output.innerHTML = `${this.value} x ${this.value}`;
}

makeGrid = (rows, cols) => {
    container_div.style.setProperty('--grid-rows', rows);
    container_div.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        // cell.innerText = (c + 1);
        container_div.appendChild(cell).className = "grid-item";
  };
} 

makeGrid(15,15);

