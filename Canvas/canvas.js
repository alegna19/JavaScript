window.addEventListener('load', () => {
    let circleCanvas = document.getElementById('circle');
    let ctx = circleCanvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(150,150,100,0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle="#f99";
    ctx.fill();
})