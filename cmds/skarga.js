const Discord = module.require("discord.js");

exports.run = (client, message, args) => 
{
    const chnl = message.guild.channels.find(`name`, "skargi_propozycje")
    if(!chnl) return message.reply(`there's no suggestion channel here...`)

    let cnt = args.join(" ")
    if(!cnt) return message.reply(`you can't leave the suggestion empty.`)

    let embed = new Discord.RichEmbed()
        .setAuthor(`Skarga od ${message.author.username}`)
        .setColor("#d61815")
        .setTimestamp()
        .setFooter(`Wysłane na`, `${message.author.displayAvatarURL}`)
        .setDescription(`${cnt}`)
        .addField("Informacja", "Skarga musi mieć zebrane przynajmniej 10 głosów, żeby admin się do niej odniósł.")
        
    chnl.send({embed: embed}).then(newMessage => {
        newMessage.react('👍')
        newMessage.react('👎')
    })
}

module.exports.help = {
    name: "skarga"
}