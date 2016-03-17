
(function(compId){var _=null,y=true,n=false,e58='${play_big}',x45='100%',x50='rgb(0, 0, 0)',e23='${video}',e28='${mute_group}',x35='sound-on',x56='pause_big',e27='${youtube_play_pause}',x34='hidden',e41='${sound-on}',x18='rgba(255,255,255,1.00)',d='display',i='none',x38='visible',x5='6.0.0.400',x31='16px',e59='${pause_big}',x49='Rectangle3',x33='auto',x43='poster',x3='6.0.0',x4='5.0.0',x8='rgba(0,0,0,0)',g='image',x51='rgba(0,0,0,0.00)',e42='${sound-off}',x44='0',x52='8px',x48='20px',x30='3px',m='rect',x37='0px',x39='sound-off',e19='${logo_poison_endcard}',e25='${mute_button}',x54='play_big',x53='9px',e47='${poster}',b='block',x29='4px',x32='12px',e26='${replay_button}',e21='${bg_loader}',w='width',e20='${bg_endcard}',o='opacity',e24='${click_to_play_poster}',e22='${packshot}';var g40='sound-off.png',g6='video.webm',g9='bg_loader.jpg',g11='packshot.png',g36='sound-on.png',g17='cta.png',g2='rich-controller.js',g16='gradient.jpg',g57='pause_big.png',g1='platform.js',g46='click_to_play_poster.jpg',g15='loader.gif',g55='play_big.png',g7='video.mp4',g13='logo_poison.png',g10='bg_endcard.jpg',g14='replay.png',g12='logo_dior_endcard.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1,js+g2],symbols={"stage":{v:x3,mv:x4,b:x5,stf:i,cg:i,rI:n,cn:{dom:[{id:'video_group',t:'group',r:['0px','0px','300px','600px','auto','auto'],c:[{id:'video',v:b,volume:'0',t:'video',tag:'video',r:['0px','0px','300px','600px','auto','auto'],ap:'autoplay',o:'1',sr:[vid+g7],pr:'metadata'}]},{id:'bg_loader',v:b,t:g,r:['0px','0px','300px','600px','auto','auto'],o:'1',f:[x8,im+g9,'0px','0px']},{id:'bg_endcard',v:i,t:g,r:['0px','0px','300px','600px','auto','auto'],o:'0',f:[x8,im+g10,'0px','0px']},{id:'packshot',v:i,t:g,r:['176px','373px','124px','177px','auto','auto'],o:'0',f:[x8,im+g11,'0px','0px']},{id:'logo_dior_endcard',t:g,r:['194px','14px','90px','36px','auto','auto'],o:'1',f:[x8,im+g12,'0px','0px']},{id:'logo_poison_endcard',v:i,t:g,r:['42px','305px','219px','141px','auto','auto'],o:'0',f:[x8,im+g13,'0px','0px']},{id:'replay_group',t:'group',r:['274px','-1px','0px','0px','auto','auto'],c:[{id:'replay_button',v:i,t:g,r:['7px','auto','12px','14px','auto','-21px'],f:[x8,im+g14,'0px','0px']}]},{id:'mute_group',t:'group',r:['35px','2px','0','0','auto','auto'],c:[{id:'mute_button',symbolName:'mute_button',v:b,t:m,r:['1px','auto','43','26','auto','-29px'],overflow:'visible'}]},{id:'youtube_play_pause',symbolName:'youtube_play_pause',v:b,t:m,r:['13px','5px','20px','20px','auto','auto'],o:'0.96'},{id:'loader',t:g,r:['134px','287px','35px','5px','auto','auto'],f:[x8,im+g15,'0px','0px']},{id:'click_to_play_poster',symbolName:'click_to_play_poster',v:i,t:m,r:['0','0','100%','100%','auto','auto']},{id:'gradient',t:g,r:['0','587px','300px','13px','auto','auto'],f:[x8,im+g16,'0px','0px']},{id:'cta',t:g,r:['40px','543px','221px','31px','auto','auto'],f:[x8,im+g17,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','300px','600px','auto','auto'],zr:['0px','','',''],overflow:'hidden',f:[x18]}}},tt:{d:23000,a:n,l:{"endshot":21000,"frozen":23000},data:[["eid259",o,16000,1000,"easeInOutQuad",e19,'0','1'],["eid195",d,15513,0,"linear",e20,i,b],["eid198",o,0,500,"linear",e21,'1','0'],["eid199",d,501,0,"linear",e21,b,i],["eid210",d,15467,0,"easeInOutQuad",e22,i,b],["eid221",o,15467,287,"easeInOutQuad",e22,'0','1'],["eid265",w,0,0,"linear",e23,'300px','300px'],["eid131",d,0,0,"linear",e24,i,i],["eid115",d,19000,0,"linear",e25,b,i],["eid105",d,19000,0,"linear",e26,i,b],["eid141",o,15513,1000,"linear",e20,'0','1'],["eid285",d,0,0,"linear",e27,b,b],["eid287",d,19000,0,"linear",e27,b,i],["eid194",d,19000,0,"easeInOutQuad",e23,b,i],["eid269",d,0,0,"easeInOutQuad",e28,i,b],["eid254",d,16000,0,"easeInOutQuad",e19,i,b],["eid132","tr",0,function(e,d){this.eSA(e,d);},['play','${click_to_play_poster}',[]]],["eid286","tr",0,function(e,d){this.eSA(e,d);},['stop','${youtube_play_pause}',['pause']]]]}},"mute_button":{v:x3,mv:x4,b:x5,stf:i,cg:i,rI:n,cn:{dom:[{r:[x29,x30,x31,x32,x33,x33],overflow:x34,id:x35,t:g,v:b,f:[x8,im+g36,x37,x37]},{r:[x29,x30,x31,x32,x33,x33],overflow:x38,id:x39,t:g,v:i,f:[x8,im+g40,x37,x37]}],style:{'${symbolSelector}':{r:[_,_,x31,x32]}}},tt:{d:2000,a:n,l:{"on":0,"off":2000},data:[["eid110",d,0,0,"linear",e41,b,b],["eid111",d,2000,0,"linear",e41,b,i],["eid109",d,0,0,"linear",e42,i,i],["eid112",d,2000,0,"linear",e42,i,b]]}},"click_to_play_poster":{v:x3,mv:x4,b:x5,stf:i,cg:i,rI:y,cn:{dom:[{t:g,id:x43,o:x44,r:[x37,x37,x45,x45,x33,x33],f:[x8,im+g46,x37,x37]}],style:{'${symbolSelector}':{r:[_,_,x45,x45]}}},tt:{d:1000,a:y,data:[["eid127",o,0,0,"linear",e47,'0','0'],["eid137",o,497,0,"linear",e47,'0','1'],["eid138",o,1000,0,"linear",e47,'1','1']]}},"youtube_play_pause":{v:x3,mv:x4,b:x5,stf:i,cg:i,rI:y,cn:{dom:[{r:[x37,x37,x48,x48,x33,x33],br:[x37,x37,x37,x37],id:x49,s:[0,x50,i],t:m,f:[x51]},{t:g,v:b,r:[x29,x29,x52,x53,x33,x33],id:x54,f:[x8,im+g55,x37,x37]},{t:g,v:i,r:[x29,x29,x52,x53,x33,x33],id:x56,f:[x8,im+g57,x37,x37]}],style:{'${symbolSelector}':{r:[_,_,x48,x48]}}},tt:{d:2000,a:y,l:{"play":0,"pause":2000},data:[["eid276",d,0,0,"easeInOutQuad",e58,b,b],["eid275",d,2000,0,"easeInOutQuad",e58,b,i],["eid279",d,0,0,"easeInOutQuad",e59,i,i],["eid278",d,2000,0,"easeInOutQuad",e59,i,b]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-89045761");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;var controller=null;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${Stage}","click",function(sym,e){if(controller.playHeadIsBeforeEndshotLabel())
{platform.userCounter('Click_On_Video');}
else
{platform.userCounter('Click_On_Endshot');}
controller.freeze();Enabler.exit('Clicked on');});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.getSymbol("youtube_play_pause").stop("pause");sym.getSymbolElement().css({'cursor':'pointer'});controller=new RichControllerClass(Edge.getComposition(compId));if(!controller.muteAudioSupported())
{sym.$('mute_group').hide();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){controller.start();var muteButton=sym.getSymbol('mute_button');if(muteButton!=null)
muteButton.stop(controller.isMuted()?'off':'on');});
//Edge binding end     
Symbol.bindElementAction(compId,symbolName,"${replay_button}","click",function(sym,e){e.stopPropagation();e.preventDefault();if(controller.isMuted())
controller.unmute();var muteButton=sym.getSymbol('mute_button');if(muteButton!=null)
muteButton.stop('on');controller.rePlay();platform.userCounter('Click_On_Video_Replay');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${mute_button}","click",function(sym,e){
	e.stopPropagation();
	e.preventDefault();
	var muted=controller.isMuted();
	if(muted)
		controller.unmute();
	else
		controller.mute();
		muted=!muted;sym.getSymbol('mute_button').stop(muted?'off':'on');
		if(muted){
			platform.userCounter('Mute_Video');
			Enabler.counter('Video Mute');
		}
		else{
			platform.userCounter('Unmute_Video');
			Enabler.counter('Video Unmute');
		}
});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","update",function(sym,e){controller.update();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${click_to_play_poster}","click",function(sym,e){e.stopPropagation();e.preventDefault();platform.userCounter('Click_To_Launch_Video');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","mouseout",function(sym,e){controller.mute();sym.getSymbol('mute_button').stop('off');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","mouseover",function(sym,e){e.stopPropagation();e.preventDefault();controller.unmute();sym.getSymbol('mute_button').stop('on');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${youtube_play_pause}","click",function(sym,e){
	e.stopPropagation();
	e.preventDefault();
	if(sym.$("video")[0].paused){
		sym.$("video")[0].play();
		sym.getSymbol("youtube_play_pause").stop("pause");
		Enabler.counter('Video Play');
	}else{
		sym.$("video")[0].pause();
		sym.getSymbol("youtube_play_pause").stop("play");
		Enabler.counter('Video Pause');
	}
});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
AdobeEdge.bootstrapCallback(function (compId) { 
	document.getElementById('Stage_video').src = Enabler.getUrl('media/video.mp4');
});
//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//Edge symbol: 'mute_button'
(function(symbolName){})("mute_button");
//Edge symbol end:'mute_button'

//=========================================================

//Edge symbol: 'click_to_play_poster'
(function(symbolName){})("click_to_play_poster");
//Edge symbol end:'click_to_play_poster'

//=========================================================

//Edge symbol: 'youtube_play_pause'
(function(symbolName){})("youtube_play_pause");
//Edge symbol end:'youtube_play_pause'
})})(AdobeEdge.$,AdobeEdge,"EDGE-89045761");

AdobeEdge.bootstrapCallback(function (compId) {
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}  
});


function enablerInitHandler() {
	document.getElementById('Stage_video').src = Enabler.getUrl('video.mp4');
}