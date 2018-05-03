const Discord = module.require("discord.js");

exports.run = (bot, message, args) => {
    {
        let embed = new Discord.RichEmbed()
        .setAuthor('Defender can see:')
        .setFooter("Embed sent on")
        .setTimestamp()
        .addField("Servers",`${bot.guilds.size}`, true)
        .addField("Users",`${bot.users.size}`, true)
        .addField("Channels", `${bot.channels.size}`, true)

        message.channel.send(embed)
    }
}

module.exports.help = {
    name: "botstats"
}