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
    .setFooter("Oby tak dalej!", message.author.displayAvatarURL)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL)
    .addField("Użytkownik", message.author.username, true)
    .addField("Ilość Punktów", punkty, true)


    message.channel.send(profEmbed)
}

module.exports.help = {
    name: "profil"
}