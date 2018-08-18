const Discord= require('Discord.js');
const Bot= new Discord.Client();

bot.on('message', function(message){
  if(message.content == 'Hello'){
  message.reply('Hello, how are you?');
  }
});

