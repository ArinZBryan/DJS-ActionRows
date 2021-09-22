const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
client.login(token);
client.once('ready', () => {
	console.log('Ready!');
	if (client.isReady()) {console.log('logged in')  
		const channel = guild.channels.cache.get('<id>')
		const row = new MessageActionRow()								//define new action row
			.addComponents(																	//add components to action row
				new MessageButton()														//add button as component
					.setCustomId('primary')											//to check for
					.setLabel('Primary')												//button's label (UI)
					.setStyle('PRIMARY')												//button's style (UI)
					.setDisabled(true)												//is button disabled
			);
		const row2 = new MessageActionRow()											//define new action row
			.addComponents(																				//add components to the action row
				new MessageSelectMenu()															//add menu as component
					.setCustomId('select')														//id to check for
					.setPlaceholder('Nothing selected')								//set placeholder text for when nothing has been selecvted yet
					.setMinValues(1)																	//set minimum slections for menu
					.setMaxValues(1)																	//set maximum selections for menu
					.addOptions([																			//add options to menu
						{
							label: 'Select me',														//option 1 label
							description: 'This is a description',					//option 1 description
							value: 'first_option',										
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);

		const embed = new MessageEmbed()									//define a new embed
			.setColor('#0099ff')														//set embed colour
			.setTitle('Some title')													//set embed title
			.setURL('https://discord.js.org')								//set URL for title
			.setDescription('Some description here');				//set description
		channel.send({ content: "test", ephemeral = true, embeds = [embed], components = [row,row2]
	}
	
});
