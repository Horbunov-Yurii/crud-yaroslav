//  <li class="item">
//         <img class="pic" src="" alt="">
//         <h2 class="title"></h2>
//         <p class="text"></p>
//         <p class="desk"></p>
//         <p class="price"></p>
//     </li> 

const openBtn = document.querySelector(".btn");
const listRef = document.querySelector(".list");
const backdropRef = document.querySelector(".backdrop");
const formRef = document.querySelector(".form");


function openModal(){
   backdropRef.style.display = "flex" 
}

function closeModal(){
   backdropRef.style.display = "none" 
}


openBtn.addEventListener("click", ()=>{
    openModal()
})

formRef.addEventListener("submit", (evt)=>{
    evt.preventDefault()

    const name = evt.currentTarget.elements.name.value
    const type = evt.currentTarget.elements.type.value
    const desk = evt.currentTarget.elements.desk.value;
    const url = evt.currentTarget.elements.url.value;
    const price = evt.currentTarget.elements.price.value;

    const iceData = {
        name:name,
        type:type,
        desk:desk,
        url:url,
        price:price,
    }

console.log(iceData);

evt.currentTarget.reset()
closeModal()
  
})


