$(document).ready(function(){
  $(window).scroll(function(e){
  	parallaxScroll();
	});
	 
	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		/*$('#parallax-bg-1').css('bottom',(0-(scrolled*.25))+'px');*/
/*		$('#parallax-bg-2').css('top',(0-(scrolled*.4))+'px');
*/		$('#parallax-bg-3').css('top',(0-(scrolled*.75))+'px');
		$('div#bg-2-1').css('left',(-119+(scrolled*.5))+'px');
		$('div#bg-1-1').css('right',(0+(scrolled*.5))+'px');	
		$('.smoke-hldr').css('top',(0+(scrolled*1))+'px');
		$('#smoke').css('width',(350+(scrolled*2))+'px');
		$('#smoke').css('left', (250-(scrolled*.5))+'px');
	}

 }); 
 



 	 

 
 
 
 
 
 
 
 
 
 
 