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


var heightTable = {
    state: {
        'content': '.uk-content-algos .uk-holder-grid',
        'overlay': '.uk-overlay',
        'height_table': false,
        'item': false,
        'top_height': false
    },
    init: function () {

        var self = this;

        this.calcHeightTable();
        this.updateHeight();
        this.updateOverlay();
        this.updateAccordion(this.state.item);

    },
    calcHeightTable: function ($item) {
        var $this = $($item).parent();
        this.state.height_table = $this.find('.uk-table-algos > table').height();
    },
    calcHeightContent: function () {
        var contentHeight = $(this.state.content);
        var heigtGrid = contentHeight.offset().top,
        tableH = this.state.top_height-heigtGrid+this.state.height_table;

        contentHeight.css('min-height', tableH);
    },
    calcPosition: function ($item) {
        var $this = $($item),
        offset = $this.offset(),
        height = $this.outerHeight();
        this.state.top_height = offset.top + height + 20;
        $this.next().css('top', this.state.top_height );
    },
    pageAddClass: function ($item) {

        var $this = $($item);

        if($this.hasClass('uk-active')) {
            $this.removeClass('uk-active');
        }else {
            $this.addClass('uk-active');
        }

    },
    showContent: function($item) {

        var $this = $($item).parent();

        if($this.hasClass('uk-active')) {
            $this.removeClass('uk-active');
        }else {
            $this.addClass('uk-active');
        }
    },
    removeHeight: function () {
        var $this = $(this.state.content);

        if(!$(this.state.overlay).hasClass('uk-active')){
            $this.css('min-height', 'inherit');
        }
    },
    updateHeight: function () {
        var self = this;

        $('.uk-card-algos').on('click', function(){

            self.state.item = $(this);

            self.pageAddClass(self.state.overlay);
            self.showContent(self.state.item);
            self.calcHeightTable(self.state.item);
            self.calcPosition(self.state.item);
            self.calcHeightContent();
            self.removeHeight();

        })
    },
    updateOverlay: function () {
        var self = this;

        $(this.state.overlay).on('click', function(){
            self.pageAddClass(self.state.overlay);
            self.showContent(self.state.item);
            self.removeHeight();
        })
    },
    updateAccordion: function ($item) {
        var self = this;
        $('.uk-table-title').on('click', function(){
            var $this = $(this);
            self.pageAddClass($this);

            var accordContent = $this.next();
            if($this.hasClass('uk-active')) {
                accordContent.show();
            }else {
                accordContent.hide();
            }

            self.calcHeightTable(self.state.item);
            self.calcHeightContent();
            self.removeHeight();
        })
    }
}
heightTable.init();

