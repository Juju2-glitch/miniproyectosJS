let colors = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const button = document.getElementById("btn");
const span = document.querySelector(".color");

button.addEventListener("click",()=>{
    currentColor = `#`;
    for(let i = 0 ; i < 6 ; i++){
        currentColor+=colors[randomNumber()]
        console.log(currentColor);
    }
    document.body.style.backgroundColor = currentColor;
    span.textContent = currentColor

})

const randomNumber = () =>{
    return Math.floor(Math.random()*colors.length);
};