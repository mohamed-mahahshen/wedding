const container = document.getElementById("particle-container");

function createParticle(){

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random()*100 + "%";

    particle.style.bottom = "-20px";

    const size = Math.random()*6 + 4;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    const duration = Math.random()*5 + 6;

    particle.style.animationDuration = duration + "s";

    container.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },duration*1000);

}

setInterval(createParticle,250);

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML =
        `
<img src="assets/icons/leaf.svg">
`;

    petal.style.left = Math.random() * 100 + "%";

    petal.style.top = "-50px";

    petal.style.fontSize = (Math.random() * 18 + 18) + "px";

    petal.style.animationDuration =
        (Math.random() * 5 + 8) + "s";

    container.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 13000);

}

setInterval(createPetal, 1200);