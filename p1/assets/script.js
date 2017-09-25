/*$(function(){
    $("#heart").click(function(){$(this).toggleClass("active")})
})
*/
$(function(){
    $("#whiteheart").click(function(){$(this).toggleClass("active")})
})

$(function(){
	var i = .25;
  $("#heart").click(function(){
  	i++;
  	$(this).css({
    	transform: `scale(${i},${i})`
    });
  })
})

$(function(){
	$("#heart").click(function(){
  				$("#yes")[0].pause();
  				$("#yes")[0].currentTime = 0;
  				$("#yes")[0].play();
  				});
})