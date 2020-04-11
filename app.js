Config = require('./config');
debug = true;

/*
    Discord Things
*/
Discord = require('discord.js');
Client = require('./modules/initDiscord')();
LocalDB = [];
modules = [];
// TODO v
//require('./modules/hooks')
//Hooks={}

Client.on('ready',()=>{
    modules = require('./modules/modules')();
})

Client.on('message', msg => {
    //console.log(commands[msg.content].title);
    try {
        let splitted = msg.content.split(" ")
        if(msg.content.substring(0,1) == Config['DISCORD']['prefix']){
            if(modules[splitted[0].substring(1).toLowerCase()] != undefined){
                if(modules[splitted[0].substring(1).toLowerCase()].iscmd = true){
                    modules[splitted[0].substring(1).toLowerCase()].onMessage(msg);
                }
            }else{
                msg.reply("Command "+splitted[0]+" does not exist. Please do "+Config['DISCORD']['prefix']+"help to see all commands or "+Config['DISCORD']['prefix']+"help [command] to see what a specific command does")
            }      
        }else{
            console.log("\x1b[31m",msg.author.username,": ","\x1b[37m",msg.content);
        }
    } catch (error) {
        console.log(error)
    }
});