const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const modalBtns = document.querySelectorAll('.modal-open');
const modals = document.querySelectorAll('.modal-block');
const modalWrap = document.querySelector('.modal-block__container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
	modalWrap.classList.add('active')
});

loginLink.addEventListener('click', ()=> {
	modalWrap.classList.remove('active')
});

const body = document.body;

// open modal window and locked scroll
function openModal(elem) {
	elem.classList.add('active');
	body.classList.add('locked')
}

// close modal window
function closeModal(e) {
	if (e.target.classList.contains('modal-block__close') || e.target.closest('.modal-block__close') || e.target.classList.contains('modal-block__background')){
			e.target.closest('.modal-block').classList.remove('active');
			body.classList.remove('locked')
	}
	
}

// connection window with sign btn
modalBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let data = e.target.dataset.modalOpen;

		modals.forEach(modal => {
			if(modal.dataset.modal == data)
			openModal(modal)			
		})
	})
})

// close button
modals.forEach(modal => {
	modal.addEventListener('click', e => closeModal(e))
})


// menu open close APP
navBtn.onclick = () => {
	if(nav.classList.toggle('open')) {
		navBtnImg.src = "img/icons/nav-close.svg";
	} else {
		navBtnImg.src = "img/icons/nav-open.svg";
	}
}

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

