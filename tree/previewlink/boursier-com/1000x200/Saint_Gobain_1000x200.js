(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1000,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png?1469794601688", id:"Bitmap1"},
		{src:"images/Bitmap10.png?1469794601688", id:"Bitmap10"},
		{src:"images/Bitmap14.png?1469794601688", id:"Bitmap14"},
		{src:"images/Bitmap16.png?1469794601688", id:"Bitmap16"},
		{src:"images/Bitmap17.png?1469794601688", id:"Bitmap17"},
		{src:"images/Bitmap2.png?1469794601688", id:"Bitmap2"},
		{src:"images/Bitmap3.png?1469794601688", id:"Bitmap3"},
		{src:"images/Bitmap5.png?1469794601688", id:"Bitmap5"},
		{src:"images/Bitmap7.png?1469794601688", id:"Bitmap7"},
		{src:"images/Bitmap9.png?1469794601688", id:"Bitmap9"},
		{src:"images/logo.png?1469794601688", id:"logo"},
		{src:"images/logodown.png?1469794601688", id:"logodown"},
		{src:"images/logoup.png?1469794601688", id:"logoup"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,99);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,32);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,66);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,403,51);


(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,107);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,664,14);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,406,50);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,118);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,34);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,378,24);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,175);


(lib.logodown = function() {
	this.initialize(img.logodown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,25);


(lib.logoup = function() {
	this.initialize(img.logoup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,71);


(lib.URL_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-123,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.8,-88.4,430.9,42);


(lib.TopLogo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top logo
	this.instance = new lib.logo();
	this.instance.setTransform(-359,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-359,-70.8,430.3,210.8);


(lib.Saint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logodown();
	this.instance.setTransform(-130,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,9,259,25);


(lib.Retrouvez_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-95,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.3,-107.9,385.6,39.8);


(lib.Resultats_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-237,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241,-65,482.1,111.9);


(lib.Resultat_net_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(-216,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.2,-71,403.3,51);


(lib.Resultat_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-167,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,-63.3,406,50.3);


(lib.legal_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-208,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208,-5.2,664,14.6);


(lib.desgn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.logoup();
	this.instance.setTransform(-96,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-69,193,102.8);


(lib.cta_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008F4C").s().p("AgjA1IACgUQALAIAMAAQAVAAAAgTQAAgRgTAAIgNAAQgCgFACgKIAJAAQATAAAAgQQAAgOgQAAQgLAAgMAHQAAgKABgJQAOgFAQAAQAMgBAJAHQALAHAAAOQAAASgTAHQAYAFAAAWQAAASgOAKQgMAJgSAAQgPAAgMgGg");
	this.shape.setTransform(191.5,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008F4C").s().p("AgjA1IACgUQALAIAMAAQAUAAAAgTQAAgRgSAAIgNAAQgCgFACgKIAJAAQATAAAAgQQAAgOgQAAQgLAAgNAHQAAgLACgIQAOgFAQAAQAMgBAJAHQALAHAAAOQAAASgTAHQAYAFAAAWQAAASgOAKQgMAJgSAAQgPAAgMgGg");
	this.shape_1.setTransform(182.1,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008F4C").s().p("AgjA1IACgUQALAIAMAAQAVAAAAgTQAAgRgTAAIgNAAQgBgFABgKIAJAAQATAAAAgQQAAgOgQAAQgLAAgMAHQAAgKABgJQAOgFAQAAQAMgBAJAHQALAHAAAOQAAASgTAHQAYAFAAAWQAAASgOAKQgMAJgSAAQgOAAgNgGg");
	this.shape_2.setTransform(168.7,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008F4C").s().p("AgjA1IACgUQALAIAMAAQAVAAAAgTQAAgRgTAAIgNAAQgCgFACgKIAJAAQATAAAAgQQAAgOgQAAQgLAAgMAHQAAgKABgJQAOgFAQAAQAMgBAJAHQALAHAAAOQAAASgTAHQAYAFAAAWQAAASgOAKQgMAJgSAAQgPAAgMgGg");
	this.shape_3.setTransform(159.3,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008F4C").s().p("AgjA6QgBgDACgNIAdgdQANgRAAgPQAAgUgOAAQgLAAgBAGIgBAIQgIgBgFgCIADgXQANgGAOAAQAOAAAKAIQANAJAAARQAAASgPARIgbAcIAsAAQAAAJgCAJg");
	this.shape_4.setTransform(145.9,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008F4C").s().p("AgjA1IACgUQALAIAMAAQAVAAAAgTQAAgRgTAAIgNAAQgBgFABgKIAJAAQATAAAAgQQAAgOgQAAQgLAAgMAHQAAgKABgJQAOgFAQAAQAMgBAJAHQALAHAAAOQAAASgTAHQAYAFAAAWQAAASgOAKQgMAJgSAAQgPAAgMgGg");
	this.shape_5.setTransform(136.5,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008F4C").s().p("AgoAAQAAg6AoAAQApAAAAA6QAAA7gpAAQgoAAAAg7gAgOAAQAAAqAOAAQAPAAAAgqQAAgpgPAAQgOAAAAApg");
	this.shape_6.setTransform(123.2,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#008F4C").s().p("AgoAAQAAg6AoAAQApAAAAA6QAAA7gpAAQgoAAAAg7gAgOAAQAAAqAOAAQAPAAAAgqQAAgpgPAAQgOAAAAApg");
	this.shape_7.setTransform(113.9,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#008F4C").s().p("AgaAzQgMgHAAgQQAAgRAWgLQgSgKAAgRQAAgOALgIQAKgIANAAQAOAAAJAFQALAIAAAOQAAAPgTAMQAYAIAAAVQAAAPgNAKQgLAHgPABQgPAAgLgIgAgPAbQAAAOAPAAQAPAAAAgPQAAgLgRgIQgNAJAAALgAgLgcQAAALANAHQAKgIAAgKQAAgMgMAAQgLAAAAAMg");
	this.shape_8.setTransform(104.5,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#008F4C").s().p("AgoAAQAAg6AoAAQApAAAAA6QAAA7gpAAQgoAAAAg7gAgOAAQAAAqAOAAQAPAAAAgqQAAgpgPAAQgOAAAAApg");
	this.shape_9.setTransform(91.1,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ApvBMQASgNALgVQAJgTABgXQAAgugngcISKAAQAngBAYAWQAWAVAAAgQAAAhgWAVQgYAVgoABg");
	this.shape_10.setTransform(140.2,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAfIAAhMQAHgEAQgFIAAAcIAXAAIgCAPIgVAAIAAAlQAAAOAMAAQAHgBAFgDIgDAQQgIADgKAAQgaAAAAgYg");
	this.shape_11.setTransform(71.5,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgHgHgCQABgIADgGQAKAAAFACQAGADADAHIAAAAQAIgNAOAAIAHABQgCANgEAJQgEgDgFAAQgIAAgFAHIAAA2g");
	this.shape_12.setTransform(65.3,12.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiAAQAAgRAKgMQAKgMAPAAQARAAAJALQAIALAAASIgBAFIgtAAQAAALAIAGQAEAGAKAAQAKgBAKgEQgBAJgDAIQgJADgMAAQgoAAAAgqgAAOgHQAAgUgNAAQgMAAAAAUIAZAAIAAAAg");
	this.shape_13.setTransform(58,12.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIA5IgfhcQgCgGgGgBIgHgBIAEgNIAfAAIATA8IAEAbIABAAIAchXIAWAAIgrBxg");
	this.shape_14.setTransform(50,11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSATQgIgIAAgLQAAgKAIgHQAIgHALAAQAMAAAIAIQAGAHAAAJQAAAMgJAHQgIAGgKAAQgKAAgIgGgAgJAAQAAAOAJAAQAKAAAAgOQAAgOgKAAQgJAAAAAOg");
	this.shape_15.setTransform(39.8,7.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAgA5Ig0hSIAABSIgUAAIAAhaQAAgIgIgBIgGgBQABgIACgFIAmAAIAkA4QAHAKAFANIABAAIgBhPIAUAAIAABxg");
	this.shape_16.setTransform(29.7,11);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#008F4C").s().p("AguAyQAPgYAAgaQAAgbgPgWIABgCIBWAsQAGADAAAEQAAAFgGADIhWAsg");
	this.shape_17.setTransform(12.6,11.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag0A0QgWgVABgfQgBgdAWgXQAXgVAdgBQAeABAXAVQAWAXgBAdQABAfgWAVQgXAXgeAAQgdAAgXgXg");
	this.shape_18.setTransform(11.7,11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#008F4C").s().p("AuSBfQgsAAgcgcQgcgcAAgnQAAgnAcgbQAdgcArAAIcgAAQAwAAAdAcQAcAaAAAoQAAAogcAbQgeAcguAAg");
	this.shape_19.setTransform(103.4,11.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AuaBvQguAAghghQggggAAguQAAgsAgghQAhggAugBIc1AAQAuABAhAgQAgAhAAAsQAAAuggAgQghAhguAAg");
	this.shape_20.setTransform(103.5,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.9,22.2);


(lib.Chiffre_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-157,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-29.6,327,46.5);


(lib._552_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap17();
	this.instance.setTransform(-112,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-52,167.1,107.3);


(lib._199_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-99,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-24.4,227.1,66.5);


(lib._13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-44,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-42.2,181.5,118.3);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.numerovert = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.cta_btn();
	this.instance.setTransform(123,-51.4,1.737,1.737,0,0,0,103.3,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.4,-70.4,359.3,38.6);


// stage content:
(lib.Saint_Gobain_1000x200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3554A0").ss(1,1,1).p("EhOCgPiMCcFAAAIAAfFMicFAAAg");
	this.shape.setTransform(500,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(540));

	// fade
	this.instance = new lib.fade();
	this.instance.setTransform(500,100,3.333,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(528).to({_off:false},0).to({alpha:1},11).wait(1));

	// Top logo
	this.instance_1 = new lib.TopLogo_mc();
	this.instance_1.setTransform(368.8,-66.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(136).to({_off:false},0).to({y:36.1},18,cjs.Ease.get(1)).wait(386));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhOHAPnIAA/OMCcOAAAIAAfOg");
	mask.setTransform(500,100);

	// CTA btn
	this.instance_2 = new lib.numerovert();
	this.instance_2.setTransform(-297.4,194.7);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(410).to({_off:false},0).to({x:481.7},12).wait(118));

	// url
	this.instance_3 = new lib.URL_mc();
	this.instance_3.setTransform(-309,159.1);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(406).to({_off:false},0).to({x:515,y:159},12,cjs.Ease.get(1)).wait(122));

	// Retrouvez
	this.instance_4 = new lib.Retrouvez_mc();
	this.instance_4.setTransform(-311.6,139.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(401).to({_off:false},0).to({x:510,y:139},12,cjs.Ease.get(1)).wait(127));

	// last blue bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#054C98").s().p("AgQPnIAA/OIAhAAIAAfOg");
	this.shape_1.setTransform(1.7,100);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#054C98").s().p("AoCPnIAA/OIQFAAIAAfOg");
	this.shape_2.setTransform(51.5,100);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#054C98").s().p("Av0PnIAA/OIfpAAIAAfOg");
	this.shape_3.setTransform(101.4,100);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#054C98").s().p("A3nPnIAA/OMAvOAAAIAAfOg");
	this.shape_4.setTransform(151.2,100);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#054C98").s().p("A/ZPnIAA/OMA+zAAAIAAfOg");
	this.shape_5.setTransform(201,100);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#054C98").s().p("EgnLAPnIAA/OMBOXAAAIAAfOg");
	this.shape_6.setTransform(250.9,100);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#054C98").s().p("Egu9APnIAA/OMBd7AAAIAAfOg");
	this.shape_7.setTransform(300.7,100);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#054C98").s().p("Eg2wAPnIAA/OMBthAAAIAAfOg");
	this.shape_8.setTransform(350.5,100);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#054C98").s().p("Eg+iAPnIAA/OMB9FAAAIAAfOg");
	this.shape_9.setTransform(400.4,100);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#054C98").s().p("EhGUAPnIAA/OMCMpAAAIAAfOg");
	this.shape_10.setTransform(450.2,100);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#054C98").s().p("EhOHAPnIAA/OMCcOAAAIAAfOg");
	this.shape_11.setTransform(500,100);

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},389).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(141));

	// legal mention
	this.instance_5 = new lib.legal_mc();
	this.instance_5.setTransform(500.7,188.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(325).to({_off:false},0).to({x:500,y:188,alpha:1},11).wait(53).to({x:500.7,y:188.2,alpha:0},10).to({_off:true},1).wait(140));

	// 1,3 mds
	this.instance_6 = new lib._552_mc();
	this.instance_6.setTransform(-196,121.1);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(317).to({_off:false},0).to({x:641.9},12,cjs.Ease.get(1)).wait(60).to({x:611.9,y:-138.9,alpha:0},10).to({_off:true},1).wait(140));

	// Résultat net
	this.instance_7 = new lib.Resultat_net_mc();
	this.instance_7.setTransform(-193.1,85.9);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(311).to({_off:false},0).to({x:628.9},12,cjs.Ease.get(1)).wait(66).to({x:598.9,y:-154.1,alpha:0},10).to({_off:true},1).wait(140));

	// 4th red bg
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#DD204A","#F45827"],[0,1],148.3,100,148.3,-99.9).s().p("AgPPnIAA/OIAfAAIAAfOg");
	this.shape_12.setTransform(1.7,100);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#DD204A","#F45827"],[0,1],133.5,100,133.5,-99.9).s().p("AoCPnIAA/OIQFAAIAAfOg");
	this.shape_13.setTransform(51.5,100);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DD204A","#F45827"],[0,1],118.7,100,118.7,-99.9).s().p("Av0PnIAA/OIfpAAIAAfOg");
	this.shape_14.setTransform(101.4,100);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#DD204A","#F45827"],[0,1],103.8,100,103.8,-99.9).s().p("A3nPnIAA/OMAvOAAAIAAfOg");
	this.shape_15.setTransform(151.2,100);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#DD204A","#F45827"],[0,1],89,100,89,-99.9).s().p("A/ZPnIAA/OMA+zAAAIAAfOg");
	this.shape_16.setTransform(201,100);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#DD204A","#F45827"],[0,1],74.2,100,74.2,-99.9).s().p("EgnLAPnIAA/OMBOXAAAIAAfOg");
	this.shape_17.setTransform(250.9,100);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#DD204A","#F45827"],[0,1],59.3,100,59.3,-99.9).s().p("Egu9APnIAA/OMBd7AAAIAAfOg");
	this.shape_18.setTransform(300.7,100);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#DD204A","#F45827"],[0,1],44.5,100,44.5,-99.9).s().p("Eg2wAPnIAA/OMBthAAAIAAfOg");
	this.shape_19.setTransform(350.5,100);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#DD204A","#F45827"],[0,1],29.6,100,29.6,-99.9).s().p("Eg+iAPnIAA/OMB9FAAAIAAfOg");
	this.shape_20.setTransform(400.4,100);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#DD204A","#F45827"],[0,1],14.8,100,14.8,-99.9).s().p("EhGUAPnIAA/OMCMpAAAIAAfOg");
	this.shape_21.setTransform(450.2,100);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#DD204A","#F45827"],[0,1],0,100,0,-99.9).s().p("EhOHAPnIAA/OMCcOAAAIAAfOg");
	this.shape_22.setTransform(500,100);

	this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},299).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(231));

	// 1,3 mds
	this.instance_8 = new lib._13_mc();
	this.instance_8.setTransform(177.4,108.2);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(236).to({_off:false},0).to({regX:0.1,x:546.1,y:108},10,cjs.Ease.get(1)).wait(53).to({regX:0,x:526,y:-141.9,alpha:0},10).to({_off:true},1).wait(230));

	// Résultat
	this.instance_9 = new lib.Resultat_mc();
	this.instance_9.setTransform(197.7,80);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(231).to({_off:false},0).to({x:569.2,y:79},10,cjs.Ease.get(1)).wait(58).to({x:539.2,y:-197,alpha:0},10).to({_off:true},1).wait(230));

	// 3rd blue bg
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#0098D7","#7BC5C7"],[0,1],148.3,100,148.3,-99.9).s().p("AgQPoIAA/OIAhAAIAAfOg");
	this.shape_23.setTransform(1.7,100);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#0298D7","#79C6C8"],[0,1],133.5,100,133.5,-99.9).s().p("AoCPnIAA/OIQFAAIAAfOg");
	this.shape_24.setTransform(51.5,100);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#0398D6","#77C6C8"],[0,1],118.7,100,118.7,-99.9).s().p("Av0PnIAA/OIfpAAIAAfOg");
	this.shape_25.setTransform(101.4,100);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#0598D6","#75C7C9"],[0,1],103.8,100,103.8,-99.9).s().p("A3nPnIAA/OMAvOAAAIAAfOg");
	this.shape_26.setTransform(151.2,100);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#0698D6","#73C8C9"],[0,1],89,100,89,-99.9).s().p("A/ZPnIAA/OMA+zAAAIAAfOg");
	this.shape_27.setTransform(201,100);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#0899D6","#71C9CA"],[0,1],74.2,100,74.2,-99.9).s().p("EgnLAPnIAA/OMBOXAAAIAAfOg");
	this.shape_28.setTransform(250.9,100);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#0999D5","#6EC9CA"],[0,1],59.3,100,59.3,-99.9).s().p("Egu9APnIAA/OMBd7AAAIAAfOg");
	this.shape_29.setTransform(300.7,100);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#0A99D5","#6CCACA"],[0,1],44.5,100,44.5,-99.9).s().p("Eg2wAPnIAA/OMBthAAAIAAfOg");
	this.shape_30.setTransform(350.5,100);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#0C99D5","#6ACBCB"],[0,1],29.6,100,29.6,-99.9).s().p("Eg+iAPnIAA/OMB9FAAAIAAfOg");
	this.shape_31.setTransform(400.4,100);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#0D99D4","#68CBCB"],[0,1],14.8,100,14.8,-99.9).s().p("EhGUAPnIAA/OMCMpAAAIAAfOg");
	this.shape_32.setTransform(450.2,100);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#0F99D4","#66CCCC"],[0,1],0,100,0,-99.9).s().p("EhOHAPnIAA/OMCcOAAAIAAfOg");
	this.shape_33.setTransform(500,100);

	this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23}]},219).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).wait(311));

	// 19,9 mds
	this.instance_10 = new lib._199_mc();
	this.instance_10.setTransform(-132.6,116.3);
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(160).to({_off:false},0).to({x:588,y:115},10,cjs.Ease.get(1)).wait(49).to({regX:0.1,regY:-0.1,x:589.4,y:-114.7,alpha:0},10).to({_off:true},1).wait(310));

	// Chiffre
	this.instance_11 = new lib.Chiffre_mc();
	this.instance_11.setTransform(-121.8,75.3);
	this.instance_11._off = true;

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(155).to({_off:false},0).to({x:599,y:74},10,cjs.Ease.get(1)).wait(54).to({x:600.2,y:-155.6,alpha:0},10).to({_off:true},1).wait(310));

	// 2nd blue bg
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#00509C","#009CCE"],[0,1],148.3,100,148.3,-99.9).s().p("AgQPoIAA/OIAhAAIAAfOg");
	this.shape_34.setTransform(1.7,100);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#00509C","#009CCE"],[0,1],134.8,100,134.8,-99.9).s().p("AnVPnIAA/OIOqAAIAAfOg");
	this.shape_35.setTransform(47,100);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#00509C","#009CCE"],[0,1],121.4,100,121.4,-99.9).s().p("AuaPnIAA/OIc0AAIAAfOg");
	this.shape_36.setTransform(92.3,100);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#00509C","#009CCE"],[0,1],107.9,100,107.9,-99.9).s().p("A1fPnIAA/OMAq/AAAIAAfOg");
	this.shape_37.setTransform(137.6,100);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#00509C","#009CCE"],[0,1],94.4,100,94.4,-99.9).s().p("A8kPnIAA/OMA5IAAAIAAfOg");
	this.shape_38.setTransform(182.9,100);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#00509C","#009CCE"],[0,1],80.9,100,80.9,-99.9).s().p("EgjpAPnIAA/OMBHSAAAIAAfOg");
	this.shape_39.setTransform(228.2,100);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#00509C","#009CCE"],[0,1],67.4,100,67.4,-99.9).s().p("EgquAPnIAA/OMBVdAAAIAAfOg");
	this.shape_40.setTransform(273.5,100);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#00509C","#009CCE"],[0,1],53.9,100,53.9,-99.9).s().p("EgxzAPnIAA/OMBjmAAAIAAfOg");
	this.shape_41.setTransform(318.8,100);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#00509C","#009CCE"],[0,1],40.4,100,40.4,-99.9).s().p("Eg44APnIAA/OMBxwAAAIAAfOg");
	this.shape_42.setTransform(364.1,100);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#00509C","#009CCE"],[0,1],26.9,100,26.9,-99.9).s().p("Eg/9APnIAA/OMB/7AAAIAAfOg");
	this.shape_43.setTransform(409.4,100);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#00509C","#009CCE"],[0,1],13.5,100,13.5,-99.9).s().p("EhHCAPnIAA/OMCOEAAAIAAfOg");
	this.shape_44.setTransform(454.7,100);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#00509C","#009CCE"],[0,1],0,100,0,-99.9).s().p("EhOHAPnIAA/OMCcOAAAIAAfOg");
	this.shape_45.setTransform(500,100);

	this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34}]},124).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).wait(405));

	// Résultats
	this.instance_12 = new lib.Resultats_mc();
	this.instance_12.setTransform(500.1,113.6,1,1,0,0,0,0.1,0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(66).to({_off:false},0).to({alpha:1},9).wait(49).to({regY:-0.1,y:-63.7,alpha:0},11).to({_off:true},1).wait(404));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Ah0HEIAAuHIDpAAIAAOHg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AihHEIAAuHIFDAAIAAOHg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AjPHEIAAuHIGfAAIAAOHg");
	var mask_1_graphics_3 = new cjs.Graphics().p("Aj9HEIAAuHIH7AAIAAOHg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AkrHEIAAuHIJXAAIAAOHg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AlZHEIAAuHIKzAAIAAOHg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AmGHEIAAuHIMNAAIAAOHg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Am0HEIAAuHINpAAIAAOHg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AniHEIAAuHIPFAAIAAOHg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AoQHEIAAuHIQhAAIAAOHg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Ao9HEIAAuHIR8AAIAAOHg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AprHEIAAuHITXAAIAAOHg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AqZHEIAAuHIUzAAIAAOHg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ArHHEIAAuHIWPAAIAAOHg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Ar1HEIAAuHIXrAAIAAOHg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AsiHEIAAuHIZGAAIAAOHg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AtQHEIAAuHIahAAIAAOHg");
	var mask_1_graphics_17 = new cjs.Graphics().p("At+HEIAAuHIb9AAIAAOHg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AusHEIAAuHIdZAAIAAOHg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AvZHEIAAuHIezAAIAAOHg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AwHHEIAAuHMAgPAAAIAAOHg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Aw1HEIAAuHMAhrAAAIAAOHg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AxjHEIAAuHMAjHAAAIAAOHg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AyRHEIAAuHMAkjAAAIAAOHg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Ay+HEIAAuHMAl9AAAIAAOHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:388.3,y:77.8}).wait(1).to({graphics:mask_1_graphics_1,x:392.9,y:77.8}).wait(1).to({graphics:mask_1_graphics_2,x:397.4,y:77.8}).wait(1).to({graphics:mask_1_graphics_3,x:402,y:77.8}).wait(1).to({graphics:mask_1_graphics_4,x:406.6,y:77.8}).wait(1).to({graphics:mask_1_graphics_5,x:411.2,y:77.8}).wait(1).to({graphics:mask_1_graphics_6,x:415.8,y:77.8}).wait(1).to({graphics:mask_1_graphics_7,x:420.3,y:77.8}).wait(1).to({graphics:mask_1_graphics_8,x:424.9,y:77.8}).wait(1).to({graphics:mask_1_graphics_9,x:429.5,y:77.8}).wait(1).to({graphics:mask_1_graphics_10,x:434.1,y:77.8}).wait(1).to({graphics:mask_1_graphics_11,x:438.6,y:77.8}).wait(1).to({graphics:mask_1_graphics_12,x:443.2,y:77.8}).wait(1).to({graphics:mask_1_graphics_13,x:447.8,y:77.8}).wait(1).to({graphics:mask_1_graphics_14,x:452.4,y:77.8}).wait(1).to({graphics:mask_1_graphics_15,x:457,y:77.8}).wait(1).to({graphics:mask_1_graphics_16,x:461.5,y:77.8}).wait(1).to({graphics:mask_1_graphics_17,x:466.1,y:77.8}).wait(1).to({graphics:mask_1_graphics_18,x:470.7,y:77.8}).wait(1).to({graphics:mask_1_graphics_19,x:475.3,y:77.8}).wait(1).to({graphics:mask_1_graphics_20,x:479.8,y:77.8}).wait(1).to({graphics:mask_1_graphics_21,x:484.4,y:77.8}).wait(1).to({graphics:mask_1_graphics_22,x:489,y:77.8}).wait(1).to({graphics:mask_1_graphics_23,x:493.6,y:77.8}).wait(1).to({graphics:mask_1_graphics_24,x:498.2,y:77.8}).wait(31).to({graphics:null,x:0,y:0}).wait(485));

	// logo dsgn
	this.instance_13 = new lib.desgn();
	this.instance_13.setTransform(543.3,134.1,1,1,0,0,0,44.3,17.1);

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({alpha:0},10).to({_off:true},1).wait(485));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_13 = new cjs.Graphics().p("AD6MIIAAk5MAu3AAAIAAE5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_2_graphics_13,x:325,y:77.7}).wait(42).to({graphics:null,x:0,y:0}).wait(485));

	// logo
	this.instance_14 = new lib.Saint_mc();
	this.instance_14.setTransform(500,156);
	this.instance_14._off = true;

	this.instance_14.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({_off:false},0).to({y:119},11).wait(20).to({alpha:0},10).to({_off:true},1).wait(485));

	// 1st blue bg
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0D4E96").s().p("AgJPoIAA/OIASAAIAAfOg");
	this.shape_46.setTransform(1,100);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0D4E96").s().p("An8PnIAA/OIP4AAIAAfOg");
	this.shape_47.setTransform(50.9,100);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0D4E96").s().p("AvvPnIAA/OIfeAAIAAfOg");
	this.shape_48.setTransform(100.8,100);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0D4E96").s().p("A3iPnIAA/OMAvFAAAIAAfOg");
	this.shape_49.setTransform(150.7,100);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0D4E96").s().p("A/VPnIAA/OMA+rAAAIAAfOg");
	this.shape_50.setTransform(200.6,100);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0D4E96").s().p("EgnIAPnIAA/OMBORAAAIAAfOg");
	this.shape_51.setTransform(250.5,100);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0D4E96").s().p("Egu7APnIAA/OMBd3AAAIAAfOg");
	this.shape_52.setTransform(300.4,100);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0D4E96").s().p("Eg2uAPnIAA/OMBtcAAAIAAfOg");
	this.shape_53.setTransform(350.3,100);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0D4E96").s().p("Eg+hAPnIAA/OMB9CAAAIAAfOg");
	this.shape_54.setTransform(400.2,100);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0D4E96").s().p("EhGUAPnIAA/OMCMoAAAIAAfOg");
	this.shape_55.setTransform(450.1,100);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0D4E96").s().p("EhOHAPnIAA/OMCcOAAAIAAfOg");
	this.shape_56.setTransform(500,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46}]},55).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).wait(475));

	// bg
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("EhOHAPnIAA/OMCcOAAAIAAfOg");
	this.shape_57.setTransform(500,100);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(540));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(499.5,99.5,1001,201);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;