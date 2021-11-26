const age = document.getElementById("age");
const validate = document.getElementById("validate");

alert("give me your age !!");

const test_age =(age)=>{
    if(age >= 18) return "you are over 18";
    return "you are under 18";
};

validate.addEventListener("click",()=>{alert(test_age(age.value))});

