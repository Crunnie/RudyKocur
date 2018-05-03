const Discord = module.require("discord.js");

exports.run = (client, message, args) => {
    {
        message.channel.send("Invite Discord Defender to your server by clicking this awesome link! \nhttps://discordapp.com/api/oauth2/authorize?client_id=432552169892347905&permissions=8&scope=bot")
    }
}

module.exports.help = {
    name: "invite"
}