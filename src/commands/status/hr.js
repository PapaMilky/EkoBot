const Discord = require('discord.js');
module.exports = {
    name: 'hr',
    description: 'Heartrate',
    usage: '<commands.status>',
    guildOnly: true,
    execute(message, args) {
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
                });
    },
};


