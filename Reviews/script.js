const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const perfil = document.getElementById("perfil");
const nombre = document.getElementById("nombre");
const cargo = document.getElementById("cargo");
const descripcion = document.getElementById("descripcion");



const btns = document.querySelectorAll(".btn")


let currentTarget = 0;


const showPerson = ()=>{
    const person = reviews[currentTarget];
    perfil.src = person.img;
    nombre.textContent = person.name;
    cargo.textContent = person.job;
    descripcion.textContent = person.text
}

const randomReview = ()=>{
    return Math.floor(Math.random()*reviews.length);
}

window.addEventListener("DOMContentLoaded",()=>{

    showPerson();
    console.log(randomReview());
    
})




btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        
        const style = e.currentTarget.classList;

        if(style.contains(`next`)){
            currentTarget++;
            if(currentTarget > (reviews.length-1) ){
                currentTarget = 0;
            }
            showPerson();
        }
        
        if(style.contains(`back`)){
            currentTarget--;
            if(currentTarget<0){
                currentTarget = (reviews.length-1);
            }
            showPerson();
        }

        if(style.contains(`random`)){
            currentTarget = randomReview();
            showPerson();
        }
        
    })
})