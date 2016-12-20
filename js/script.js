var i = 1;

$(document).ready(function(){
	$("body").hide(0)
});


// what to do on load
$(window).on("load", function() {
	$("body").fadeIn(300)
	$("#title-box-cover").animate({left: "100%"},2000);
});


$(window).keypress(function(e) {
    if (e.which === 13) {    	
    	enter(i);    	
    }
});

function enter(i) {
	if (i === 1) {
		first();
	}
	else if (i === 2) {
		second();
	};
}

function first() {
	$("#title-box-cover").animate({opacity:"0"},50);
	$("#wagon").animate({left:"80%"},4000,"linear",function(){
		$("#title-box").animate({right:"100%"},4000);	
		$("#idea-box").animate({right:"0%"},4000, function(){
			$("#wagon").animate({left:"120%"},2000,"linear", function(){
				i += 1;
			})
		});	
	})
}

function second() {
	console.log('htest')
}







//things to do on scroll
// $(document).scroll(function() {
// 		var width = $(document).width();
// 		var now = $(document).scrollTop()
// 		if (now <=(5*width / 6)) {
// 			$("#bg0").fadeIn(100)
// 			// $("#title").fadeIn(100)
			
// 		}
// 		else if (now >= (5*width / 6)){
// 			$("#bg0").fadeOut(100)
// 			// $("#title").fadeOut(100)
// 		};

// })
