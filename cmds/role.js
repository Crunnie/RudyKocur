const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let freeRanks = JSON.parse(fs.readFileSync("./ranks.json", "utf8"));

module.exports.run = async (bot, message, args) => {
    
    if(!freeRanks[message.guild.id]) return message.reply("there's no free roles assigned in this server...")
    
    let rankName = args.join(" ");
    let ranks = freeRanks[message.guild.id].rankIDs;
    let guildRole = message.guild.roles.find(`name`, rankName);
    if(!guildRole) return message.reply(`couldn't find ${rankName} in this server.`)
    console.log(guildRole.id);
    let guildRID = guildRole.id
    let jsonRole = freeRanks[message.guild.id].rankIDs.find(guildRID)
    console.log(jsonRole)

    //if(guildRole.id === role) return message.reply('test')
}

module.exports.help = {
  name: "role"
}