if ("ontouchstart" in document.documentElement)
{
    /** Jquery stuff **/
    $(document).ready(function () {

        $('.marquee-left').marquee({
            direction: 'left',
            duration: 15000,
            gap: 0,
            delayBeforeStart: 0,
            duplicated: true,
            //pauseOnHover: true,
            startVisible: true
        });

        $('.marquee-right').marquee({
            direction: 'right',
            duration: 15000,
            gap: 0,
            delayBeforeStart: 0,
            duplicated: true,
            //pauseOnHover: true,
            startVisible: true
        });
    });
}
else
{
    /** Image hover **/

    /**
     * demo.js
     * http://www.codrops.com
     *
     * Licensed under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     *
     * Copyright 2018, Codrops
     * http://www.codrops.com
     */
    {
        const mapNumber = (X,A,B,C,D) => (X-A)*(D-C)/(B-A)+C;
        // from http://www.quirksmode.org/js/events_properties.html#position
        const getMousePos = (e) => {
            let posx = 0;
            let posy = 0;
            if (!e) e = window.event;
            if (e.pageX || e.pageY) {
                posx = e.pageX;
                posy = e.pageY;
            }
            else if (e.clientX || e.clientY) 	{
                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            return { x : posx, y : posy }
        }
        // Generate a random float.
        const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

        /**
         * One class per effect.
         * Lots of code is repeated, so that single effects can be easily used.
         */

            // Effect 4
        class HoverImgFx4 {
            constructor(el) {
                this.DOM = {el: el};
                this.DOM.reveal = document.createElement('div');
                this.DOM.reveal.className = 'hover-reveal';
                this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
                this.DOM.el.appendChild(this.DOM.reveal);
                this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
                this.DOM.revealInner.style.overflow = 'hidden';
                this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
                //charming(this.DOM.el);
                this.initEvents();
            }
            initEvents() {
                this.positionElement = (ev) => {
                    const mousePos = getMousePos(ev);
                    const docScrolls = {
                        left : document.body.scrollLeft + document.documentElement.scrollLeft,
                        top : document.body.scrollTop + document.documentElement.scrollTop
                    };
                    this.DOM.reveal.style.top = `${mousePos.y-200-docScrolls.top}px`;
                    this.DOM.reveal.style.left = `${mousePos.x-300-docScrolls.left}px`;
                };
                this.mouseenterFn = (ev) => {
                    this.positionElement(ev);
                    this.showImage();
                };
                this.mousemoveFn = ev => requestAnimationFrame(() => {
                    this.positionElement(ev);
                });
                this.mouseleaveFn = () => {
                    this.hideImage();
                };

                this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
                this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
                this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
            }
            showImage() {
                TweenMax.killTweensOf(this.DOM.revealInner);
                TweenMax.killTweensOf(this.DOM.revealImg);

                this.tl = new TimelineMax({
                    onStart: () => {
                        this.DOM.reveal.style.opacity = 1;
                        TweenMax.set(this.DOM.el, {zIndex: 1});
                    }
                })
                    .add('begin')
                    .add(new TweenMax(this.DOM.revealInner, 0.8, {
                        ease: Expo.easeOut,
                        startAt: {opacity: 0, y: '50%', rotation: -15, scale:0},
                        y: '0%',
                        rotation: 0,
                        opacity: 1,
                        scale: 1
                    }), 'begin')
                    .add(new TweenMax(this.DOM.revealImg, 0.8, {
                        ease: Expo.easeOut,
                        startAt: {rotation: 15, scale: 2},
                        rotation: 0,
                        scale: 1
                    }), 'begin');
            }
            hideImage() {
                TweenMax.killTweensOf(this.DOM.revealInner);
                TweenMax.killTweensOf(this.DOM.revealImg);

                this.tl = new TimelineMax({
                    onStart: () => {
                        TweenMax.set(this.DOM.el, {zIndex: 1});
                    },
                    onComplete: () => {
                        TweenMax.set(this.DOM.el, {zIndex: ''});
                        TweenMax.set(this.DOM.reveal, {opacity: 0});
                    }
                })
                    .add('begin')
                    .add(new TweenMax(this.DOM.revealInner, 0.15, {
                        ease: Sine.easeOut,
                        y: '-40%',
                        rotation: 10,
                        scale: 0.9,
                        opacity: 0
                    }), 'begin')
                    .add(new TweenMax(this.DOM.revealImg, 0.15, {
                        ease: Sine.easeOut,
                        rotation: -10,
                        scale: 1.5
                    }), 'begin')
            }
        }


        //[...document.querySelectorAll('[data-fx="4"] > a, a[data-fx="4"]')].forEach(link => new HoverImgFx4(link));
        [...document.querySelectorAll('[data-fx="4"] > .line, .line[data-fx="4"]')].forEach(link => new HoverImgFx4(link));

        // Demo purspose only: Preload all the images in the page..
        const contentel = document.querySelector('.content');
        [...document.querySelectorAll('.content__text-link')].forEach((el) => {
            const imgsArr = el.dataset.img.split(',');
            for (let i = 0, len = imgsArr.length; i <= len-1; ++i ) {
                const imgel = document.createElement('img');
                imgel.style.visibility = 'hidden';
                imgel.style.width = 0;
                imgel.src = imgsArr[i];
                imgel.className = 'preload';
                contentel.appendChild(imgel);
            }
        });
        imagesLoaded(document.querySelectorAll('.preload'), () => document.body.classList.remove('loading'));
    }


    /** Jquery stuff **/
    $(document).ready(function () {

        /** nick hover **/
        $( ".nick a" ).mouseover(function() {
            $('.outer-wrapper').data('original-color', $(this).css('background-color')).css('background-color','#ffbb0e');
        }).mouseleave(function() {
//        $(this).css("color", $(this).data("original-text-color"));
        });

        /** Title hover **/
        $( ".title a" ).mouseover(function() {
            $('.outer-wrapper').data('original-color', $(this).css('background-color')).css('background-color','#7ED9D9');
        }).mouseleave(function() {
//        $('.outer-wrapper').css("background-color", $('.outer-wrapper').data("original-color"));
        });

        /** youtube hover **/
        $( ".youtube a" ).mouseover(function() {
            $('.outer-wrapper').data('original-color', $(this).css('background-color')).css('background-color','#ff0000');
        }).mouseleave(function() {
//        $('.outer-wrapper').css("background-color", $('.outer-wrapper').data("original-color"));
        });

        /** soundcloud  hover **/
        $( ".soundcloud a" ).mouseover(function() {
            $('.outer-wrapper').data('original-color', $(this).css('background-color')).css('background-color','#ff4500');
        }).mouseleave(function() {
//        $('.outer-wrapper').css("background-color", $('.outer-wrapper').data("original-color"));
        });

        /** svbtle hover **/
        $( ".svbtle a" ).mouseover(function() {
            $('.outer-wrapper').data('original-color', $(this).css('background-color')).css('background-color','#833AB4');
        }).mouseleave(function() {
//        $('.outer-wrapper').css("background-color", $('.outer-wrapper').data("original-color"));
        });

        /** Twitter hover **/
        $( ".twitter a" ).mouseover(function() {
            $('.outer-wrapper').data('original-color', $(this).css('background-color')).css('background-color','#1DA1F2');
        }).mouseleave(function() {
//        $('.outer-wrapper').css("background-color", $('.outer-wrapper').data("original-color"));
        });

        /** Mouse leave **/
        $(".nick a, .title a, .youtube a, .soundcloud a, .svbtle a, .twitter a").mouseleave(function()
        {
            $('.outer-wrapper').css("background-color", $('.outer-wrapper').data("original-color"));
        });

        $('.marquee-left').marquee({
            direction: 'left',
            duration: 30000,
            gap: 0,
            delayBeforeStart: 0,
            duplicated: true,
            pauseOnHover: true,
            startVisible: true
        });

        $('.marquee-right').marquee({
            direction: 'right',
            duration: 30000,
            gap: 0,
            delayBeforeStart: 0,
            duplicated: true,
            pauseOnHover: true,
            startVisible: true
        });
    });
}