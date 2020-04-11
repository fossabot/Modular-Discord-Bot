module.exports = function(){
    Discord = require('discord.js')
    let normalizedPath = require("path").join(__dirname, "modules");
    
    console.log("[MODULES] Module loading start");
    let cmds = {};
    require("fs")
        .readdirSync(normalizedPath)
        .map(function(a) {
            var tmp = require("./modules/" + a.replace(".js", ""))
            if(tmp.active){
                let ii = tmp.init();
                if(ii || ii == undefined){
                    debug ? console.log("\x1b[32m","- Module Loaded: ",a,"\x1b[37m") : null;
                    cmds[tmp.name] = tmp;
                }else{
                    debug ? console.log("\x1b[31m","##### Module Failed to Load: ",a,"\x1b[37m") : null;
                    console.log("################ Error ################\n");
                    console.log("Module: "+tmp.name+" did not load correctly.\n"+tmp.name+" will not be accessible until the error has been fixed.\n");
                    console.log("#######################################\n");
                }
            }else{
                debug ? console.log("\x1b[31m","X Module Not Active: ",a,"\x1b[37m") : null;
            }
        })
    console.log("[MODULES] Module loading end");
    return cmds;	
}