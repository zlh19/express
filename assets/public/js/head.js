!function() {
    function a() {
    	var widthWindow=document.documentElement.clientWidth;
        var fontNumber=27;
    	document.documentElement.style.fontSize = document.documentElement.clientWidth / fontNumber + "px";
    	
    }
    var b = null;
    window.addEventListener("resize", function() {
        clearTimeout(b), b = setTimeout(a, 100)
    }, !1), a()
}(window);


/*判断是否是pc端--click事件添加*/
var supportTouch = "ontouchstart" in document.documentElement;
clickEvent = supportTouch ? "tap" : "click";


