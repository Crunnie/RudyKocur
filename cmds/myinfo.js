const Discord = module.require("discord.js");

exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription(`This is ${message.author.username}'s info!`)
        .setColor("#18d2f7")
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
        .setFooter(`This is your info"`, message.author.displayAvatarURL)
        .addField("Username", message.author.tag, true)
        .addField("ID", message.author.id, true)
        .addField("Status", message.author.presence.status, true)
        .addField("Account created on", message.author.createdAt, true)
        .addField("Joined server on", message.guild.joinedAt)

    message.channel.send({embed: embed});
}

exports.help = {
    name: "myinfo"
}