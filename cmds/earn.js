const Discord = module.require("discord.js");
const botSettings = require("../config.json");
let profiles = require("../profiles.json");
const fs = require("fs");


exports.run = (client, message, args) => {
    {
        if(!profiles[message.author.id]){
            profiles[message.author.id] = {
                xp: 0,
                level: 1,
                Dollars: 0
            }
        }

        let profit = Math.floor(Math.random() * 30) + 1
        let curXP = profiles[message.author.id].xp
        let curLvl = profiles[message.author.id].level
        let curCash = profiles[message.author.id].Dollars
        let newCash = curCash + profit
       
        profiles[message.author.id].Dollars = newCash
        fs.writeFile("../profiles.json", JSON.stringify(profiles), (err) => {
            if(err) console.log(err)
        })

        message.reply(`you have just earned ${profit} Defender Dollars! 💸`)
    }
}

module.exports.help = {
    name: "earn"
}