alert("give me your shoe size and your birth year");

const shoe_size = document.getElementById("shoe_size");
const year = document.getElementById("year");
const validate = document.getElementById("validate");

function magicFunction(shoe_size,birth_year){
  alert (((shoe_size * 2 + 5) * 50 - birth_year +1766) || "incorrect values");
};


validate.addEventListener("click",()=>{magicFunction(shoe_size.value,year.value)});