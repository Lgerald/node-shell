// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline
    if (cmd === "pwd") {
        process.stdout.write(process.argv[0]);
    }
    if (cmd === "date"){
        process.stdout.write(Date());
    }
    if (cmd === "cool") {
        process.stdout.write("coool");
    }

    //process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

}


);