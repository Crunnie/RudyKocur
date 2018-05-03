module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`you don't have enough permissions ("Manage Messages") to do that :confused:`);

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!toMute) return message.reply("you didn't tell me who to mute! **command usage:** .mute @mention/ .mute userID");

    if(toMute.id === message.author.id) return message.channel.send("Why are you trying to mute yourself? :thinking:");

    if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("You can't mute people of higher or equal role.");

    let role = message.guild.roles.find( r => r.name === "Muted");
    if(!role) {
    try {
        role = await message.guild.createRole({
            name: "Muted",
            color:"#6e6e6e",
            permissions: []
        });


        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(role, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
    } catch(e) {
        console.log(e.stack);
    }

    if(toMute.roles.has(role.id)) return message.channel.send("This user is already muted!");

    toMute.addRole(role);
    message.channel.send(`User is sucessfully muted!`).then(msg => {
        msg.delete(5000)
        })
    }
}

module.exports.help = {
    name: "mute"
}