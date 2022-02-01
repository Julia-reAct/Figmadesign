
document.querySelector('.header__burger').addEventListener('click', function(){
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
})

new Swiper('.testimonials__body',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    }
});

