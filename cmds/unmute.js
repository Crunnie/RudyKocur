const fs = module.require("fs");
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`you don't have enough permissions ("Manage Messages") to do that :confused:`);

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!toMute) return message.reply("you didn't tell me who to mute! **command usage:** .mute @mention/ .mute userID");

    if(toMute.id === message.author.id) return message.channel.send("You can't unmute yourself :neutral_face:");

    if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("You can't unmute people of higher or equal role.");

    let role = message.guild.roles.find( r => r.name === "Muted");

    if(!role || !toMute.roles.has(role.id)) return message.channel.send("This user isn't muted!");

    await toMute.removeRole(role);
    message.channel.send(`User is sucessfully unmuted!`).then(msg => {
        msg.delete(5000)
    })
}

module.exports.help = {
    name: "unmute"
}