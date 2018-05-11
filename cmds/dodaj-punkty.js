const Discord = module.require("discord.js");
let profiles = require("../profile.json");

exports.run = (client, message, args) => {
  
    let użyt = args[0]
    użyt = message.mentions.users.first()
    if(!użyt) return message.reply("nie podałeś użytkownika.")
  
    let punktyDodaj = args[1]
    if(!isNaN(punktyDodaj)) return message.reply("podana wartość nie jest numerem.")
    if(!punktyDodaj) return ("musisz podać ilość punktów.")
  
    let zesSerw = message.guild.roles.find(`name`,"Zespół Serwera")
    if(message.member.roles.has(zesSerw)) return message.reply("nie masz permisji żeby tą komendę wykonać.") 
    
    if(!profiles[użyt.id]){
        profiles[użyt.id] = {
            punkty: 0
        }
    }

    let punkty = profiles[użyt.id].punkty
}

module.exports.help = {
    name: "dodaj-punkty"
}