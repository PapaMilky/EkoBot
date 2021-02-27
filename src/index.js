const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);

client.on('message', command => {
    if (!command.content.startsWith(prefix) || command.author.bot) return;
    if (command.content === `${prefix}ping`) {
        // send back "Pong." to the channel the message was sent in
        command.channel.send('Pong');
    }

    console.log(command.author, command.content);
});

