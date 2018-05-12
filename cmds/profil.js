const Discord = module.require("discord.js");
let profiles = require("../profile.json");

exports.run = (client, message, args) => {
  
    let użyt = message.author || message.mentions.users.first()
    
    if(!profiles[użyt.id]){
        profiles[użyt.id] = {
            punkty: 0
        }
    }

    let punkty = profiles[użyt.id].punkty

    let profEmbed = new Discord.RichEmbed()
    .setAuthor(`Profil`)
    .setDescription(`***UWAGA:*** Komenda jeszcze w trakcje tworzenia!`)
    .setFooter("Oby tak dalej!", użyt.displayAvatarURL)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL)
    .setColor("#e56f20")
    .addField("Użytkownik", użyt.tag, true)
    .addField("Ilość Punktów", punkty, true)


    message.channel.send(profEmbed)
}

module.exports.help = {
    name: "profil"
}