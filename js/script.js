$(document).ready(function () {

    // slick slider init + settings
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {breakpoint: 1400,},
            {breakpoint: 1200,},
            {breakpoint: 992,},
            {breakpoint: 768,},
            {breakpoint: 425,},
            {breakpoint: 375,},
            {breakpoint: 320,},
        ]

    });


    // JQueryUI accordion init and customizing
    let icons = {
        header: "custom-icon-caret-down",
        activeHeader: "custom-icon-caret-up"
    };

    $("#accordion").accordion({
        icons: icons,
        heightStyle: "content"
    });


    // Form verifying
    // NEED TO UPGRADE!!!!
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    })()


    // Input Mask applying for phone and zipcode inputs
    $('#phone').inputmask({"mask": "(999) 999-9999"});
    $('#zipCode').inputmask({"mask": "999999"});


    // PopUp init + customizing
    $('.product-image').magnificPopup({
        type: 'image',
        tClose: 'Закрыть (Esc)',
        image: {
            tError: 'Изображение недоступно.'
        },
        tLoading: 'Загрузка...'
    });


    // WowJS init + settings
    let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 100,
        mobile: true,
        live: true
    })
    wow.init();

    $('.btn').addClass('hvr-grow').addClass('hvr-sweep-to-right')

})
