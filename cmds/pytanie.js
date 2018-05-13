const Discord = module.require("discord.js");

exports.run = (client, message, args) => 
{
    const chnl = message.guild.channels.find(`name`, "skargi_propozycje")
    if(!chnl) return message.reply(`there's no suggestion channel here...`)
  
    let zesSerw = message.guild.roles.find(`name`,"Zespół Serwera")
    if(message.member.roles.has(zesSerw)) return message.reply("nie masz permisji żeby tą komendę wykonać.")

    let cnt = args.join(" ")
    if(!cnt) return message.reply(`you can't leave the suggestion empty.`)

    let embed = new Discord.RichEmbed()
        .setAuthor(`Pytanie od ${message.author.username}`)
        .setTimestamp()
        .setFooter(`Wysłane na`, `${message.author.displayAvatarURL}`)
        .setDescription(`${cnt}`)
        
    chnl.send({embed: embed}).then(newMessage => {
        newMessage.react('👍')
        newMessage.react('👎')
    })
}

module.exports.help = {
    name: "pytanie"
}