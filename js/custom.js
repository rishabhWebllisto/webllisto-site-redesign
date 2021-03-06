$('.carousel-main').owlCarousel({
	items: 3,
	loop: true,
	autoplay: true,
	autoplayTimeout: 3000,
	margin: 10,
	nav: true,
	dots: false,
	navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
});

var slideIndex = 1;
showSlides(slideIndex);
 
function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}
$(document).ready(function(){
  $("#myCarousel_1").carousel();
    if ( $(window).width() < 640 ) {
       $('.col-sm-4').unwrap().addClass('item');
       $('.col-sm-4:first').addClass('active');
    }
});
