var modalContent = document.createElement("div");
modal.id = "modal-content"
modal.innerHTML = "<p>モーダルの内容がここに入る</p>";
document.body.appendChild(modal);


//var newCssRules = "#modal-content {	width: 50% ;	margin: 0 ;	padding: 10px 20px ;	border: 2px solid #aaa ;	background: #fff ;	position: fixed ;	display: none ;	z-index: 2 ;}  #modal-overlay {	z-index: 1 ;	display: none ;	position: fixed ;	top: 0 ;	left: 0 ;	width: 100% ;	height: 120% ;	background-color: rgba( 0,0,0, 0.75 ) ;}"

var newCssRules = "h1 { color: red; }"

var newStyle = document.createElement('style');
newStyle.type = "text/css";
newStyle.insertRule(newCssRules)

var css = document.styleSheets[]
document.getElementsByTagName('head')[0].appendChild(newStyle);
