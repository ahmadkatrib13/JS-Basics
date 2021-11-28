let showButton = document.querySelector("#show");
let hideButton = document.querySelector("#hide");
let texte = document.querySelector("#texte");

function render(id){
    texte.style.display =  (id == "show" ?  "block":"none");
}

showButton.addEventListener("click",(e)=>{render(e.target.id)});
hideButton.addEventListener("click",(e)=>{render(e.target.id)}); 