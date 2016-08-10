(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png?1469781434320", id:"Bitmap1"},
		{src:"images/Bitmap10.png?1469781434320", id:"Bitmap10"},
		{src:"images/Bitmap11.png?1469781434320", id:"Bitmap11"},
		{src:"images/Bitmap2.png?1469781434320", id:"Bitmap2"},
		{src:"images/Bitmap3.png?1469781434320", id:"Bitmap3"},
		{src:"images/Bitmap4.png?1469781434320", id:"Bitmap4"},
		{src:"images/Bitmap5.png?1469781434320", id:"Bitmap5"},
		{src:"images/Bitmap6.png?1469781434320", id:"Bitmap6"},
		{src:"images/Bitmap7.png?1469781434320", id:"Bitmap7"},
		{src:"images/Bitmap9.png?1469781434320", id:"Bitmap9"},
		{src:"images/logo.png?1469781434320", id:"logo"},
		{src:"images/toplogo.png?1469781434320", id:"toplogo"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,43);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,17);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,103);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,20);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,47);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,25);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,20);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,19);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,19);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,87);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.toplogo = function() {
	this.initialize(img.toplogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,109);


(lib.URL_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-144,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.6,-8.3,255,26.4);


(lib.TopLogo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top logo
	this.instance = new lib.toplogo();
	this.instance.setTransform(-60,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.8,-130.7,243,203.8);


(lib.Saint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxcCEIAAkHMAi5AAAIAAEHg");
	mask.setTransform(-1.2,0.3);

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(-150,-143);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.9,-12.9,223.5,26.6);


(lib.Retrouvez_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQTA+QgKgIgDgQIARgCQACAKAFAFQAHAFALAAQAMAAAFgEQAGgFAAgGQAAgGgFgDQgEgDgNgDQgTgFgHgDQgGgDgEgGQgEgGAAgGQAAgGADgGQADgFAFgEQAEgDAHgCQAGgCAJAAQALAAAJADQAIAEAEAFQAFAGABAKIgQACQgBgIgFgEQgGgEgJAAQgMAAgFAEQgFADABAFQAAAEACABQABACAEACIAPAEQASAFAHADQAHADAEAGQAEAFAAAJQAAAIgEAIQgFAHgKAEQgJAEgMAAQgSAAgLgIgANAA5QgMgOAAgZQAAgZAPgNQAMgLATAAQAUAAANANQANAOAAAVQAAATgFALQgHALgKAGQgLAGgNAAQgVAAgNgNgANNgIQgIAIAAASQAAATAIAKQAJAJAMAAQANAAAHgJQAJgKAAgTQAAgSgJgIQgHgJgNAAQgMAAgJAJgAJ1A+QgJgIAAgMQAAgHADgGQADgGAGgEQAFgEAHgCIAOgCQAVgCAJgEIAAgEQABgIgFgFQgGgFgNAAQgMAAgFAEQgGAEgDAJIgRgBQADgKAFgHQAFgGAKgDQAKgEAMAAQANAAAHADQAIADAFAEQADAFABAHIABANIAAAWQAAAYABAGQACAGADAGIgSAAQgDgFAAgHQgKAHgIAEQgJADgJAAQgRAAgIgIgAKVAZIgOADQgFACgCADQgDAEABAEQgBAHAGAEQAFAFAKAAQAJAAAIgEQAHgFADgHQADgGAAgLIAAgGQgIAEgTADgAExA5QgNgOAAgZQAAgZAPgNQANgLATAAQAUAAAMANQAOAOAAAVQAAATgGALQgGALgLAGQgLAGgMAAQgVAAgNgNgAE9gIQgHAIgBASQABATAHAKQAJAJANAAQAMAAAIgJQAJgKAAgTQAAgSgJgIQgIgJgMAAQgNAAgJAJgAgqA+QgKgIgCgQIAQgCQACAKAFAFQAHAFALAAQAMAAADgEQAGgFAAgGQAAgGgFgDQgDgDgMgDQgSgFgHgDQgIgDgDgGQgEgGAAgGQAAgGADgGQADgFAFgEQAFgDAGgCQAGgCAIAAQAMAAAHADQAIAEAFAFQAEAGABAKIgQACQgBgIgEgEQgFgEgKAAQgLAAgFAEQgFADABAFQAAAEABABQACACAFACIAOAEQAQAFAHADQAHADAEAGQAEAFAAAJQAAAIgFAIQgE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");
	this.shape.setTransform(0.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.4,-12.6,228.9,25.3);


(lib.Resultats_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-109,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-26,223.8,51.7);


(lib.Resultat_net_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-142,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-15,253,20);


(lib.Resultat_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-151,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.6,-16,267.3,34.2);


(lib.numerovert = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-83,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.4,-9.4,177.5,19.5);


(lib.legal_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-144,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.1,-11.4,292.4,22.8);


(lib.desgn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.logo();
	this.instance.setTransform(-150,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-143,300,250);


(lib.Chiffre_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-97,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.9,-17,199.8,34.2);


(lib._552_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-36,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-33.3,161.4,103.4);


(lib._199_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-105,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.8,-32.7,225.6,65.5);


(lib._13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-41,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.4,-27.6,172.1,103.6);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


// stage content:
(lib.Saint_Gobain_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3554A0").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(540));

	// fade
	this.instance = new lib.fade();
	this.instance.setTransform(150,125.1,1,1,0,0,0,0,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(528).to({_off:false},0).to({alpha:1},11).wait(1));

	// Top logo
	this.instance_1 = new lib.TopLogo_mc();
	this.instance_1.setTransform(59.8,-66.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(136).to({_off:false},0).to({y:36.1},18,cjs.Ease.get(1)).wait(386));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	mask.setTransform(150,125);

	// CTA btn
	this.instance_2 = new lib.numerovert();
	this.instance_2.setTransform(-104.4,195.7);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(410).to({_off:false},0).to({x:143.6},12).wait(118));

	// url
	this.instance_3 = new lib.URL_mc();
	this.instance_3.setTransform(-116,160.1);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(406).to({_off:false},0).to({x:169},12,cjs.Ease.get(1)).wait(122));

	// Retrouvez
	this.instance_4 = new lib.Retrouvez_mc();
	this.instance_4.setTransform(-118.6,140.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(401).to({_off:false},0).to({x:149.4},12,cjs.Ease.get(1)).wait(127));

	// last blue bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#054C98").s().p("AgPTiMAAAgnDIAfAAMAAAAnDg");
	this.shape_1.setTransform(-1.3,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#054C98").s().p("AikTiMAAAgnDIFJAAMAAAAnDg");
	this.shape_2.setTransform(13.8,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#054C98").s().p("Ak4TiMAAAgnDIJxAAMAAAAnDg");
	this.shape_3.setTransform(29,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#054C98").s().p("AnMTiMAAAgnDIOZAAMAAAAnDg");
	this.shape_4.setTransform(44.1,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#054C98").s().p("AphTiMAAAgnDITDAAMAAAAnDg");
	this.shape_5.setTransform(59.2,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#054C98").s().p("Ar1TiMAAAgnDIXrAAMAAAAnDg");
	this.shape_6.setTransform(74.4,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#054C98").s().p("AuJTiMAAAgnDIcTAAMAAAAnDg");
	this.shape_7.setTransform(89.5,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#054C98").s().p("AweTiMAAAgnDMAg8AAAMAAAAnDg");
	this.shape_8.setTransform(104.6,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#054C98").s().p("AyyTiMAAAgnDMAllAAAMAAAAnDg");
	this.shape_9.setTransform(119.8,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#054C98").s().p("A1GTiMAAAgnDMAqNAAAMAAAAnDg");
	this.shape_10.setTransform(134.9,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#054C98").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},389).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(141));

	// legal mention
	this.instance_5 = new lib.legal_mc();
	this.instance_5.setTransform(150.7,238.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(325).to({_off:false},0).to({alpha:1},11).wait(53).to({alpha:0},10).to({_off:true},1).wait(140));

	// 1,3 mds
	this.instance_6 = new lib._552_mc();
	this.instance_6.setTransform(-116,160.1);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(317).to({_off:false},0).to({x:169},12,cjs.Ease.get(1)).wait(60).to({y:-79.9,alpha:0},10).to({_off:true},1).wait(140));

	// Résultat net
	this.instance_7 = new lib.Resultat_net_mc();
	this.instance_7.setTransform(-113.1,124.9);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(311).to({_off:false},0).to({x:179.9},12,cjs.Ease.get(1)).wait(66).to({y:-115.1,alpha:0},10).to({_off:true},1).wait(140));

	// 4th red bg
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#DD204A","#F45827"],[0,1],148.3,125,148.3,-124.9).s().p("AgPTiMAAAgnDIAfAAMAAAAnDg");
	this.shape_12.setTransform(-1.3,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#DD204A","#F45827"],[0,1],133.5,125,133.5,-124.9).s().p("AikTiMAAAgnDIFJAAMAAAAnDg");
	this.shape_13.setTransform(13.8,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DD204A","#F45827"],[0,1],118.7,125,118.7,-124.9).s().p("Ak4TiMAAAgnDIJxAAMAAAAnDg");
	this.shape_14.setTransform(29,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#DD204A","#F45827"],[0,1],103.8,125,103.8,-124.9).s().p("AnMTiMAAAgnDIOZAAMAAAAnDg");
	this.shape_15.setTransform(44.1,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#DD204A","#F45827"],[0,1],89,125,89,-124.9).s().p("AphTiMAAAgnDITDAAMAAAAnDg");
	this.shape_16.setTransform(59.2,125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#DD204A","#F45827"],[0,1],74.2,125,74.2,-124.9).s().p("Ar1TiMAAAgnDIXrAAMAAAAnDg");
	this.shape_17.setTransform(74.4,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#DD204A","#F45827"],[0,1],59.3,125,59.3,-124.9).s().p("AuJTiMAAAgnDIcTAAMAAAAnDg");
	this.shape_18.setTransform(89.5,125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#DD204A","#F45827"],[0,1],44.5,125,44.5,-124.9).s().p("AweTiMAAAgnDMAg8AAAMAAAAnDg");
	this.shape_19.setTransform(104.6,125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#DD204A","#F45827"],[0,1],29.7,125,29.7,-124.9).s().p("AyyTiMAAAgnDMAllAAAMAAAAnDg");
	this.shape_20.setTransform(119.8,125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#DD204A","#F45827"],[0,1],14.8,125,14.8,-124.9).s().p("A1GTiMAAAgnDMAqNAAAMAAAAnDg");
	this.shape_21.setTransform(134.9,125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#DD204A","#F45827"],[0,1],0,125,0,-124.9).s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_22.setTransform(150,125);

	this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},299).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(231));

	// 1,3 mds
	this.instance_8 = new lib._13_mc();
	this.instance_8.setTransform(-116,160.1);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(236).to({_off:false},0).to({x:169},10,cjs.Ease.get(1)).wait(53).to({y:-78.9,alpha:0},10).to({_off:true},1).wait(230));

	// Résultat
	this.instance_9 = new lib.Resultat_mc();
	this.instance_9.setTransform(-105.1,124.9);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(231).to({_off:false},0).to({x:179.9},10,cjs.Ease.get(1)).wait(58).to({y:-114.1,alpha:0},10).to({_off:true},1).wait(230));

	// 3rd blue bg
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#0098D7","#7BC5C7"],[0,1],148.3,125,148.3,-124.9).s().p("AgPTiMAAAgnDIAfAAMAAAAnDg");
	this.shape_23.setTransform(-1.3,125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#0298D7","#79C6C8"],[0,1],133.5,125,133.5,-124.9).s().p("AikTiMAAAgnDIFJAAMAAAAnDg");
	this.shape_24.setTransform(13.8,125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#0398D6","#77C6C8"],[0,1],118.7,125,118.7,-124.9).s().p("Ak4TiMAAAgnDIJxAAMAAAAnDg");
	this.shape_25.setTransform(29,125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#0598D6","#75C7C9"],[0,1],103.8,125,103.8,-124.9).s().p("AnMTiMAAAgnDIOZAAMAAAAnDg");
	this.shape_26.setTransform(44.1,125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#0698D6","#73C8C9"],[0,1],89,125,89,-124.9).s().p("AphTiMAAAgnDITDAAMAAAAnDg");
	this.shape_27.setTransform(59.2,125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#0899D6","#71C9CA"],[0,1],74.2,125,74.2,-124.9).s().p("Ar1TiMAAAgnDIXrAAMAAAAnDg");
	this.shape_28.setTransform(74.4,125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#0999D5","#6EC9CA"],[0,1],59.3,125,59.3,-124.9).s().p("AuJTiMAAAgnDIcTAAMAAAAnDg");
	this.shape_29.setTransform(89.5,125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#0A99D5","#6CCACA"],[0,1],44.5,125,44.5,-124.9).s().p("AweTiMAAAgnDMAg8AAAMAAAAnDg");
	this.shape_30.setTransform(104.6,125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#0C99D5","#6ACBCB"],[0,1],29.7,125,29.7,-124.9).s().p("AyyTiMAAAgnDMAllAAAMAAAAnDg");
	this.shape_31.setTransform(119.8,125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#0D99D4","#68CBCB"],[0,1],14.8,125,14.8,-124.9).s().p("A1GTiMAAAgnDMAqNAAAMAAAAnDg");
	this.shape_32.setTransform(134.9,125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#0F99D4","#66CCCC"],[0,1],0,125,0,-124.9).s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_33.setTransform(150,125);

	this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23}]},219).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).wait(311));

	// 19,9 mds
	this.instance_10 = new lib._199_mc();
	this.instance_10.setTransform(-116,160.1);
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(160).to({_off:false},0).to({x:169},10,cjs.Ease.get(1)).wait(49).to({y:-39.9,alpha:0},10).to({_off:true},1).wait(310));

	// Chiffre
	this.instance_11 = new lib.Chiffre_mc();
	this.instance_11.setTransform(-105.1,124.9);
	this.instance_11._off = true;

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(155).to({_off:false},0).to({x:179.9},10,cjs.Ease.get(1)).wait(54).to({y:-75.1,alpha:0},10).to({_off:true},1).wait(310));

	// 2nd blue bg
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#00509C","#009CCE"],[0,1],148.3,125,148.3,-124.9).s().p("AgPTiMAAAgnDIAfAAMAAAAnDg");
	this.shape_34.setTransform(-1.3,125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#00509C","#009CCE"],[0,1],134.8,125,134.8,-124.9).s().p("AiXTiMAAAgnDIEuAAMAAAAnDg");
	this.shape_35.setTransform(12.5,125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#00509C","#009CCE"],[0,1],121.4,125,121.4,-124.9).s().p("AkdTiMAAAgnDII7AAMAAAAnDg");
	this.shape_36.setTransform(26.2,125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#00509C","#009CCE"],[0,1],107.9,125,107.9,-124.9).s().p("AmkTiMAAAgnDINJAAMAAAAnDg");
	this.shape_37.setTransform(40,125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#00509C","#009CCE"],[0,1],94.4,125,94.4,-124.9).s().p("AorTiMAAAgnDIRXAAMAAAAnDg");
	this.shape_38.setTransform(53.7,125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#00509C","#009CCE"],[0,1],80.9,125,80.9,-124.9).s().p("AqyTiMAAAgnDIVlAAMAAAAnDg");
	this.shape_39.setTransform(67.5,125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#00509C","#009CCE"],[0,1],67.4,125,67.4,-124.9).s().p("As4TiMAAAgnDIZxAAMAAAAnDg");
	this.shape_40.setTransform(81.2,125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#00509C","#009CCE"],[0,1],53.9,125,53.9,-124.9).s().p("Au/TiMAAAgnDId/AAMAAAAnDg");
	this.shape_41.setTransform(95,125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#00509C","#009CCE"],[0,1],40.5,125,40.5,-124.9).s().p("AxGTiMAAAgnDMAiNAAAMAAAAnDg");
	this.shape_42.setTransform(108.8,125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#00509C","#009CCE"],[0,1],27,125,27,-124.9).s().p("AzNTiMAAAgnDMAmbAAAMAAAAnDg");
	this.shape_43.setTransform(122.5,125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#00509C","#009CCE"],[0,1],13.5,125,13.5,-124.9).s().p("A1UTiMAAAgnDMAqpAAAMAAAAnDg");
	this.shape_44.setTransform(136.3,125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#00509C","#009CCE"],[0,1],0,125,0,-124.9).s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_45.setTransform(150,125);

	this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34}]},124).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).wait(405));

	// Résultats
	this.instance_12 = new lib.Resultats_mc();
	this.instance_12.setTransform(150.1,125);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(66).to({_off:false},0).to({alpha:1},9).wait(49).to({y:-28,alpha:0},11).to({_off:true},1).wait(404));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AgrE6IAApzIBXAAIAAJzg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AhME6IAApzICZAAIAAJzg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AhuE6IAApzIDdAAIAAJzg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AiPE6IAApzIEfAAIAAJzg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AiwE6IAApzIFhAAIAAJzg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AjSE6IAApzIGlAAIAAJzg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjzE6IAApzIHnAAIAAJzg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AkUE6IAApzIIpAAIAAJzg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ak2E6IAApzIJtAAIAAJzg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AlXE6IAApzIKvAAIAAJzg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Al4E6IAApzILxAAIAAJzg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AmaE6IAApzIM1AAIAAJzg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Am7E6IAApzIN3AAIAAJzg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AncE6IAApzIO5AAIAAJzg");
	var mask_1_graphics_14 = new cjs.Graphics().p("An+E6IAApzIP9AAIAAJzg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AofE6IAApzIQ/AAIAAJzg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ApAE6IAApzISBAAIAAJzg");
	var mask_1_graphics_17 = new cjs.Graphics().p("ApiE6IAApzITFAAIAAJzg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AqDE6IAApzIUHAAIAAJzg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AqkE6IAApzIVJAAIAAJzg");
	var mask_1_graphics_20 = new cjs.Graphics().p("ArGE6IAApzIWNAAIAAJzg");
	var mask_1_graphics_21 = new cjs.Graphics().p("ArnE6IAApzIXPAAIAAJzg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AsIE6IAApzIYRAAIAAJzg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AsqE6IAApzIZVAAIAAJzg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AtLE6IAApzIaXAAIAAJzg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:68.2,y:98.8}).wait(1).to({graphics:mask_1_graphics_1,x:71.5,y:98.8}).wait(1).to({graphics:mask_1_graphics_2,x:74.8,y:98.8}).wait(1).to({graphics:mask_1_graphics_3,x:78.2,y:98.8}).wait(1).to({graphics:mask_1_graphics_4,x:81.5,y:98.8}).wait(1).to({graphics:mask_1_graphics_5,x:84.8,y:98.8}).wait(1).to({graphics:mask_1_graphics_6,x:88.2,y:98.8}).wait(1).to({graphics:mask_1_graphics_7,x:91.5,y:98.8}).wait(1).to({graphics:mask_1_graphics_8,x:94.8,y:98.8}).wait(1).to({graphics:mask_1_graphics_9,x:98.2,y:98.8}).wait(1).to({graphics:mask_1_graphics_10,x:101.5,y:98.8}).wait(1).to({graphics:mask_1_graphics_11,x:104.8,y:98.8}).wait(1).to({graphics:mask_1_graphics_12,x:108.2,y:98.8}).wait(1).to({graphics:mask_1_graphics_13,x:111.5,y:98.8}).wait(1).to({graphics:mask_1_graphics_14,x:114.8,y:98.8}).wait(1).to({graphics:mask_1_graphics_15,x:118.2,y:98.8}).wait(1).to({graphics:mask_1_graphics_16,x:121.5,y:98.8}).wait(1).to({graphics:mask_1_graphics_17,x:124.8,y:98.8}).wait(1).to({graphics:mask_1_graphics_18,x:128.2,y:98.8}).wait(1).to({graphics:mask_1_graphics_19,x:131.5,y:98.8}).wait(1).to({graphics:mask_1_graphics_20,x:134.8,y:98.8}).wait(1).to({graphics:mask_1_graphics_21,x:138.2,y:98.8}).wait(1).to({graphics:mask_1_graphics_22,x:141.5,y:98.8}).wait(1).to({graphics:mask_1_graphics_23,x:144.8,y:98.8}).wait(1).to({graphics:mask_1_graphics_24,x:148.2,y:98.8}).wait(31).to({graphics:null,x:0,y:0}).wait(485));

	// logo dsgn
	this.instance_13 = new lib.desgn();
	this.instance_13.setTransform(194.3,160.1,1,1,0,0,0,44.3,17.1);

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({alpha:0},10).to({_off:true},1).wait(485));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_13 = new cjs.Graphics().p("A3bFmIAArLMAu2AAAIAALLg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_2_graphics_13,x:150,y:118.7}).wait(42).to({graphics:null,x:0,y:0}).wait(485));

	// logo
	this.instance_14 = new lib.Saint_mc();
	this.instance_14.setTransform(150,165);
	this.instance_14._off = true;

	this.instance_14.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({_off:false},0).to({y:143},11).wait(20).to({alpha:0},10).to({_off:true},1).wait(485));

	// 1st blue bg
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0D4E96").s().p("AgITiMAAAgnDIASAAMAAAAnDg");
	this.shape_46.setTransform(-1,125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0D4E96").s().p("AieTiMAAAgnDIE8AAMAAAAnDg");
	this.shape_47.setTransform(14.1,125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0D4E96").s().p("AkzTiMAAAgnDIJnAAMAAAAnDg");
	this.shape_48.setTransform(29.2,125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0D4E96").s().p("AnITiMAAAgnDIORAAMAAAAnDg");
	this.shape_49.setTransform(44.3,125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0D4E96").s().p("ApcTiMAAAgnDIS5AAMAAAAnDg");
	this.shape_50.setTransform(59.4,125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0D4E96").s().p("ArxTiMAAAgnDIXkAAMAAAAnDg");
	this.shape_51.setTransform(74.5,125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0D4E96").s().p("AuHTiMAAAgnDIcPAAMAAAAnDg");
	this.shape_52.setTransform(89.6,125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0D4E96").s().p("AwcTiMAAAgnDMAg4AAAMAAAAnDg");
	this.shape_53.setTransform(104.7,125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0D4E96").s().p("AywTiMAAAgnDMAliAAAMAAAAnDg");
	this.shape_54.setTransform(119.8,125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0D4E96").s().p("A1FTiMAAAgnDMAqMAAAMAAAAnDg");
	this.shape_55.setTransform(134.9,125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0D4E96").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_56.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46}]},55).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).wait(475));

	// bg
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_57.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(540));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96,-4,2000,500);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;