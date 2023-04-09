const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('event-list')
        .setDescription('Shows a list of all events'),
        async execute(interaction) {
            await interaction.reply('No events');
        }
}

