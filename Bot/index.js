require('dotenv').config({ path: './utils/.env' });
const token = process.env.BOT_TOKEN;

const Discord = require('discord.js');
const client = new Discord.Client();

const { registerCommands, registerEvents } = require('./utils/registry.js');

(async () => {
    client.login(token);
    client.commands = new Map();

    await registerEvents(client, '../events');
    await registerCommands(client, '../commands');
})();
