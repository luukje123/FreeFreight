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
    if (message.content === 'Help') {
      message.reply('You can get support in the support-channel!');
      }
});

client.on('message', message => {
    if (message.content === 'Helpen') {
      message.reply('You can get support in the support-channel!');
      }
});

client.on('message', message => {
    if (message.content === 'Server') {
      message.reply('Thats me!');
      }
});

client.on('message', message => {
    if (message.content === 'server') {
      message.reply('Thats me!');
      }
});

client.on('message', message => {
    if (message.content === 'luuk') {
      message.reply('The best owner you wil ever see! Also a cool dude btw!');
      }
});

client.on('message', message => {
    if (message.content === 'Luuk') {
      message.reply('The best owner you wil ever see! Also a cool dude btw!');
      }
});

client.on('message', message => {
    if (message.content === 'VTC') {
      message.reply('Virtual Trucking Company');
      }
});

client.on('message', message => {
    if (message.content === 'vtc') {
      message.reply('Virtual Trucking Company');
      }
});

client.on('message', message => {
    if (message.content === 'Vtc') {
      message.reply('Virtual Trucking Company');
      }
});

client.login(process.env.BOT_TOKEN);
