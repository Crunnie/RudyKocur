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
    .setAuthor(message.author.username)
    .setFooter("Nice stats you got there!", message.author.displayAvatarURL)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL)
    .addField("Ilość Punktów", punkty, true)

    message.channel.send(profEmbed)
}

module.exports.help = {
    name: "profile"
}