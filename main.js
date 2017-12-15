//set default degree (360*5)
	var degree = 1800;
	//number of clinamecks = 0
	var clicks = 0;

function spin(name , wheel){
	
	//add 1 every click
	clicks ++;
		
	/*multiply the degree by number of clicks
	generate random number between 1 - 360, 
    then add to the new degree*/
	var newDegree = degree*clicks;
	var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
	totalDegree = newDegree+extraDegree;
		
	/*let's make the spin btn to tilt every
	time the edge of the section hits 
	the indicator*/
	var b = '#'+name +' .inner-wheel .sec';
	console.log(b);
	 
	$(b).each(function() {
		var t = $(this);
		var noY = 0;
		console.log(wheel);
		var c = 0;
		var n = 700;
		console.log(n)	
		var interval = setInterval(function () {
			c++;				
			
			if (c === n) { 
				clearInterval(interval);				
			}	
				
			var aoY = t.offset().top;
			
			/*23.7 is the minumum offset number that 
			each section can get, in a 30 angle degree.
			So, if the offset reaches 23.7, then we know
			that it has a 30 degree angle and therefore, 
			exactly aligned with the spin btn*/
			if(aoY < 23.89){
				$('.spin').addClass('spinner');
				setTimeout(function () { 
					$('.spin').removeClass('spinner');
				}, 100);	
			}
		}, 10);
		// console.log(name);
		console.log(wheel);
		$('#'+wheel).css({
			'transform' : 'rotate(' + totalDegree + 'deg)'			
		});
		console.log("after");

		noY = t.offset().top;

		
		});
	}


$(document).ready(function(){
	
	/*WHEEL SPIN FUNCTION*/
	$('#spin1').click(function(){
		var name = $(this).data("name");
		var wheel = $(this).data("wheel");
			spin(name,wheel);
			$("#exampleModal").modal();
		});

	$('#spin2').click(function(){
		var name = $(this).data("name");
		var wheel = $(this).data("wheel");
			spin(name,wheel);
			spin();
		});
	$('#spin3').click(function(){
		var name = $(this).data("name");
		var wheel = $(this).data("wheel");
			spin(name,wheel);
			spin();
		});
	});
