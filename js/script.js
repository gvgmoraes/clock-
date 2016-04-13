$(document).ready(function(){

	var newTime = new Date();
	console.log(newTime);

	var nextTick = setInterval(function(){

		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var ms = time.getMilliseconds();

		$('#hr').text(hr);
		$('#min').text(min);
		$('#sec').text(sec);
		$('#ms').text(ms);


		if (min % 2==0){
			//pick color corresponding to index and set to background
			$('#min').css("color","red");
		} else { 
			$('#min').css("color","white");
		};


		if (min % 5==0 && ms <10 && sec==0){
			var startMin = min; 
			var changeMin = startMin+5;
			var colorArray = ['green','blue','orange','yellow', 'red']
			var colorpick = Math.floor((Math.random()*4)); // picking index at ramdom 
			$('#clock').css("background-color",colorArray[colorpick]); //pick color corresponding to index and set to background
		};
			
		if (min == 00 && ms<10 && sec==0)	{
			var colorArray = ['green','blue','orange','yellow', 'red']
			var colorpick = Math.floor((Math.random()*4)); // picking index at ramdom 
			$('h1').css("color",colorArray[colorpick])
		};




	}, 1);

});

