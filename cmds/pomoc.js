const Discord = module.require("discord.js");

exports.run = (client, message, args) => {
    {
        message.channel.send(`***Lista komend:***\n -**ping** - sprawdza ping bota \n -**propozycja** - wysyła propozycję do <#442041537430552586> \n -**skarga** - wysyła skargę do <#442041537430552586>`)
    }
}

module.exports.help = {
    name: "pomoc"
}
