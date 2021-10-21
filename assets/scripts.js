
function padLeft(text) {
    var str = "" + text
    var pad = "00"
    var ans = pad.substring(0, pad.length - str.length) + str;
    return ans;
}

var owl;
function initOwlCustom(e) {
    var total = e.item.count;
    var current = (e.item.index + 1) - e.relatedTarget._clones.length / 2;
    var allItems = e.item.count;
    if (current > allItems || current == 0) {
        current = allItems - (current % allItems);
    }
    var index = current;

    $(".pagination .current").html(padLeft(index));
    $(".pagination .total").html(padLeft(total));
    var code = "";

    for (var i = 0; i < total; i++) {
        if (i == index - 1) {
            code += '<a href="javascript:;" class="dot active" data-index="' + i + '"></a>';
        } else {
            code += '<a href="javascript:;" class="dot" data-index="' + i + '"></a>';
        }
    }

    $(".navigation .dots .wrapper").html(code);

    $(".navigation .dots .wrapper a").click(function (e) {
        var index = e.currentTarget.getAttribute("data-index");
        owl.trigger("to.owl.carousel", [index]);
    });
}

$(document).ready(function () {

    // Main slider
    if ($(".main-slider").length) {
        owl = $('.main-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                }
            },
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            onInitialized: function (e) {
                initOwlCustom(e);
            }
        });

    }

    if ($(".service-button").length) {
        $(".service-button").click(function () {
            if ($(".services").hasClass("open")) {
                $(".services").removeClass("open");
                $(".service-button").removeClass("open");
            } else {
                if ($(".search-area").hasClass("open")) {
                    $(".search-area").removeClass("open");
                    $(".search-button").removeClass("open");
                }
                $(".services").addClass("open");
                $(".service-button").addClass("open");
            }
        })
    }

    if ($(".search-button").length) {
        $(".search-button").click(function () {
            if ($(".search-area").hasClass("open")) {
                $(".search-area").removeClass("open");
                $(".search-button").removeClass("open");
            } else {
                if ($(".services").hasClass("open")) {
                    $(".services").removeClass("open");
                    $(".service-button").removeClass("open");
                }
                $(".search-area").addClass("open");
                $(".search-button").addClass("open");
            }
        })
    }

    if ($('.navigation').length) {
        $(".navigation .next").click(function () {
            owl.trigger('next.owl.carousel');
        });
        $(".navigation .prev").click(function () {
            owl.trigger('prev.owl.carousel');
        });

        owl.on("changed.owl.carousel", function (e) {
            initOwlCustom(e);
        })


    }

    var haberlerOwl;
    // Haberler slider
    if ($(".haberler-slider").length) {
        haberlerOwl = $('.haberler-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

    }


    // Insurances Slider Init
    if ($('.company-slider').length) {
        var swiper = new Swiper('.company-slider', {
            pagination: '.sigortalar .swiper-pagination',
            paginationClickable: true,
            direction: 'vertical',
            slidesPerView: 4,
            loop: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });
    }

    var saglikOwl;
    // Haberler slider
    if ($(".saglik-slider").length) {
        saglikOwl = $('.saglik-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });

    }


    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $(window).resize(function(){
        $('.main-slider .item .image').css("height", ($(window).width() * 0.5078125) + "px");
        if($(window).width() <= 1700){
            $('.main-slider .item .image').css("height", ($(window).width() * 0.5408125) + "px");
        }
        if($(window).width() <= 1366){
            $('.main-slider .item .image').css("height", ($(window).width() * 0.5408125) + "px");
        }
        if($(window).width() <= 1200){
            $('.main-slider .item .image').css("height", ($(window).width() * 0.5508125) + "px");
        }
        if($(window).width() <= 991){
            $('.main-slider .item .image').css("height", ($(window).width() * 0.4508125) + "px");
        }

        $('.main-header').css("height", ($(window).width() * 0.3078125) + "px");
        if($(window).width() <= 1700){
            $('.main-header').css("height", ($(window).width() * 0.3608125) + "px");
        }
        if($(window).width() <= 1366){
            $('.main-header').css("height", ($(window).width() * 0.3708125) + "px");
        }
        if($(window).width() <= 1200){
            $('.main-header').css("height", ($(window).width() * 0.4508125) + "px");
        }
        if($(window).width() <= 991){
            $('.main-header').css("height", ($(window).width() * 0.5908125) + "px");
        }
    });

    $(".navbar-toggler").click(function(){
        if($('.menu').hasClass("open")){
            $('.menu').removeClass("open");
        }else{
            $('.menu').addClass("open");
        }
    });

    $(window).trigger("resize");
});


