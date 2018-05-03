const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let freeRanks = JSON.parse(fs.readFileSync("./ranks.json", "utf8"));

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you don't have enough permissions to do that!")

    if(!freeRanks[message.guild.id]){
        freeRanks[message.guild.id] = {
            rankIDs: []
        };
    }

    let rankName = args.join(" ")

    if(message.guild.roles.find(`name`,rankName)) return message.reply(`there's already a role called ${rankName} in the server.`)
    role = await message.guild.createRole({
        name: rankName,
        permissions: []
    });
    
    let ranks = freeRanks[message.guild.id].rankIDs
    let roleID = role.id
    ranks.push(roleID)
    var logger = fs.createWriteStream('./ranks.json')
        logger.write(JSON.stringify(freeRanks))

    message.reply("done!")

}

module.exports.help = {
  name: "addrole"
}