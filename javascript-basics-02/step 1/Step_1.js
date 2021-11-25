const img = document.querySelector("img");

img.onmouseover = ()=>{
    img.src="images/image1_2.jpg";
};

img.onmouseout = ()=>{
    img.src="images/image1.jpg";
};
