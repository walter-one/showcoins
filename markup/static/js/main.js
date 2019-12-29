'use strict';

/*
    This file can be used as entry point for webpack!
 */

// Import jQuey
import $ from 'jquery';

// Import Uikit
import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';
import 'slick-carousel/slick/slick.min';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min'

// loads the Icon plugin
UIkit.use(Icons);
window.UIkit = UIkit;

$('#uk-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
    nextArrow: '<button class="uk-slick-next" uk-icon="icon: chevron-right"></button>',
    prevArrow: '<button class="uk-slick-previous" uk-icon="icon: chevron-left"></button>'
});

$(".mCustomScrollbar").each(function(){
    $(this).mCustomScrollbar({
        axis:"x" // horizontal scrollbar
    });
})

