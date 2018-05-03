exports.run = (client, message, args) => {

    if(!message.memeber.hasPermission("ADMINISTRATOR")) return message.reply("you don't have enough permissions to do that.")
    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");

    delete require.cache[require.resolve(`./${args[0]}.js`)];
  
    message.reply(`The command ${args[0]} has been reloaded`).then(msg => {
      msg.delete(5000)
    })
  };

  module.exports.help = {
    name: "reload"
}