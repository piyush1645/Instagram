const images = document.querySelectorAll('.animation');
let currentindex = 0;
const interval = 3000;

function animateimages(){
    images[currentindex].classList.remove('visible');
    currentindex = (currentindex+1)%images.length;
    images[currentindex].classList.add('visible');
}

setInterval(animateimages,interval);