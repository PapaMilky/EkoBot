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
        message.channel.send(`You Kicked: ${taggedUser.username}`);
        member.kick();
    },
};