let colors = ["beige","black","green","blue","brown"]

const button = document.getElementById("btn");
const span = document.querySelector(".color");


button.addEventListener("click",()=>{
    currentColor = randomNumber();
    console.log(randomNumber())
    document.body.style.backgroundColor= colors[currentColor];
    span.textContent = colors[currentColor];    
})

const randomNumber = ()=>{
    return Math.floor(Math.random()*colors.length);
};