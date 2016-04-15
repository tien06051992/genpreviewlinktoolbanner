/***********************
* Actions de compositions pour Adobe Edge Animate
*
* Modifier ce fichier avec précaution, en veillant à conserver 
* les signatures et les commentaires de fonction commençant par « Edge » pour maintenir la 
* possibilité d’interagir avec ces actions depuis Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // alias pour les classes Edge couramment utilisées

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insérer le code ici
         sym.getSymbol("Outing").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7115, function(sym, e) {
         // insérer le code ici
         sym.getSymbol("Trip").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insérer le code ici
         sym.getSymbol("WordingEnd").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Action}", "mouseenter", function(sym, e) {
         
         sym.getSymbol("WordingEnd").getSymbol("cta2").play('hover');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Action}", "mouseleave", function(sym, e) {
         // Insérer le code à exécuter lorsque la souris quitte un élément
         sym.getSymbol("WordingEnd").getSymbol("cta2").play('start');
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${information}", "click", function(sym, e) {
         // insérer le code du clic de souris ici
         // Afficher un élément 
         sym.$("notices").show();
         
         // Afficher un élément 
         sym.$("close_info").show();
         
         // Masquer un élément 
         sym.$("information").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close_info}", "click", function(sym, e) {
         // insérer le code du clic de souris ici
         // Afficher un élément 
         sym.$("information").show();
         
         // Masquer un élément 
         sym.$("close_info").hide();
         
         // Masquer un élément 
         sym.$("notices").hide();
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Action}", "click", function(sym, e) {
         Enabler.exit("Click on BG");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Wording_Start'
   (function(symbolName) {   
   
   })("Wording_Start");
   //Edge symbol end:'Wording_Start'

   //=========================================================
   
   //Edge symbol: 'weekend'
   (function(symbolName) {   
   
      

   })("Outing");
   //Edge symbol end:'Outing'

   //=========================================================
   
   //Edge symbol: 'vacation'
   (function(symbolName) {   
   
   })("Trip");
   //Edge symbol end:'Trip'

   //=========================================================
   
   //Edge symbol: 'WordingEnd'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         // insérer le code ici
         sym.stop();

      });
      //Edge binding end

   })("WordingEnd");
   //Edge symbol end:'WordingEnd'

   //=========================================================
   
   //Edge symbol: 'cta'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insérer le code ici
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insérer le code ici
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insérer le code ici
         sym.stop();

      });
      //Edge binding end

      

      

   })("cta");
   //Edge symbol end:'cta'

   //=========================================================
   
   //Edge symbol: 'cta_A'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${CTA_P1}", "mouseenter", function(sym, e) {
         // Insérer le code à exécuter lorsque la souris entre dans un élément
         
         sym.play('hover');

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CTA_P1}", "mouseleave", function(sym, e) {
         // Insérer le code à exécuter lorsque la souris quitte un élément
         
         sym.play('start');

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insérer le code ici
         sym.play();

      });
      //Edge binding end

   })("cta_A");
   //Edge symbol end:'cta_A'

   //=========================================================
   
   //Edge symbol: 'cta_B'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insérer le code ici
         sym.play();

      });
      //Edge binding end

   })("cta_B");
   //Edge symbol end:'cta_B'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-285757307");