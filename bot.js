const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'szia') {
    msg.reply('Szia!');
  }
});

client.login('NDQ0MTk1NDY0NzEyMjkwMzEz.DoAXOQ.jsfKFIWe6m4ZX48MukKLkN2O3dU');;
