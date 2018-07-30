const { Client } = require("discord.js");
const client = new Client({
   disableEveryone: true
});
const config = require("./config.json");

var prefix = config.prefix;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.author !== client.user) return;
  
    //
    
  if (msg.content.startsWith(prefix + 'ping')) {
      msg.delete()
msg.channel.send(`**Pong!** | ${client.ping}ms`)
}
    
    
    const params = msg.content.split(" ").slice(1);
  if (msg.content.startsWith(prefix + "prune")) {
    msg.channel.fetchMessages({
        limit: 100
      })
      .then(messages => {
        let msg_array = messages.array();
        msg_array = msg_array.filter(m => m.author.id === client.user.id);
        msg_array.length = 50;
        msg_array.map(m => m.delete().catch(console.error));
      });
  }
      if (msg.content.startsWith(prefix + 't')) {
      msg.delete()
          
      }
    
    //
  
});

client.login(config.token);
