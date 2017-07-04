var vclass ;
var f1 = 0;
var f2 = 0;

$(window).scroll(function () {
	vclass = document.getElementsByClassName('_53j5'); 
	f2 = vclass.length;
	if(f1 != f2){
		filterAllVideo();
		f1 = f2;
	}
});
	
function filterAllVideo(){
	alert(vclass.length);
	for (var i = f1, l=f2; i < l; i++) {
		var velement = vclass[i]; 
		velement.setAttribute("onClick", "eventVideo(this)");//$(this)
	}
} 

var actualCode = document.createElement('script');
actualCode.src= chrome.extension.getURL('script.js');
actualCode.onload = function() {
	this.remove();
};
(document.head || document.documentElement).appendChild(actualCode);

/*var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();*/

