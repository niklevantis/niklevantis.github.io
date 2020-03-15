$(document).ready(function() {

	//based on Music Visualization with D3.js by Garry Smith
	
	  var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext)();
	  var audioElement = document.getElementById('audioElement');
	  var audioSrc = audioCtx.createMediaElementSource(audioElement);
	  var analyser = audioCtx.createAnalyser();
	 
	 
	  // fix stupid safari suspension
	  function fixSuspendedState(){
	      if(audioCtx.state == 'suspended'){
	        console.log('suspended. try to wake it')
	        audioCtx.resume();
	        return false;
	      }else{
	        console.log('not suspended, nothing to do.')
	        return true;
	      }
		}

	  // Bind our analyser to the media element source.
	  audioSrc.connect(analyser);
	  audioSrc.connect(audioCtx.destination);
	
	  //var frequencyData = new Uint8Array(analyser.frequencyBinCount);
	  var frequencyData = new Uint8Array(200);
		  
	  var svgHeight = 420;
	  var svgWidth = 1024;

	  function createSvg(parent, height, width) {
		  	  	
	    return d3.select(parent).append('div').classed('svg-container', true).append('svg').attr('x','0px').attr('y','0px').attr('preserveAspectRatio', 'xMinYMid meet').attr('viewBox',  '0 0 ' + width +' '+ height).classed("svg-img", true);
	    
	  }
	  	
	  var svg = createSvg('#audio', svgHeight, svgWidth);
	  
	  // Create our initial D3 chart.
	  svg.selectAll('line')
	     .data(frequencyData)
	     .enter()
	     .append('line')
	     .attr('x1', function (d, i) {
	        return i * (svgWidth / frequencyData.length);
	     });
	
	  // Continuously loop and update chart with frequency data.
	  function renderChart() {
		  			  
	     requestAnimationFrame(renderChart);
	
	     // Copy frequency data to frequencyData array.
	     analyser.getByteFrequencyData(frequencyData);
	
	     // Update d3 chart with new data.
	     svg.selectAll('line')
	        .data(frequencyData)
	        .attr('y1', function(d) {
	           return svgHeight - d - 100;
	        })
	        .attr('x2', function (d, i) {
	        	return i * (svgWidth / frequencyData.length);
	     	})
	        .attr('y2', function(d) {
	           return d + 100;
	        })
	        
	        .attr('stroke', function(d) {
	           return 'rgba(' + 0 + ', ' + 0 + ', ' + 0 + ', 1)';
	        })
	        
	        .attr('stroke-width', function(d) {
	           return d*.02;
	        });
	  }
	  
	  // Run the loop
	  renderChart();
	  
	  //audio controls 
	  
	 $('.startstop').click(function(){
			
		var fixed = fixSuspendedState();
        
	 	 if($(this).hasClass('pause')) {
		 	 document.getElementById('audioElement').pause();
	 	 } else {
		 	document.getElementById('audioElement').play(); 
	 	 }
	 	 $(this).toggleClass('pause');
	  });
	  
});