const Discord = module.require("discord.js");

exports.run = (client, message, args) => 
{
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("you don't have enough permissions to do that :confused:");

    let chnl = args[0]
    chnl = message.mentions.channels.first()
    if(!chnl) return message.reply(`correct usage: *say #channelName message*`)

    let cnt = args.slice(1).join(" ")
    if(!cnt) return message.reply(`2nd argument can't be nil.`)

    let embed = new Discord.RichEmbed()
        .setAuthor(`A message from ${message.author.username}`)
        .setColor("#8981e6")
        .setTimestamp()
        .setFooter(`Sent on`, `${message.author.displayAvatarURL}`)
        .setDescription(`${cnt}`)
        

    chnl.send({embed: embed});
    message.reply("done!").then(msg => {
        msg.delete(5000)
    })
}

module.exports.help = {
    name: "say"
}