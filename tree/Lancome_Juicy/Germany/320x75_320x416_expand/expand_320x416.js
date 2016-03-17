(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 416,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg_320x416.jpg", id:"bg_320x416"},
		{src:"images/dior_320x416.png", id:"dior_320x416"},
		{src:"images/img_320x416.png", id:"img_320x416"},
		{src:"images/poison_320x416.png", id:"poison_320x416"},
		{src:"images/Prdct.png", id:"Prdct"}
	]
};



// symbols:



(lib.bg_320x416 = function() {
	this.initialize(img.bg_320x416);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,416);


(lib.dior_320x416 = function() {
	this.initialize(img.dior_320x416);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,48);


(lib.img_320x416 = function() {
	this.initialize(img.img_320x416);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,2080);


(lib.poison_320x416 = function() {
	this.initialize(img.poison_320x416);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,125);


(lib.Prdct = function() {
	this.initialize(img.Prdct);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,156);


(lib.Prcdt_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Prdct();
	this.instance.setTransform(-56,-78);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-78,112,156);


(lib.Poison_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.poison_320x416();
	this.instance.setTransform(-96,-62.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96,-62.5,192,125);


(lib.Dior_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.dior_320x416();
	this.instance.setTransform(-48,-24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-24,96,48);


(lib.BigGal_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg_320x416();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,416);


(lib.Arrow_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwAhIAvhCIAyBDg");
	this.shape.setTransform(-80.8,161.7,0.8,0.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.7,159,7.8,5.4);


(lib.CTA_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// Arrow
	this.instance = new lib.Arrow_mc();
	this.instance.setTransform(115.7,3.2,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({x:118.2},5).to({x:115.7},5).wait(5).to({x:118.2},5).to({x:115.7},5).wait(5).to({x:118.2},5).to({x:115.7},5).wait(5).to({x:118.2},5).to({x:115.7},5).wait(5).to({x:118.2},5).to({x:115.7},5).wait(5).to({x:118.2},5).to({x:115.7},5).wait(6));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-125.2,-76.7,0.891,0.891);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

	// button bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AtKBoIAAjPIaVAAIAADPg");
	this.shape_1.setTransform(-118.1,-76.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.4,-87.2,168.6,21);


// stage content:
(lib.expand_320x416 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_100 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(100).call(this.frame_100).wait(1));

	// W
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASAmIAAAAIgCAAIgPg4IgBgFIAAAFIgQA4IAAAAIgMAAIAAAAIgUhKIAAAAIABgBIAKAAIABAAIAAABIAMAvIACALIACgJIAAgBIAPgxIABAAIAAAAIAKAAIAAAAIAMAlIAEAWIADgMIAMguIABgBIAAAAIAKAAIABABIAAAAIgVBKIAAAAgAA3AQIgBgCIAAgJIABgBIAcAAIABABIAAAJIgBACgAhSAQIgBgCIAAgJIABgBIAcAAIACABIAAAJIgCACg");
	this.shape.setTransform(13.6,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(101));

	// Cta
	this.instance = new lib.CTA_btn();
	this.instance.setTransform(278.2,471.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(81).to({_off:false},0).to({alpha:1},10).wait(10));

	// Prodct
	this.instance_1 = new lib.Prcdt_mc();
	this.instance_1.setTransform(264.6,338.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(68).to({_off:false},0).to({alpha:1},9).wait(24));

	// PoisonLogo
	this.instance_2 = new lib.Poison_mc();
	this.instance_2.setTransform(152,277.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({alpha:1},10).wait(37));

	// DiorLogo
	this.instance_3 = new lib.Dior_mc();
	this.instance_3.setTransform(260,35.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({alpha:1},9).wait(50));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_25 = new cjs.Graphics().p("A4/F2IAArrMAx/AAAIAALrg");
	var mask_graphics_26 = new cjs.Graphics().p("A4/HwIAAvfMAx/AAAIAAPfg");
	var mask_graphics_27 = new cjs.Graphics().p("A4/JqIAAzTMAx/AAAIAATTg");
	var mask_graphics_28 = new cjs.Graphics().p("A4/LkIAA3HMAx/AAAIAAXHg");
	var mask_graphics_29 = new cjs.Graphics().p("A4/NeIAA67MAx/AAAIAAa7g");
	var mask_graphics_30 = new cjs.Graphics().p("A4/PXIAA+tMAx/AAAIAAetg");
	var mask_graphics_31 = new cjs.Graphics().p("A4/RRMAAAgihMAx/AAAMAAAAihg");
	var mask_graphics_32 = new cjs.Graphics().p("A4/TLMAAAgmVMAx/AAAMAAAAmVg");
	var mask_graphics_33 = new cjs.Graphics().p("A4/VFMAAAgqJMAx/AAAMAAAAqJg");
	var mask_graphics_34 = new cjs.Graphics().p("A4/W+MAAAgt8MAx/AAAMAAAAt8g");
	var mask_graphics_35 = new cjs.Graphics().p("A4/Y4MAAAgxvMAx/AAAMAAAAxvg");
	var mask_graphics_36 = new cjs.Graphics().p("A4/ayMAAAg1jMAx/AAAMAAAA1jg");
	var mask_graphics_37 = new cjs.Graphics().p("A4/csMAAAg5XMAx/AAAMAAAA5Xg");
	var mask_graphics_38 = new cjs.Graphics().p("A4/emMAAAg9LMAx/AAAMAAAA9Lg");
	var mask_graphics_39 = new cjs.Graphics().p("EgY/AgfMAAAhA+MAx/AAAMAAABA+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_25,x:160,y:378.5}).wait(1).to({graphics:mask_graphics_26,x:160,y:366.3}).wait(1).to({graphics:mask_graphics_27,x:160,y:354.2}).wait(1).to({graphics:mask_graphics_28,x:160,y:342}).wait(1).to({graphics:mask_graphics_29,x:160,y:329.8}).wait(1).to({graphics:mask_graphics_30,x:160,y:317.6}).wait(1).to({graphics:mask_graphics_31,x:160,y:305.4}).wait(1).to({graphics:mask_graphics_32,x:160,y:293.3}).wait(1).to({graphics:mask_graphics_33,x:160,y:281.1}).wait(1).to({graphics:mask_graphics_34,x:160,y:268.9}).wait(1).to({graphics:mask_graphics_35,x:160,y:256.7}).wait(1).to({graphics:mask_graphics_36,x:160,y:244.5}).wait(1).to({graphics:mask_graphics_37,x:160,y:232.4}).wait(1).to({graphics:mask_graphics_38,x:160,y:220.2}).wait(1).to({graphics:mask_graphics_39,x:160,y:208}).wait(62));

	// Big Gal
	this.instance_4 = new lib.BigGal_mc();
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({alpha:1},3).wait(73));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgY/AgfMAAAhA+MAx/AAAMAAABA+g");
	mask_1.setTransform(160,208);

	// gal
	this.instance_5 = new lib.img_320x416();
	this.instance_5.setTransform(0,0.3);

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:-320},0).wait(1).to({x:-638.7},0).wait(1).to({x:-958.7,y:0.2},0).wait(1).to({x:-1280},0).wait(1).to({x:0,y:-415.7},0).wait(1).to({x:-319.6},0).wait(1).to({x:-639.6},0).wait(1).to({x:-960},0).wait(1).to({x:0,y:-831.9},0).wait(1).to({x:-319.9},0).wait(1).to({x:-639.9},0).wait(1).to({x:-959.9},0).wait(1).to({x:-1279.9},0).wait(2).to({x:0,y:-1248.4},0).wait(1).to({x:-320},0).wait(1).to({x:-640},0).wait(1).to({x:-960},0).wait(1).to({x:-1279.6},0).wait(1).to({x:0,y:-1664.4},0).wait(1).to({x:-319.8},0).wait(1).to({x:-640},0).wait(1).to({x:-960},0).wait(1).to({x:-1280,y:-1664},0).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,208.3,320,415.8);

})(libExp = libExp||{}, imagesExp = imagesExp||{}, createjs = createjs||{}, ss = ss||{});
var libExp, imagesExp, createjs, ss;