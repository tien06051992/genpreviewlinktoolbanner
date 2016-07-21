/*******************
VARIABLES
*******************/
var container;
var expandedContent;
var closeButton;
var clickthroughButton;
var userActionButton;
var videoContainer;
var video;
var videoTrackingModule;
var sdkVideoPlayer;
var sdkVideoPlayButton;	
var sdkData = null;
var timeUntilAutoCollapse = false; // set to false for no auto-collapse
var autoCollapseTimer;
var isWindowsPhone = (/windows phone/i).test(navigator.userAgent);
var isAndroid2 = (/android 2/i).test(navigator.userAgent);
var android2ResizeTimeout;

/*******************
INITIALIZATION
*******************/
function checkIfEBInitialized(event)
{
	if (EB.isInitialized())
	{
		initializeCreative();
	}
	else
	{
		EB.addEventListener(EBG.EventName.EB_INITIALIZED, initializeCreative);
	}
}

function initializeCreative(event)
{
	initializeGlobalVariables();
	initializeCloseButton();
	initializeVideo();

	playVideo();
	timeline();

	addEventListeners();
	autoExpand();

	if (timeUntilAutoCollapse)
	{
		autoCollapseTimer = setTimeout(collapse, timeUntilAutoCollapse);
		if (video !== null)
		{
			video.addEventListener("play", cancelAutoCollapse);
		}
	}
}

function initializeGlobalVariables()
{
	container = document.getElementById("container");
	expandedContent = document.getElementById("expanded-content");
	closeButton = document.getElementById("close-button");
	userActionButton = document.getElementById("user-action-button");
	clickthroughButton = document.getElementById("clickthrough-button");	
	videoContainer = document.getElementById("video-container");
	video = document.getElementById("video");
	sdkVideoPlayer = document.getElementById("sdkVideoPlayer");
	sdkVideoPlayButton = document.getElementById("sdkVideoPlayButton");

	playPauseBtn = document.querySelector(".play-btn");
    soundBtn = document.querySelector(".sound-btn");
    imgPlay = document.querySelector(".play-img");
    imgPause = document.querySelector(".pause-img");
    imgReplay = document.querySelector(".replay-img");
    imgSoundOn = document.querySelector(".sound-on-img");
    imgSoundOff = document.querySelector(".sound-off-img");
    imgEndFrame = document.querySelector("#endframe");			
	
	sdkData = EB.getSDKData();
}

function initializeCloseButton()
{
	var enableSDKDefaultCloseButton = EB._adConfig && EB._adConfig.hasOwnProperty("mdEnableSDKDefaultCloseButton") ? EB._adConfig.mdEnableSDKDefaultCloseButton : false;
	if (sdkData !== null)
	{
		if (sdkData.SDKType === "MRAID" && !enableSDKDefaultCloseButton)
		{
			// set sdk to use custom close button
			EB.setExpandProperties({useCustomClose: true});
			closeButton.style.display = "block";
		}
	}
	else
	{
		closeButton.style.display = "block";
	}
}

function initializeVideo()
{
	var useSDKVideoPlayer = false;
	var sdkPlayerVideoFormat = EB._adConfig && EB._adConfig.hasOwnProperty("mdSDKVideoFormat") ? EB._adConfig.mdSDKVideoFormat : "mp4";
	var enableSDKVideoPlayer = EB._adConfig && EB._adConfig.hasOwnProperty("mdEnableSDKVideoPlayer") ? EB._adConfig.mdEnableSDKVideoPlayer : true;
	var autoPlayVideo = EB._adConfig && EB._adConfig.hasOwnProperty("mdAutoPlayVideo") ? EB._adConfig.mdAutoPlayVideo : false;
	
	if (sdkData !== null) {
		if (sdkData.SDKType === "MRAID" && sdkData.version > 1 && enableSDKVideoPlayer)
		{
			var sourceTags = video.getElementsByTagName("source");
			var videoSource = "";
			for (var i = 0 ; i < sourceTags.length; i ++)
			{
				if (sourceTags[i].getAttribute("type"))
				{
					if (sourceTags[i].getAttribute("type").toLowerCase() === "video/" + sdkPlayerVideoFormat.toLowerCase())
					{
						videoSource = sourceTags[i].getAttribute("src");
					}
				}
			}
			if (videoSource !== "")
			{
				sdkVideoPlayButton.addEventListener("click", function()
				{
					EB.playVideoOnNativePlayer(videoSource);
				});
				videoContainer.removeChild(video);
				video = null;
				useSDKVideoPlayer = true;
			}
		}
	}
	if (!useSDKVideoPlayer)
	{
		videoContainer.removeChild(sdkVideoPlayer);
		video.addEventListener("touchstart", allowPageScrolling);
		video.addEventListener("touchend", preventPageScrolling);		
		videoTrackingModule = new EBG.VideoModule(video);
		if (isWindowsPhone)
		{
			video.addEventListener("click", function(event)
			{
				var videoWidth = getStyle(this, "width");
				var videoHeight = getStyle(this, "height");
				if(videoWidth < 168 || videoHeight < 152)
				{
					video.play();
				}
			}, false);			
		}
	}
	videoContainer.style.visibility = "visible";
	if (!useSDKVideoPlayer && autoPlayVideo)
	{
		videoTrackingModule.playVideo(false);
	}
}

