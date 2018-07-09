<<<<<<< HEAD
//Edited. Edited  
=======
//Edited. Edited Fix
>>>>>>> 64ed20d5d79d6f8c0bdccd7caad7387144171aad
var dclient;
const db = require('./discordbot.js');
db.init(function(){
  dclient = db.client;
  dclient.on('ready', () => {
        console.log(`Logged in as ${dclient.user.tag}!`);
  });

  dclient.on('message', msg => {
        if (msg.author.id === dclient.user.id) return;
        if (msg.channel.type === 'dm'){
          //Dont do anything.
          console.log('Not doing anything')
          return;
        }
        if (msg.content === 'ping') {
  	      //msg.reply('pong');
        }
  });
});
