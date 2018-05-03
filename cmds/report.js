const Discord = module.require("discord.js");

exports.run = (client, message, args) => {
    {
        let rUser = args[0]
        rUser = message.mentions.members.first()
        if (!rUser) return message.reply(`couldn't find user.`)

        let reason = args.slice(1).join(" ")
        if(!reason) return message.reply("you need to provide a reason!")

        let reportChnl = message.guild.channels.find(`name`, `reports`)
        if(!reportChnl) return message.reply("couldn't find the report channel. Make sure it's called 'reports' ")

        if(rUser.id === message.author.id) return message.reply("why are you trying to report yourself? :thinking:")

        let embed = new Discord.RichEmbed()
            .setAuthor(`New Report!`)
            .setTimestamp()
            .setFooter("Report sent on", message.author.displayAvatarURL)
            .addField("Reported User", `${rUser}`)
            .addField("Reported by", `${message.author}`)
            .addField("Reason", `${reason}`)

        reportChnl.send({embed: embed})
        message.reply(`done!`).then(msg => {
            msg.delete(5000)
        })
    }
}

module.exports.help = {
    name: "report"
}