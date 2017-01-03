var i = 1;
var transtime = 2000;

$(document).ready(function(){
	$("body").hide(0)
});


// what to do on load
$(window).on("load", function() {
	$("body").fadeIn(300)
	$("#title-box-cover").animate({left: "100%"},transtime);
		
	var $udu = $("#updownup");
	var $udd = $("#updowndown");
	var lll = 0;
	
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
	$("#title-box-cover").animate({opacity:"0"},50);
	$("#wagon").animate({left:"80%"},transtime,"linear",function(){
		$("#title-box").animate({right:"100%"},transtime);	
		$("#idea-box").animate({right:"0%"},transtime, function(){
			$("#wagon").animate({left:"120%"},(transtime/2),"linear", function(){
				console.log('1')
				i += 1;
			})
		});	
	})
}

function idea() {
	
	
	$("#idea-box").animate({"margin-top":"-51%"},transtime,"linear", function(){
		
	});
	$("#store-box").animate({"margin-top":"0"},transtime,"linear");
	console.log('2')
	i += 1;
}

function store() {
	$("#substore").animate({"margin-top":"-90%"},transtime,"linear");
	console.log('3')
	i += 1;
}

function letsgo() {
	$("#store-box").animate({"margin-top":"-50%"},transtime,"linear");
	$("#letsgo-box").animate({"margin-top":"0%"},transtime,"linear");
	console.log('4')
	i += 1;
}

function hitit() {
	$("#letsgo-upper").animate({"margin-top":"-19%"},(transtime/2),"linear", function(){
		wagon.transition()
	    .ease("linear")
	    .duration(transtime/2)        
	    .attr("x", 0);	

	  // move the pointer
	  var pointer = setInterval(function(){
	    $udu.toggleClass("active");
	    if (lll != 0) {
	    	$udd.toggleClass("active")
	    };
	    if (lll === 8) {
	    	console.log('test3')
	    	$udu.removeClass("active");
	    	$udd.removeClass("active")
	    };
	    lll += 1;	
		}, 800);

	});	
	
	console.log('5')
	i += 1;
}


//things to do on scroll
// $(document).scroll(function() {

// })
