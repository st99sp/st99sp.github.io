const premios = [
    { name: "Premio 1", img: "img/premio1.jpg" },
    { name: "Premio 2", img: "img/premio2.jpg" },
    { name: "Premio 3", img: "img/premio3.jpg" },
    { name: "Premio 4", img: "img/premio4.jpg" },
    { name: "Premio 5", img: "img/premio5.jpg" },
    { name: "Premio 6", img: "img/premio6.jpg" },
    { name: "Premio 7", img: "img/premio7.jpg" },
    { name: "Premio 8", img: "img/premio8.jpg" }
];

function checkSanto() {
    const santoDate = document.getElementById('santo-date').value;
    const date = new Date(santoDate);
    if (date.getMonth() === 6 && date.getDate() === 26) { // Mes 6 = Julio
        document.getElementById('felicitacion').classList.remove('hidden');
        renderRuleta();
    } else {
        alert("Hoy no es el santo de Ana.");
    }
}

function renderRuleta() {
    const canvas = document.getElementById('ruleta');
    const ctx = canvas.getContext('2d');
    const numPremios = premios.length;
    const angle = (2 * Math.PI) / numPremios;

    premios.forEach((premio, index) => {
        const startAngle = index * angle;
        const endAngle = startAngle + angle;

        // Dibujar el sector
        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 250, startAngle, endAngle);
        ctx.fillStyle = `hsl(${(index / numPremios) * 360}, 100%, 50%)`;
        ctx.fill();

        // Dibujar la imagen
        const img = new Image();
        img.src = premio.img;
        img.onload = () => {
            const x = 250 + 150 * Math.cos(startAngle + angle / 2);
            const y = 250 + 150 * Math.sin(startAngle + angle / 2);
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(startAngle + angle / 2 + Math.PI / 2);
            ctx.drawImage(img, -50, -50, 100, 100);
            ctx.restore();
        };
    });
}

function girarRuleta() {
    const canvas = document.getElementById('ruleta');
    const numPremios = premios.length;
    const angle = (2 * Math.PI) / numPremios;

    let fixedIndex = 4; // Índice del Premio 5
    let rotateAngle = fixedIndex * angle + (angle / 2);

    canvas.style.transition = 'transform 4s ease-out';
    canvas.style.transform = `rotate(${rotateAngle + 360 * 3}deg)`;

    setTimeout(() => {
        alert(`¡Felicidades! Has ganado: ${premios[fixedIndex].name} Vaya usted al maletero de stephan`);
        highlightPrize(fixedIndex);
    }, 4000);
    document.getElementById('rule').setAttribute("hidden",true);

}

function highlightPrize(index) {
    const canvas = document.getElementById('ruleta');
    const ctx = canvas.getContext('2d');
    const numPremios = premios.length;
    const angle = (2 * Math.PI) / numPremios;

    const startAngle = index * angle;
    const endAngle = startAngle + angle;

    // Dibujar el resalte
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.arc(250, 250, 250, startAngle, endAngle);
    ctx.lineTo(250, 250);
    ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
    ctx.fill();
}
