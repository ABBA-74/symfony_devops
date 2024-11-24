const sliders = document.querySelectorAll('.section-3 .wrapper-illustration-xl .wrapper-img')

let i=0;
setInterval(() => {
    sliders.forEach(el => el.classList.remove('active'))
    sliders[i].classList.add('active')
    i++;
    i = i >= sliders.length ? 0 : i;
    console.log(i)
}, 3000);