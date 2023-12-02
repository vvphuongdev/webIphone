

'use strict';

(function ($) {

    /*------------------Preloader--------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(50).fadeOut("slow");
    });

    /*------------------Background Set--------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------Navigation--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------Accordin Active--------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*-----------------------Carousel Hero__slider------------------------*/
    $(".hero .hero__slider").owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 900,
        autoHeight: false,
        autoplay: true
    });

    /*--------------------------Select----------------------------*/
    $("select").niceSelect();

    /*-------------------Radio Btn--------------------- */
    $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function () {
        $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").removeClass('active');
        $(this).addClass('active');
    });

    /*-------------------Scroll--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    /*------------------CountDown--------------------*/
    // For demo preview start
    var today = new Date();
    var dd = String(today.getDate()+ 3).padStart(2, '0');
    var mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;

    $("#countdown").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------Magnific--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*-------------------Quantity change--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    var proQty = $('.pro-qty-2');
    proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

/*------------------Achieve Counter--------------------*/
    $('.cn_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

/*------------------Product--------------------*/ 
    var products = {
        ip15:{
            id: 'ip1',
            name: 'iPhone 15 128GB',
            image:'img/Image-phone/Anh-san-pham/Iphone-15-hong.jpg',
            price: '24.990.000đ',
            saleprice: '21.790.000đ',
            mausac:{hong:'c-1',la:'c-2',xanh:'c-3',vang:'c-4',den:'c-5'},
            images:{
                hong:'img/Image-phone/Anh-san-pham/Iphone-15-hong.jpg',
                la:'img/Image-phone/Anh-san-pham/Iphone-15-la.jpg',
                xanh:'img/Image-phone/Anh-san-pham/Iphone-15-xanh.jpg',
                vang:'img/Image-phone/Anh-san-pham/Iphone-15-vang.jpg',
                den:'img/Image-phone/Anh-san-pham/Iphone-15-den.jpg'
            },
            dungluong:{ram128:'128GB',ram256:'256GB',ram512:'512GB'},
            variant:{
                hong:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.790.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                },
                la:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.590.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.590.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                },
                vang:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.590.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                },
                den:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.590.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                }
            }
        },
        ip15pl:{
            id: 'ip2',
            name: 'iPhone 15 Plus 128GB',
            image:'img/Image-phone/Anh-san-pham/Iphone-15-den.jpg',
            price: '27.990.000đ',
            saleprice: '25.290.000đ',
            mausac:{hong:'c-1',la:'c-2',xanh:'c-3',vang:'c-4',den:'c-5'},
            images:{
                hong:'img/Image-phone/Anh-san-pham/Iphone-15-hong.jpg',
                la:'img/Image-phone/Anh-san-pham/Iphone-15-la.jpg',
                xanh:'img/Image-phone/Anh-san-pham/Iphone-15-xanh.jpg',
                vang:'img/Image-phone/Anh-san-pham/Iphone-15-vang.jpg',
                den:'img/Image-phone/Anh-san-pham/Iphone-15-den.jpg'
            },
            dungluong:{ram128:'128GB',ram256:'256GB',ram512:'512GB'},
            variant:{
                hong:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                },
                la:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                },
                vang:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                },
                den:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                }
            }
        },
        ip15pr:{
            id: 'ip3',
            name: 'iPhone 15 Pro 128GB',
            image:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Black.jpg',
            price: '30.990.000đ',
            saleprice: '27.490.000đ',
            mausac:{den:'c-5',xanh:'c-6',trang:'c-7',natural:'c-8'},
            images:{
                den:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Black.jpg',
                xanh:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Blue.jpg',
                trang:'img/Image-phone/Anh-san-pham/iPhone-15Pro-White.jpg',
                natural:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Natural.jpg'
            },
            dungluong:{ram128:'128GB',ram256:'256GB',ram512:'512GB',ram1:'1TB'},
            variant:{
                den:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
                trang:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
                natural:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
            }
        },
        ip15prm:{
            id: 'ip4',
            name: 'iPhone 15 Pro Max 256GB',
            image:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Blue.jpg',
            price: '37.990.000đ',
            saleprice: '33.790.000đ',
            mausac:{den:'c-5',xanh:'c-6',trang:'c-7',natural:'c-8'},
            images:{
                den:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Black.jpg',
                xanh:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Blue.jpg',
                trang:'img/Image-phone/Anh-san-pham/iPhone-15Pro-White.jpg',
                natural:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Natural.jpg'
            },
            dungluong:{ram256:'256GB',ram512:'512GB', ram1:'1TB'},
            variant:{
                den:{
                    ram256:{
                        price: '37.990.000đ',
                        saleprice: '33.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '43.990.000đ',
                        saleprice: '38.990.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '49.990.000đ',
                        saleprice: '45.850.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram256:{
                        price: '37.990.000đ',
                        saleprice: '33.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '43.990.000đ',
                        saleprice: '38.990.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '49.990.000đ',
                        saleprice: '45.850.000đ',
                        total: 50,
                    }
                },
                trang:{
                    ram256:{
                        price: '37.990.000đ',
                        saleprice: '33.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '43.990.000đ',
                        saleprice: '38.990.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '49.990.000đ',
                        saleprice: '45.850.000đ',
                        total: 50,
                    }
                },
                natural:{
                    ram256:{
                        price: '37.990.000đ',
                        saleprice: '33.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '43.990.000đ',
                        saleprice: '38.990.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '49.990.000đ',
                        saleprice: '45.850.000đ',
                        total: 50,
                    }
                },
            }
        },
        ip151:{
            id: 'ip5',
            name: 'iPhone 15 256GB',
            image:'img/Image-phone/Anh-san-pham/Iphone-15-xanh.jpg',
            price: '27.990.000đ',
            saleprice: '24.790.000đ',
            mausac:{hong:'c-1',la:'c-2',xanh:'c-3',vang:'c-4',den:'c-5'},
            images:{
                hong:'img/Image-phone/Anh-san-pham/Iphone-15-hong.jpg',
                la:'img/Image-phone/Anh-san-pham/Iphone-15-la.jpg',
                xanh:'img/Image-phone/Anh-san-pham/Iphone-15-xanh.jpg',
                vang:'img/Image-phone/Anh-san-pham/Iphone-15-vang.jpg',
                den:'img/Image-phone/Anh-san-pham/Iphone-15-den.jpg'
            },
            dungluong:{ram128:'128GB',ram256:'256GB',ram512:'512GB'},
            variant:{
                hong:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.790.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                },
                la:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.590.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.590.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                },
                vang:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.590.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                },
                den:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.590.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                }
            }
        },
        ip15pl1:{
            id: 'ip6',
            name: 'iPhone 15 Plus 256GB',
            image:'img/Image-phone/Anh-san-pham/Iphone-15-la.jpg',
            price: '30.990.000đ',
            saleprice: '28.490.000đ',
            mausac:{hong:'c-1',la:'c-2',xanh:'c-3',vang:'c-4',den:'c-5'},
            images:{
                hong:'img/Image-phone/Anh-san-pham/Iphone-15-hong.jpg',
                la:'img/Image-phone/Anh-san-pham/Iphone-15-la.jpg',
                xanh:'img/Image-phone/Anh-san-pham/Iphone-15-xanh.jpg',
                vang:'img/Image-phone/Anh-san-pham/Iphone-15-vang.jpg',
                den:'img/Image-phone/Anh-san-pham/Iphone-15-den.jpg'
            },
            dungluong:{ram128:'128GB',ram256:'256GB',ram512:'512GB'},
            variant:{
                hong:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                },
                la:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                },
                vang:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                },
                den:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                }
            }
        },
        ip15pr1:{
            id: 'ip7',
            name: 'iPhone 15 Pro 256GB',
            image:'img/Image-phone/Anh-san-pham/iPhone-15Pro-White.jpg',
            price: '34.990.000đ',
            saleprice: '29.990.000đ',
            mausac:{den:'c-5',xanh:'c-6',trang:'c-7',natural:'c-8'},
            images:{
                den:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Black.jpg',
                xanh:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Blue.jpg',
                trang:'img/Image-phone/Anh-san-pham/iPhone-15Pro-White.jpg',
                natural:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Natural.jpg'
            },
            dungluong:{ram128:'128GB',ram256:'256GB',ram512:'512GB',ram1:'1TB'},
            variant:{
                den:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
                trang:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
                natural:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
            }
        },
        ip15prm1:{
            id: 'ip8',
            name: 'iPhone 15 Pro Max 512GB',
            image:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Natural.jpg',
            price: '43.990.000đ',
            saleprice: '38.990.000đ',
            mausac:{den:'c-5',xanh:'c-6',trang:'c-7',natural:'c-8'},
            images:{
                den:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Black.jpg',
                xanh:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Blue.jpg',
                trang:'img/Image-phone/Anh-san-pham/iPhone-15Pro-White.jpg',
                natural:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Natural.jpg'
            },
            dungluong:{ram256:'256GB',ram512:'512GB', ram1:'1TB'},
            variant:{
                den:{
                    ram256:{
                        price: '37.990.000đ',
                        saleprice: '33.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '43.990.000đ', 
                        saleprice: '38.990.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '49.990.000đ',
                        saleprice: '45.850.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram256:{
                        price: '37.990.000đ',
                        saleprice: '33.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '43.990.000đ',
                        saleprice: '38.990.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '49.990.000đ',
                        saleprice: '45.850.000đ',
                        total: 50,
                    }
                },
                trang:{
                    ram256:{
                        price: '37.990.000đ',
                        saleprice: '33.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '43.990.000đ',
                        saleprice: '38.990.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '49.990.000đ',
                        saleprice: '45.850.000đ',
                        total: 50,
                    }
                },
                natural:{
                    ram256:{
                        price: '37.990.000đ',
                        saleprice: '33.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '43.990.000đ',
                        saleprice: '38.990.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '49.990.000đ',
                        saleprice: '45.850.000đ',
                        total: 50,
                    }
                },
            }
        },
        ip152:{
            id: 'ip9',
            name: 'iPhone 15 512GB',
            image:'img/Image-phone/Anh-san-pham/Iphone-15-vang.jpg',
            price: '33.990.000đ',
            saleprice: '29.590.000đ',
            mausac:{hong:'c-1',la:'c-2',xanh:'c-3',vang:'c-4',den:'c-5'},
            images:{
                hong:'img/Image-phone/Anh-san-pham/Iphone-15-hong.jpg',
                la:'img/Image-phone/Anh-san-pham/Iphone-15-la.jpg',
                xanh:'img/Image-phone/Anh-san-pham/Iphone-15-xanh.jpg',
                vang:'img/Image-phone/Anh-san-pham/Iphone-15-vang.jpg',
                den:'img/Image-phone/Anh-san-pham/Iphone-15-den.jpg'
            },
            dungluong:{ram128:'128GB',ram256:'256GB',ram512:'512GB'},
            variant:{
                hong:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.790.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                },
                la:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.590.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.590.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                },
                vang:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.590.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                },
                den:{
                    ram128:{
                        price: '24.990.000đ',
                        saleprice: '21.590.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '27.990.000đ',
                        saleprice: '24.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '33.990.000đ',
                        saleprice: '29.590.000đ',
                        total: 50,
                    }
                }
            }
        },
        ip15pl2:{
            id: 'ip10',
            name: 'iPhone 15 Plus 512GB',
            image:'img/Image-phone/Anh-san-pham/Iphone-15-xanh.jpg',
            price: '36.990.000đ',
            saleprice: '33.490.000đ',
            mausac:{hong:'c-1',la:'c-2',xanh:'c-3',vang:'c-4',den:'c-5'},
            images:{
                hong:'img/Image-phone/Anh-san-pham/Iphone-15-hong.jpg',
                la:'img/Image-phone/Anh-san-pham/Iphone-15-la.jpg',
                xanh:'img/Image-phone/Anh-san-pham/Iphone-15-xanh.jpg',
                vang:'img/Image-phone/Anh-san-pham/Iphone-15-vang.jpg',
                den:'img/Image-phone/Anh-san-pham/Iphone-15-den.jpg'
            },
            dungluong:{ram128:'128GB',ram256:'256GB',ram512:'512GB'},
            variant:{
                hong:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                },
                la:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                },
                vang:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                },
                den:{
                    ram128:{
                        price: '27.990.000đ',
                        saleprice: '25.290.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '30.990.000đ',
                        saleprice: '28.490.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '36.990.000đ',
                        saleprice: '33.490.000đ',
                        total: 50,
                    }
                }
            }
        },
        ip15pr2:{
            id: 'ip11',
            name: 'iPhone 15 Pro 512GB',
            image:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Black.jpg',
            price: '40.990.000đ',
            saleprice: '36.450.000đ',
            mausac:{den:'c-5',xanh:'c-6',trang:'c-7',natural:'c-8'},
            images:{
                den:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Black.jpg',
                xanh:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Blue.jpg',
                trang:'img/Image-phone/Anh-san-pham/iPhone-15Pro-White.jpg',
                natural:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Natural.jpg'
            },
            dungluong:{ram128:'128GB',ram256:'256GB',ram512:'512GB',ram1:'1TB'},
            variant:{
                den:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
                trang:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
                natural:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
            }
        },
        ip15prm2:{
            id: 'ip12',
            name: 'iPhone 15 Pro Max 1TB',
            image:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Blue.jpg',
            price: '49.990.000đ',
            saleprice: '45.850.000đ',
            mausac:{den:'c-5',xanh:'c-6',trang:'c-7',natural:'c-8'},
            images:{
                den:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Black.jpg',
                xanh:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Blue.jpg',
                trang:'img/Image-phone/Anh-san-pham/iPhone-15Pro-White.jpg',
                natural:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Natural.jpg'
            },
            dungluong:{ram256:'256GB',ram512:'512GB', ram1:'1TB'},
            variant:{
                den:{
                    ram256:{
                        price: '37.990.000đ',
                        saleprice: '33.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '43.990.000đ',
                        saleprice: '38.990.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '49.990.000đ',
                        saleprice: '45.850.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram256:{
                        price: '37.990.000đ',
                        saleprice: '33.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '43.990.000đ',
                        saleprice: '38.990.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '49.990.000đ',
                        saleprice: '45.850.000đ',
                        total: 50,
                    }
                },
                trang:{
                    ram256:{
                        price: '37.990.000đ',
                        saleprice: '33.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '43.990.000đ',
                        saleprice: '38.990.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '49.990.000đ',
                        saleprice: '45.850.000đ',
                        total: 50,
                    }
                },
                natural:{
                    ram256:{
                        price: '37.990.000đ',
                        saleprice: '33.790.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '43.990.000đ',
                        saleprice: '38.990.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '49.990.000đ',
                        saleprice: '45.850.000đ',
                        total: 50,
                    }
                },
            }
        },
        ip15pr3:{
            id: 'ip13',
            name: 'iPhone 15 Pro 1TB',
            image:'img/Image-phone/Anh-san-pham/iPhone-15Pro-White.jpg',
            price: '46.990.000đ',
            saleprice: '41.450.000đ',
            mausac:{den:'c-5',xanh:'c-6',trang:'c-7',natural:'c-8'},
            images:{
                den:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Black.jpg',
                xanh:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Blue.jpg',
                trang:'img/Image-phone/Anh-san-pham/iPhone-15Pro-White.jpg',
                natural:'img/Image-phone/Anh-san-pham/iPhone-15Pro-Natural.jpg'
            },
            dungluong:{ram128:'128GB',ram256:'256GB',ram512:'512GB',ram1:'1TB'},
            variant:{
                den:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
                xanh:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
                trang:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
                natural:{
                    ram128:{
                        price: '30.990.000đ',
                        saleprice: '27.490.000đ',
                        total: 50,
                    },
                    ram256:{
                        price: '34.990.000đ',
                        saleprice: '29.990.000đ',
                        total: 50,
                    },
                    ram512:{
                        price: '40.990.000đ',
                        saleprice: '36.450.000đ',
                        total: 50,
                    },
                    ram1:{
                        price: '46.990.000đ',
                        saleprice: '41.450.000đ',
                        total: 50,
                    }
                },
            }
        },
    };
    // $.session.clear();
    $.session.set('products',JSON.stringify(products));
     // $.session.get('key');
    var arrProducts = JSON.parse($.session.get('products'));
    var html='';

    if(arrProducts && Object.keys(arrProducts).length){
        Object.entries(arrProducts).map(([key,item])=>{
            
            html += '<div class="col-lg-3 col-md-6 col-sm-6">';
            html += '<div class="product__item">';
            html += '<div class="product__item__pic">';
            html += '<a href="#" class="product_item" data-id="'+key+'">';
            html += ' <img src="'+item.image+'" alt="iphone" class="img-thumbnail">';
            html += '</a>';
            html += '<ul class="product__hover">';
            html += ' <li><a href="#"><img src="img/icon/heart.png" alt=""></a></li>';
            html += '</ul>';
            html += '</div>';
            html += '<div class="product__item__text">';
            html += '<h6><span>'+item.name+'</span></h6>';
            html += '<a href="shopping-cart.html" class="add-cart">Xem chi tiết</a>';
            html += '<h5>'+item.saleprice+'</h5>';
            html += '<h5 class="discount"><del>'+item.price+'</del></h5>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        })
        $(".box-products").html(html);
    }
    $(".product_item").on("click",function(){
        var idp = $(this).attr('data-id');
        var arrProducts = JSON.parse($.session.get('products'));
        if(arrProducts[idp] != undefined){
            $.session.set('product',JSON.stringify(arrProducts[idp]));
            //console.log(JSON.parse($.session.get('product')));
            window.location.href = "product-detail.html";
        }
    });
    
})(jQuery);