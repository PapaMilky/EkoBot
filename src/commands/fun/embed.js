const Discord = require('discord.js');
module.exports = {
    name: 'embed',
    description: 'embed!',
    execute(message, args) {
        const taggedUser = message.mentions.users.first();
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Kick')
            .setDescription(`You Kicked: ${taggedUser.username}`)
        message.channel.send(exampleEmbed);
    },
};