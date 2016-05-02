/*
Site: Diamond Web and Design
Author:Jerson Salazar Méndez
Updated:March,2016
Updated by:Jerson Salazar Méndez
*/

/*Section We Offert*/
$(document).ready(function(){
	var w = $(window).width();
	if (w>=768){
		var h = $('.get-height').height();
		var pad = (h/2) - (h/4);
		$('.set-height').css({
			'height' : h + 'px',
			'padding-top' : pad + 'px'
		});
	}else{
		$('.set-height').css({
			'height' : 'auto',
			'padding-top' : '0'
		});
	}
});

$(window).resize(function(){
	var w = $(window).width();
	if (w>=768){
		var h = $('.get-height').height();
		var pad = (h/2) - (h/4);
		$('.set-height').css({
			'height' : h + 'px',
			'padding-top' : pad + 'px'
		});
	}else{
		$('.set-height').css({
			'height' : 'auto',
			'padding-top' : '0'
		});
	}
});

/* End Section We Offert*/