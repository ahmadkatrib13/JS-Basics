const renderDiv = document.querySelector("div#render_div");
const input = document.querySelector("input#name");

input.addEventListener("change",()=>{
    console.log(input.value);
    renderDiv.innerHTML = "Your name is " + input.value;
});