module.exports =  {
    name: "example", // The name & command of the module. Command will be like this: !<name>
    description: "This is a example", // The description about the module
    args: ["text"], // Argument: Like <!example this is a text>
    active:true, // Is this module active?
    iscmd:true,
    channels: [],
    init: function(){}, // Init functuon 
    onMessage: function(msg) { // Required by the core, if the module should use the hook.
        this.extraFunction(msg)
    },
    extraFunction: function(msg) {
        console.log(msg)
    }

}