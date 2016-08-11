
var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = false;
    ga.src = 'http://www.youtube.com/player_api';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
	var done = false;
    var player;
	var videoContainer;
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		height: '178',
		width: '270',
		videoId: 'uLICoIQ1qng',
		playerVars: {
			controls: 1,
            disablekb: 1,
				autoplay:0
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
	videoContainer = document.querySelector(".video-container");
	setTimeout(function(){
		videoContainer.style.visibility="visible";
	},4600);
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	console.log("test");
	setTimeout(function(){
		console.log("test");
		event.target.playVideo();
	},4000);
	console.log('onPlayerReady', event);
	
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
	console.log('onPlayerStateChange', event);
	if (event.data == YT.PlayerState.PLAYING && !done) {
		//setTimeout(stopVideo, 6000);
		done = true;
	}
}
function stopVideo() {
	player.stopVideo();
}