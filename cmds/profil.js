const Discord = module.require("discord.js");
const botSettings = require("../config.json");
let profiles = require("../profile.json");

exports.run = (client, message, args) => {
    
    if(!profiles[message.author.id]){
        profiles[message.author.id] = {
            punkty: 0
        }
    }

    let punkty = profiles[message.author.id].punkty

    let profEmbed = new Discord.RichEmbed()
    .setAuthor(`Profil`)
    .setDescription(`***UWAGA:*** Komenda jeszcze w trakcje tworzenia!`)
    .setFooter("Oby tak dalej!", message.author.displayAvatarURL)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL)
    .setColor("#e56f20")
    .addField("Użytkownik", message.author.tag, true)
    .addField("Ilość Punktów", punkty, true)


    message.channel.send(profEmbed)
}

module.exports.help = {
    name: "profil"
}