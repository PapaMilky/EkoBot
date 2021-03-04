const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    description: 'DOUBLE KILL!',
    aliases: ['hammer'],
    args:true,
    usage: '<user>',
    permissions: 'BAN_MEMBERS',
    guildOnly: true,
    execute(message, args) {
        const taggedUser = message.mentions.users.first();
        const member = message.mentions.members.first();
        let {guild} = message;
        const banGonnerEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Ban')
            .setDescription(`You Have Been Banned From ${guild.name}`)
            .setFooter('EkoBot, Brought To You By The Eko Team')
        taggedUser.send(banGonnerEmbed);

        const banEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Ban')
            .setDescription(`You Banned: ${taggedUser.username}`)
            .setFooter('EkoBot, Brought To You By The Eko Team')
        message.channel.send(banEmbed);

        member.ban();

    },
};