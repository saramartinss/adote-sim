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

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("modal__close-btn")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}