const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NDQ0MTk1NDY0NzEyMjkwMzEz.DlhOcQ.VN-5qYsTvfHsItItWbc30hHaXTo');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
