//Here is the file where you add stuff
var dclient; //  dclient is the bot client. Here you can controll the bot, push it to git and the bot manager will automatically deploy the bot.
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

          //msg.member.addTo(server.roles.get("name", "ew"));
          console.log('Not doing anything')
          return;
        }
        //msg.member.addRole(msg.guild.roles.find(role => role.name === "ARAMaster"));
        if (msg.content === '!help') {
  	       msg.reply('Hi! I Am super  customizable plz improve me! DM me for more information.');
        }
  });
});
