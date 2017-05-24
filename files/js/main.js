var video = document.querySelector('video');
var highlights = document.querySelectorAll('.transcript-wrapper .highlight');
var time;
var mark;

//reset colors 
function reset() {
	if (document.querySelector(".lit")) {document.querySelector(".lit").className = "";}
}

document.querySelector('.mejs__container, .transcript-wrapper').addEventListener('click', function() {

	//function loop every time video time updates	
	video.addEventListener('timeupdate', function() {
		time = Math.floor(video.currentTime);

		// create loop to cycle over elements
		for (var i = 0;i < highlights.length; i += 1) {
			//get data-time attribute from span for comparrison if time of video mathches data-time attribute on spans
			mark = parseInt(highlights[i].getAttribute('data-time'));
			if (time == mark) {
				//reset last line then set current line
				reset();
				highlights[i].className = "lit";
			}
			//end of video clear all
			if (video.currentTime >= 59) {
				reset();
			}
		} //close for loop
	});
});

//time-bar-clicki  = highilight reset
document.querySelector('.mejs__time-rail').addEventListener('click', function() {
	reset();
});

// click jump
for (var i = 0;i < highlights.length; i += 1) {
	highlights[i].addEventListener('click', function(e) {
		//clear all highlights on click
		reset();
		//get mark data from click to set video time
		e.target.className = ".lit";
		mark = e.target.getAttribute('data-time');
		video.currentTime = mark;

	});
}