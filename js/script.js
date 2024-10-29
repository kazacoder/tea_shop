$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1400,
             },
            {
                breakpoint: 1200,
            },
            {
                breakpoint: 992,
              },
            {
                breakpoint: 768,
              },
            {
                breakpoint: 425,
              },
            {
                breakpoint: 375,
              },
            {
                breakpoint: 320,
              },
         ]

    });
    var icons = {
        header: "custom-icon-caret-down",
        activeHeader: "custom-icon-caret-up"
    };
    $( "#accordion" ).accordion({
        icons: icons,
        heightStyle: "content"

    });
    $( "#toggle" ).button().on( "click", function() {
        if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
            $( "#accordion" ).accordion( "option", "icons", null );
        } else {
            $( "#accordion" ).accordion( "option", "icons", icons );
        }
    });

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



    $('#phone').inputmask({"mask": "(999) 999-9999"});
    $('#zipCode').inputmask({"mask": "999999"});


    $( "#accordion2" ).accordion({
        heightStyle: "content"
    });

    $('.product-image').magnificPopup({
        type: 'image',
        tClose: 'Закрыть (Esc)',
        image: {
            tError: 'Изображение недоступно.'
        },
        tLoading: 'Загрузка...'
    });

})
