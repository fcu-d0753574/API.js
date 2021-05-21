export default function (text, cmd) {

	return new Promise (function(resolve, reject){

		const data = null;
		let url = null;

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

		if (cmd === "grammar") {
			url = "https://webspellchecker-webspellcheckernet.p.rapidapi.com/ssrv.cgi?slang=en_US&text=" + text + "&cmd=grammar_check&format=json"
		}else if (cmd === "spell") {
			url = "https://webspellchecker-webspellcheckernet.p.rapidapi.com/ssrv.cgi?format=json&out_type=position&slang=en_US&text=" + text + "&cmd=check_spelling"
		}
		
		xhr.open("GET", url);
		xhr.setRequestHeader("x-rapidapi-key", "1e406bbe5fmsh2598f5fba231bacp10d145jsnd5e5c3374f9d");
		xhr.setRequestHeader("x-rapidapi-host", "webspellchecker-webspellcheckernet.p.rapidapi.com");

		xhr.send(data);

	})
}