const Discord = require('discord.js');
const Bot = new Discord.Client();

bot.on('message', function(message){
  if(message.content == 'Hello')
  {
    message.reply('Hello, how are you?');
  }
});

bot.on('ready', function(){
  console.log("Ready");
})

bot.login(process.env.BOT_TOKEN);

