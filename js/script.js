
var i = 0;

$(document).ready(function(){
	$("body").hide(0)
});

$(window).on("load", function() {
	$("body").fadeIn(300)
	$("#title-box-cover").animate({left: "100%"},2000);
	// $("#title-box-cover").fadeOut();
	// console.log("test3")
});

$(document).scroll(function() {
		var width = $(document).width();
		var now = $(document).scrollTop()
		if (now <=(5*width / 6)) {
			$("#bg0").fadeIn(100)
			// $("#title").fadeIn(100)
			
		}
		else if (now >= (5*width / 6)){
			$("#bg0").fadeOut(100)
			// $("#title").fadeOut(100)
		};

})

$(window).keypress(function(e) {
    if (e.which === 13) {
    	$("#wagon").animate({left:"45%"},4000)    	
    }
});