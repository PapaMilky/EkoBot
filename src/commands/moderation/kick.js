const Discord = require('discord.js');
module.exports = {
    name: 'kick',
    description: 'KILL!',
    aliases: ['boot'],
    args:true,
    usage: '<user>',
    permissions: 'KICK_MEMBERS',
    guildOnly: true,
    execute(message, args) {
        const taggedUser = message.mentions.users.first();
        const member = message.mentions.members.first();
        const kickEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Kick')
            .setDescription(`You Kicked: ${taggedUser.username}`)
            .setFooter('EkoBot, Brought To You By The Eko Team')
        message.channel.send(kickEmbed);
        member.kick();
    },
};