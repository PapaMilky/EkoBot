const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
    name: 'reload',
    description: 'Reloads a command',
    permissions: 'ADMINISTRATOR',
    execute(message, args) {

        const reloadNon1Embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Oh No!')
            .setDescription(`You didn't pass any command to reload, ${message.author}!`)
            .setFooter('EkoBot, Brought To You By The Eko Team')

        if (!args.length) return message.channel.send(message.channel.send(reloadNon1Embed));
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        const reloadNonEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Oh No!')
            .setDescription(`There is no command with name or alias \`${commandName}\`, ${message.author}!`)
            .setFooter('EkoBot, Brought To You By The Eko Team')

        if (!command) return message.channel.send(message.channel.send(reloadNonEmbed));
        const commandFolders = fs.readdirSync('./commands');
        const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));
        delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];
        try {
            const newCommand = require(`../${folderName}/${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
        } catch (error) {
            console.error(error);
            const reloadErrorEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Oh No!')
                .setDescription(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``)
                .setFooter('EkoBot, Brought To You By The Eko Team')
            message.channel.send(reloadErrorEmbed);
            message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
        }
        const reloadEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Reload')
            .setDescription(`Command \`${command.name}\` was reloaded!`)
            .setFooter('EkoBot, Brought To You By The Eko Team')
        message.channel.send(reloadEmbed);
    },
};