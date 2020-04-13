$(document).ready(function () {
	$('.slider').slick({
		dots:true,
		prevArrow:false,
		nextArrow:false,
	});
});


function openbox(blog_button){
	display = document.getElementById('blog-button').style.display;
	
	if(display=='none'){
		document.getElementById('blog-button').style.display='flex';
	} else{
		document.getElementById('blog-button').style.display='none';
	}
}


function ibg(){

		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();


$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});