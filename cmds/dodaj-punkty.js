const Discord = module.require("discord.js");
let profiles = require("../profile.json");
const fs = require("fs");

exports.run = (client, message, args) => {
  
    let punktyDodaj = args[0]
    if(!punktyDodaj) return ("musisz podać ilość punktów.")
  
    let użyt = args[1]
    użyt = message.mentions.users.first()
    if(!użyt) return message.reply("nie podałeś użytkownika.")
  
    let zesSerw = message.guild.roles.find(`name`,"Zespół Serwera")
    if(message.member.roles.has(zesSerw)) return message.reply("nie masz permisji żeby tą komendę wykonać.") 
    
    if(!profiles[użyt.id]){
        profiles[użyt.id] = {
            punkty: 0
        }
    }

    let punkty = profiles[użyt.id].punkty
    let nowePunkty = punkty + punktyDodaj
    
    profiles[użyt.id].Dollars = nowePunkty
        fs.writeFile("../profile.json", JSON.stringify(profiles), (err) => {
            if(err) console.log(err)
        })
  
    message.reply("już!")
}

module.exports.help = {
    name: "dodajPunkty"
}