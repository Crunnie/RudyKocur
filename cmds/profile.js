const Discord = module.require("discord.js");
const botSettings = require("../config.json");
let profiles = require("../profiles.json");

exports.run = (client, message, args) => {
    
    if(!profiles[message.author.id]){
        profiles[message.author.id] = {
            xp: 0,
            level: 1,
            Dollars: 0
        }
    }

    let curxp = profiles[message.author.id].xp;
    let curlvl = profiles[message.author.id].level
    let curCash = profiles[message.author.id].Dollars
    let nxtLvlXp = curlvl * 300;
    let diff = nxtLvlXp - curxp

    let profEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setFooter("Nice stats you got there!", message.author.displayAvatarURL)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL)
    .addField("Level", curlvl, true)
    .addField("Total XP", curxp, true)
    .addField("XP needed to level up", `${diff} til level ${curlvl + 1}`, true)
    .addField("Defender Dollars", curCash, true)

    message.channel.send(profEmbed)
}

module.exports.help = {
    name: "profile"
}