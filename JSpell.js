export default function (text) {

	return new Promise (function(resolve){

		const data = JSON.stringify({
			"language": "enUS",
			"fieldvalues": text,
			"config": {
				"forceUpperCase": false,
				"ignoreIrregularCaps": false,
				"ignoreFirstCaps": true,
				"ignoreNumbers": true,
				"ignoreUpper": false,
				"ignoreDouble": false,
				"ignoreWordsWithNumbers": true
			}
		});

		const xhr = new XMLHttpRequest();
		xhr.withCredentials = false;

		xhr.onload = function () {
		    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		        resolve(xhr.responseText);
		    }
		    else {
		    	reject({
                status: this.status,
                statusText: xhr.statusText
                });
		    }
		};

		xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };

		xhr.open("POST", "https://jspell-checker.p.rapidapi.com/check");
		xhr.setRequestHeader("content-type", "application/json");
		xhr.setRequestHeader("x-rapidapi-key", "1e406bbe5fmsh2598f5fba231bacp10d145jsnd5e5c3374f9d");
		xhr.setRequestHeader("x-rapidapi-host", "jspell-checker.p.rapidapi.com");

		xhr.send(data);	
	})
}











