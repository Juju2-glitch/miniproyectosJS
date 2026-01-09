let contador = 0;

const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value")


btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const botonClick = e.currentTarget.classList;

        if(botonClick.contains(`aumentar`)){
            contador++;
        } else if (botonClick.contains(`quitar`)){
            contador--;
        } else if(botonClick.contains(`resetear`)){
            contador = 0; 
        }

        if(contador>0){
            value.style.color = "green";
        }
        else if(contador<0){
            value.style.color = "red";
        }
        else if(contador === 0){
            value.style.color = "black"
        }
        value.textContent = contador
    })
})