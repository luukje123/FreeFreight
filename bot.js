const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
      }
});

client.on('message', message => {
    if (message.content === 'FreeFreight') {
      message.reply('Thats my name!');
      }
});

client.on('message', message => {
    if (message.content === 'freefreight') {
      message.reply('Thats my name!');
      }
});

client.on('message', message => {
    if (message.content === 'Freefreight') {
      message.reply('Thats my name!');
      }
});

client.on('message', message => {
    if (message.content === 'convoy') {
      message.reply('You can find convoy information in the convoy-channel!');
      }
});

client.on('message', message => {
    if (message.content === 'help') {
      message.reply('You can get support in the support-channel!');
      }
});

client.on('message', message => {
    if (message.content === 'helpen') {
      message.reply('You can get support in the support-channel!');
      }
});

client.login(process.env.BOT_TOKEN);
