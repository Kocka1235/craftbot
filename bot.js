const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    set.Game('youtube');
});

client.on('message', message => {
    if (message.content === 'Szia') {
    	message.channel.send('Szia!!');
  	}
});

client.on('message', message => {
    if (message.content === 'Mikor Lesz Tgf?') {
    	message.reply('Majd Craft Kiírja!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
