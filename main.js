import API from './API.js';

let text = "Susan go to the store everyday"

API(text)
.then( (result)=> {
	console.log(result);	//layout
}).catch((err) => {
	console.log(err.status + ":" + err.statusText)	//error catch
}) 

