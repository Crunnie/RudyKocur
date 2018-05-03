const Discord = module.require("discord.js");

exports.run = async (bot, message, args) => {

    let modEmbed = new Discord.RichEmbed()
        .setAuthor("Commands List")
        .setTitle(`This is a list of all commands for "Moderation".`)
        .setColor("#8981e6")
        .setTimestamp()
        .setFooter(`For bot info use: "d.help"`)
        .addField("ban [@user]", `Required perms: "Ban Members"`)
        .addField("kick [@user]", `Required perms: "Kick Members"`)
        .addField("mute [@user]", `Required perms: "Manage Messages"`)
        .addField("prefix", `Change prefix for your server`)
        .addField("purge [number]",`Required perms: "Manage Messages"`)
        .addField("unmute [@user]", `Required perms: "Manage Messages"`)
        .addField("warn [@user] (reason)", `Required perms: "Manage Members", Requires #reports channel`)

    let ecoEmbed = new Discord.RichEmbed()
        .setAuthor("Commands List")
        .setTitle(`This is a list of all commands for "Economy"`)
        .setColor("#8981e6")
        .setTimestamp()
        .setFooter(`For bot info use: "d.help"`)
        .addField("earn", `Start earning Defender Dollars!`)

    let utilEmbed = new Discord.RichEmbed()
        .setAuthor("Commands List")
        .setTitle(`This is a list of all commands for "Utilities"`)
        .setColor("#8981e6")
        .setTimestamp()
        .setFooter(`For bot info use: "d.help"`)
        .addField("myinfo", `Shows info about you`)
        .addField("profile", `Check your global profile!`)
        .addField("report [@user] (reason)", "Reports the mentioned user, Requires #reports channel.")
        .addField("say (#channel) [message]",`Required perms: "Manage Messages"`)
        .addField(`support`,`Sends you to our support server!`)
        .addField("serverinfo", `Sends info about your server`)
        .addField("suggest", `Send a suggestion for your server`)
        .addField("warns [@user]", `Required perms: "Manage Members"`)

    let botEmbed = new Discord.RichEmbed()
        .setAuthor("Commands List")
        .setTitle(`This is a list of all commands for "Bot"`)
        .setColor("#8981e6")
        .setTimestamp()
        .setFooter(`For bot info use: "d.help"`)
        .addField("help", `Sends help!`)
        .addField(`support`,`Sends you to our support server!`)

    message.author.send(modEmbed)
    message.author.send(ecoEmbed)
    message.author.send(utilEmbed)
    message.author.send(botEmbed)
    message.reply("check your DMs.").then(msg => {
        msg.delete(5000)
    })
}

exports.help = {
    name: "cmds"
}
