const Discord = module.require("discord.js");

exports.run = (client, message, args) => 
{
    const chnl = message.guild.channels.find(`name`, "suggestions")
    if(!chnl) return message.reply(`there's no suggestion channel here...`)

    let cnt = args.join(" ")
    if(!cnt) return message.reply(`you can't leave the suggestion empty.`)

    let embed = new Discord.RichEmbed()
        .setAuthor(`A suggestion from ${message.author.username}`)
        .setColor("#8981e6")
        .setTimestamp()
        .setFooter(`Sent on`, `${message.author.displayAvatarURL}`)
        .setDescription(`${cnt}`)
        
    chnl.send({embed: embed}).then(newMessage => {
        newMessage.react('👍')
        newMessage.react('👎')
    })
}

module.exports.help = {
    name: "suggest"
}