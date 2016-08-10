(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png?1469794464296", id:"Bitmap1"},
		{src:"images/Bitmap2.png?1469794464296", id:"Bitmap2"},
		{src:"images/logo_new.png?1469794464296", id:"logo_new"},
		{src:"images/top_logo.png?1469794464296", id:"top_logo"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,99);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,738,15);


(lib.logo_new = function() {
	this.initialize(img.logo_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,426,178);


(lib.top_logo = function() {
	this.initialize(img.top_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,195);


(lib.URL_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(89,-64.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.8,-88.4,430.9,42);


(lib.TopLogo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.top_logo();
	this.instance.setTransform(-341,-104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341,-118.6,542.3,209.1);


(lib.Saint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgimAD5IAAnxMBFNAAAIAAHxg");
	mask.setTransform(59.5,27);

	// logo
	this.instance = new lib.logo_new();
	this.instance.setTransform(-150,-128);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,2,426,48);


(lib.Retrouvez_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AbsBpQgSgOgEgbIAcgEQACARALAJQAKAIATABQAUAAAKgIQAJgIAAgLQAAgJgIgGQgHgEgXgGQgegHgMgFQgMgHgGgJQgGgLgBgKQAAgLAGgKQAEgJAJgGQAHgFALgDQAMgDANgBQATABAPAFQAOAGAIAJQAHAKACAQIgbAEQgCgNgJgIQgJgGgQAAQgTgBgJAHQgIAGAAAJQAAAGADADQAEADAHADQAEACAVAGQAdAHANAFQALAGAHAJQAGAKABAPQgBAOgHAMQgJAMgPAHQgQAHgTAAQghAAgQgNgAWGBgQgWgXABgqQAAgsAagWQAUgTAfAAQAjAAAWAXQAVAWAAAlQAAAggKATQgJASgSAKQgTALgWAAQgjAAgVgWgAWcgPQgOAPAAAfQAAAgAOAQQAOAQAUAAQAVgBAOgQQAOgPAAghQAAgegOgPQgOgPgVAAQgUAAgOAPgAQsBpQgPgOgBgVQABgMAFgKQAGgKAIgGQAKgGALgDIAZgFQAigDAQgHIAAgHQAAgPgIgHQgLgJgVAAQgUAAgJAGQgKAHgEARIgbgCQADgSAJgLQAIgLARgFQAQgHAWAAQAUAAAOAGQANAEAHAIQAFAHADAMQABAHABARIAAAlQAAAnABALQACALAFAJIgdAAQgEgIgCgMQgPANgOAGQgPAFgRAAQgbAAgOgNgARiAqQgRACgIADQgHADgDAGQgFAGAAAHQAAAMAJAHQAIAHARABQARAAAMgIQANgGAFgNQAFgJAAgTIAAgKQgQAGgeAFgAIHBgQgVgXgBgqQAAgsAagWQAWgTAeAAQAjAAAVAXQAWAWAAAlQAAAggJATQgKASgTAKQgSALgWAAQgjAAgVgWgAIcgPQgNAPAAAfQAAAgANAQQAOAQAVAAQAWgBAOgQQANgPAAghQAAgegNgPQgPgPgVAAQgVAAgOAPgAhHBpQgSgOgEgbIAcgEQACARALAJQAKAIATABQAUAAAIgIQAJgIAAgLQAAgJgIgGQgGgEgWgGQgegHgMgFQgMgHgGgJQgGgLgBgKQAAgLAGgKQAEgJAJgGQAHgFALgDQAMgDANgBQATABANAFQAOAGAHAJQAIAKACAQIgbAEQgCgNgHgIQgJgGgRAAQgSgBgJAHQgIAGgBAJQABAGADADQAEADAHADQAEACAVAGQAbAHAMAFQAMAGAHAJQAGAK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");
	this.shape.setTransform(94.1,-88.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-14.9,-61.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.4,-86.1,403.3,50.9);


(lib.Resultat_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(36,-52.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.1,-73.2,438.1,68.2);


(lib.legal_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-364,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364.4,-6,738.5,16.2);


(lib.desgn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgimAJ/IAAz+MBFNAAAIAAT+g");
	mask.setTransform(59.5,-64);

	// Layer 3
	this.instance = new lib.logo_new();
	this.instance.setTransform(-150,-123);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-123,426,123);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(6.6,-7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-33.9,330.6,54.3);


(lib._552_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANbH3QgXgZAAg1QAAg1AXgaQAXgaAoAAQApAAAXAaQAYAaAAA1QAAA1gYAZQgXAagoAAQgpAAgXgagAOHF1QgIANAAAnQAAAmAIAMQAHAKAMAAQAMAAAGgJQAJgNAAgmQAAgngIgNQgHgKgMAAQgMAAgHAKgAKSIQIDSmfIA2AAIjQGfgADyHpQgjgfgGgxIBJgJQADAbAQAQQAPAOAWAAQAXAAAQgSQAQgRAAgeQAAgdgPgQQgPgRgWAAQgPAAgUAGIAIg+QAfABAQgOQAQgPAAgXQAAgTgMgMQgMgNgTAAQgUAAgNAOQgOANgDAaIhFgLQAHgkAPgVQAOgWAagMQAagNAhAAQA4AAAhAkQAcAdAAAlQAAA0g5AfQAiAGAUAaQAVAZAAAkQAAA0gmAkQgmAkg5AAQg1AAgjgegAAPIBIAAkcQgnAmg4ATIAAhEQAdgKAjgbQAhgbAMglIA+AAIAAGMgAnYHIIAAhmIhnAAIAAhGIBnAAIAAhnIBFAAIAABnIBnAAIAABGIhnAAIAABmgAJSEnQgYgaAAg1QAAg0AYgaQAXgaAnABQApgBAYAaQAXAaAAA0QAAA1gXAaQgYAagngBQgpABgXgagAJ+ClQgJANAAAmQAAAnAJAMQAHAKALAAQAMAAAHgKQAJgMAAgnQAAgmgJgNQgHgKgMAAQgLAAgHAKgAvAhJQgxg5AAiCQAAiQA2hCQAvg6BPAAQA7AAAmAhQAmAhAHA6Ig9AGQgIglgPgQQgZgaglgBQgdAAgXARQgdAVgQApQgRAogBBMQAWgiAhgRQAggQAjAAQA9AAAsAtQArAuAABHQAAAwgUAoQgVApgjAVQgkAVgtAAQhNAAgwg4gAuNkJQgdAdAAAwQAAAhANAcQAOAdAYAQQAYAPAbAAQAnAAAcggQAcgfAAg2QAAg0gcgdQgbgfgqAAQgqAAgdAfgAgegZIAAh4IjZAAIAAg4IDklFIAxAAIAAFFIBDAAIAAA4IhDAAIAAB4gAi7jJICdAAIAAjigApxgZQAAgWAIgUQAMgiAcgiQAcggA1grQBRhDAdgnQAdgoAAgiQAAglgagZQgbgZgqAAQgsAAgbAaQgaAbgBAvIg/gGQAHhHAqglQAqglBIAAQBIAAAqAoQAqAoAAA7QAAAegMAdQgNAdgcAgQgdAhhCA3Qg3AvgQAQQgQARgKARID2AAIAAA7gALuh/QgJgTgGgdIgpAAIAIgkIAcAAIgBgZIAAgLIgjAAIAIgkIAfAAQARhXBGgnQArgYA0AAQAyAAAiAXIgLAxQgggbgqAAQgtAAgfAWQgSANgPAYQgPAYgDAWIC4AAIgIAkIi0AAIAAALIAAAZICtAAIgHAkIigAAQALA9ArAZQAfATAkAAQAyAAAcgaIAAA3QghAPgpAAQh5ABgrhmgAJiggIAAlKIhyFKIgvAAIhylPIAAFPIgyAAIAAmJIBOAAIBdEWIATA6IAVg/IBekRIBGAAIAAGJg");
	this.shape.setTransform(-27.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.9,-67.7,211.3,133);


(lib._199_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArMFCQAXgKAKgUQALgTABglIgpAAIAAhSIBTAAIAABSQAAAtgQAdQgQAbgkAPgAnQDJQgzgsgIhKIBMgHQAJA3AeAcQAfAcArAAQA0AAAkgnQAkgnAAhBQAAg8gigkQgjgjg4AAQgjAAgcAQQgcAPgQAaIhDgJIA4kuIEkAAIAABFIjqAAIggCeQA1glA6AAQBNAAA1A1QA1A2AABRQAABQguA6Qg5BHhiAAQhQAAgygtgAx3DQQgsgmgIhFIBEgHQAKAxAYAWQAZAWAnAAQAhAAAagPQAYgPAQgaQAQgZALgsQALgrAAgrIgBgOQgVAiglAUQgmAVgrAAQhKAAgygzQgzg0AAhXQAAhZA1g3QA1g2BPAAQA6AAAvAfQAwAfAYA5QAYA5AABsQAABugYBDQgZBDgvAiQgxAjhBAAQhFAAgrgmgAxJj8QgkAnABA+QAAA5AhAjQAjAjAxAAQAyAAAhgjQAfgjAAg/QAAg+gggkQgigkguAAQgwAAgkAngA23DsIAAnJQgaAZgqAZQgqAYgiANIAAhGQA8gcAugpQAsgoAUgmIAuAAIAAJLgAUmBuQgKgYgHgiIgwAAIAJgqIAhAAIgBgaIAAgNIgpAAIAJgqIAkAAQAThmBSgsQAygcA9AAQA6AAAoAaIgNA6QgmgggwAAQg0AAgkAaQgVAPgSAbQgRAcgEAaIDWAAIgIAqIjTAAIAAAMIAAAbIDKAAIgJAqIi6AAQAOBIAxAeQAlAVApAAQA7AAAggeIAABAQgnASgvAAQiNAAgyh1gAPtDIQgigbgJg1IA4gJQAEAiAWASQAVASAmAAQAnAAATgQQATgQAAgVQAAgTgRgLQgLgIgugLQg/gQgXgLQgYgMgMgUQgNgUAAgWQAAgXALgSQAKgTARgNQANgKAXgGQAWgHAaAAQAnAAAeALQAeALAOAUQAOATAFAgIg3AIQgEgagSgOQgSgPggAAQgoAAgQANQgQANAAARQAAALAGAJQAHAJAPAEIAxAOQA8AQAYAKQAYAKANAUQANATAAAdQAAAcgQAZQgRAZgfANQgeAOgoAAQhAAAgigbgAKmDNQghgWgTgnQgSgnAAgzQAAgyAQgmQARgpAhgWQAigVAoAAQAeAAAYANQAXAMAPAVIAAilIA3AAIAAHIIg0AAIAAgqQgfAyg+AAQgnAAghgWgAKzgpQgZAfAABAQAAA/AbAgQAbAgAkAAQAlAAAageQAagfAAg+QAAhCgbggQgagggnAAQglAAgZAfgAHgDbIAAl9IiGF9Ig3AAIiEmEIAAGEIg6AAIAAnIIBbAAIBsFDIAWBDIAYhJIBuk9IBRAAIAAHIg");
	this.shape.setTransform(17.3,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.6,-40.5,335.9,95.7);


(lib._13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnJiQAZgIALgPQAKgOABgZIgoAAIAAhTIBTAAIAAA7QAAAkgGAVQgHAVgRAQQgRARgaAJgAOVIZQgZgcAAg6QAAg6AZgcQAagcAsAAQAsAAAaAcQAZAcAAA6QAAA6gZAcQgaAcgrAAQgtAAgagcgAPGGKQgKAOAAArQAAAqAKAOQAHALANAAQANAAAHgLQAKgOAAgqQAAgrgJgOQgIgLgNAAQgNAAgHALgAK4I0IDnnHIA7AAIjkHHgADwIKQgngjgGg2IBQgJQAEAeARAQQARARAYAAQAZAAASgUQARgUAAggQAAgggRgSQgQgSgYAAQgQAAgWAGIAJhEQAhABASgPQASgPAAgaQAAgWgNgNQgNgNgWAAQgVAAgPAPQgPAPgDAcIhNgNQAIgnARgYQAPgXAdgNQAdgOAkAAQA9AAAkAnQAfAgAAAoQAAA5g+AiQAlAIAWAbQAWAcAAAnQAAA5gpAoQgqAog+AAQg6AAgnghgAj1IkQAChaAjhdQAjhdA6hJIi8AAIAAhNIEbAAIAAA8QgjAjgkBAQglBAgTBJQgTBJAAA5gArHHmIAAhxIhwAAIAAhNIBwAAIAAhwIBMAAIAABwIBxAAIAABNIhxAAIAABxgAJyE1QgagcAAg7QAAg6AagcQAZgbAsAAQAtAAAaAbQAZAcAAA6QAAA6gZAcQgaAdgsAAQgtAAgZgcgAKiClQgJAPAAAqQAAAqAJAPQAIAKANAAQANAAAHgKQAKgPAAgqQAAgqgKgOQgHgLgNAAQgNAAgIAKgAqngMQAWgJAKgSQAKgSABgjIgmAAIAAhMIBMAAIAABMQAAArgOAaQgPAYghAOgAMujHQgKgXgGgfIgtAAIAIgoIAfAAIgBgbIAAgLIgmAAIAIgoIAiAAQAShgBNgqQAwgaA5AAQA3AAAlAYIgMA3QgkgeguAAQgxAAghAYQgVAOgQAaQgRAbgCAYIDIAAIgHAoIjGAAIAAALIAAAbIC+AAIgIAoIiwAAQANBDAvAdQAiAUAnAAQA3AAAfgdIAAA9QglARgsAAQiFAAgvhvgAH/htQgfgVgRglQgRglAAgwQAAguAPgmQAQgnAfgUQAfgUAnAAQAcAAAWAMQAWALAOAUIAAicIA1AAIAAGwIgxAAIAAgnQgeAvg6AAQglAAgggVgAIMlXQgYAdAAA+QAAA9AZAdQAaAeAiAAQAjAAAZgcQAXgdAAg6QAAhBgYgeQgZgdgkAAQgkAAgXAcgAkYhcIAAiDIjvAAIAAg+ID7lkIA3AAIAAFkIBKAAIAAA+IhKAAIAACDgAnFkdICtAAIAAj4gAu3hcIAAmuQgYAYgoAXQgnAXggAMIAAhBQA5gbAqgmQAqgmASgjIAsAAIAAIngAFFhgIAAlpIh+FpIg0AAIh8lvIAAFvIg1AAIAAmwIBUAAIBmEyIAVBAQAHgXAQguIBnktIBNAAIAAGwg");
	this.shape.setTransform(49,5.1,0.98,0.98);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-74.2,228.1,147.7);


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
(lib.Saint_Gobain_960x640 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3554A0").ss(1,1,1).p("EhK6Ax2MAAAhj1MCV1AAAMAAABj1gEhK6AyAIAAgK");
	this.shape.setTransform(480,320.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(540));

	// fade
	this.instance = new lib.fade();
	this.instance.setTransform(480,320,3.2,2.56);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(528).to({_off:false},0).to({alpha:1},11).wait(1));

	// Top logo
	this.instance_1 = new lib.TopLogo_mc();
	this.instance_1.setTransform(379.8,-96.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(136).to({_off:false},0).to({y:104.1},18,cjs.Ease.get(1)).wait(386));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhK/Ax/MAAAhj+MCV/AAAMAAABj+g");
	mask.setTransform(480,320);

	// CTA btn
	this.instance_2 = new lib.numerovert();
	this.instance_2.setTransform(-602.2,513.4,1.2,1.2);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(410).to({_off:false},0).to({x:332.1},12).wait(118));

	// url
	this.instance_3 = new lib.URL_mc();
	this.instance_3.setTransform(-616.1,454.7,1.2,1.2);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(406).to({_off:false},0).to({x:373.8,y:454.6},12,cjs.Ease.get(1)).wait(122));

	// Retrouvez
	this.instance_4 = new lib.Retrouvez_mc();
	this.instance_4.setTransform(-619.3,421.1,1.2,1.2);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(401).to({_off:false},0).to({x:367.2,y:420.6},12,cjs.Ease.get(1)).wait(127));

	// last blue bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#054C98").s().p("AgQTiMAAAgnDIAhAAMAAAAnDg");
	this.shape_1.setTransform(1.7,320,1,2.56);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#054C98").s().p("EgHuAx/MAAAhj+IPdAAMAAABj+g");
	this.shape_2.setTransform(49.5,320);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#054C98").s().p("EgPMAx/MAAAhj+IeZAAMAAABj+g");
	this.shape_3.setTransform(97.4,320);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#054C98").s().p("EgWrAx/MAAAhj+MAtXAAAMAAABj+g");
	this.shape_4.setTransform(145.2,320);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#054C98").s().p("EgeJAx/MAAAhj+MA8TAAAMAAABj+g");
	this.shape_5.setTransform(193,320);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#054C98").s().p("EglnAx/MAAAhj+MBLPAAAMAAABj+g");
	this.shape_6.setTransform(240.9,320);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#054C98").s().p("EgtFAx/MAAAhj+MBaLAAAMAAABj+g");
	this.shape_7.setTransform(288.7,320);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#054C98").s().p("Eg0kAx/MAAAhj+MBpJAAAMAAABj+g");
	this.shape_8.setTransform(336.5,320);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#054C98").s().p("Eg8CAx/MAAAhj+MB4FAAAMAAABj+g");
	this.shape_9.setTransform(384.4,320);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#054C98").s().p("EhDgAx/MAAAhj+MCHBAAAMAAABj+g");
	this.shape_10.setTransform(432.2,320);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#054C98").s().p("EhK/Ax/MAAAhj+MCV/AAAMAAABj+g");
	this.shape_11.setTransform(480,320);

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},389).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(141));

	// legal mention
	this.instance_5 = new lib.legal_mc();
	this.instance_5.setTransform(368.9,628.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(325).to({_off:false},0).to({alpha:1},11).wait(53).to({alpha:0},10).to({_off:true},1).wait(140));

	// 1,3 mds
	this.instance_6 = new lib._552_mc();
	this.instance_6.setTransform(-472.7,393.9,1.2,1.2);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(317).to({_off:false},0).to({x:496.9},12,cjs.Ease.get(1)).wait(60).to({y:81.9,alpha:0},10).to({_off:true},1).wait(140));

	// Résultat net
	this.instance_7 = new lib.Resultat_net_mc();
	this.instance_7.setTransform(-469.2,351.7,1.2,1.2);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(311).to({_off:false},0).to({x:481.2},12,cjs.Ease.get(1)).wait(66).to({y:63.7,alpha:0},10).to({_off:true},1).wait(140));

	// 4th red bg
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#DD204A","#F45827"],[0,1],148.3,125,148.3,-124.9).s().p("AgQTiMAAAgnDIAhAAMAAAAnDg");
	this.shape_12.setTransform(1.7,320,1,2.56);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#DD204A","#F45827"],[0,1],133.5,319.9,133.5,-320).s().p("EgHuAx/MAAAhj+IPdAAMAAABj+g");
	this.shape_13.setTransform(49.5,320);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DD204A","#F45827"],[0,1],118.7,319.9,118.7,-320).s().p("EgPMAx/MAAAhj+IeZAAMAAABj+g");
	this.shape_14.setTransform(97.4,320);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#DD204A","#F45827"],[0,1],103.8,319.9,103.8,-320).s().p("EgWrAx/MAAAhj+MAtXAAAMAAABj+g");
	this.shape_15.setTransform(145.2,320);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#DD204A","#F45827"],[0,1],89,319.9,89,-320).s().p("EgeJAx/MAAAhj+MA8TAAAMAAABj+g");
	this.shape_16.setTransform(193,320);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#DD204A","#F45827"],[0,1],74.2,320,74.2,-319.9).s().p("EglnAx/MAAAhj+MBLPAAAMAAABj+g");
	this.shape_17.setTransform(240.9,320);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#DD204A","#F45827"],[0,1],59.3,320,59.3,-319.9).s().p("EgtFAx/MAAAhj+MBaLAAAMAAABj+g");
	this.shape_18.setTransform(288.7,320);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#DD204A","#F45827"],[0,1],44.5,320,44.5,-319.9).s().p("Eg0kAx/MAAAhj+MBpJAAAMAAABj+g");
	this.shape_19.setTransform(336.5,320);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#DD204A","#F45827"],[0,1],29.7,320,29.7,-319.9).s().p("Eg8CAx/MAAAhj+MB4FAAAMAAABj+g");
	this.shape_20.setTransform(384.4,320);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#DD204A","#F45827"],[0,1],14.8,320,14.8,-319.9).s().p("EhDgAx/MAAAhj+MCHBAAAMAAABj+g");
	this.shape_21.setTransform(432.2,320);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#DD204A","#F45827"],[0,1],0,320,0,-319.9).s().p("EhK/Ax/MAAAhj+MCV/AAAMAAABj+g");
	this.shape_22.setTransform(480,320);

	this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},299).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(231));

	// 1,3 mds
	this.instance_8 = new lib._13_mc();
	this.instance_8.setTransform(14,389.9,1.2,1.2,0,0,0,0.1,0);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(236).to({_off:false},0).to({x:432.4,y:389.6},10,cjs.Ease.get(1)).wait(53).to({regX:0,x:432.3,y:89.7,alpha:0},10).to({_off:true},1).wait(230));

	// Résultat
	this.instance_9 = new lib.Resultat_mc();
	this.instance_9.setTransform(38.4,333.2,1.2,1.2);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(231).to({_off:false},0).to({x:460.2,y:332},10,cjs.Ease.get(1)).wait(58).to({x:448.1,y:0.8,alpha:0},10).to({_off:true},1).wait(230));

	// 3rd blue bg
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#0098D7","#7BC5C7"],[0,1],148.3,320,148.3,-319.9).s().p("EgAQAx/MAAAhj+IAhAAMAAABj+g");
	this.shape_23.setTransform(1.7,320);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#0298D7","#79C6C8"],[0,1],133.5,320,133.5,-319.9).s().p("EgHuAx/MAAAhj+IPdAAMAAABj+g");
	this.shape_24.setTransform(49.5,320);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#0398D6","#77C6C8"],[0,1],118.7,320,118.7,-319.9).s().p("EgPMAx/MAAAhj+IeZAAMAAABj+g");
	this.shape_25.setTransform(97.4,320);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#0598D6","#75C7C9"],[0,1],103.8,320,103.8,-319.9).s().p("EgWrAx/MAAAhj+MAtXAAAMAAABj+g");
	this.shape_26.setTransform(145.2,320);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#0698D6","#73C8C9"],[0,1],89,320,89,-319.9).s().p("EgeJAx/MAAAhj+MA8TAAAMAAABj+g");
	this.shape_27.setTransform(193,320);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#0899D6","#71C9CA"],[0,1],74.2,320,74.2,-319.9).s().p("EglnAx/MAAAhj+MBLPAAAMAAABj+g");
	this.shape_28.setTransform(240.9,320);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#0999D5","#6EC9CA"],[0,1],59.3,320,59.3,-319.9).s().p("EgtFAx/MAAAhj+MBaLAAAMAAABj+g");
	this.shape_29.setTransform(288.7,320);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#0A99D5","#6CCACA"],[0,1],44.5,320,44.5,-319.9).s().p("Eg0kAx/MAAAhj+MBpJAAAMAAABj+g");
	this.shape_30.setTransform(336.5,320);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#0C99D5","#6ACBCB"],[0,1],29.7,320,29.7,-319.9).s().p("Eg8CAx/MAAAhj+MB4FAAAMAAABj+g");
	this.shape_31.setTransform(384.4,320);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#0D99D4","#68CBCB"],[0,1],14.8,320,14.8,-319.9).s().p("EhDgAx/MAAAhj+MCHBAAAMAAABj+g");
	this.shape_32.setTransform(432.2,320);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#0F99D4","#66CCCC"],[0,1],0,320,0,-319.9).s().p("EhK/Ax/MAAAhj+MCV/AAAMAAABj+g");
	this.shape_33.setTransform(480,320);

	this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23}]},219).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).wait(311));

	// 19,9 mds
	this.instance_10 = new lib._199_mc();
	this.instance_10.setTransform(-402.3,374.5,1.2,1.2);
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(160).to({_off:false},0).to({x:462.5,y:373},10,cjs.Ease.get(1)).wait(49).to({regX:0.1,regY:-0.1,x:464.1,y:86.6,alpha:0},10).to({_off:true},1).wait(310));

	// Chiffre
	this.instance_11 = new lib.Chiffre_mc();
	this.instance_11.setTransform(-389.3,319.3,1.2,1.2);
	this.instance_11._off = true;

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(155).to({_off:false},0).to({x:475.7,y:317.8},10,cjs.Ease.get(1)).wait(54).to({x:477.1,y:31.4,alpha:0},10).to({_off:true},1).wait(310));

	// 2nd blue bg
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#00509C","#009CCE"],[0,1],148.3,320,148.3,-319.9).s().p("EgAQAx/MAAAhj+IAhAAMAAABj+g");
	this.shape_34.setTransform(1.7,320);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#00509C","#009CCE"],[0,1],134.8,320,134.8,-319.9).s().p("EgHCAx/MAAAhj+IOFAAMAAABj+g");
	this.shape_35.setTransform(45.2,320);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#00509C","#009CCE"],[0,1],121.3,320,121.3,-319.9).s().p("EgN1Ax/MAAAhj+IbrAAMAAABj+g");
	this.shape_36.setTransform(88.7,320);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#00509C","#009CCE"],[0,1],107.9,320,107.9,-319.9).s().p("EgUoAx/MAAAhj+MApRAAAMAAABj+g");
	this.shape_37.setTransform(132.2,320);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#00509C","#009CCE"],[0,1],94.4,320,94.4,-319.9).s().p("EgbbAx/MAAAhj+MA23AAAMAAABj+g");
	this.shape_38.setTransform(175.6,320);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#00509C","#009CCE"],[0,1],80.9,320,80.9,-319.9).s().p("EgiOAx/MAAAhj+MBEdAAAMAAABj+g");
	this.shape_39.setTransform(219.1,320);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#00509C","#009CCE"],[0,1],67.4,320,67.4,-319.9).s().p("EgpBAx/MAAAhj+MBSDAAAMAAABj+g");
	this.shape_40.setTransform(262.6,320);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#00509C","#009CCE"],[0,1],53.9,320,53.9,-319.9).s().p("EgvzAx/MAAAhj+MBfnAAAMAAABj+g");
	this.shape_41.setTransform(306.1,320);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#00509C","#009CCE"],[0,1],40.5,320,40.5,-319.9).s().p("Eg2mAx/MAAAhj+MBtNAAAMAAABj+g");
	this.shape_42.setTransform(349.6,320);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#00509C","#009CCE"],[0,1],27,320,27,-319.9).s().p("Eg9ZAx/MAAAhj+MB6zAAAMAAABj+g");
	this.shape_43.setTransform(393,320);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#00509C","#009CCE"],[0,1],13.5,320,13.5,-319.9).s().p("EhEMAx/MAAAhj+MCIZAAAMAAABj+g");
	this.shape_44.setTransform(436.5,320);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#00509C","#009CCE"],[0,1],0,320,0,-319.9).s().p("EhK/Ax/MAAAhj+MCV/AAAMAAABj+g");
	this.shape_45.setTransform(480,320);

	this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34}]},124).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).wait(405));

	// Résultats
	this.instance_12 = new lib.Resultats_mc();
	this.instance_12.setTransform(470.4,325.4,1,1,0,0,0,0.1,0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(66).to({_off:false},0).to({x:470.1,y:325.1,alpha:1},9).wait(49).to({regY:-0.1,x:470.4,y:129.3,alpha:0},11).to({_off:true},1).wait(404));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Ah1KNIAA0YIDqAAIAAUYg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AjAKNIAA0YIGAAAIAAUYg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AkKKNIAA0YIIVAAIAAUYg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AlVKNIAA0YIKrAAIAAUYg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AmgKNIAA0YINBAAIAAUYg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AnrKNIAA0YIPXAAIAAUYg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Ao2KNIAA0YIRtAAIAAUYg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AqBKNIAA0YIUDAAIAAUYg");
	var mask_1_graphics_8 = new cjs.Graphics().p("ArMKNIAA0YIWZAAIAAUYg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AsXKNIAA0YIYvAAIAAUYg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AtiKNIAA0YIbFAAIAAUYg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AutKNIAA0YIdaAAIAAUYg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Av4KNIAA0YIfwAAIAAUYg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AxDKNIAA0YMAiHAAAIAAUYg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AyNKNIAA0YMAkbAAAIAAUYg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AzYKNIAA0YMAmxAAAIAAUYg");
	var mask_1_graphics_16 = new cjs.Graphics().p("A0jKNIAA0YMApHAAAIAAUYg");
	var mask_1_graphics_17 = new cjs.Graphics().p("A1uKNIAA0YMArdAAAIAAUYg");
	var mask_1_graphics_18 = new cjs.Graphics().p("A25KNIAA0YMAtzAAAIAAUYg");
	var mask_1_graphics_19 = new cjs.Graphics().p("A4EKNIAA0YMAwJAAAIAAUYg");
	var mask_1_graphics_20 = new cjs.Graphics().p("A5PKNIAA0YMAyfAAAIAAUYg");
	var mask_1_graphics_21 = new cjs.Graphics().p("A6aKNIAA0YMA01AAAIAAUYg");
	var mask_1_graphics_22 = new cjs.Graphics().p("A7lKNIAA0YMA3LAAAIAAUYg");
	var mask_1_graphics_23 = new cjs.Graphics().p("A8wKNIAA0YMA5gAAAIAAUYg");
	var mask_1_graphics_24 = new cjs.Graphics().p("A97KNIAA0YMA73AAAIAAUYg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:291.4,y:252.8}).wait(1).to({graphics:mask_1_graphics_1,x:298.9,y:252.8}).wait(1).to({graphics:mask_1_graphics_2,x:306.3,y:252.8}).wait(1).to({graphics:mask_1_graphics_3,x:313.8,y:252.8}).wait(1).to({graphics:mask_1_graphics_4,x:321.3,y:252.8}).wait(1).to({graphics:mask_1_graphics_5,x:328.8,y:252.8}).wait(1).to({graphics:mask_1_graphics_6,x:336.3,y:252.8}).wait(1).to({graphics:mask_1_graphics_7,x:343.8,y:252.8}).wait(1).to({graphics:mask_1_graphics_8,x:351.3,y:252.8}).wait(1).to({graphics:mask_1_graphics_9,x:358.8,y:252.8}).wait(1).to({graphics:mask_1_graphics_10,x:366.3,y:252.8}).wait(1).to({graphics:mask_1_graphics_11,x:373.8,y:252.8}).wait(1).to({graphics:mask_1_graphics_12,x:381.3,y:252.8}).wait(1).to({graphics:mask_1_graphics_13,x:388.8,y:252.8}).wait(1).to({graphics:mask_1_graphics_14,x:396.2,y:252.8}).wait(1).to({graphics:mask_1_graphics_15,x:403.7,y:252.8}).wait(1).to({graphics:mask_1_graphics_16,x:411.2,y:252.8}).wait(1).to({graphics:mask_1_graphics_17,x:418.7,y:252.8}).wait(1).to({graphics:mask_1_graphics_18,x:426.2,y:252.8}).wait(1).to({graphics:mask_1_graphics_19,x:433.7,y:252.8}).wait(1).to({graphics:mask_1_graphics_20,x:441.2,y:252.8}).wait(1).to({graphics:mask_1_graphics_21,x:448.7,y:252.8}).wait(1).to({graphics:mask_1_graphics_22,x:456.2,y:252.8}).wait(1).to({graphics:mask_1_graphics_23,x:463.7,y:252.8}).wait(1).to({graphics:mask_1_graphics_24,x:471.2,y:252.8}).wait(31).to({graphics:null,x:0,y:0}).wait(485));

	// logo dsgn
	this.instance_13 = new lib.desgn();
	this.instance_13.setTransform(447.3,330.1,1,1,0,0,0,44.3,17.1);

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({alpha:0},10).to({_off:true},1).wait(485));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_13 = new cjs.Graphics().p("EgiXAD4IAAnvMBEvAAAIAAHvg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_2_graphics_13,x:463,y:346.7}).wait(42).to({graphics:null,x:0,y:0}).wait(485));

	// logo
	this.instance_14 = new lib.Saint_mc();
	this.instance_14.setTransform(403,355);
	this.instance_14._off = true;

	this.instance_14.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({_off:false},0).to({y:318},11).wait(20).to({alpha:0},10).to({_off:true},1).wait(485));

	// 1st blue bg
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0D4E96").s().p("EgAJAx/MAAAhj+IASAAMAAABj+g");
	this.shape_46.setTransform(1,320);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0D4E96").s().p("EgHoAx/MAAAhj+IPRAAMAAABj+g");
	this.shape_47.setTransform(48.9,320);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0D4E96").s().p("EgPHAx/MAAAhj+IeOAAMAAABj+g");
	this.shape_48.setTransform(96.8,320);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0D4E96").s().p("EgWmAx/MAAAhj+MAtNAAAMAAABj+g");
	this.shape_49.setTransform(144.7,320);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0D4E96").s().p("EgeFAx/MAAAhj+MA8KAAAMAAABj+g");
	this.shape_50.setTransform(192.6,320);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0D4E96").s().p("EglkAx/MAAAhj+MBLIAAAMAAABj+g");
	this.shape_51.setTransform(240.5,320);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0D4E96").s().p("EgtDAx/MAAAhj+MBaHAAAMAAABj+g");
	this.shape_52.setTransform(288.4,320);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0D4E96").s().p("Eg0iAx/MAAAhj+MBpEAAAMAAABj+g");
	this.shape_53.setTransform(336.3,320);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0D4E96").s().p("Eg8BAx/MAAAhj+MB4DAAAMAAABj+g");
	this.shape_54.setTransform(384.2,320);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0D4E96").s().p("EhDgAx/MAAAhj+MCHAAAAMAAABj+g");
	this.shape_55.setTransform(432.1,320);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0D4E96").s().p("EhK/Ax/MAAAhj+MCV/AAAMAAABj+g");
	this.shape_56.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46}]},55).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).wait(475));

	// bg
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("EhJbATiMAAAgnDMCS2AAAMAAAAnDg");
	this.shape_57.setTransform(470,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(540));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(479.5,319.5,961,642);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;