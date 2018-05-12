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
const profiles = require('./profile.json');


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
    
    bot.user.setActivity(`oblizywanie łapek || rpomoc`)
    bot.user.setStatus("online");
    console.log("Game and Status has been set!");
    console.log(`${bot.user.username} is awaiting commands!`);
});

bot.on('message', async message => {
  
    //let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"));
   // if(!profile[mess.id]){
        //profile[użyt.id] = {
            //punkty: 0
        //};
    //}
  
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botSettings.prefix
    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0]
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
});


bot.login(process.env.TOKEN);
