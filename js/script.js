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


    // Input Mask applying for phone and zipcode inputs
    $('#phone').inputmask({"mask": "(999) 999-9999"});
    $('#zipCode').inputmask({"mask": "999999"});


    // Form verifying
    // мне очень понравилась стили в дефолтной бутсраповской проверке форм, поэтому решил ее приспособить:)
    // конечно, хитрецы могут удалить аттрибуты "required" и "pattern" со страницы
    // на этот случай сделал добавление аттрибута "required" обратно к инпутам. С паттерном не стал заморачиваться -
    // на реальном кейсе тут можно все нужные аттрибуты добавить при проверке
    // Ну и на бэке проверку никто не отменял))
    const form = $('.needs-validation')

    form.on('submit', function (e) {

        // if someone try to remove "required" from page:
        form.find('input').attr('required', '');
        e.preventDefault();
        if (this.checkValidity()) {
            $('.order').hide()
            $('.order-complete').addClass('animate__animated animate__zoomIn').removeClass('d-none')

            // values for sending to backend
            console.log($('#firstName').val())
            console.log($('#lastName').val())

            let phone = Inputmask.unmask($('#phone').val(), {"mask": "(999) 999-9999"})
            console.log(phone)

            console.log($('#country').val())
            console.log($('#zipCode').val())
            console.log($('#address').val())
        }
        $(this).addClass('was-validated')
    })

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


    // New modal finding & init
    const detail = $('#details')
    const detailModal = new bootstrap.Modal(detail[0], {
        keyboard: false
    })

    // all buttons finding
    const allBtn = $('.btn')


    // adding hover to all buttons
    allBtn.addClass('hvr-grow').addClass('hvr-sweep-to-right')

    // adding event listeners for buttons
    allBtn.each(i => {
        let curBtn = allBtn.eq(i)
        switch (curBtn.text()) {
            case 'Заказать':
                curBtn.on('click', e => {
                    smoothScroll($('#make-order'))
                })
                break;
            case 'Заполнить':
                curBtn.on('click', e => {
                    detail.find('.modal-title').text('Анкета')
                    detail.find('.modal-body p').text('Текст анкеты').addClass('text-center')
                    detailModal.show()
                })
                break;
            case 'Подробнее':
                curBtn.on('click', e => {
                    e.preventDefault()
                    let card = curBtn.parents('.card-body')
                    detail.find('.modal-title').text(card.find('.card-title').text())
                    detail.find('.modal-body p').removeClass(' text-center').text(
                        `${card.find('.card-text').text()} + еще какой-то текст, 
                        полученный с бэкэнда по API`
                    )
                    detailModal.show()
                });
                break;
        }
    })
})


function smoothScroll(targetJqueryElem) {
    targetJqueryElem[0].scrollIntoView({behavior: 'smooth'});
}