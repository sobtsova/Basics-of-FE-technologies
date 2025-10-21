let n = 124;

let firstIndex = (n % 10) + 1;  
let secondIndex = firstIndex + 1;

let firstElem = document.getElementById(`el${firstIndex}`);
let secondElem = document.querySelector(`#el${secondIndex}`);

let firstToggled = false;
let secondToggled = false;

firstElem.addEventListener("click", function() {
    firstToggled = !firstToggled;
    firstElem.classList.toggle("highlight1", firstToggled);
});

secondElem.addEventListener("click", function() {
    secondToggled = !secondToggled;
    secondElem.classList.toggle("highlight2", secondToggled);
});

const imgContainer = document.getElementById("imgWrapper");
const addBtn = document.getElementById("addBtn");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const deleteBtn = document.getElementById("deleteBtn");
const cloneContainer = document.getElementById("cloneWrapper"); 

let originalImg = document.getElementById("cityImg");
let img = null; 
let scale = 1;

function updateTransform() {
    if (img) {
        img.style.transform = `scale(${scale})`;
    }
}

increaseBtn.addEventListener("click", () => {
    if (img) {
        scale += 0.1;
        updateTransform();
    }
});

decreaseBtn.addEventListener("click", () => {
    if (img) {
        scale = Math.max(0.2, scale - 0.1);
        updateTransform();
    }
});

deleteBtn.addEventListener("click", () => {
    if (img) {
        img.remove();
        img = null;
        scale = 1;
    }
});

addBtn.addEventListener("click", () => {
    if (!img) { 
        img = originalImg.cloneNode(true);
        img.id = "cityImgCopy";
        img.style.transition = "transform 0.4s ease";
        img.style.display = "block";
        scale = 1;
        cloneContainer.appendChild(img);
    }
});

