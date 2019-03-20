var c = document.getElementById("hexagon");
var ctx = c.getContext("2d");
var viewportwidth;
var viewportheight;

// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

if (typeof window.innerWidth != "undefined") {
  (viewportwidth = window.innerWidth), (viewportheight = window.innerHeight);
}

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
else if (
  typeof document.documentElement != "undefined" &&
  typeof document.documentElement.clientWidth != "undefined" &&
  document.documentElement.clientWidth != 0
) {
  (viewportwidth = document.documentElement.clientWidth),
    (viewportheight = document.documentElement.clientHeight);
}

// older versions of IE
else {
  (viewportwidth = document.getElementsByTagName("body")[0].clientWidth),
    (viewportheight = document.getElementsByTagName("body")[0].clientHeight);
}

var w = viewportwidth;
var x = (w*sqrt(3))/6;
ctx.moveTo(0, 0);
ctx.lineTo(x*sqrt(3), -1*x);
ctx.stroke();
// ctx.lineTo(x*sqrt(3), -3*x);
