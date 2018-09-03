//slider options

var optionsSlider = {
    items: 1,
    nav: true,
    dots: true,
    loop: false,
};

var sliderOptions = {
    items: 1,
    nav: true,
    dots: true,
    loop: true,
    vertical: true,
    verticalSwiping: true,
};

var sliderOptionsMobile = {
    items: 1,
    nav: true,
    dots: true,
    loop: true,
};

var z = 15;
    
//google maps api 

var centerMap = {lat: 60.010960, lng: 30.345028};

    function initMap() {
        
        var map = new google.maps.Map(document.getElementById('map'), {
            center: centerMap,
            zoom: z,
            scrollwheel: false,
            draggable: false,
            scaleControl: false,
            navigationControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            rotateControl: false,
            gestureHandling: 'cooperative',
            styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-39"
            },
            {
                "lightness": "35"
            },
            {
                "gamma": "1.08"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "10"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "-14"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "10"
            },
            {
                "gamma": "2.26"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "-3"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "54"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "-7"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "-2"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "100"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "-100"
            }
        ]
    }
]
        });
        
        var home = new google.maps.Marker({
            position: centerMap, 
            map: map,
            icon: {
                url: 'img/map-marker-radius.png',
                size: new google.maps.Size(32,41),
                
            }
        });
        
        var coords = [
            {lat: 60.013077, lng: 30.352758},
            {lat: 60.010683, lng: 30.346875},
            {lat: 60.011275, lng: 30.345988},
            {lat: 60.011188, lng: 30.345714}
        ];
        
        var path = new google.maps.Polyline({
            path: coords,
            geodesic: true,
            strokeColor: '#EE7601',
            
        })
        
        path.setMap(map);  
    }

