// Output a prompt
const commands = require('./command.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
    const cmd = data.toString().trim();
    if (cmd === "pwd") {
        process.stdout.write(commands.pwd());
    }
    if (cmd === "date") {
        process.stdout.write(commands.date());
    }
    if (cmd === "ls") {
        commands.ls();
        //process.stdout.write(commands.ls());
    }
    
    process.stdout.write('\nprompt > ');
})



