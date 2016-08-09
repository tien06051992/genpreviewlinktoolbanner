!function(n){n.preloadImages=function(n,o){window.IMAGES_CACHE={};var e,t,i=n.length;if(0===n.length)return void(o&&"function"==typeof o&&o());for(;e=n.pop();)t=new Image,t.onload=function(n){console.log("Loading image: ",n),window.IMAGES_CACHE[n]=this,i--,0===i&&(console.log("All images are ready..."),o&&"function"==typeof o&&o())}.bind(t,e),t.src=e},n.loadScripts=function(n,o){var e,t,i=n.length;if(0===n.length)return void(o&&"function"==typeof o&&o());for(;e=n.pop();)t=document.createElement("script"),t.defer=!0,t.onload=function(){i--,0===i&&(console.log("All scripts are ready..."),o&&"function"==typeof o&&o())},t.src=e,document.getElementsByTagName("head")[0].appendChild(t)}}(window);

window.onload = function() {
            loadScripts([
                'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TimelineLite.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenLite.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/CSSPlugin.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/easing/EasePack.min.js',
            ], loadAssets);
        };

        function loadAssets() {
            preloadImages([
                'arrow1.png',
                'arrow2.png',
                'ball.png',
				'cta.png',				
                'fr1-txt1.png',
                'fr1-txt2.png',
                'fr3-board.png',
                'logo.png',
            ], timeline);
        }

        function timeline() {

            var masterTimeline = new TimelineLite();

            var delay = 0;
            // animate for board
            delay+=0.25;
            
            masterTimeline.add(TweenLite.to("#arrow1", 1, {height: '100%'}), delay);

            delay+=0.5;
            masterTimeline.add(TweenLite.to("#ball", 0.5, {opacity: 1}), delay);
            
            delay+=0.25;
            masterTimeline.add(TweenLite.to("#fr1-txt1", 0.5, {opacity: 1}), delay);

            //masterTimeline.add(TweenLite.to("#arrow1", 0.5, { width: 400 }), delay);
            masterTimeline.add(TweenLite.to("#fr1-txt2", 1, {
            	opacity: 1,
            	scale: 1,
            	ease: Elastic.easeOut.config(1, 0.3)
            }), delay);

            delay += 0.25
            masterTimeline.add(TweenLite.to("#arrow2", 0.75, {width: 575}), delay);
            delay+=0.5;
            masterTimeline.add(TweenLite.to("#logo", 0.5, {opacity: 1}), delay);
            delay+=2;
            masterTimeline.add(TweenLite.to(["#fr1","#logo"], 0.5, {opacity: 0}), delay);
            delay+=0.5;
            masterTimeline.add(TweenLite.to("#fr2", 0.5, {opacity: 1}), delay);
            masterTimeline.add(TweenLite.to("#logo", 0.5, {width: 73}), delay);
            delay+=4;
            masterTimeline.add(TweenLite.to("#fr2", 0.5, {opacity: 0}), delay);
            delay+=0.5;
            masterTimeline.add(TweenLite.to("#fr3", 0.1, {opacity: 1}), delay);
			delay+=0.1;
			masterTimeline.add(TweenLite.to("#fr3-board", 1, {
				opacity: 1,
            	scale: 1,
            	ease: Elastic.easeOut.config(0.5, 0.3)
			}), delay);
			delay+=1;
			masterTimeline.add(TweenLite.to("#cta", 1, {
				opacity: 1,
            	scale: 1,
            	ease: Elastic.easeOut.config(0.5, 0.3)
			}), delay);
			delay+=1;
			masterTimeline.add(TweenLite.to("#arrow3", 0.5, {
				height: "100%"
			}), delay);
            masterTimeline.add(TweenLite.to("#arrow3", 0.5, {
                width: 78, height: 21
            }), delay);
			delay+=0.5;
			masterTimeline.add(TweenLite.to("#logo", 0.5, {opacity: 1}), delay);
			delay+=0.5;
			masterTimeline.add(TweenLite.to("#cta", 0.3, {
            	scale: 1.2
			}), delay);
			delay+=0.3;
			masterTimeline.add(TweenLite.to("#cta", 0.3, {
            	scale: 1
			}), delay);

            //masterTimeline.add(TweenLite.to("#lipstick", 0.5, {rotation: 7, ease: Elastic.easeOut.config(0.5, 0.5), y: 0}), delay+0.5);
            // masterTimeline.seek(10); //6.7 frame Prix, 10.5 lastframe
            // masterTimeline.pause();
        }