$(function() {
    
    //preloader 
    
    function preloaderFunct() {
        $('.preloader').addClass('load');
        $('.preloader p').addClass('load1');
        $preloader = $('.preloader-wrap'),
            $loader = $preloader.find('.preloader');
        //$loader.fadeOut();
        $preloader.delay(700).fadeOut('slow');
    };
    
    $(window).on('load', function() {
        preloaderFunct();  
    });  
    
    //preloader counter
    $(function() {
        $({numberValue: 0}).animate({numberValue: 100},{
            duration: 1300,
            easing: 'linear',
            step: function(val) {
                $('.count').html(Math.ceil(val));
            }
        }); 
    });
    
    //mobile 
    
    if(window.matchMedia('(min-width: 425px)').matches) {
        $('.desctop-hidden').remove();
    }
    
    $(window).on('resize', function() {
        if(window.matchMedia('(min-width: 426px)').matches) {
            $('.owl-carousel').slick('unslick');
            console.log('lololo');
        } else  if(window.matchMedia('(max-width: 425px)').matches) {
            $('.owl-carousel').slick(sliderOptionsMobile);
        }
    })
    
    if(window.matchMedia('(max-width: 425px)').matches) {
        
        $('.animation-1').removeClass('animation-1');
        $('.animation-2').removeClass('animation-2');
        $('.animation-3').removeClass('animation-3');
        $('.animation-4').removeClass('animation-4');
        $('.animation-5').removeClass('animation-5');
        
        //slider
        $('.page7-slider').removeClass('owl-carousel');
        $('.owl-carousel').slick(sliderOptionsMobile);
        
        //menu 
        
        $('.burger-menu').click(function() {
            if($('.burger-menu').hasClass('open')) {
                $('.mobile-menu').removeClass('show');
                $('.burger-menu').removeClass('open');
                $('body').css('overflow', 'auto');
            } else {
                $('.mobile-menu').addClass('show');
                $('.burger-menu').addClass('open');
                $('body').css('overflow', 'hidden');
            }
        });
        
        $('.mobile-menu_item').click(function() {
            $('.mobile-menu_item').removeClass('mobile-menu_item_active');
            $(this).addClass('mobile-menu_item_active');
            
            $('.mobile-menu').removeClass('show');
            $('.burger-menu').removeClass('open');
            $('body').css('overflow', 'auto');
        });
        
        $('.page-7_right').mCustomScrollbar({
            axis: 'x',
            mouseWheel: false,
            documentTouchScroll: false,
            //contentTouchScroll: false,
            callbacks: {
                whileScrolling: function() {
                    myCustomFn(this);
                }
            },
        });
        
        var left = 0;
        
        function myCustomFn(el) {
            left = Math.abs(el.mcs.left);
            return left;
        }
        
        //left = left + 40;
        
        $('.page-7_img').click(function() {
            $(this).toggleClass('absolute');
            if($(this).hasClass('absolute')) {
                if(window.matchMedia('(max-width: 375px)').matches) {
                    $(this).css('left',left + 25);
                } else if(window.matchMedia('(max-width: 425px)').matches) {
                    $(this).css('left',left + 25);
                }
                
            } else {
                $(this).css('left', 'auto');
            }
            
            //$(this).css('transform','scale(1.5)')
        })
    
        
        $('.page-3_item').click(function() {
            $('.modal-overlay').css('display', 'block');
            $('.modal-items1').css('display', 'flex');
            $('body, html').css('overflow','hidden');
        })
        
        //time event
    
        var date = new Date();
        var h = date.getHours();
        

        if (h > 18 || h < 8) {
            document.getElementById('style').href = 'css/night.min.css';
            $('body').addClass('night-theme');
            $('.header-item_content').toggleClass('active-time');
            $('#time-checkbox').attr('checked',true);
            $('body').removeClass('day-theme');
            $('body').addClass('night-theme');
        };

        //button event

        $('.time-checkbox_label').click(function() {
            nightTheme();
        });
    };
    
    $('.first-page_link').click(function() {
        if(window.matchMedia('(max-width: 425px)').matches) {
            $('.mobile-menu').removeClass('show');
            $('.burger-menu').removeClass('open');
            $('body').css('overflow', 'auto');
            $('.mobile-menu_item').removeClass('mobile-menu_item_active');
        };
    })

    //popups
    
    //open 
    
    $('.page-3_item').click(function() {
        if(window.matchMedia('(max-width: 425px)').mathes) {
            $('.modal-overlay').css('display', 'block');
            $('.modal-items1').css('display', 'flex');
            $('body').css('overflow','hidden');
        } else {
            $('.modal-overlay').css('display', 'block');
            $('.modal-items1').css('display', 'flex');
            $('.main-footer').css('display','none');
        }
    });
    
    //увеличение картинки 3 page
    
    $('.item-right_img').on('click', function() {
        $(this).toggleClass('absolute');
        $('.gradient-wrap').toggleClass('gradient-display');
    });
    
    $('.page-7_item').click(function() {
        if(window.matchMedia('(max-width: 425px)').matches) {
            return false;
        } else {
            $('.modal-overlay').css('display', 'block');
            $('.modalM').removeClass('closeM');
            $('.modalM').addClass('showM');
            //$('body').css('overflow','hidden');
            $('.main-footer').css('display','none');
        };
    });
    
    $('.selector-hidden').click(function() {
        if($('.selector-hidden').hasClass('selector-hidden_active')) {
            $('.selector-hidden').removeClass('selector-hidden_active');
            $('.items-list').removeClass('show2');
            $('.items-list').addClass('show1', 300, 'linear');
        } else {
            $('.selector-hidden').addClass('selector-hidden_active');
            $('.items-list').removeClass('show1');
            $('.items-list').addClass('show2', 300, 'linear');
        }
    });
    
    //close
    
    $('.modal-overlay').click(function() {
        if(window.matchMedia('(max-width: 425px)').matches) {
            $('.modal-overlay').css('display', 'none');
            $('.modalM').removeClass('showM');
            $('.modalM').addClass('closeM');
            $('.modal-items1').css('display', 'none');
            $('body, html').css('overflow','auto');
        } else {
            $('.modal-overlay').css('display', 'none');
            $('.modalM').removeClass('showM');
            $('.modalM').addClass('closeM');
            $('.modal-items1').css('display', 'none');
            $('.main-footer').css('display','flex');
            //$('body').css('overflow','auto');
        };
    });
    
    $('.modal-close').click(function() {
        if(window.matchMedia('(max-width: 425px)').matches) {
            $('.modal-overlay').css('display', 'none');
            $('.modalM').removeClass('showM');
            $('.modalM').addClass('closeM');
            $('.modal-items1').css('display', 'none');
            $('body, html').css('overflow','auto');
        } else {
            $('.modal-overlay').css('display', 'none');
            $('.modalM').removeClass('showM');
            $('.modalM').addClass('closeM');
            $('.modal-items1').css('display', 'none');
            $('.main-footer').css('display','flex');
            //$('body').css('overflow','auto');
        };
    });
    
    
     window.addEventListener("keydown", function(evt) {
        if(evt.keyCode === 27) {
            evt.preventDefault();
            
            if(window.matchMedia('(max-width: 425px)').matches) {
                $('.modal-overlay').css('display', 'none');
                $('.modalM').removeClass('showM');
                $('.modalM').addClass('closeM');
                $('.modal-items1').css('display', 'none');
                $('body, html').css('overflow','auto');
            } else {
                $('.modal-overlay').css('display', 'none');
                $('.modalM').removeClass('showM');
                $('.modalM').addClass('closeM');
                $('.modal-items1').css('display', 'none');
                $('.main-footer').css('display','flex');
                //$('body').css('overflow','auto');
            }; 
        }
     });
    
    //item 
    
    $('.item').click(function() {
        $('.item').removeClass('active-item');
        $(this).addClass('active-item');
        
        if(window.matchMedia('(max-width: 425px)').matches) {
            $('.selector-hidden').removeClass('selector-hidden_active');
            $('.items-list').removeClass('show2');
            $('.items-list').addClass('show1', 300, 'linear');
        }
    });
    
    //scrollbar 
    
    $('.item-right-list').mCustomScrollbar({
        axis: "y",
        setWidth: '600',
        //mouseWheel: false,
    });
    
    //logic
    
    //---------functions---------//
    
    //interactive 
    
    //cars
    
    function randomTimeCars(min,max) {
        return Math.floor(Math.random() * (max-min + 1)) + min;
    }
    
    var timeCars = randomTimeCars(4, 20);
    timeCars = parseInt(timeCars,10);
    timeCars = timeCars * 1000;
    
    function carsAnim() {
        $('.bg-4').addClass('interactiveCars');
    }
    
    setTimeout(carsAnim, timeCars);
    
    //copter 
    
    function randomTimeCopter(min,max) {
        return Math.floor(Math.random() * (max-min + 1) + min);
    }
    
    var timeCopter = randomTimeCopter(4, 20);
    timeCopter = parseInt(timeCopter,10);
    timeCopter = timeCopter * 1000;
    
    function copterAnim() {
        $('.bg-4').addClass('interactiveCopter');
    }
    
    setTimeout(copterAnim, timeCopter);
    
    //arrow-right
    
    function arrowRight() {
        var page = $('body').attr('data-page');
        var pag = $('.this-pagination').attr('data-pag');
        page = parseInt(page,10);      
        pag = parseInt(pag,10);
        
        //console.log('pagination= ' + pag + ' and ' + 'page= ' + page );
        
        if(pag > 7) {
            pag = 1;
            $('.footer-pag_item:last-of-type').removeClass('this-pagination');
            $('.footer-pag_item:first-of-type').addClass('this-pagination');
        }
        
        if (page > 7) {
            page = 1;     
            $('body').attr('data-page', page);
        } else {
            page = page + 1;
            pag = pag + 1;
            $('body').attr('data-page', page);
            
            //пагинация в зависимости от стрелок 
            
            $('.footer-pag_item').each(function(index,value) {
                var a = $(this).attr('data-pag');
                if(a == pag) {
                    $('.footer-pag_item').removeClass('this-pagination');
                    $(this).addClass('this-pagination');
                };
            });
        //console.log('pagination= ' + pag + ' and ' + 'page= ' + page );
        };
    }
    
    //arrow left 
    
    function arrowLeft() {
        var page = $('body').attr('data-page');
        var pag = $('.this-pagination').attr('data-pag');
        page = parseInt(page,10);
        pag = parseInt(pag,10);
        
        //console.log('pagination= ' + pag + ' and ' + 'page= ' + page );
        
        if (pag < 2) {
            pag = 8;
            $('.footer-pag_item:first-of-type').removeClass('this-pagination');
            $('.footer-pag_item:last-of-type').addClass('this-pagination');
        }
        
        if (page < 2) {
            page = 8;
            $('body').attr('data-page', page);
            //console.log(page);
        } else {
            //console.log(page + ' ' + 'bilo-page');
            page = page - 1;
            pag = pag - 1;
            //console.log(page + ' ' + 'stalo-page');
            $('body').attr('data-page', page);
            
            //пагинация в зависимости от стрелок 
            
            $('.footer-pag_item').each(function(index,value) {
                var a = $(this).attr('data-pag');
                if(a == pag) {
                    $('.footer-pag_item').removeClass('this-pagination');
                    $(this).addClass('this-pagination');
                };
            });
        //console.log('pagination= ' + pag + ' and ' + 'page= ' + page );
        };
    }
    
    //стрелка влево на 1 стр./вправо на 8стр.
    
    function arrowLeftVisibility() {
        
        var Page = $('body').attr('data-page');
        Page = parseInt(Page,10);
    
        if(Page == 1) {
            $('.mdi-arrow-left').css('opacity','0');
            $('.mdi-arrow-left').css('z-index','-1');
        } else {
            $('.mdi-arrow-left').css('opacity', '1');
            $('.mdi-arrow-left').css('z-index','10');
        };
        
        if (Page == 8) {
            $('.mdi-arrow-right').css('opacity','0');
            $('.mdi-arrow-right').css('z-index','-1');
        } else {
            $('.mdi-arrow-right').css('opacity', '1');
            $('.mdi-arrow-right').css('z-index','10');
        }
    } 
    
    //scroll for desctop
    
    if(window.matchMedia('(max-width: 425px)').matches) { //media quaries
        return false;
    } else {
            var indicator = new WheelIndicator({
            callback: function(e) {
                //console.log(e.direction);

                var page = $('body').attr('data-page');
                var pag = $('.this-pagination').attr('data-pag');

                page = parseInt(page,10);
                pag = parseInt(pag, 10);

                if (e.direction == 'up') {
                    if (page == 1) {
                        return false;
                    } else {
                        page = page - 1;
                        $('body').attr('data-page', page);

                        pag = pag - 1;
                        $('.footer-pag_item').each(function(index,value) {
                            var a = $(this).attr('data-pag');
                            if(a == pag) {
                                $('.footer-pag_item').removeClass('this-pagination');
                                $(this).addClass('this-pagination');
                            };
                        });

                        pageAnim();
                        arrowLeftVisibility();
                        sliders();
                    };
                };

                if (e.direction == 'down') {
                    if(page == 8) {
                        return false;
                    } else {
                        page = page + 1;
                        $('body').attr('data-page', page);

                        pag = pag + 1;
                        $('.footer-pag_item').each(function(index,value) {
                            var a = $(this).attr('data-pag');
                            if(a == pag) {
                                $('.footer-pag_item').removeClass('this-pagination');
                                $(this).addClass('this-pagination');
                            };
                        });

                        pageAnim();
                        arrowLeftVisibility()
                        sliders();
                    };
                };
            },
            preventMouse: false
        });
    };
    
    //toogle pages 
    
    function pageAnim() {
        
        var page = $('body').attr('data-page');
        var pag = $('.this-pagination').attr('data-pag');
        
        if(page == 1) {
            $('.pages').css('display', 'none');
            $('.page-1').css('display','flex');
            
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            $('.absolute-title, .hidden8').css('display', 'none');
            
            $('.bg-1').addClass('main-bg1-fast');
            $('.bg-2').addClass('main-bg1-middle');
            $('.bg-3').addClass('main-bg1-slow');
            $('.bg-4').addClass('main-bg1-clouds');
        } else if(page == 2) {
            $('.bg-1').removeClass('main-bg1-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg1-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg1-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg1-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            $('.pages').css('display','none');
            $('.page-2').css('display','flex');
            
            $('.absolute-title, .hidden8').css('display', 'none');
            
            $('.bg-1').addClass('main-bg2-fast');
            $('.bg-2').addClass('main-bg2-middle');
            $('.bg-3').addClass('main-bg2-slow');
            $('.bg-4').addClass('main-bg2-clouds');
        } else if(page == 3) {
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg1-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg1-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg1-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg1-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            
            $('.pages').css('display','none');
            $('.page-3').css('display', 'flex');
            
            $('.absolute-title, .hidden8').css('display', 'none');
            
            $('.bg-1').addClass('main-bg3-fast');
            $('.bg-2').addClass('main-bg3-middle');
            $('.bg-3').addClass('main-bg3-slow');
            $('.bg-4').addClass('main-bg3-clouds');
        } else if(page == 4) {
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg1-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg1-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg1-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg1-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            $('.pages').css('display','none');
            $('.page-4').css('display','flex');
            
            $('.absolute-title, .hidden8').css('display', 'none');
            
            $('.bg-1').addClass('main-bg4-fast');
            $('.bg-2').addClass('main-bg4-middle');
            $('.bg-3').addClass('main-bg4-slow');
            $('.bg-4').addClass('main-bg4-clouds');
        } else if (page == 5) {
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg1-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg1-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg1-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg1-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            $('.absolute-title, .hidden8').css('display', 'none');
            
            $('.pages').css('display','none');
            $('.page-5').css('display','flex');
            
            $('.bg-1').addClass('main-bg5-fast');
            $('.bg-2').addClass('main-bg5-middle');
            $('.bg-3').addClass('main-bg5-slow');
            $('.bg-4').addClass('main-bg5-clouds');
        } else if (page == 6) {
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg1-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg1-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg1-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg1-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            $('.pages').css('display','none');
            $('.page-6').css('display','flex');
            
            $('.absolute-title, .hidden8').css('display', 'none');
            
            $('.bg-1').addClass('main-bg6-fast');
            $('.bg-2').addClass('main-bg6-middle');
            $('.bg-3').addClass('main-bg6-slow');
            $('.bg-4').addClass('main-bg6-clouds');
        } else if (page == 7) {
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg1-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg1-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg1-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg1-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            $('.pages').css('display','none');
            $('.page-7').css('display','flex');
            
            $('.absolute-title').css('display', 'block');
            $('.hidden8').css('display', 'none');
            
            $('.bg-1').addClass('main-bg7-fast');
            $('.bg-2').addClass('main-bg7-middle');
            $('.bg-3').addClass('main-bg7-slow');
            $('.bg-4').addClass('main-bg7-clouds');
        } else if (page == 8) {
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg1-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg1-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg1-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg1-clouds');
            
            $('.absolute-title').css('display', 'none');
            $('.hidden8').css('display', 'block');
            
            $('.pages').css('display','none');
            $('.page-8').css('display','flex');
            
            $('.bg-1').addClass('main-bg8-fast');
            $('.bg-2').addClass('main-bg8-middle');
            $('.bg-3').addClass('main-bg8-slow');
            $('.bg-4').addClass('main-bg8-clouds');
        };
    }
    
    //init sliders 
    
    function sliders() {
        
        var page = $('body').attr('data-page');
        
        if(page == 3) {
            if($('.page3-slider').hasClass('slick-initialized') || $('.modal-carousel').hasClass('slick-initialized')) {
                return false;
            } else {
                $('.page3-slider').slick(sliderOptions);
                $('.modal-carousel').slick(sliderOptions);
            }
        }; 
        
        if(page == 6) {
            if($('.page6-slider').hasClass('slick-initialized')) {
                return false;
            } else {
                $('.page6-slider').slick(sliderOptions);
            }
        };
        
        if(page == 7) {
            if($('.page7-slider').hasClass('slick-initialized')) {
                return false;
            } else {
                $('.page7-slider').slick(sliderOptions);
            }
        };
        
        if(page == 8) {
            if($('.page-8_right').hasClass('slick-initialized')) {
                return false;
            } else {
                $('.page-8_right').slick(optionsSlider);
            }
        };
    };
    
    //night-theme toggle 
    
    function nightTheme() {
        if($('body').hasClass('day-theme')) {
            $('.header-item_content').toggleClass('active-time');
            $('body').removeClass('day-theme');
            $('body').addClass('night-theme');
            document.getElementById('style').href = 'css/night.min.css';
            $('#time-checkbox').attr('checked',true);
            $('.button').removeClass('waves-light');
            $('.button').removeClass('waves-effect');
            $('.time-checkbox_label span').css('transform','translateY(19px)');
            $('.time-checkbox_label span').addClass('fix');
           } else {
            $('.time-checkbox_label span').css('transform','translate(0)');
               $('.time-checkbox_label span').removeClass('fix');
            $('.header-item_content').toggleClass('active-time');
            $('#time-checkbox').attr('checked',false);
            $('body').removeClass('night-theme');
            $('body').addClass('day-theme');
            document.getElementById('style').href = 'css/style.min.css'; 
            $('.button').addClass('waves-light');
            $('.button').addClass('waves-effect');
        };
    };
        
    //------initilization-------//
    

    //стрелки
    //увеличиваем data-page y body

    //стрелка вправо
    
    $('.mdi-arrow-right').click(function() {
        arrowRight();
        pageAnim();
        arrowLeftVisibility();
        sliders();
    });
    
    //уменьшаем data-page y body
    
    //arrowLeftVisibility();
    
    //стрелка влево
    $('.mdi-arrow-left').click(function() {
        arrowLeft();
        pageAnim();
        arrowLeftVisibility();
        sliders();
    });
    
    //пагинация
    
    $('.footer-pag_item').click(function() {
        var page = $('body').attr('data-page');
        var pag = $('.this-pagination').attr('data-pag');
        page = parseInt(page,10);      
        pag = parseInt(pag,10);

        //анимация
        
        $('.footer-pag_item').removeClass('this-pagination');
        $(this).addClass('this-pagination');   
        
        //переключение страниц
        
        pag = $(this).attr('data-pag');
        page = pag;
        $('body').attr('data-page', page);
        
        if(page == 1) {
            $('.pages').css('display', 'none');
            $('.page-1').css('display','flex');
            
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            $('.absolute-title, .hidden8').css('display', 'none');
            
            $('.bg-1').addClass('main-bg1-fast');
            $('.bg-2').addClass('main-bg1-middle');
            $('.bg-3').addClass('main-bg1-slow');
            $('.bg-4').addClass('main-bg1-clouds');
        } else if(page == 2) {
            $('.bg-1').removeClass('main-bg1-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg1-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg1-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg1-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            $('.pages').css('display','none');
            $('.page-2').css('display','flex');
            
            $('.absolute-title, .hidden8').css('display', 'none');
            
            $('.bg-1').addClass('main-bg2-fast');
            $('.bg-2').addClass('main-bg2-middle');
            $('.bg-3').addClass('main-bg2-slow');
            $('.bg-4').addClass('main-bg2-clouds');
        } else if(page == 3) {
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg1-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg1-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg1-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg1-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            
            $('.pages').css('display','none');
            $('.page-3').css('display', 'flex');
            
            $('.absolute-title, .hidden8').css('display', 'none');
            
            $('.bg-1').addClass('main-bg3-fast');
            $('.bg-2').addClass('main-bg3-middle');
            $('.bg-3').addClass('main-bg3-slow');
            $('.bg-4').addClass('main-bg3-clouds');
        } else if(page == 4) {
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg1-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg1-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg1-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg1-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            $('.pages').css('display','none');
            $('.page-4').css('display','flex');
            
            $('.absolute-title, .hidden8').css('display', 'none');
            
            $('.bg-1').addClass('main-bg4-fast');
            $('.bg-2').addClass('main-bg4-middle');
            $('.bg-3').addClass('main-bg4-slow');
            $('.bg-4').addClass('main-bg4-clouds');
        } else if (page == 5) {
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg1-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg1-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg1-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg1-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            $('.absolute-title, .hidden8').css('display', 'none');
            
            $('.pages').css('display','none');
            $('.page-5').css('display','flex');
            
            $('.bg-1').addClass('main-bg5-fast');
            $('.bg-2').addClass('main-bg5-middle');
            $('.bg-3').addClass('main-bg5-slow');
            $('.bg-4').addClass('main-bg5-clouds');
        } else if (page == 6) {
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg1-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg1-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg1-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg1-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            $('.pages').css('display','none');
            $('.page-6').css('display','flex');
            
            $('.absolute-title, .hidden8').css('display', 'none');
            
            $('.bg-1').addClass('main-bg6-fast');
            $('.bg-2').addClass('main-bg6-middle');
            $('.bg-3').addClass('main-bg6-slow');
            $('.bg-4').addClass('main-bg6-clouds');
        } else if (page == 7) {
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg1-fast');
            $('.bg-1').removeClass('main-bg8-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg1-middle');
            $('.bg-2').removeClass('main-bg8-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg1-slow');
            $('.bg-3').removeClass('main-bg8-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg1-clouds');
            $('.bg-4').removeClass('main-bg8-clouds');
            
            $('.pages').css('display','none');
            $('.page-7').css('display','flex');
            
            $('.absolute-title').css('display', 'block');
            $('.hidden8').css('display', 'none');
            
            $('.bg-1').addClass('main-bg7-fast');
            $('.bg-2').addClass('main-bg7-middle');
            $('.bg-3').addClass('main-bg7-slow');
            $('.bg-4').addClass('main-bg7-clouds');
        } else if (page == 8) {
            $('.bg-1').removeClass('main-bg2-fast');
            $('.bg-1').removeClass('main-bg3-fast');
            $('.bg-1').removeClass('main-bg4-fast');
            $('.bg-1').removeClass('main-bg5-fast');
            $('.bg-1').removeClass('main-bg6-fast');
            $('.bg-1').removeClass('main-bg7-fast');
            $('.bg-1').removeClass('main-bg1-fast');
            
            $('.bg-2').removeClass('main-bg2-middle');
            $('.bg-2').removeClass('main-bg3-middle');
            $('.bg-2').removeClass('main-bg4-middle');
            $('.bg-2').removeClass('main-bg5-middle');
            $('.bg-2').removeClass('main-bg6-middle');
            $('.bg-2').removeClass('main-bg7-middle');
            $('.bg-2').removeClass('main-bg1-middle');
            
            $('.bg-3').removeClass('main-bg2-slow');
            $('.bg-3').removeClass('main-bg3-slow');
            $('.bg-3').removeClass('main-bg4-slow');
            $('.bg-3').removeClass('main-bg5-slow');
            $('.bg-3').removeClass('main-bg6-slow');
            $('.bg-3').removeClass('main-bg7-slow');
            $('.bg-3').removeClass('main-bg1-slow');
            
            $('.bg-4').removeClass('main-bg2-clouds');
            $('.bg-4').removeClass('main-bg3-clouds');
            $('.bg-4').removeClass('main-bg4-clouds');
            $('.bg-4').removeClass('main-bg5-clouds');
            $('.bg-4').removeClass('main-bg6-clouds');
            $('.bg-4').removeClass('main-bg7-clouds');
            $('.bg-4').removeClass('main-bg1-clouds');
            
            $('.absolute-title').css('display', 'none');
            $('.hidden8').css('display', 'block');
            
            $('.pages').css('display','none');
            $('.page-8').css('display','flex');
            
            $('.bg-1').addClass('main-bg8-fast');
            $('.bg-2').addClass('main-bg8-middle');
            $('.bg-3').addClass('main-bg8-slow');
            $('.bg-4').addClass('main-bg8-clouds');
        };
        arrowLeftVisibility();
        sliders();
    });
    
    //buttons
    
    $('.first-page_link').click(function() {
        var page = $('body').attr('data-page');
        var pag = $('.this-pagination').attr('data-pag');
        page = 1;
        pag = 1;
        $('body').attr('data-page',page);
        $('.footer-pag_item').removeClass('this-pagination');
        $('.footer-pag_item:first-of-type').addClass('this-pagination');
        pageAnim();
        arrowLeftVisibility();
        sliders();
    })
    
    $('.catalog-button').click(function() {
        var page = $('body').attr('data-page');
        var pag = $('.this-pagination').attr('data-pag');
        page = 3;
        pag =3;
        $('body').attr('data-page',page);
        $('.footer-pag_item').removeClass('this-pagination');
        $('.footer-pag_item:nth-of-type(3)').addClass('this-pagination');
        pageAnim();
        sliders();
        if(window.matchMedia('(max-width: 425px)').mathes) {
            $('.modal-overlay').css('display', 'block');
            $('.modal-items1').css('display', 'flex');
            $('body').css('overflow','hidden');
        } else {
            $('.modal-overlay').css('display', 'block');
            $('.modal-items1').css('display', 'flex');
            $('.main-footer').css('display','none');
        }
    });
    
    $('.page-3_button').click(function() {
        var page =  $('body').attr('data-page');
        var pag = $('.this-pagination').attr('data-pag');
        page = 8;
        pag = 8;
        $('body').attr('data-page',page);
        $('.footer-pag_item').removeClass('this-pagination');
        $('.footer-pag_item:last-of-type').addClass('this-pagination');
        pageAnim();
        arrowLeftVisibility();
        sliders();
    });
    
    $('.page-5_button').click(function() {
        var page = $('body').attr('data-page');
        var page = $('.this-pagination').attr('data-pag');
        page = 8;
        pag = 8;
        $('body').attr('data-page',page);
        $('.footer-pag_item').removeClass('this-pagination');
        $('.footer-pag_item:last-of-type').addClass('this-pagination');
        pageAnim();
        arrowLeftVisibility();
        sliders();
    })
    
    
    //-------night-theme-------//
    
    //time event
    
    var date = new Date();
    var h = date.getHours();
    console.log(h);
    
    if (h >= 19 || h < 8) {
        document.getElementById('style').href = 'css/night.min.css';
        $('body').addClass('night-theme');
        $('.header-item_content').toggleClass('active-time');
        $('#time-checkbox').attr('checked',true);
        $('body').removeClass('day-theme');
        $('body').addClass('night-theme');
    };
    
    //button event
    
    $('.time-checkbox_label').click(function() {
        $('.preloader').removeClass('load');
        $('.preloader p').removeClass('load1');
        $('.preloader').addClass('load');
        $('.preloader p').addClass('load1');
        $('.preloader-wrap').css('display', 'block');
        $(function() {
        $({numberValue: 0}).animate({numberValue: 100},{
                duration: 1300,
                easing: 'linear',
                step: function(val) {
                    $('.count').html(Math.ceil(val));
                }
            }); 
        });
        function hide() {
            $('.preloader-wrap').css('display','none');
        }
        setTimeout(hide,1500);
        nightTheme();
    });
});