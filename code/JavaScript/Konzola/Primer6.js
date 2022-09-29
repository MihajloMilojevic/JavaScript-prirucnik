document.getElementById("dir").onclick = function() {
	console.clear();
	console.log("###### CONSOLE.DIR #######");
	const button = document.getElementById("dir");
	console.log("LOG")
	console.log(button)
	console.log("DIR");
	console.dir(button);
}