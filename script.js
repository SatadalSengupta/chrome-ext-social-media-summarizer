function eventVideo(testvar1)
{ 
//------sponsored video--------
	//if($(testvar1).parentsUntil().outerHTML.indexOf("sponsored") >= 0)
	if(testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.outerHTML.indexOf("sponsored") >= 0)
		{	
			if( testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.outerHTML.indexOf("shared") >= 0)
				{	
					if(testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.outerHTML.indexOf("_47we") >= 0)
						{
							name = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
							alert(name);
						}
					else 
						{
							name = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
							alert(name);
						}
				}
			else if(testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.outerHTML.indexOf("_47we") >= 0)
				{
					name = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
					alert(name);
				}
			else
				{
					name = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
					alert(name);
				}
		}				

//-------------Shared video-----------
	//else if($(testvar1).parentsUntill("._5x46")outerHTML.indexOf("shared") >= 0)
	else if(testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.outerHTML.indexOf("shared") >= 0)
		{
			var name = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
			var page = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[2].innerHTML;
			var time = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[0].outerHTML;
			var rtime = time.substring(time.indexOf("=")+2,time.indexOf("data")-2);
			var message = name + page + rtime;
			alert(message);
			//chrome.runtime.sendMessage("idhbiiialcplogbphhgdncfndodglpjl", "dummy", alert("dummy")); //{
			//chrome.extension.sendRequest({greeting: "hello"}, function(response) {
			//console.log(response.farewell);"
			//});
			//	"var_msg: message"+
			//});
		}

//------------A video you may like--------------
	else if(testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.outerHTML.indexOf("A video you may like") >= 0)
		{ 
			name = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[2].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
			time = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[2].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[0].outerHTML;
			var rtime = time.substring(time.indexOf("=")+2,time.indexOf("data")-2);
			alert(name+"\n"+rtime);
		}

//------------live video------------------
	else if(testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.outerHTML.indexOf("was live") >= 0)
		{	
			name = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
			var time = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[0].outerHTML;
			var rtime = time.substring(time.indexOf("=")+2,time.indexOf("data")-2);
			var onclick = Date();
			alert(name+"\n"+rtime+"\n"+onclick);
		}
										
//------Page--------
	else 
		{
			var name = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
			var time = testvar1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[0].outerHTML;
			var rtime = time.substring(time.indexOf("=")+2,time.indexOf("data")-2);
			var onclick = Date();
			alert(name+"\n"+rtime+"\n"+onclick);
		}
}