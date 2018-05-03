const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const bot = new Discord.Client();
const botSettings = require('./config.json');
const fs = require("fs");

bot.commands = new Discord.Collection();
const profiles = require('./profiles.json');


fs.readdir('./cmds/', (err, files) => {
    if(err) console.error(err);

    let jsFiles = files.filter(f => f.split(".").pop () === "js");
    if(jsFiles.length<= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsFiles.length} commands!`);

    jsFiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on('ready', () => {
    console.log(`${bot.user.username} is ready for deployment!`);
    console.log(`ID: ${bot.user.id}, Server Count:${bot.guilds.size}`);
    
    bot.user.setActivity(`out for d.help`, {type: "WATCHING"})
    //bot.setInterval(() => {
        //bot.user.setActivity(`to ${bot.users.size} users || d.help`, { type: "LISTENING"});
    //}, 5000)
    bot.user.setStatus("online");
    console.log("Game and Status has been set!");
    console.log(`${bot.user.username} is awaiting commands!`);
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let freeRanks = JSON.parse(fs.readFileSync("./ranks.json", "utf8"));
    if(!freeRanks[message.guild.id]){
        freeRanks[message.guild.id] = {
            ranksID: 0
        };
    }

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: botSettings.prefix
      };
    }

    let xpAdd = Math.floor(Math.random() * 10) + 1;

    if(!profiles[message.author.id]){
        profiles[message.author.id] = {
            xp: 0,
            level: 1,
            Dollars: 0
        };
    }

    let curXp = profiles[message.author.id].xp
    let curLvl = profiles[message.author.id].level
    profiles[message.author.id].xp = curXp + xpAdd;
    let nxtLvl = 5 * (curLvl ^ 2) + 50 * curLvl + 100

    if(nxtLvl <= profiles[message.author.id].xp){
        profiles[message.author.id].level = curLvl + 1
        let lvlup = new Discord.RichEmbed()
            .setTitle("You leveled up!")
            .setDescription(`You have just reached level ${curLvl + 1}!`)

        message.channel.send(lvlup)
    }
    fs.writeFile("./profiles.json", JSON.stringify(profiles), (err) => {
        if(err) console.log(err)
    })

    let prefix = prefixes[message.guild.id].prefixes;
    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0]
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
});


bot.login(process.env.TOKEN);
