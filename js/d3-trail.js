//its === starting iteration number, itsN is total number of iterations in the sin curve, mult by 2 for 16 total
var its = 0;
var itsN = 8;
var scroll = 100; //(scroll amount) Need to do this based on height?
var width = parseInt(d3.select("#d3-container").style("width"));
var height = 500; //height of d3 box

//Box parameters
var barPadding = 1;
var imgWidth = 50;
var imgHeight = 50;
var pixwidth = 799;
var pixheight = 152;

var doubleheight = (itsN*scroll*2);
var stops = 12;


var svg = d3.select("#d3-container").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("background-color","rgb(97,98,24)");

var group = svg
    .append("g")
    .attr("id", "grouper")
    .attr("transform", "translate(0,0)");

var defs = svg.append("defs")
  .attr("id","mdef")
          
var pattern1 = defs.append("pattern")  
  .attr("id","wagon-image")
  .attr("width",1)
  .attr("height",1)
  .append("svg:image")
    .attr("width",100)
    .attr("height",100)
    .attr("xlink:href", "img/battery-wagon.png");

var pixPattern1 = defs.append("pattern")
  .attr("width",pixwidth)
  .attr("height",pixheight)
  .attr("id","pixPattern1")
  .attr("patternUnits","userSpaceOnUse")
  .append("svg:image")
    .attr("width",pixwidth)
    .attr("height",pixheight)
    .attr("xlink:href", "img/bkg_pixels/stage1-top.png");    

var pixPattern2 = defs.append("pattern")
  .attr("width",pixwidth)
  .attr("height",pixheight)
  .attr("y",80)
  .attr("id","pixPattern2")
  .attr("patternUnits","userSpaceOnUse")
  .append("svg:image")
    .attr("width",pixwidth)
    .attr("height",pixheight)
    .attr("xlink:href", "img/bkg_pixels/stage2-top.png");    

var pixPattern3 = defs.append("pattern")
  .attr("width",pixwidth)
  .attr("height",pixheight)
  .attr("y","8")
  .attr("id","pixPattern3")
  .attr("patternUnits","userSpaceOnUse")
  .append("svg:image")
    .attr("width",pixwidth)
    .attr("height",pixheight)
    .attr("xlink:href", "img/bkg_pixels/stage3-bottom.png");        

var pixels1 = group.append("rect")
  .attr("x",0)
  .attr("y", 0)
  .attr("width",width)
  .attr("height",pixheight)
  .attr("fill","url(#pixPattern1)");

var background2 = group.append("rect")
  .attr("x",0)
  .attr("y", doubleheight+pixheight)
  .attr("width",width)
  .attr("height",doubleheight)
  .attr("fill","rgb(124,123,33)");  
  
var pixels2 = group.append("rect")
  .attr("x",0)
  .attr("y", doubleheight)
  .attr("width",width)
  .attr("height",pixheight)
  .attr("fill","url(#pixPattern2)");  

var pixels3 = group.append("rect")
  .attr("x",0)
  .attr("y", doubleheight*2)
  .attr("width",width)
  .attr("height",pixheight)
  .attr("fill","url(#pixPattern3)");    

for (var i = 0; i < stops; i++) {
	var test = i/2;
	if (isEven(i) === true) {		
		var spotX = 5;
	} else {
		var spotX = 25;
	};

	group.append("rect")
		.attr("stroke", "red")
    .attr("fill", "blue")
    .attr("width", 200)
    .attr("height", 200)
    .attr("x", function() {return spotX*20})
    .attr("y", function() {return i*scroll*itsN});
};	

// wagon starts offscreen left, moves into screen in script.js
var wagon = svg.append("rect")
  .attr("x",-200)
  .attr("y", 50)
  .attr("width",1000)
  .attr("height",100)
  .attr("fill","transparent")
  .style("fill", "url(#wagon-image)");

function upwards() {
  its -= 1;
 
  var yy = group[0]["0"].transform.baseVal["0"].matrix.f + scroll;
  console.log(yy);

  if (yy <= 0) {
		wagon.transition()
    .ease("linear")
    .duration(100)        
    .attr("x", function(d) {
    	return ((1 - Math.cos(its/itsN*Math.PI))*((width-100)/2))
    });

  	group.transition()
    .ease("linear")
    .duration(100)  
    .attr("transform", "translate(" + 0 + "," + yy + ")");	
  };
}

function downwards() {
  its +=1;
  
	var yy = group[0]["0"].transform.baseVal["0"].matrix.f + -scroll;
	console.log(yy);

	wagon.transition()
    .ease("linear")
    .duration(100)        
    .attr("x",((1 - Math.cos(its/itsN*Math.PI))*((width-100)/2)));

  group.transition()
    .ease("linear")
    .duration(100)  
    .attr("transform", "translate(" + 0 + "," + yy + ")");

}

function move(direction) {
  return function(event) {
    event.preventDefault();
      if (direction === "up") {        
        upwards();
      } else if (direction === "down") {
        downwards();
      };
  };
}


var $udu = $("#updownup");
var $udd = $("#updowndown");

$udu.click(function() {	
	console.log('upperclick')
	upwards();
})
$udd.click(function() {
	downwards();
})


d3.select('body').call(d3.keybinding()
    .on('←', move("up"))
    .on('↑', move("up"))
    .on('→', move("down"))
    .on('↓', move("down")));


function isEven(x) {
	var xx = x/2;	
	if (xx.toString().slice(-1) === "5" && xx.toString().length === 3) {		
		return false;
	} else {
		return true;
	};
};