    let colors = document.querySelectorAll(".color");
    let text = document.querySelector("#text");
    function changecolor(e){
        if(e.target.classList.contains("blue")) text.style.color="blue";
        if(e.target.classList.contains("red")) text.style.color="red";
        if(e.target.classList.contains("green")) text.style.color="green";

    }
    colors.forEach(color => {
        color.addEventListener("click",(e)=>{changecolor(e);})
    });