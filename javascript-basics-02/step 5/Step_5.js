let images = document.querySelectorAll("img");
function changeimg(e, i) {
    e.target.src = `images/image${i + 1}_2.jpg`;
}

images.forEach((img, key) => {
    img.addEventListener("mouseover", (e) => { changeimg(e, key); }
    )
});


