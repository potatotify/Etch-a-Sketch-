const container = document.querySelector(".container");
let size = 16;
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.height = `${650 / size}px`;
        grid.style.width = `${650 / size}px`;
        container.appendChild(grid);
    }

    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'black';
        });
    });
}
let x=0;
document.querySelector('#white').addEventListener('click',()=>{
    x=1;
    color_change(x);
})
document.querySelector('#rainbow').addEventListener('click',()=>{
    x=2;
    color_change(x);
})
document.querySelector('#black').addEventListener('click',()=>{
    x=0;
    color_change(x);
})
function color_change(x) {
    const grids=document .querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => {
           
            if(x==1){
                grid.style.backgroundColor='white';
            }
            else if(x==2){
                const randomColor = getRandomRGB();
                grid.style.backgroundColor = randomColor;
            }
            else{
                grid.style.backgroundColor='black';
            }
        });
    });
}


createGrid(size);
erase=document.querySelector("#reset").addEventListener('click',()=>{
    container.innerHTML='';
    createGrid(size);
})


document.querySelector("#resize").addEventListener('click', () => {
    const newSize = parseInt(prompt("Enter a number between 2 and 100:"), 10);
    
    if (newSize >= 2 && newSize <= 100) {
        size = newSize;
        createGrid(size);
    } else {
        alert("Please enter a number between 2 and 100.");
    }
});
