const Discord = module.require("discord.js");
let profiles = require("../profil.json");
const fs = require("fs");
const ms = require("ms");

exports.run = (client, message, args) => {
 
    let zesSerw = "441959901317824523"
    if(!message.member.roles.has(zesSerw)) return message.reply("nie masz permisji żeby użyć tej komendę.") 

    let użyt = args[0]
    użyt = message.guild.member(message.mentions.users.first())
    if(!użyt) return message.reply("nie podałeś użytkownika.")
     
    let punktyDodaj = args.join(" ").slice(22)
    doDodania = isNaN(punktyDodaj)
    if(doDodania == true) return message.reply("podana wartość musi być liczbą")
    if(!punktyDodaj) return message.reply("musisz podać ilość punktów.")
    
    if(!profiles[użyt.id]){
        profiles[użyt.id] = {
            punkty: 0
        }
    }

    let punkty = profiles[użyt.id].punkty
    let nowePunkty = punkty + doDodania
    
    profiles[użyt.id].punkty = nowePunkty
        fs.writeFile("../profil.json", JSON.stringify(profiles), (err) => {
            if(err) console.log(err)
        })
  
    message.reply("już!")
}

module.exports.help = {
    name: "dodajPunkty"
}