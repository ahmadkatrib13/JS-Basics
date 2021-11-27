let inputs = document.querySelectorAll("form input");
let button = document.querySelector("button");

button.onclick = () => {
    let answer = window.confirm("Do you want to reset the form?");
    if (!answer) return;
    inputs.forEach(input => {
        input.value = null;
    });
};

