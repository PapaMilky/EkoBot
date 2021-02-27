module.exports = {
    name: 'showme',
    description: 'lol!',
    cooldown: 15,
    execute(message, args) {
        message.reply(message.author.displayAvatarURL());
    },
};