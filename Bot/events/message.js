module.exports = (client, message) => {
    let prefix = "/";
    
    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    if(message.channel.type === "dm" || message.channel.type === "group" ) {
        return message.channel.send({
            embed: {
                color: 15158332,
                description: ":no_entry: Sorry my commands don't work in DMs"
            }
        });
    }
    let cmdName = message.content.substring(message.content.indexOf(prefix)+1).split(new RegExp(/\s+/)).shift();
    let argsToParse = message.content.substring(message.content.indexOf(' ')+1);
    if(client.commands.get(cmdName))
        client.commands.get(cmdName)(client, message, argsToParse);
    else {
        return message.channel.send({
            embed: {
                color: 15158332,
                description: ":no_entry: Command not found"
            }
        });
    }
};