const { MessageEmbed } = require("discord.js");
const { prefix } = require("../../config.json");
module.exports = {
    name: "help",
    aliases: ["h"],
    description: ("Shows The Help Menu"),
    execute(message) {
        let commands = message.client.commands.array();

        let helpEmbed = new MessageEmbed()
            .setTitle(("Help Menu" ))
            .setDescription(("The Help Menu"))
            .setFooter('EkoBot, Brought To You By The Eko Team')
            .setColor("#0099ff  ");



        commands.forEach((cmd) => {
            helpEmbed.addField(
                `**${prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
                `${cmd.description}`,
                true
            );
        });


        return message.channel.send(helpEmbed).catch(console.error);
    }
};