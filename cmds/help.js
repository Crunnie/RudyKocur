const Discord = module.require("discord.js");

exports.run = async (bot, message, args) => {
        let embed = new Discord.RichEmbed()
            .setAuthor("Defender")
            .setTitle("A multi-purpose bot for your Discord Server needs. Currently a work in progress.")
            .setTimestamp()
            .setColor("#8981e6")
            .addField("Developer", `"JustCrunnie#3938"`, false)
            .addField("Servers",`${bot.guilds.size}`, true)
            .addField("Users",`${bot.users.size}`, true)
            .addField("Channels", `${bot.channels.size}`, true)
            .addField("Commands list", "d.cmds", true)
            .addField("Need a hand?", `~~*gives hand*~~ Trigger the "support" command!`, true)
            .addField("Bot Invite","Invite Discord Defender to your server by [clicking here!](https://discordapp.com/api/oauth2/authorize?client_id=432552169892347905&permissions=8&scope=bot)")

        message.author.send({embed: embed});
        message.reply("check your DMs!").then(msg => {
            msg.delete(5000)
        })
}

exports.help = {
    name: "help"
}