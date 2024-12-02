(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Header slider
    $('.header-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Product Slider 4 Column
    $('.product-slider-4').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    // Product Slider 3 Column
    $('.product-slider-3').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    // Product Detail Slider
    $('.product-slider-single').slick({
        infinite: true,
        autoplay: true,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-slider-single-nav'
    });
    $('.product-slider-single-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.product-slider-single'
    });
    
    
    // Brand Slider
    $('.brand-slider').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    // Widget slider
    $('.sidebar-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Quantity
    $('.qty button').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    
    
    // Shipping address show hide
    $('.checkout #shipto').change(function () {
        if($(this).is(':checked')) {
            $('.checkout .shipping-address').slideDown();
        } else {
            $('.checkout .shipping-address').slideUp();
        }
    });
    
    
    // Payment methods show hide
    $('.checkout .payment-method .custom-control-input').change(function () {
        if ($(this).prop('checked')) {
            var checkbox_id = $(this).attr('id');
            $('.checkout .payment-method .payment-content').slideUp();
            $('#' + checkbox_id + '-show').slideDown();
        }
    });
})(jQuery);

//Parâmetros padrões
function getDefaultParams() {

    do {
        // Gerar um valor aleatório com 3 caracteres (letras e números)
        valor = Math.random().toString(36).substring(2, 5); // 36 base (alfabético + numérico) e pega 3 caracteres após o ponto decimal
    } while (valoresGerados.has(valor)); // Verifica se o valor já foi gerado

    // Adiciona o valor gerado ao conjunto
    valoresGerados.add(valor);

    window.data = window.dataLayer || [];
                window.data.push({
                    user_logged:  true,
                    user_id: valor      
                });
}

//Função do page view 
function getPageView() {
    window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'page_view',
            page_title:  document.body.getAttribute('gtmName'),
            page_location: document.body.getAttribute('gtmLocation')       
        });
}

// Conjunto para armazenar os valores únicos gerados
const valoresGerados = new Set();

// Função do evento Sign Up
function getSignUp() {
    let valor;
    
    do {
        // Gerar um valor aleatório com 3 caracteres (letras e números)
        valor = Math.random().toString(36).substring(2, 5); // 36 base (alfabético + numérico) e pega 3 caracteres após o ponto decimal
    } while (valoresGerados.has(valor)); // Verifica se o valor já foi gerado

    // Adiciona o valor gerado ao conjunto
    valoresGerados.add(valor);

    window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'sign_up',
            user_id: valor,       
        });
}

// Função do evento Log in
function getLogIn() {
    let valor;
    
    do {
        // Gerar um valor aleatório com 3 caracteres (letras e números)
        valor = Math.random().toString(36).substring(2, 5); // 36 base (alfabético + numérico) e pega 3 caracteres após o ponto decimal
    } while (valoresGerados.has(valor)); // Verifica se o valor já foi gerado

    // Adiciona o valor gerado ao conjunto
    valoresGerados.add(valor);

    window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'login',
            user_id: valor,       
        });
}

// Função do evento Select Content
function getSelectContent(element) {

    const gtmEvAction = element.getAttribute('gtmEvAction');
    const gtmEvLabel = element.getAttribute('gtmEvLabel');

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'select_content',
        ev_action:  gtmEvAction,
        ev_label: gtmEvLabel     
    });
}

//Função para pegar 

// Função do evento view Item List
function getViewItemList() {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "view_item_list",
        item_list_id: "1",
        item_list_name: "clothes",
        ecommerce: {
            items: [{
                    item_id: "sku_12345",
                    item_name: "product_1",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:black"
                },
                {
                    item_id: "sku_12346",
                    item_name: "product_2",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue"
                },
                {
                    item_id: "sku_12347",
                    item_name: "product_3",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue"
                },
                {
                    item_id: "sku_12348",
                    item_name: "product_4",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:red"
                },
                {
                    item_id: "sku_12349",
                    item_name: "product_5",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue"
                },
                {
                    item_id: "sku_12350",
                    item_name: "product_6",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:gray"
                },
                {
                    item_id: "sku_12351",
                    item_name: "product_7",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:black"
                },
                {
                    item_id: "sku_12352",
                    item_name: "product_8",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:black"
                },
                {
                    item_id: "sku_12353",
                    item_name: "product_9",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:gray"
                },
            ]
        }
    });
}

