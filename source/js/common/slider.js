"use strict";

export default function slider() {
    var counter = 0,
        duration = 300,
        flag = true,
        items = $('.slider__item'),
        image = $('.slider__display-img'),
        sliderTitle = $('.slider__title'),
        sliderTech = $('.slider__skills'),
        sliderBtn = $('.slider__btn'),
        controlPrev = $('.slider__controls-item--prev'),
        controlNext = $('.slider__controls-item--next'),
        activeSlide,
        prevSlide,
        nextSlide;

    function init() {
        setIndexSlide();
        changeSlide();
    }

    function setCounter (num) {
        if (num < 0) {
            num = items.length - 1;
        } else if (num > items.length - 1) {
            num = 0;
        }
        console.log(num);
        return num;
    }

    function setIndexSlide() {
        var prevIndex = setCounter(counter - 1),
            nextIndex = setCounter(counter + 1);

        activeSlide = items.eq(counter);
        prevSlide = items.eq(prevIndex);
        nextSlide = items.eq(nextIndex);
    }

    function changeBackground(elem, background) {
        elem.css('background-image', 'url("' + background + '")');
        return elem;
    }

    function movePreviewSlide(container, direction, background) {
        var previewCurrent = container.find('.slider__preview--current'),
            previewNext = container.find('.slider__preview--next'),
            direction = direction == 'down' ? 100: -100;

        changeBackground(previewNext, background).animate({
            top: '0%'
        }, duration, function () {
            $(this).css('top', -direction + '%');
        });

        previewCurrent.animate({
            top: direction + '%'
        }, duration, function () {
            changeBackground($(this), background).css('top', '0');
            flag = true;
        });
    }

    $.fn.animateText = function(string) {
        string = string ? string : this.text();
        return this.each(function(){
            var $this = $(this);
            $this.html(string.replace(/./g, '<span class="opacityHide">$&</span>'));
            $this.find('span.opacityHide').each(function(i, el){
                setTimeout(function(){ $(el).addClass('bounceIn'); }, 20 * i);
            });
        });
    };

    function changeText() {
        sliderTitle.animateText(activeSlide.data('name'));
        sliderTech.animateText(activeSlide.data('tech'));
        sliderBtn.attr('href', activeSlide.data('link'));
    }

    function changeSlide() {
        image.fadeOut(duration, function () {
            $(this).attr('src', activeSlide.data('picture')).fadeIn();
        });
        changeText();
        movePreviewSlide(controlPrev, 'down', prevSlide.data('picture'));
        movePreviewSlide(controlNext, 'up', nextSlide.data('picture'));

    }

    $(window).load(init);
    $('.slider__controls-item').on('click', function (e) {
        e.preventDefault();
        var
            $this = $(this);

        if (flag) {
            flag = false;
            if ($this.hasClass('slider__controls-item--prev')) {
                counter = setCounter(--counter);
                setIndexSlide();
                changeSlide();
            }

            if ($this.hasClass('slider__controls-item--next')) {
                counter = setCounter(++counter);
                setIndexSlide();
                changeSlide();
            }
        }

    });
};