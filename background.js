
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		alert("Testing in background js: ");
		//localStorage["var_msg"] = request.var_msg;
	}
);

/*var alarmName = "sendToServerAlarm";

chrome.alarms.create(sendToServerAlarm, {
	delayInSeconds: 0,
	periodInSeconds: 20
});

chrome.alarms.onAlarm.addListener(function(alarm) {
	if (alarm.name === alarmName) {
		var xhr = new XMLHttpRequest();
		var var_msg = localStorage["var_msg"];
		xhr.open("GET", "http://10.5.20.246:44401/?name="+var_msg, false);
		xhr.send();
	}
});*/
