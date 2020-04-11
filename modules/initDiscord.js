module.exports = () => {
    const client = new Discord.Client();
    
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
      //client.user.setActivity('', {})
    });
    
    client.login(Config['DISCORD']['token']);

    return client;
}