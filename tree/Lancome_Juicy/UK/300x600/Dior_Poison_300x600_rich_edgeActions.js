/***********************
* Actions de compositions pour Adobe Edge Animate
*
* Modifier ce fichier avec précaution, en veillant à conserver 
* les signatures et les commentaires de fonction commençant par « Edge » pour maintenir la 
* possibilité d’interagir avec ces actions depuis Adobe Edge Animate
*
***********************/
(function($, Edge, compId){

//var supportVideoAutoPlay = true;

var Composition = Edge.Composition, Symbol = Edge.Symbol; // alias pour les classes Edge couramment utilisées

   var controller = null;
   
   //Edge symbol: 'stage'
   (function(symbolName) {
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "click", function(sym, e) {
         
         if (controller.playHeadIsBeforeEndshotLabel())
         {
             platform.userCounter('Click_On_Video');
         }
         else
         {
             platform.userCounter('Click_On_Endshot');
         }
         
         controller.freeze();
         
         Enabler.exit('Clicked on');

      });
      //Edge binding end
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         // Configuration -->
         
         
         sym.getSymbol("youtube_play_pause").stop("pause");
         
         // Change those css properties to style the stage.
         sym.getSymbolElement().css({
         	'cursor': 'pointer'
         });
         
         /**
         * Freeze the ad after N ms
         * Default value: 28000
         * Use -1 to disable freeze timer
         */
         //config.autoFreezeTime = 28000;
         
         /**
         * The volume when unmuted
         * Default value: 0.5
         */
         //config.unmutedVolume = 0.5;
         
         // <-- Configuration
         
         controller = new RichControllerClass(Edge.getComposition(compId));
         
         // Uncomment this line to only play the endshot animation on mobile devices
         // controller.disableVideoOnMobile()
         
         if (!controller.muteAudioSupported())
         {
         	sym.$('mute_group').hide();
         }

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         controller.start();
         
         
         var muteButton = sym.getSymbol('mute_button');
         if (muteButton != null)
         	muteButton.stop(controller.isMuted() ? 'off' : 'on');

      });
      //Edge binding end     

      Symbol.bindElementAction(compId, symbolName, "${replay_button}", "click", function(sym, e) {
         e.stopPropagation();
         e.preventDefault();
         
         if (controller.isMuted())
         	controller.unmute();
         
         var muteButton = sym.getSymbol('mute_button');
         if (muteButton != null)
         	muteButton.stop('on');
         
         controller.rePlay();
         
         platform.userCounter('Click_On_Video_Replay');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mute_button}", "click", function(sym, e) {
         e.stopPropagation();
         e.preventDefault();
         
         var muted = controller.isMuted();
         if (muted)
         	controller.unmute();
         else
         	controller.mute();	
         muted = !muted;
         
         sym.getSymbol('mute_button').stop(muted ? 'off' : 'on');
         
         if (muted)
         {
         	platform.userCounter('Mute_Video');	
         }
         else
         {
         	platform.userCounter('Unmute_Video');	
         }

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         controller.update();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${click_to_play_poster}", "click", function(sym, e) {
         e.stopPropagation();
         e.preventDefault();
         
        // controller.playVideo();
         
         platform.userCounter('Click_To_Launch_Video');

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mouseout", function(sym, e) {
         controller.mute();
         sym.getSymbol('mute_button').stop('off');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mouseover", function(sym, e) {
         e.stopPropagation();
         e.preventDefault();
         
         controller.unmute();
         sym.getSymbol('mute_button').stop('on');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${youtube_play_pause}", "click", function(sym, e) {
         e.stopPropagation();
         e.preventDefault();
         
         // Set a toggle to play or pause a video track 
         if (sym.$("video")[0].paused) {
         	sym.$("video")[0].play();
         	sym.getSymbol("youtube_play_pause").stop("pause");
         
         } else {
         	sym.$("video")[0].pause();
         	sym.getSymbol("youtube_play_pause").stop("play");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
         

   })("Preloader");
   //Edge symbol end:'Preloader'
   
   //Edge symbol: 'mute_button'
   (function(symbolName) {   
         

   })("mute_button");
   //Edge symbol end:'mute_button'

   //=========================================================
   
   //Edge symbol: 'click_to_play_poster'
   (function(symbolName) {   
   
      

   })("click_to_play_poster");
   //Edge symbol end:'click_to_play_poster'

   //=========================================================
   
   //Edge symbol: 'youtube_play_pause'
   (function(symbolName) {   
   
   })("youtube_play_pause");
   //Edge symbol end:'youtube_play_pause'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-89045761");