let images = document.querySelectorAll("img");

images.forEach((img,key)=>{
    img.onmouseover = function(){img.src = `images/image${key+1}_2.jpg`; };
    img.onmouseout = function(){img.src = `images/image${key+1}.jpg`;};
});


