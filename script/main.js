let form = $('.contato__form');

form.validate({
    errorElement: 'span',
    rules: {
        name: {
            required: true,
            minlength: 6
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            minlength: 10
        },
        text: {
            required: true,
        }
    },
    messages: {
        name: {
            required: 'Por favor, digite seu nome completo',
            minlength: 'Por favor, digite seu nome completo'
        },
        email: {
            required: 'Por favor, digite seu email',
            email: 'Por favor, digite um e-mail válido'
        },
        phone: {
            required: 'Por favor, digite seu telefone para contato',
            minlength: 'Por favor, digite seu número para contato com ddd'
        },
        text: {
            required: 'Por favor, digite sua mensagem'
        }
    }
})

$(function () { 
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        arrows: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

})

let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName('modal__close-btn')[0];
let iframe = document.getElementById('iframe');

btn.onclick = function() {
    modal.style.display = "block";
    iframe.src = 'https://www.youtube.com/embed/wtuQY8jaZ0U'
}
span.onclick = function() {
    modal.style.display = "none";
    iframe.src = '';
}
window.onclick = function(event) {
    if (event.target == modal) {
        iframe.src = '';
        modal.style.display = "none";
    }
}