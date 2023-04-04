
import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from 'swiper';

import "../../scss/base/swiper.scss";

function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}


function initSliders() {

	bildSliders();


	if (document.querySelector('.main-block__slider')) {
		new Swiper('.main-block__slider', {

			modules: [Navigation, Pagination, Parallax, Autoplay],

			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 50,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.controll-main-block__dotts',
				clickable: true,
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {
				init: function (swiper) {
					const allSlides = document.querySelector('.fraction-controll__all');
					const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
					allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
				},
				slideChange: function (swiper) {
					const currentSlide = document.querySelector('.fraction-controll__current');
					currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
				}
			}
		});
	}

  if (document.querySelector('.products-slider')) {
		new Swiper('.products-slider__slider', {

			modules: [Navigation, Pagination, Autoplay],
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			parallax: true,
      loop: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.products-slider__dotts',
				clickable: true,
				dynamicBullets: true
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1370: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			on: {
				init: function (swiper) {

				}
			}
		});
	}

  if (document.querySelector('.products-new')) {
		new Swiper('.products-new__slider', {

			modules: [Navigation, Pagination, Autoplay],
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.products-new__dotts',
				clickable: true,
				dynamicBullets: true
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1330: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			on: {
				init: function (swiper) {

				}
			}
		});
	}

  if (document.querySelector('.thumbs-images')) {
		const thumbsSwiper = new Swiper('.thumbs-images', {

			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 16,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.products-new__dotts',
				clickable: true,
				dynamicBullets: true
			},

			breakpoints: {
				992: {
					slidesPerView: 3,
				},
				1330: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
			},
			on: {
				init: function (swiper) {

				}
			}
		});
		new Swiper('.images-product__slider', {
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			thumbs: {
				swiper: thumbsSwiper
			},
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			on: {
				init: function (swiper) {

				}
			}
		});

	}
}

function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {

	initSliders();

});