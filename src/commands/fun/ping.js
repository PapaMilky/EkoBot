module.exports = {
    name: 'ping',
    description: 'Ping!',
    aliases: ['ball', 'bing'],
    cooldown: 5,
    execute(message, args) {
        message.channel.send('Pong.');
    },
};