

for (var i = 0; i< 3; i++) {
	process.stdout.write ('Blah\nblah\nhalb\r\r');
}

var my_input = "";

process.stdin.on ('data', function (data) {
	my_input += data.toString();
	input();
});

process.stdin.on ('end', function (data) {
	console.log("\n");
	console.log(my_input);
	console.log("Shutting down...");
});

function input () {
	process.stdout.write (">> ");
}
input();
