const Discord = module.require("discord.js");

exports.run = (client, message, args) => 
{
    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');

    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()

    let embed = new Discord.RichEmbed()
        .setAuthor(`Server Info for ${message.guild.name}`, message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`Server Created • ${day}.${month}.${year}`, message.guild.iconURL)
        .addField("Server Region", `${message.guild.region}`, true)
        .addField("Server Owner", `${message.guild.owner}`, true)
        .addField("Server ID",`${message.guild.id}`, true)
        .addField("Members", `${message.guild.memberCount}`, true)
        .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
        .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
        .addField("Online", `${online.size}`,true)
        .addField("Channels", `${message.guild.channels.size}`, true)
        .addField("Roles", `${message.guild.roles.size}`, true)
    message.channel.send({embed: embed});
}

exports.help = {
    name: "serverinfo"
}