function getViewItemListWishlist() {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "view_item_list",
        item_list_id: "1234321",
        item_list_name: "wishlist",
        ecommerce: {
            items: [{
                    item_id: "sku_12345",
                    item_name: "product_1",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:black"
                },
                {
                    item_id: "sku_12346",
                    item_name: "product_2",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue"
                },
                {
                    item_id: "sku_12347",
                    item_name: "product_3",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue"
                },
                {
                    item_id: "sku_12348",
                    item_name: "product_4",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:red"
                },
                {
                    item_id: "sku_12349",
                    item_name: "product_5",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue"
                }
            ]
        }
    });
}

//Função do evento view Item
function getViewItem() {
    let name = document.getElementById('productName').querySelector('h2').textContent;

    window.dataLayer.push({ ecommerce: null });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'view_item',
        currency: 'BRL',
        value: parseFloat(document.body.querySelector('.price p').textContent.trim().split(' ')[0].replace('$', '')),
        ecommerce: {
            items: [{
                    item_id: "sku_12345",
                    item_name: name,
                    item_category: "clothes",
                    price: parseFloat(document.body.querySelector('.price p').textContent.trim().split(' ')[0].replace('$', '')),
                    quantity: 1,
                    item_variant: "color:black:s"
                }
            ]
        }      
    });
}

//Função do evento add to cart
function getAddCart() {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'add_to_cart',
        currency: 'BRL',
        value: 99.00,
        ecommerce: {
            items: [{
                    item_id: "sku_12345",
                    item_name: "Product name",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:black:s"
                }
            ]
        }      
    });
}

//Função do evento remove from cart
function getRemoveCart() {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'remove_from_cart',
        currency: 'BRL',
        value: 99.00,
        ecommerce: {
            items: [{
                    item_id: "sku_12345",
                    item_name: "Product name",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:black:s"
                }
            ]
        }      
    });
}

//Função do evento view cart
function getViewCart() {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "view_cart",
        currency: "BRL",
        value: 495.00,
        ecommerce: {
            items: [{
                    item_id: "sku_12345",
                    item_name: "product_1",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:black:s"
                },
                {
                    item_id: "sku_12346",
                    item_name: "product_2",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue:xl"
                },
                {
                    item_id: "sku_12347",
                    item_name: "product_3",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue:l"
                },
                {
                    item_id: "sku_12348",
                    item_name: "product_4",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:red:m"
                },
                {
                    item_id: "sku_12349",
                    item_name: "product_5",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue:s"
                }
            ]
        }
    });
}

//Função do evento checkout
function getCheckout() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
        event: "begin_checkout",
        currency: "BRL",
        value: 495.00,
        payment_type: "Paypal",
        ecommerce: {
            items: [{
                    item_id: "sku_12345",
                    item_name: "product_1",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:black:s"
                },
                {
                    item_id: "sku_12346",
                    item_name: "product_2",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue:xl"
                },
                {
                    item_id: "sku_12347",
                    item_name: "product_3",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue:l"
                },
                {
                    item_id: "sku_12348",
                    item_name: "product_4",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:red:m"
                },
                {
                    item_id: "sku_12349",
                    item_name: "product_5",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue:s"
                }
            ]
        }
    });
}

//Função do evento add payment info
function getAddPaymentInfo(paymentType) {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'add_payment_info',
        ev_action: 'click:payment_info:sucesso',
        ev_label: 'Enviado com sucesso',
        currency: 'BRL',
        value: 99.00,
        payment_type: paymentType,
        ecommerce: {
            items: [{
                    item_id: "sku_12345",
                    item_name: "Product name",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:black:s"
                }
            ]
        }      
    });
}

