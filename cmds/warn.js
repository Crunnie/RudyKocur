const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("you don't have enough permissions!");
  //let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  //if(!wUser) return message.reply("Couldn't find that person.");
  //if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("you can't warn moderators.");
  //let reason = args.join(" ").slice(22);

  //if(!warns[wUser.id]) warns[wUser.id] = {
    //warns: 0
  //};

  //warns[wUser.id].warns++;

  //fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    //if (err) console.log(err)
  //});

    //let warnEmbed = new Discord.RichEmbed()
      //.setDescription("Warns")
      //.setAuthor(message.author.username)
      //.setColor("#fc6400")
      //.addField("Warned User", `<@${wUser.id}>`)
      //.addField("Warned In", message.channel)
      //.addField("Number of Warnings", warns[wUser.id].warns)
      //.addField("Reason", reason);

    //let warnchannel = message.guild.channels.find(`name`, "reports");
    //if(!warnchannel) return message.reply("Couldn't find channel");

  //warnchannel.send(warnEmbed);


  message.reply("this command is disabled until further notice. Join the support discord server for more info!\nhttps://discord.gg/VuBhbaN")
}

module.exports.help = {
  name: "warn"
}