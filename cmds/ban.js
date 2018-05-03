
const Discord = module.require("discord.js");

exports.run = (client, message, args) => 
{
    {
        const member = message.mentions.members.first();
        if(!message.member.permissions.has('BAN_MEMBERS')) return message.reply("you don't have enough permissions to do that :confused:");

        if (!member) return message.reply(`invalid usage. Please do "ban [mention user]"`);
        member.ban({
            reason: `banned by ${message.author.tag}`
        });

        if(message.author.id === member.id) return message.reply("why are you trying to ban yourself? :thinking:")

        message.channel.send(`Looks like ${message.mentions.members.last()} won't be with us anymore!`).then(msg => {
            msg.delete(5000)
        })
    }
}

module.exports.help = {
    name: "ban"
}