function addEventListeners()
{
	userActionButton.addEventListener("click", handleUserActionButtonClick);
	clickthroughButton.addEventListener("click", handleClickthroughButtonClick);
	closeButton.addEventListener("click", handleCloseButtonClick);

	soundBtn.addEventListener("click", toogleSound, false);
    imgReplay.addEventListener("click", replayAd, true);
    playPauseBtn.addEventListener("click", tooglePlayPause, false);
}	


/*******************
EVENT HANDLERS
*******************/
function handleCloseButtonClick()
{
	pauseVideo();
	setTimeout(function() { // 200ms delay to make sure pause video tracked before collapse
		EB.collapse();
		container.className = "collapsed";
		expandedContent.style.display = "none";	
		removeAd();
	}, 200);
}

function handleUserActionButtonClick()
{
	pauseVideo();
	EB.userActionCounter("CustomInteraction");
}

function handleClickthroughButtonClick()
{
	pauseVideo();
	EB.clickthrough();
}

function onMessageReceived(event)
{
	try
	{
		var messageData = JSON.parse(event.data);
		if (messageData.adId && messageData.adId === getAdID())
		{
			if (messageData.type && messageData.type === "resize")
			{
				if (isAndroid2)
				{
					forceResizeOnAndroid2();
				}
			}
		}
	}
	catch (error)
	{
	}
}

function autoExpand()
{
	EB.expand({ actionType: EBG.ActionType.AUTO });
	container.className = "expanded";
	expandedContent.style.display = "block";
	preventPageScrolling();
}

function cancelAutoCollapse()
{
	clearTimeout(autoCollapseTimer);
	if (video !== null)
	{
		video.removeEventListener("play", cancelAutoCollapse);
	}
}

/*******************
UTILITIES
*******************/
function pauseVideo()
{
	if (video)
	{
		video.pause();
	}
}

function collapse()
{
	handleCloseButtonClick();
}

function preventPageScrolling()
{
	document.addEventListener("touchmove", stopScrolling);
}

function stopScrolling(event)
{
	if (!video.contains(event.target))
	{
		event.preventDefault();
	}
}

function removeAd()
{
	var message = {
		adId: getAdID(),
		type: "removeAd"
	};

	window.parent.postMessage(JSON.stringify(message), "*");
}

function allowPageScrolling()
{
	document.removeEventListener("touchmove", stopScrolling);
}

function getAdID()
{
	return EB._isLocalMode ? null : EB._adConfig.adId;
}

function forceResizeOnAndroid2()
{
	document.body.style.opacity = 0.99
	clearTimeout(android2ResizeTimeout);
	android2ResizeTimeout = setTimeout(function() {
		document.body.style.opacity = 1;
		document.body.style.height = window.innerHeight;
		document.body.style.width = window.innerWidth;
	}, 200);
}

// // ---------Play|Pause|Replay controls----------------------------------------------------------
function tooglePlayIcons() {
    if (!video.paused) {
        imgPlay.style.opacity = 0;
        imgPause.style.opacity = 1;
        imgReplay.style.opacity = 0;
        imgReplay.style.zIndex = "initial";
    } else {
        imgPlay.style.opacity = 1;
        imgPause.style.opacity = 0;
        imgReplay.style.opacity = 0;
        imgReplay.style.zIndex = "initial";
    }
}

function tooglePlayPause() {
    if (!video.paused) {
        video.pause();
    } else {
        video.play();
    }
    tooglePlayIcons();
    soundBtn.style.opacity = "1";
}

function replayVideo() {
    imgPlay.style.opacity = 0;
    imgPause.style.opacity = 0;
    imgReplay.style.opacity = 1;
    imgReplay.style.zIndex="99";
    //video.currentTime=0;
    //startAd();
}

// // ---------Video controls----------------------------------------------------------
function toogleSoundIcons() {
    if (!video.muted) {
        imgSoundOn.style.opacity = 0;
        imgSoundOff.style.opacity = 1;
    } else {
        imgSoundOn.style.opacity = 1;
        imgSoundOff.style.opacity = 0;
    }
}

function toogleSound() {
    if (!video.muted) {
        video.muted = true;
    } else {
        video.muted = false;
    }
    toogleSoundIcons();
}

function replayAd(e){
	imgEndFrame.style.opacity = 0;
    imgReplay.style.opacity = '0';
    clearTimeout(timeout);
    soundBtn.style.opacity = "1";
	playVideo();
	video.muted = true;
	toogleSoundIcons();
	tooglePlayPause();
    
}



function endVideo(e) {
	replayVideo();
    soundBtn.style.opacity = "0";
}


function playVideo() {
	video.currentTime = 0;
	video.play();
	tooglePlayIcons();
    toogleSoundIcons();
}

function timeline() {
    window.requestAnimationFrame(timeline);
    if (video.currentTime >= 13) {
    	soundBtn.style.opacity = "0";
    }  
    if (video.currentTime >= 13.1) {
    	imgEndFrame.style.opacity = 1;
    }
}

window.addEventListener("load", checkIfEBInitialized);
window.addEventListener("message", onMessageReceived);