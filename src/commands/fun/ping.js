const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    description: 'Ping!',
    aliases: ['ball', 'bing'],
    cooldown: 5,
    execute(message, args) {
        const pongEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Pong')
            .setDescription('Pong')
            .setFooter('EkoBot, Brought To You By The Eko Team')
        message.channel.send(pongEmbed);
    },
};