
(function(compId){var _=null,y=true,n=false,x3='6.0.0',x4='5.0.0',x7='rgba(0,0,0,0)',x43='100%',g='image',b='block',x27='sound-on',x42='0',e45='${poster}',x29='3px',m='rect',x17='rgba(255,255,255,1.00)',x41='poster',e19='${bg_loader}',i='none',x35='visible',e40='${sound-off}',e20='${bg_endcard}',e39='${sound-on}',x38='30px',o='opacity',x36='sound-off',x34='0px',e18='${mute_button}',x26='hidden',x31='12px',x30='16px',x28='4px',x32='auto',e25='${video}',e24='${replay_button}',x5='6.0.0.400',w='width',e23='${logo_poison_endcard}',e21='${packshot}',d='display',e22='${click_to_play_poster}';var g14='cta.png',g37='sound-off.png',g2='rich-controller.js',g16='gradient.jpg',g8='bg_loader.jpg',g1='platform.js',g44='click_to_play_poster.jpg',g15='loader.gif',g11='logo_dior_endcard.png',g6='video.mp4',g10='packshot.png',g12='logo_poison.png',g33='sound-on.png',g9='bg_endcard.jpg',g13='replay.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1,js+g2],symbols={"stage":{v:x3,mv:x4,b:x5,stf:i,cg:i,rI:n,cn:{dom:[{id:'video_group',t:'group',r:['0px','0px','300px','250px','auto','auto'],c:[{id:'video',v:b,volume:'0',t:'video',tag:'video',r:['0px','0px','300px','250','auto','auto'],ap:'autoplay',o:'1',sr:[vid+g6],pr:'metadata'}]},{id:'bg_loader',v:b,t:g,r:['0px','0px','300px','250px','auto','auto'],o:'1',f:[x7,im+g8,'0px','0px']},{id:'bg_endcard',v:i,t:g,r:['0','0','300px','250px','auto','auto'],o:'0',f:[x7,im+g9,'0px','0px']},{id:'packshot',v:i,t:g,r:['16px','63px','107px','152px','auto','auto'],o:'0',f:[x7,im+g10,'0px','0px']},{id:'logo_dior_endcard',t:g,r:['21px','14px','84px','34px','auto','auto'],o:'1',f:[x7,im+g11,'0px','0px']},{id:'logo_poison_endcard',v:i,t:g,r:['158px','121px','116px','75px','auto','auto'],o:'0',f:[x7,im+g12,'0px','0px']},{id:'replay_group',t:'group',r:['0px','0px','0px','0px','auto','auto'],c:[{id:'replay_button',v:i,t:g,r:['282px','auto','12px','14px','auto','-19px'],f:[x7,im+g13,'0px','0px']}]},{id:'mute_group',t:'group',r:['0px','0px','0','0','auto','auto'],c:[{id:'mute_button',symbolName:'mute_button',v:b,t:m,r:['276px','auto','43','26','auto','-29px'],overflow:'visible'}]},{id:'cta',t:g,r:['41px','201px','221px','31px','auto','auto'],f:[x7,im+g14,'0px','0px']},{id:'loader',t:g,r:['134px','120px','35px','5px','auto','auto'],f:[x7,im+g15,'0px','0px']},{id:'click_to_play_poster',symbolName:'click_to_play_poster',v:i,t:m,r:['0','0','100%','100%','auto','auto']},{id:'gradient',t:g,r:['0','237px','300px','13px','auto','auto'],f:[x7,im+g16,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','300px','250px','auto','auto'],zr:['0px','','',''],overflow:'hidden',f:[x17]}}},tt:{d:23000,a:n,l:{"endshot":21000,"frozen":23000},data:[["eid115",d,21000,0,"linear",e18,b,i],["eid199",d,501,0,"linear",e19,b,i],["eid195",d,15513,0,"linear",e20,i,b],["eid210",d,15467,0,"easeInOutQuad",e21,i,b],["eid131",d,0,0,"linear",e22,i,i],["eid259",o,16000,1000,"easeInOutQuad",e23,'0','1'],["eid105",d,21000,0,"linear",e24,i,b],["eid141",o,15513,1000,"linear",e20,'0','1'],["eid265",w,0,0,"linear",e25,'300px','300px'],["eid221",o,15467,287,"easeInOutQuad",e21,'0','1'],["eid194",d,18067,0,"easeInOutQuad",e25,b,i],["eid198",o,0,500,"linear",e19,'1','0'],["eid254",d,16000,0,"easeInOutQuad",e23,i,b],["eid132","tr",0,function(e,d){this.eSA(e,d);},['play','${click_to_play_poster}',[]]]]}},"mute_button":{v:x3,mv:x4,b:x5,stf:i,cg:i,rI:n,cn:{dom:[{t:g,overflow:x26,id:x27,r:[x28,x29,x30,x31,x32,x32],v:b,f:[x7,im+g33,x34,x34]},{t:g,overflow:x35,id:x36,r:[x28,x29,x30,x31,x32,x32],v:i,f:[x7,im+g37,x34,x34]}],style:{'${symbolSelector}':{r:[_,_,x38,x38]}}},tt:{d:2000,a:n,l:{"on":0,"off":2000},data:[["eid110",d,0,0,"linear",e39,b,b],["eid111",d,2000,0,"linear",e39,b,i],["eid109",d,0,0,"linear",e40,i,i],["eid112",d,2000,0,"linear",e40,i,b]]}},"click_to_play_poster":{v:x3,mv:x4,b:x5,stf:i,cg:i,rI:y,cn:{dom:[{t:g,id:x41,o:x42,r:[x34,x34,x43,x43,x32,x32],f:[x7,im+g44,x34,x34]}],style:{'${symbolSelector}':{r:[_,_,x43,x43]}}},tt:{d:1000,a:y,data:[["eid127",o,0,0,"linear",e45,'0','0'],["eid137",o,497,0,"linear",e45,'0','1'],["eid138",o,1000,0,"linear",e45,'1','1']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-89045761");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;var controller=null;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${Stage}","click",function(sym,e){if(controller.playHeadIsBeforeEndshotLabel())
{platform.userCounter('Click_On_Video');}
else
{platform.userCounter('Click_On_Endshot');}
controller.freeze();Enabler.exit('Clicked on');});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.getSymbolElement().css({'cursor':'pointer'});controller=new RichControllerClass(Edge.getComposition(compId));if(!controller.muteAudioSupported())
{sym.$('mute_group').hide();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){controller.start();var muteButton=sym.getSymbol('mute_button');if(muteButton!=null)
muteButton.stop(controller.isMuted()?'off':'on');});
//Edge binding end     
Symbol.bindElementAction(compId,symbolName,"${replay_button}","click",function(sym,e){
	e.stopPropagation();
	e.preventDefault();
	if(controller.isMuted())
		controller.unmute();
	var muteButton=sym.getSymbol('mute_button');
	if(muteButton!=null){
		muteButton.stop('on');
		controller.rePlay();
		platform.userCounter('Click_On_Video_Replay');
		Enabler.counter('Video Replay', true);
	}
});
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
        if(muted) {
            platform.userCounter('Mute_Video');
            Enabler.counter('Video Mute', true);
        }else {
            platform.userCounter('Unmute_Video');
            Enabler.counter('Video Unmute', true);
        }
});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","update",function(sym,e){controller.update();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${click_to_play_poster}","click",function(sym,e){e.stopPropagation();e.preventDefault();controller.playVideo();platform.userCounter('Click_To_Launch_Video');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","mouseout",function(sym,e){controller.mute();sym.getSymbol('mute_button').stop('off');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","mouseover",function(sym,e){e.stopPropagation();e.preventDefault();controller.unmute();sym.getSymbol('mute_button').stop('on');});
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