//Edited. Edited

const db = require('./discordbot.js');
db.init(function(){
  client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', msg => {
        if (msg.channel.type === 'dm'){
          //Dont do anything.
          return;
        }
        if (msg.content === 'ping') {
  	      //msg.reply('pong');
        }
  });
});
