const Discord = module.require("discord.js");

exports.run = (client, message, args) => {
    {
        const then = Date.now()
        message.channel.send(`pinging...`).then(m => {
            m.edit(`:ping_pong: Pong! **Ping:** ${Date.now() - then}ms`)
        });
    }
}

module.exports.help = {
    name: "ping"
}