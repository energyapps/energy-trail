var i = 1;
var transtime = 2000;

$(document).ready(function(){
	$("body").hide(0)
});


// what to do on load
$(window).on("load", function() {
	$("body").fadeIn(300)
	$("#title-box-cover").animate({left: "100%"},transtime);
	
});


$(window).keypress(function(e) {
    if (e.which === 13) {    	
    	enter(i);    	
    }
});

function enter(i) {
	if (i === 1) {
		title();
	}
	else if (i === 2) {
		idea();
	}
	else if (i === 3) {
		store();
	}
	else if (i === 4) {
		letsgo();
	}
	else if (i === 5) {
		hitit();
	}
}

function title() {
	console.log("start" + i);
	i+=0.5;
	console.log(i)
	$("#title-box-cover").animate({opacity:"0"},50);
	$("#wagon").animate({left:"80%"},transtime,"linear",function(){
		$("#title-box").animate({right:"100%"},transtime);	
		$("#idea-box").animate({right:"0%"},transtime, function(){
			$("#wagon").animate({left:"120%"},(transtime/2),"linear", function(){				
				i += 0.5;
				console.log("end" + i);
			})
		});	
	})
}

function idea() {
	console.log("start" + i);
	i+=0.5;
	console.log(i)
	$("#idea-box").animate({"margin-top":"-51%"},transtime,"linear", function(){
		
	});
	$("#store-box").animate({"margin-top":"0"},transtime,"linear", function(){
		i += 0.5;	
		console.log("end" + i);
	});	
}

function store() {
	console.log("start" + i);
	i+=0.5;
	console.log(i)
	$("#substore").animate({"margin-top":"-90%"},transtime,"linear", function(){
		i += 0.5;	
		console.log("end" + i);
	});
		
}

function letsgo() {
	console.log("start" + i);
	i+=0.5;
	console.log(i)
	$("#store-box").animate({"margin-top":"-50%"},transtime,"linear");
	$("#letsgo-box").animate({"margin-top":"0%"},transtime,"linear",function(){
		i += 0.5;	
		console.log("end" + i);
	});
}

function hitit() {
	console.log("start" + i);
	i+=0.5;
	console.log(i);
	$("#letsgo-upper").animate({"margin-top":"-19%"},(transtime/2),"linear", function(){
		wagon.transition()
	    .ease("linear")
	    .duration(transtime/2)        
	    .attr("x", 0);	
	
	var $udu = $("#updownup");
	var $udd = $("#updowndown");
	var lll = 0;

	  // move the pointer
	  var pointer = setInterval(function(){
	    $udu.toggleClass("active");
	    if (lll != 0) {
	    	$udd.toggleClass("active")
	    };
	    if (lll === 8) {
	    	console.log('test3')
	    	$udu.removeClass("active");
	    	$udd.removeClass("active");
	    	clearInterval(pointer)
	    };
	    lll += 1;	
		}, 800);
	  i += 0.5;	
		console.log("end" + i);
	});	
}


//things to do on scroll
// $(document).scroll(function() {

// })
