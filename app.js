let selector = (cssSelector) =>{
return document.querySelector(cssSelector)
}

let decBtn = selector('[value="DECREASE"]');
let incBtn = selector('[value = "INCREASE"]');
let h2 = selector('h2');

let count = 0;

let updateDisplay = () => {
    h2.textContent = count;
}


decBtn.addEventListener('click', () =>{
    count--;
    updateDisplay();
   
})


incBtn.addEventListener('click', () =>{
    count++;
    updateDisplay();
   
})



