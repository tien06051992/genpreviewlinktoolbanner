/** @preserve Biborg Adobe Edge Animate Template Version 0.3.283 |bpJ4u1cjInDXMvYBrIjuahTaGss=| */

var PlatformClass = function()
{
    var self = this;

    self.automaticCounter = function(name)
    {
        console.log("Automatic Counter: %s", name);
    };

    self.userCounter = function(name)
    {
        console.log("User Counter: %s", name);
    };

    self.exit = function(name)
    {
        console.log("Exit: %s", name);
    };

    self.startTimer = function(name)
    {
        console.log("Start Timer: %s", name);
    };

    self.stopTimer = function(name)
    {
        console.log("Stop Timer: %s", name);
    };

    self.close = function()
    {
        console.log("Close");
    }

    self.initVideoModule = function()
    {
        console.log("Init Video Module")
    }
};

var platform = new PlatformClass();
