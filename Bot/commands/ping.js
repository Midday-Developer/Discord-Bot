module.exports = {
    run: async (client, message, args) => {
        message.channel.send(`Pong! ${Math.round(client.ws.ping)}ms`);
    },
    aliases: [],
    description: 'Ping/Pong command'
}