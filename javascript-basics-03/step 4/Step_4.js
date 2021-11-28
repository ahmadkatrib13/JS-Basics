let password1 = document.querySelector("#password");
let password2 = document.querySelector("#confirmation");
let test = document.querySelector("button");

test.addEventListener("click",()=>{

     let match =  (password1.value == password2.value);
    if(!match) {
        password1.style.border = "1px solid red"; 
        password2.style.border = "1px solid red"; 
    }else{
        password1.style.border = ""; 
        password2.style.border = ""; 
    }
    
});