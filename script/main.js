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

let videoModal = document.getElementById('myModal');
let viewAllModal = document.getElementById('viewAllModal');
let btnVideo = document.getElementById('myBtn');
let viewAllBtn = document.getElementById('viewAllBtn');
let spanVideo = document.getElementsByClassName('modal__close-btn')[0];
let spanViewAll = document.getElementsByClassName('modal__close-btn')[1];
let iframe = document.getElementById('iframe');

btnVideo.onclick = function() {
    iframe.src = 'https://www.youtube.com/embed/wtuQY8jaZ0U';
    videoModal.style.display = "block";
}
viewAllBtn.onclick = function() {
    viewAllModal.style.display = "block";
}
spanVideo.onclick = function() {
    iframe.src = '';
    videoModal.style.display = "none";
}
spanViewAll.onclick = function() {
    viewAllModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == videoModal || event.target == viewAllModal) {
        iframe.src = '';
        videoModal.style.display = "none";
        viewAllModal.style.display = "none";
    }
}


$(".contato__form").submit(function(e) {
    e.preventDefault();
    console.log()
    var $form = $(this);
    $.ajax({
        type: 'POST',
        url: this.getAttribute('action'),
        data: $form.serialize(),
        success: function() {
            alert('Foi')
        }
    });
  });
  