//Edited. Edited
var dclient;
const db = require('./discordbot.js');
db.init(function(){
  dclient = db.client;
  dclient.on('ready', () => {
<<<<<<< HEAD
        console.log(`Logged in as ${dclient.user.tag}!`);
=======
        console.log(`Logged in as ${client.user.tag}!`);
>>>>>>> 9bf8ed11724b5081618d6fbf755db1f1b186e285
  });

  dclient.on('message', msg => {
        if (msg.channel.type === 'dm'){
          //Dont do anything.
          return;
        }
        if (msg.content === 'ping') {
  	      //msg.reply('pong');
        }
  });
});
