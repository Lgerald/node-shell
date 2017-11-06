const fs = require("fs");
module.exports = {
    pwd: function() {   
        return (process.argv[0]);
    },
    date: function() {
        return (Date());
    },
    ls: function() {
        
        fs.readdir(".", function(err, files){
            let list = [];
            //console.log("list", list);
            if (err) throw err;
            files.map(function(file){
                list.push(file.toString());
            });
            //console.log("list in", list);
            process.stdout.write(list.join("\n"));
        });  
    }
};



    //process.stdout.write('You typed: ' + cmd);
    //process.stdout.write('\nprompt > ');

