const Discord = require('discord.js');
const { prefix, avatar } = require('./config.json');

module.exports = async (client) => {

    let guildsamount = await client.shard.fetchClientValues(`guilds.cache.size`).then(results => results.reduce((acc, guildCount) => acc + guildCount, 0)).catch(console.error);

    client.user.setAvatar(avatar)

    const activities = [`${prefix}help`, `the sunset`, `${guildsamount} servers`, `My Devs Have A Bad Day`];

    let activity = activities[Math.floor(Math.random() * activities.length)];

    console.log("Activity Changer Started Successfully");

    setInterval(() => {
        let activity = activities[Math.floor(Math.random() * activities.length)];
        client.user.setActivity(activity, {type: "WATCHING"});
    }, 15000);

};
