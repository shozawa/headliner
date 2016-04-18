javascript:

var headerElements = ["h1", "h2", "h3"].map(function(elm) {
  // return document.getElementsByTagName(elm);
  return document.querySelectorAll(elm + ">a");
 });

var win = window.open();
win.document.write("<html><head><title>test</title></head><body><div id='main'></div></body></html>");
var main = win.document.getElementById("main");

function appendHeadlines(target, headlines) {
  var str_hl = Array.prototype.join.call(headlines, '');

  for(var i=0; i < headlines.length; i++) {
    target.insertAdjacentHTML('afterend', "<h2>" + headlines[i].innerHTML + "</h2>");
  }
}

function max_with(ary, func) {
  var max, current;
  for(var i = 0; i < ary.length; i++) {
    current = ary[i];
    if(i === 0){
      max = current;
    }else if(func(current) > func(max)){
      max = current;
    }else{
    }
  }
  return max;
}

var elm = max_with(headerElements, function(elm){
  return elm.length;
});

appendHeadlines(main, elm);
