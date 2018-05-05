const Discord = module.require("discord.js");

exports.run = (client, message, args) => 
{
    const chnl = message.guild.channels.find(`name`, "skargi_propozycje")
    if(!chnl) return message.reply(`there's no suggestion channel here...`)

    let cnt = args.join(" ")
    if(!cnt) return message.reply(`you can't leave the suggestion empty.`)

    let embed = new Discord.RichEmbed()
        .setAuthor(`Propozycja od ${message.author.username}`)
        .setColor("#8981e6")
        .setTimestamp()
        .setFooter(`Wysłane na`, `${message.author.displayAvatarURL}`)
        .setDescription(`${cnt}`)
        .addField("Informacja", "Propozycja musi mieć zebrane około 2/3 wszystkitch głosów, żeby została dodana.")
        
    chnl.send({embed: embed}).then(newMessage => {
        newMessage.react('👍')
        newMessage.react('👎')
    })
}

module.exports.help = {
    name: "propozycja"
}