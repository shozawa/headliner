# headliner

ブログやニュースサイトの見出しのみを抽出して一覧表示できるブックマークレットです。

<a href="javascript:var headerElements = ['h1', 'h2', 'h3'].map(function(elm) { return document.querySelectorAll(elm + '>a'); });var win = window.open();win.document.write('<html><head><title>HEADLINES</title></head><body><div id='main'></div></body></html>');var main = win.document.getElementById('main');function appendHeadlines(target, headlines) {  for(var i=0; i < headlines.length; i++) {    target.insertAdjacentHTML('beforeend', '<h2>' + headlines[i].outerHTML + '</h2>');  }}function max_with(ary, func) {  var max, current;  for(var i = 0; i < ary.length; i++) {    current = ary[i];    if(i === 0){      max = current;    }else if(func(current) > func(max)){      max = current;    }else{    }  }  return max;}var elm = max_with(headerElements, function(elm){  return elm.length;});appendHeadlines(main, elm);
">Quoter</a>

上のリンクをブックマークバーにドラッグ&ドロップしてください。
