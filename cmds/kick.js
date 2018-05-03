const Discord = module.require("discord.js");
var botID = "415185072992288768";

exports.run = (client, message, args) => 
{
    {
        const member = message.mentions.members.first();
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("you don't have enough permissions to do that :confused:");

        if(message.author.id === member.id) return message.channel.send("Why are you trying to kick yourself out? :thinking:")

        if(member.id === botID) return message.channel.send("I can't kick myself out!");

        if(member.highestRole.position >= message.member.highestRole.position) return message.channel.send("Can't kick someone of equal or higher role!")

        if (!member) return message.reply(`invalid usage. Please do d.kick [mention user]`);

        member.kick(`kicked out by ${message.author.username}`);
    }
}

module.exports.help = {
name: "kick"
}