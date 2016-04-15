function VideoProgressListener(video)
{
    var self = this;
    this.video = video;
    this.callbacks = [];
    this.lastProgress = -1;
    this.video.addEventListener("timeupdate", function ()
    {
        self.__checkTime();
    });
}

VideoProgressListener.prototype.at = function (progress, callback)
{
    this.callbacks.push({progress: progress, callback: callback});
    return this;
};

VideoProgressListener.prototype.__checkTime = function ()
{
    var progress = this.video.currentTime;
    for (var i = 0; i < this.callbacks.length; i++)
    {
        var callback = this.callbacks[i];
        if (callback.progress <= progress && callback.progress > this.lastProgress)
        {
            callback.called = true;
            callback.callback();
        }
    }
    this.lastProgress = progress;
};

function setVisible(elem, visible)
{
    setClass(elem, "visible", visible);
    setClass(elem, "hidden", !visible);
}

function preloadImages(images, callback)
{
    var imagesLoading = images.slice();

    function imageLoaded(image)
    {
        var idx = imagesLoading.indexOf(image);
        if (idx != -1)
        {
            imagesLoading.splice(idx, 1);
            if (imagesLoading.length == 0) callback();
        }
    }

    for (var i = 0; i < images.length; i++)
    {
        var url = Enabler.getUrl(images[i]);
        var image = new Image();
        image.onload = function (img)
        {
            return function ()
            {
                imageLoaded(img);
            }
        }(images[i]);
        image.src = url;
    }
}

function getElem(elem)
{
    if (typeof elem == "string")
        return document.getElementById(elem);
    else
        return elem;
}

function addClass(elem, className)
{
    elem = getElem(elem);
    if (!hasClass(elem, className))
    {
        elem.className = elem.className + " " + className;
    }
}

function toggleClass(elem, className)
{
    elem = getElem(elem);
    if (!hasClass(elem, className))
    {
        addClass(elem, className);
    }
    else
    {
        removeClass(elem, className);
    }
}

function setClass(elem, className, bool)
{
    if (bool) addClass(elem, className);
    else removeClass(elem, className);
}

function removeClass(elem, className)
{
    elem = getElem(elem);
    var classes = elem.className.split(/\s+/);
    var index = classes.indexOf(className);
    if (index !== -1)
    {
        classes.splice(index, 1);
        elem.className = classes.join(" ");
    }
}

function hasClass(elem, className)
{
    elem = getElem(elem);
    var classes = elem.className.split(/\s+/);
    return classes.indexOf(className) !== -1;
}

function addVideoSource(video, url, type)
{
    var source = document.createElement('source');
    source.setAttribute("src", Enabler.getUrl(url));
    source.setAttribute("type", type);
    video.appendChild(source);
}

function preloadVideo(video, callback)
{
    if (video.readyState == 4)
    {
        callback();
    }
    else
    {
        video.addEventListener("canplaythrough", callback);
    }
    video.preload = "auto";
}

function isMobile()
{
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function canControlVolume()
{
    return !/iPhone|iPad|iPod/i.test(navigator.userAgent);
}
