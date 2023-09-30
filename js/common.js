$(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

const html = document.querySelector('html')

document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('.menu__icon').addEventListener('click', e => {
		e.preventDefault()
		if (!e.target.closest('.menu').classList.contains('active')) {
			setTimeout(()=> {
				document.querySelector('.menu__overlay').style.display = 'flex'
			}, 0)
			setTimeout(()=> {
				document.querySelector('.menu__overlay').style.opacity = '1'
			}, 10)
			setTimeout(()=> {
				e.target.closest('.menu').classList.add('active')
			}, 500)
			setTimeout(()=> {
				html.style.overflowY = 'hidden'
			}, 1000)
		} else {
			setTimeout(()=> {
				e.target.closest('.menu').classList.remove('active')
			}, 0)
			setTimeout(()=> {
				document.querySelector('.menu__overlay').style.opacity = '0'
			}, 500)
			setTimeout(()=> {
				document.querySelector('.menu__overlay').style.display = 'none'
			}, 1000)
			setTimeout(()=> {
				html.style.overflowY = 'visible'
			}, 1000)
		}
	})

	document.querySelector('.menu__overlay').addEventListener('click', e => {
		e.preventDefault()
		if (document.querySelector('.menu').classList.contains('active')) {
			setTimeout(()=> {
				e.target.closest('.menu').classList.remove('active')
			}, 0)
			setTimeout(()=> {
				document.querySelector('.menu__overlay').style.opacity = '0'
			}, 500)
			setTimeout(()=> {
				document.querySelector('.menu__overlay').style.display = 'none'
			}, 1000)
			setTimeout(()=> {
				html.style.overflowY = 'visible'
			}, 1000)
		}
	})
})