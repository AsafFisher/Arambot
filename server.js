const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

client.on('ready', () => {
      console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
      if (msg.content === 'ping') {
	      msg.reply('pong');
	}
});
//CTF!!!!! (find the flag and let me know so I will patch it (: )
fs.readFile('secret.txt', (err, data) => {
      if (err) throw err;
        console.log(data.toString().split('\n')[0]);
	client.login(data.toString().split('\n')[0]);
});
