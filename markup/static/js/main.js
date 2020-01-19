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
});

$('.uk-card-wallet table .uk-cell-close').on('click', function(){
    $(this).parents('tr').fadeOut();
});

$('.uk-toggle').click(function(){
  $(this).toggleClass('uk-active');
});

$('.uk-card-algos').on('click', function(){
    var offset = $( this ).offset();
    var height = $( this ).outerHeight();
    var calcTop = offset.top + height + 20;
    var heightContentTable = $(this).next().outerHeight();
    var heightContent = $('.uk-content-algos .uk-content').outerHeight();

    $('.uk-content-algos .uk-content').height(heightContent + heightContentTable);
    $( this ).next().css('top', calcTop );
    $(this).next().toggleClass('uk-active');
    $('.uk-overlay').toggleClass('uk-active');
    $(this).parent().toggleClass('uk-active');



    console.log(heightContent);
});
$('.uk-overlay').on('click', function(){
    $(this).removeClass('uk-active');
    $('.uk-grid-small > div').removeClass('uk-active');
    $('.uk-table-algos').removeClass('uk-active');
});

$('.uk-table-title').on('click', function(){
    $(this).toggleClass('uk-active');
    $(this).next().toggle( "slow" );
});

