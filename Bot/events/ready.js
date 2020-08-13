module.exports = async (client) => {
    console.log(`${client.user.tag} has logged in.`);
    client.user.setActivity(`${client.guilds.cache.size} servers`, {type: "WATCHING"});
    console.log('\n')
}