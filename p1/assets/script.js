/*$(function(){
    $("#heart").click(function(){$(this).toggleClass("active")})
})
*/
$(document).ready(function(){



	/*$(function(){
		$("#heart").click(function(){
  				
  				$("#wig")[0].play();
  				});
		});*/

});

$(function(){
	var i = .25;
  $("#heart").click(function(){
  	i++;
  	$(this).css({
    	transform: `scale(${i},${i})`
    });
  })
})

var sounds = [];

// Return the full list of URLs in random order
function getSounds() {
    return [
        // so tinny...
        'assets/yes.mp3',
        'assets/wow.mp3',
        'assets/legendary.mp3',
        'assets/wig.mp3',
        'assets/iconic.mp3',
        'assets/so hot.mp3',
        'assets/im shaking.mp3',
        'assets/cry.mp3',
        'assets/voices.mp3',
        'assets/ohmygod.mp3',

    ].sort(function () {
        // http://stackoverflow.com/a/18650169/283078
        return (.5 - Math.random());
    });
}

// Play the next sound
function playSound() {
    if (!sounds.length) {
        // Get the list of sounds (random order)
        sounds = getSounds();
    }

    // Pops a URL every time, ensuring all are played exactly once
    $("#item").html(
        '<embed src="' + sounds.pop() +
        '" hidden="true" autostart="true" />'
    );

    // Once all the URLs have been popped, the array is repopulated
}

$('#heart').click(playSound);