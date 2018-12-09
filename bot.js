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

client.on('message', message => {
    if (message.content === 'Belg') {
      message.reply('rare mensen :D');
      }
});

client.on('message', message => {
    if (message.content === 'belg') {
      message.reply('rare mensen :D');
      }
});

client.on('message', message => {
    if (message.content === 'belgen') {
      message.reply('rare mensen :D');
      }
});

client.on('message', message => {
    if (message.content === 'Belgen') {
      message.reply('rare mensen :D');
      }
});

client.on('message', message => {
    if (message.content === 'Dylan') {
      message.reply('pas op! Hou maar afstand!');
      }
});

client.on('message', message => {
    if (message.content === 'dylan') {
      message.reply('pas op! Hou maar afstand!');
      }
});

client.on('message', message => {
    if (message.content === 'Lag') {
      message.reply('Woon je toevallig in België?');
      }
});

client.on('message', message => {
    if (message.content === 'lag') {
      message.reply('Woon je toevallig in België?');
      }
});

client.on('message', message => {
    if (message.content === 'Nederland') {
      message.reply('Place to be :D');
      }
});

client.on('message', message => {
    if (message.content === 'nederland') {
      message.reply('Place to be :D');
      }
});

client.on('message', message => {
    if (message.content === 'Frank') {
      message.reply('Pas op! Hij gooit een fiets naar je auto! :(');
      }
});

client.on('message', message => {
    if (message.content === 'frank') {
      message.reply('Pas op! Hij gooit een fiets naar je auto! :(');
      }
});

client.on('message', message => {
    if (message.content === 'ETS') {
      message.reply('Euro Truck Simulator. Leuk spel :D');
      }
});

client.on('message', message => {
    if (message.content === 'Ets') {
      message.reply('Euro Truck Simulator. Leuk spel :D');
      }
});

client.on('message', message => {
    if (message.content === 'ets') {
      message.reply('Euro Truck Simulator. Leuk spel :D');
      }
});

client.on('message', message => {
    if (message.content === 'ETS2') {
      message.reply('Euro Truck Simulator. Leuk spel :D');
      }
});

client.on('message', message => {
    if (message.content === 'Ets2') {
      message.reply('Euro Truck Simulator. Leuk spel :D');
      }
});

client.on('message', message => {
    if (message.content === 'ets2') {
      message.reply('Euro Truck Simulator. Leuk spel :D');
      }
});

client.login(process.env.BOT_TOKEN);
