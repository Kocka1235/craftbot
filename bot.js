const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'szia') {
    	message.channel.send('Szia!');
  	}
});

client.on('message', message => {
    if (message.content === 'asd') {
    	message.reply('Valami!');
  	}
});

client.login(NDQ0MTk1NDY0NzEyMjkwMzEz.DqTg2g.4AYMBS-Ae9rWmupLQ8H09vm6jbI);
