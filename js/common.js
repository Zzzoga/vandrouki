$(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

	options = {
	  path: '/',
	  ...options
	};
  
	if (options.expires instanceof Date) {
	  options.expires = options.expires.toUTCString();
	}
  
	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
	for (let optionKey in options) {
	  updatedCookie += "; " + optionKey;
	  let optionValue = options[optionKey];
	  if (optionValue !== true) {
		updatedCookie += "=" + optionValue;
	  }
	}
  
	document.cookie = updatedCookie;
}

function deleteCookie(name) {
	setCookie(name, "", {
	  'max-age': -1
	})
}

const html = document.querySelector('html')

// if (getCookie('banner') === 'disabled') {
// 	document.querySelector('.info__banner__container').remove()
// }

document.addEventListener('DOMContentLoaded', () => {

	// show/hide menu&from block
	function showHideModal(btn, modal, menu, overlay) {
		document.querySelector(btn).addEventListener('click', e => {
			e.preventDefault()
			if (!document.querySelector(modal).classList.contains('active')) {
				setTimeout(()=> {
					document.querySelector(overlay).style.display = 'flex'
					document.querySelector(menu).style.display = 'flex'
				}, 0)
				setTimeout(()=> {
					document.querySelector(overlay).style.opacity = '1'
				}, 10)
				setTimeout(()=> {
					document.querySelector(modal).classList.add('active')
					document.querySelector(menu).classList.add('active')
				}, 500)
				setTimeout(()=> {
					html.style.overflowY = 'hidden'
					
				}, 1000)
			} else {
				setTimeout(()=> {
					document.querySelector(modal).classList.remove('active')
					document.querySelector(menu).classList.remove('active')
				}, 0)
				setTimeout(()=> {
					document.querySelector(overlay).style.opacity = '0'
				}, 500)
				setTimeout(()=> {
					document.querySelector(overlay).style.display = 'none'
					document.querySelector(menu).style.display = 'none'
				}, 1000)
				setTimeout(()=> {
					html.style.overflowY = 'visible'
				}, 1000)
			}
		})
	}

	function overlayClickHideModal(overlay, menu, modal) {
		document.querySelector(overlay).addEventListener('click', e => {
			e.preventDefault()
			if (document.querySelector(modal).classList.contains('active')) {
				setTimeout(()=> {
					document.querySelector(modal).classList.remove('active')
					document.querySelector(menu).classList.remove('active')
				}, 0)
				setTimeout(()=> {
					document.querySelector(overlay).style.opacity = '0'
				}, 500)
				setTimeout(()=> {
					document.querySelector(overlay).style.display = 'none'
					document.querySelector(menu).style.display = 'none'
				}, 1000)
				setTimeout(()=> {
					html.style.overflowY = 'visible'
				}, 1000)
			}
		})
	}

	showHideModal('.menu__icon', '.menu', '.menu__list', '.overlay__menu')
	showHideModal('.mobile__menu__close', '.menu', '.menu__list', '.overlay__menu')
	overlayClickHideModal('.overlay__menu', '.menu__list', '.menu')

	if (document.querySelector('.from__btn') !== null) { 
		showHideModal('.from__btn', '.from', '.from__modal__container', '.overlay__from')
		showHideModal('img.from__modal__close', '.from', '.from__modal__container', '.overlay__from')
		overlayClickHideModal('.overlay__from', '.from__modal__container', '.from')

		document.querySelectorAll('.from__list__link').forEach(btn => {
			btn.addEventListener('click', e => {
				e.preventDefault()
				if (!e.target.classList.contains('active')) {
					document.querySelectorAll('.from__list__link').forEach(e => {
						e.classList.remove('active')
					})
					e.target.classList.add('active')
					document.querySelector('.from__text').innerHTML = e.target.innerHTML

					setTimeout(() => {
						setTimeout(()=> {
							document.querySelector('.from').classList.remove('active')
							document.querySelector('.from__modal__container').classList.remove('active')
						}, 0)
						setTimeout(()=> {
							document.querySelector('.from__overlay').style.opacity = '0'
						}, 500)
						setTimeout(()=> {
							document.querySelector('.from__overlay').style.display = 'none'
							document.querySelector('.from__modal__container').style.display = 'none'
						}, 1000)
						setTimeout(()=> {
							html.style.overflowY = 'visible'
						}, 1000)
					}, 500)
				} else {
					setTimeout(() => {
						setTimeout(()=> {
							document.querySelector('.from').classList.remove('active')
							document.querySelector('.from__modal__container').classList.remove('active')
						}, 0)
						setTimeout(()=> {
							document.querySelector('.from__overlay').style.opacity = '0'
						}, 500)
						setTimeout(()=> {
							document.querySelector('.from__overlay').style.display = 'none'
							document.querySelector('.from__modal__container').style.display = 'none'
						}, 1000)
						setTimeout(()=> {
							html.style.overflowY = 'visible'
						}, 1000)
					}, 500)
				}
			})
		});
	}
	
	// from search reset
	// document.querySelector('img.from__modal__close').addEventListener('click', e => {
	// 	document.querySelector('form#from__search').reset()
	// })

	// show/hide info modal banner
	if (document.querySelector('a.how__work') !== null) {
		document.querySelector('a.how__work').addEventListener('click', e => {
			e.preventDefault()
			if (!document.querySelector('.info__banner__modal__container').classList.contains('active')) {
				document.querySelector('.info__banner__modal__container').classList.add('active')
				html.style.overflowY = 'hidden'
			}
		})
	}

	function closeInfoModalBanner(btn, modal) {
		document.querySelector(btn).addEventListener('click', e => {
			e.preventDefault()
			if (document.querySelector(modal).classList.contains('active')) {
				document.querySelector(modal).classList.remove('active')
				html.style.overflowY = 'visible'
			}
		})
	}

	closeInfoModalBanner('img.banner__modal__close', '.info__banner__modal__container')
	closeInfoModalBanner('.modal__banner__overlay', '.info__banner__modal__container')
	closeInfoModalBanner('.banner__btn', '.info__banner__modal__container')

	// Banner disabled function
	if (document.querySelector('img.info__banner__close') !== null) {
		document.querySelector('img.info__banner__close').addEventListener('click', e => {
			setCookie('banner', 'disabled')
			document.querySelector('.info__banner__container').classList.add('disabled')
		})
	}

	// Change category active link
	document.querySelectorAll('a.cat__list__item').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			if (!e.target.closest('a.cat__list__item').classList.contains('active')) {
				document.querySelectorAll('a.cat__list__item').forEach(btn => {
					btn.classList.remove('active')
				})
				e.target.closest('a.cat__list__item').classList.add('active')
			} else {
				
			}
		})
	})

	// Share btns show/hide
	if (document.querySelector('.post__info') !== null) {
		document.querySelector('a.share__btn').addEventListener('click', e => {
			e.preventDefault()
			if (!document.querySelector('.post__info').classList.contains('soc__active')) {
				document.querySelector('.post__info').classList.add('soc__active')
			} else {
				document.querySelector('.post__info').classList.remove('soc__active')
			}
			
		})

		document.querySelector('.btns__overlay').addEventListener('click', e => {
			e.preventDefault()
			if (document.querySelector('.post__info').classList.contains('soc__active')) {
				document.querySelector('.post__info').classList.remove('soc__active')
			}
		})
	}

	// Show/hide modal search form
	document.querySelector('.mobile__search').addEventListener('click', e => {
		if (!document.querySelector('.mobile__search').classList.contains('active')) {
			document.querySelector('.search__overlay').style.display = 'flex'
			setTimeout(() => {
				document.querySelector('.mobile__search').classList.add('active')
			}, 100)
			setTimeout(() => {
				document.querySelector('.search').classList.add('active')
			}, 500)
		} else {
			document.querySelector('.search').classList.remove('active')
			setTimeout(() => {
				document.querySelector('.mobile__search').classList.remove('active')
			}, 500)
			setTimeout(() => {
				document.querySelector('.search__overlay').style.display = 'none'
			}, 1000)
		}
		 
	})
	
	document.querySelector('.search__overlay').addEventListener('click', e => {
		if (document.querySelector('.mobile__search').classList.contains('active')) {
			document.querySelector('.search').classList.remove('active')
			setTimeout(() => {
				document.querySelector('.mobile__search').classList.remove('active')
			}, 500)
			setTimeout(() => {
				document.querySelector('.search__overlay').style.display = 'none'
			}, 1000)
		}
		 
	})

	// fixed header on scroll
	$(function() {
		let header = $('header');
		let hederHeight = header.height(); // вычисляем высоту шапки
		 
		$(window).scroll(function() {
		  if($(this).scrollTop() > 400) {
		   header.addClass('header_fixed');
		   $('body').css({
			  'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
		   });
		  } else {
		   header.removeClass('header_fixed');
		   $('body').css({
			'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
		   })
		  }
		});
	});
})