const firstNumber      = document.getElementById("first_number");
const secondNumber   = document.getElementById("second_number");
const validate      = document.getElementById("validate");

validate.addEventListener("click",function(){
    // e.preventDefault();
    let firstValue = firstNumber.value || 0;
    let secondValue = secondNumber.value || 0;
    alert("the result  of multiplication of "+firstValue+" by "+secondValue+" = "+firstValue*secondValue);
});