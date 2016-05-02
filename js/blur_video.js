/*
Site: Diamond Web and Design
Author:Jerson Salazar Méndez
Updated:March,2016
Updated by:Jerson Salazar Méndez
*/

/*video blur*/

$(document).ready(function(){

	var height = $(window).height();

	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop();
		var pixels = scrollTop / 20;

		if(scrollTop < height){
			$("#my").css({
				"-webkit-filter": "blur(" + pixels + "px)",
				"-moz-filter": "blur(" + pixels + "px)",
				"-ms-filter": "blur(" + pixels + "px)",
				"-o-filter": "blur(" + pixels + "px)",
				"filter": "blur(" + pixels + "px)",
				"background-position": "center -" + pixels * 50 + "px"
			});

		}

	});

});


