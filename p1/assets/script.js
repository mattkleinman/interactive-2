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


// $( "#heart" ).mouseOn(function() {
//     $( this ).animate({boxShadow: '0 0 30px #ff0000'}, 200 );
// });

// $( "#heart" ).mouseOff(function() {
//     $( this ).animate({boxShadow: '0 0 0 #000000'}, 200 );
// });

$(function(){
	var i = .5;
  $("#heart").click(function(){
  	i++;
  	$(this).css({
    	transform: `scale(${i},${i})`
    });
  })
})

$(function(){
    var NewContent='<div class="heart"></div>'
    $(".add").click(function(){
        $("#heart").after(NewContent);
    });
});

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

$(function(){
	var i = .5;
  $("#heart2").click(function(){
  	i++;
  	$(this).css({
    	transform: `scale(${i},${i})`
    });
  })
})

$(function(){
    var NewContent='<div class="heart2"></div>'
    $(".add").click(function(){
        $("#heart2").after(NewContent);
    });
});

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
    $("#item2").html(
        '<embed src="' + sounds.pop() +
        '" hidden="true" autostart="true" />'
    );

    // Once all the URLs have been popped, the array is repopulated
}

$('#heart2').click(playSound);

$(function(){
	var i = .5;
  $("#heart3").click(function(){
  	i++;
  	$(this).css({
    	transform: `scale(${i},${i})`
    });
  })
})

$(function(){
    var NewContent='<div class="heart3"></div>'
    $(".add").click(function(){
        $("#heart3").after(NewContent);
    });
});

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
    $("#item3").html(
        '<embed src="' + sounds.pop() +
        '" hidden="true" autostart="true" />'
    );

    // Once all the URLs have been popped, the array is repopulated
}

$('#heart3').click(playSound);

$(function(){
	var i = .5;
  $("#heart4").click(function(){
  	i++;
  	$(this).css({
    	transform: `scale(${i},${i})`
    });
  })
})

$(function(){
    var NewContent='<div class="heart4"></div>'
    $(".add").click(function(){
        $("#heart4").after(NewContent);
    });
});

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
    $("#item4").html(
        '<embed src="' + sounds.pop() +
        '" hidden="true" autostart="true" />'
    );

    // Once all the URLs have been popped, the array is repopulated
}

$('#heart4').click(playSound);

$(function(){
	var i = .5;
  $("#heart5").click(function(){
  	i++;
  	$(this).css({
    	transform: `scale(${i},${i})`
    });
  })
})

$(function(){
	var i = .5;
  $("#heart6").click(function(){
  	i++;
  	$(this).css({
    	transform: `scale(${i},${i})`
    });
  })
})

$(function(){
	var i = .5;
  $("#heart7").click(function(){
  	i++;
  	$(this).css({
    	transform: `scale(${i},${i})`
    });
  })
})