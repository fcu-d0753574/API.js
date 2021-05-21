export default function (text) {

	return new Promise (function(resolve){

		const data = "text=" + text;

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

		xhr.open("POST", "https://grammarbot.p.rapidapi.com/check");
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.setRequestHeader("x-rapidapi-key", "1e406bbe5fmsh2598f5fba231bacp10d145jsnd5e5c3374f9d");
		xhr.setRequestHeader("x-rapidapi-host", "grammarbot.p.rapidapi.com");

		xhr.send(data);
	})
}