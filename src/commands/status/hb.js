const Discord = require('discord.js');
module.exports = {
    name: 'hb',
    description: 'Heartbeat',
    usage: '<commands.status>',
    guildOnly: true,
    execute(message, args) {
        const client = new Discord.Client();
        message.channel.send(`Websocket heartbeat: ${client.ws.ping}ms.`);
    },
};
