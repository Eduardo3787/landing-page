window.addEventListener("scroll", function(){
    const header = document.querySelector('.header')
    header.classList.toggle('rolagem', window.scrollY > 10)
});


window.sr = ScrollReveal({ reset: true });

sr.reveal('.products', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 3000
});
sr.reveal('.content', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 3000
});
sr.reveal('.accessor', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 3000
});
sr.reveal('.sub-titulo',
 { duration: 3000});

 const btn = document.querySelector(".button");

 btn.onmousemove = function(e){
    const x = e.pagex - btn.offsetLeft;
    const y = e.pagey - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + 'px')
    btn.style.setProperty('--eixoY', y + 'px') 
 }

