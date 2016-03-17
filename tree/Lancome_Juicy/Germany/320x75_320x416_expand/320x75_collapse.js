(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 75,
	fps: 18,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/Dior_logo.png", id:"Dior_logo"},
		{src:"images/poison_logo.png", id:"poison_logo"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,75);


(lib.Dior_logo = function() {
	this.initialize(img.Dior_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,75);


(lib.poison_logo = function() {
	this.initialize(img.poison_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,75);


(lib.Poison_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.poison_logo();
	this.instance.setTransform(-160,-37.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-160,-37.5,320,75);


(lib.Gal_mc = function() {
	this.initialize();

	// gal
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,75);


(lib.Dior_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Dior_logo();
	this.instance.setTransform(54,-64.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(54,-64.5,320,75);


(lib.Arrow_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwAhIAvhCIAyBDg");
	this.shape.setTransform(0,0,0.81,0.81);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,-2.7,8,5.5);


(lib.CTA_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Arrow
	this.instance = new lib.Arrow_mc();
	this.instance.setTransform(39.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:-2.3},5).to({y:0.2},5).wait(5).to({y:-2.3},5).to({y:0.2},5).wait(5).to({y:-2.3},5).to({y:0.2},5).wait(5).to({y:-2.3},5).to({y:0.2},5).wait(5).to({y:-2.3},5).to({y:0.2},5).wait(5).to({y:-2.3},5).to({y:0.2},5).wait(6));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABgAlQgJgGgFgKQgEgKAAgLQAAgNAFgJIAAAAIAAAAQAFgJAJgFIAAAAIAAgBQAJgEALAAQANAAAIAHIAAAAQAJAGADAMIAAABIAAABIgBAAIAAAAIgKACIgBAAIgBAAIAAAAIgBgBIAAAAQgDgJgEgCQgFgEgHAAQgIAAgGAEQgGADgCAHQgCAHgBAHQABAJADAHIAAAAQACAGAGADIAAABIABAAQAFADAGAAQAIAAAGgEIAAAAQAFgFACgJIABgBIABgBIABAAIAKADIABAAIAAAAIABABIAAABIAAAAQgDANgJAHIAAABIgBAAQgJAHgNAAQgNAAgIgFgAEsApIgBAAIg7AAIgBgBIgBgBIAAhNIABgBIABgBIA5AAIACABIAAABIAAAJIAAABIAAABIgBAAIgBAAIgsAAIAAAUIApAAIACABIAAABIAAAIIAAABIAAAAIgBABIgBAAIgpAAIAAAWIAuAAIACABIAAABIAAAKIAAABIAAAAIgBABIAAAAgADmApIgBAAIgOAAIgBgBIAAAAIAAgBIgaglIgLAKIAAAbIAAABIgBAAIgBABIgBAAIgKAAIgBgBIgBgBIAAhNIABgBIABgBIAKAAIACABIABABIAAAiIAjgjIACgBIANAAIACABIAAABIAAACIggAfIAiArIAAAAIAAABIAAABIAAAAIgBABIAAAAgABDApIgBAAIg7AAIgBgBIAAgBIAAhNIAAgBIACgBIA5AAIABABIAAABIAAAJIAAABIAAABIgBAAIAAAAIgtAAIAAAUIAqAAIABABIABABIAAAIIAAABIgBAAIAAABIgBAAIgqAAIAAAWIAuAAIACABIABABIAAAKIAAABIgBAAIAAABIgBAAgAhJAoIgBgBIAAhNIABgBIABgBIAbAAIAPABQAHACAFAFQAHAFADAJQADAIAAAKQAAAIgCAIQgCAHgEAEIgIAIQgEADgFABQgGACgHAAIgdAAIgBAAIAAgBgAg7AbIAOAAIAMgBQAEgBACgDQADgDACgGIAAAAQACgFABgIQgBgLgDgGIAAAAQgEgGgFgCIgBAAQgEgCgIAAIgOAAgAhtApIgCAAIgLAAIAAgBIgBgBIAAhCIgZAAIAAAAIgBgCIAAgJIABgBIABgBIA+AAIACABIABABIAAAJIAAABIgBABIgBAAIgBAAIgXAAIAABCIAAABIgBAAIAAABIAAAAgAifApIgBAAIgMAAIgBgBIAAAAIAAgBIgmg2IAAA2IAAABIAAAAIgBABIAAAAIgLAAIgBgBIAAgBIAAhNIAAgBIACgBIAKAAIABAAIABABIAAAAIAmA3IAAg2IAAgBIACgBIAKAAIABABIABABIAABNIAAABIgBAAIAAABIAAAAgAjuApIgBAAIg7AAIgBgBIgBgBIAAhNIABgBIABgBIA5AAIACABIAAABIAAAJIAAABIAAABIgBAAIgBAAIgsAAIAAAUIApAAIACABIAAABIAAAIIAAABIAAAAIgBABIgBAAIgpAAIAAAWIAuAAIACABIAAABIAAAKIAAABIAAAAIgBABIAAAAg");
	this.shape.setTransform(-2.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

	// button bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AnaBcIAAi3IO1AAIAAC3g");
	this.shape_1.setTransform(5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-9.2,95.1,18.5);


// stage content:
(lib._320x75_collapse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Cta
	this.instance = new lib.CTA_btn();
	this.instance.setTransform(265.1,37.5,0.8,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({alpha:1},10).wait(16));

	// PoisonLogo
	this.instance_1 = new lib.Poison_mc();
	this.instance_1.setTransform(160,37.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({alpha:1},10).wait(27));

	// DiorLogo
	this.instance_2 = new lib.Dior_mc();
	this.instance_2.setTransform(-54,64.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({alpha:1},9).wait(37));

	// W
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARAkIgBgBIAAAAIgPg0IgBgFIAAAFIgPA0IAAABIgLAAIAAgBIgThEIAAgBIABgBIAKAAIAAABIAAAAIALAsIACALIADgJIAAgBIANgtIABAAIAAgBIAKAAIAAABIAKAiIAFAUIADgKIALgsIAAgBIAKAAIABABIAAABIgUBEIAAABgAAzAPIgBgBIAAgJIABgBIAbAAIABABIAAAJIgBABgAhNAPIgBgBIAAgJIABgBIAbAAIABABIAAAJIgBABg");
	this.shape.setTransform(11.8,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	// bg Gal
	this.instance_3 = new lib.Gal_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,37.5,320,75);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;