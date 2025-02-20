const wait = require('node:timers/promises').setTimeout;
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.deferReply();
		await wait(4_000);
		await interaction.editReply({ content: 'Pong!', withResponse: true });
		await interaction.followUp('Pong again! [Link](http://www.google.com)');
	},
};
