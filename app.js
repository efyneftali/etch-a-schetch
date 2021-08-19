// cache the DOM
const container_div = document.getElementById("container");
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const myColor = document.getElementById("my-color");
const color_btn =  document.getElementById("color-mode");
const rainbow_btn =  document.getElementById("rainbow-mode");
const erase_btn =  document.getElementById("erase-mode");
const clear_btn =  document.getElementById("clear-mode");

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

// default is color mode, and defaul == color black
colorMode = () => {
    const grid = document.querySelectorAll(".grid-item");
    color_btn.addEventListener('click', ()=>{
        grid.forEach(gridItem => gridItem.addEventListener('mouseover',()=>{
            gridItem.style.background = "black"
        }))
        color_btn.style.background = "pink"
    })


}

// Rainbow mode, generate random color, apply it to five when you hover over it
rainbowMode = () => {
    const grid = document.querySelectorAll(".grid-item");
    // const rndmColor = '#'+Math.floor(Math.random()*16777215).toString(16)
    rainbow_btn.addEventListener('click', ()=>{
        grid.forEach(gridItem => gridItem.addEventListener('mouseover',()=>{
            gridItem.style.background = `${"#"+Math.floor(Math.random()*16777215).toString(16)}`
        }))
        rainbow_btn.style.background = "yellow"
    })
} 

//eraser make div background color white again

eraser = () => {
    const grid = document.querySelectorAll(".grid-item");
    erase_btn.addEventListener('click', ()=>{
        grid.forEach(gridItem => gridItem.addEventListener('mouseover',()=>{
            gridItem.style.background = "white"
        }))
        erase_btn.style.background = "purple"
    })

}


//clear: clears all dives 
clear = () => {
    const grid = document.querySelectorAll(".grid-item");
    clear_btn.addEventListener('click', () =>{ 
        grid.forEach(gridItem => gridItem.style.background = "white")
        clear_btn.style.background = "green";
    })
}


makeGrid(4,4);
colorMode();
rainbowMode();
eraser();
clear();




