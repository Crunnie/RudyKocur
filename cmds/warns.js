const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you can't do that.");
  //let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  //if(!wUser) return message.reply("couldn't find that person");
  //let warnlevel = warns[wUser.id].warns;

  //if(!warns[wUser.id]) return message.reply(`@${wUser} has no warnings.`)
  //message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);

  message.reply("this command is disabled until further notice. Join the support discord server for more info!\nhttps://discord.gg/VuBhbaN")

}

module.exports.help = {
  name: "warns"
}