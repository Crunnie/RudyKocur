const Discord = module.require("discord.js");

exports.run = (client, message, args) => {
    {
        let embed = new Discord.RichEmbed()
        
            .setAuthor("Need a hand?")
            .setTitle("~~*gives hand*~~ Catch this embed!")
            .setColor("#8981e6")
            .setTimestamp()
            .setFooter(`I'm one cool footer c;`)
            .addField(`Join our Discord for help!`,`Just [click here!](https://discord.gg/VuBhbaN)`)
            .addField(`Bot info:`, `d.help`)
            .addField(`Command's list:`, `d.cmds`);
            

        message.author.send({embed: embed})
        message.reply("check your DMs!").then(msg => {
            msg.delete(5000)
        })
    }
}

module.exports.help = {
    name: "support"
}