let payment;

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os inputs do tipo radio dentro da classe payment-methods
    const paymentInputs = document.querySelectorAll('.payment-methods .custom-control-input');
    
    // Adiciona um evento de clique para cada input
    paymentInputs.forEach(function(input) {
        input.addEventListener('click', function() {
            
            // Captura o valor do atributo gtmName
            let paymentType = input.getAttribute('gtmName');
            
            // Verifica se o atributo gtmName está presente
            if (paymentType) {
                payment = paymentType
            } else {
                console.error('Atributo gtmName não encontrado para este input.');
            }
        });
    });
});



//Função do evento add shipping info
function getAddShippingInfo() {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'add_shipping_info',
        ev_action: 'click:shipping_info:sucesso',
        ev_label: 'Enviado com sucesso',
        currency: 'BRL',
        value: 495.00,
        ecommerce: {
            items: [{
                    item_id: "sku_12345",
                    item_name: "product_1",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:black:s"
                },
                {
                    item_id: "sku_12346",
                    item_name: "product_2",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue:xl"
                },
                {
                    item_id: "sku_12347",
                    item_name: "product_3",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue:l"
                },
                {
                    item_id: "sku_12348",
                    item_name: "product_4",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:red:m"
                },
                {
                    item_id: "sku_12349",
                    item_name: "product_5",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue:s"
                }
            ]
        }
    });
}

//Função do evento purchase
function getPurchase(){
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'purchase',
        currency: 'BRL',
        value: 495.00,
        transaction_id: Math.floor(Math.random() * 100).toString(),
        shipping: Math.floor(Math.random() * 100),
        ecommerce: {
            items: [{
                    item_id: "sku_12345",
                    item_name: "product_1",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:black:s"
                },
                {
                    item_id: "sku_12346",
                    item_name: "product_2",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue:xl"
                },
                {
                    item_id: "sku_12347",
                    item_name: "product_3",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue:l"
                },
                {
                    item_id: "sku_12348",
                    item_name: "product_4",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:red:m"
                },
                {
                    item_id: "sku_12349",
                    item_name: "product_5",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: "color:blue:s"
                }
            ]
        }
    });
}


const btnOrder = document.getElementById('btn-order');
const checkbox = document.getElementById('newaccount');

btnOrder.addEventListener('click', function(event) {
    
    getAddPaymentInfo(payment);
    getAddShippingInfo();

    if(payment != undefined){
        getPurchase();
    }

    if(checkbox.checked){
        getSignUp();
    }
});

//Função do evento pesquisa (GERAL)
function getSearch() {
    var searchTerm = document.getElementById('searchInput').value;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'search',
        search_term:  searchTerm,
        search_type: '',     
        search_price: ''
    });

}
//Função do evento pesquisa (GERAL)
function getSearch2() {
    var searchTerm = document.getElementById("searchInput2").value;
    
    var shortBy = document.querySelector('.product-short .dropdown-menu .active')?.textContent || '';
    
    var priceRange = document.querySelector('.product-price-range .dropdown-menu .active')?.textContent || '';

    if (priceRange !== '') {
        // Remove o símbolo '$' e divide o valor em duas partes (min e max)
        var priceRangeCleaned = priceRange.replace('$', '').split(' to ');
    
        // Extrai o primeiro número (minPrice) e converte para Number
        var minPrice = Number(priceRangeCleaned[0]);
    
    } 

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'search',
        search_term:  searchTerm,
        search_type: shortBy,     
        search_price: minPrice
    });
}

function getSelectPromotion(){
    var coupon = document.getElementById("coupon").value;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'select_promotion',
        promotion_name:  coupon,
        promotion_id: 'CPN123',     
    });
}

function getAddWishlist(){
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'add_to_wishlist',
        currency: 'BRL',
        value: 99.00,    
        ecommerce: {
            items: [{
                    item_id: "sku_12345",
                    item_name: "product_1",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: ""
                }
            ]
        } 
    });
}

function getRemoveWishlist(){
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'remove_from_wishlist',
        currency: 'BRL',
        value: 99.00,    
        ecommerce: {
            items: [{
                    item_id: "sku_12345",
                    item_name: "product_1",
                    item_category: "clothes",
                    price: 99.00,
                    quantity: 1,
                    item_variant: ""
                }
            ]
        } 
    });
}