let c = 0;
let images = [];
let time = 10000;

for (let i = 1; i < 11; i++) {
    images.push(`images/slide${i}.jpeg`);
}

function slider() {
    document.slide.src = images[c];

    if (c < images.length - 1) {
        c++;
    }else {
        c = 0;
    }
    setTimeout("slider()", time);
}

window.onload = slider;


