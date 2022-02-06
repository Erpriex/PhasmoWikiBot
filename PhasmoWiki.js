const { Client, Intents, MessageActionRow, MessageSelectMenu } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const config = require('./config.json');
const configParsed = JSON.parse(JSON.stringify(config));

const CommandPhasmowiki = require('./commands/CommandPhasmowiki');

module.exports = class PhasmoWiki{
  static getBot(){
    return bot;
  }
}

bot.on('ready', function() {
  refreshCommandsSlash();
  console.log("[Bot]: Ready !");
})

bot.on('interactionCreate', async interaction => {
  if(interaction.isCommand()){
    if(CommandPhasmowiki.match(interaction)){
      await CommandPhasmowiki.action(interaction);
    }
  }

  if(interaction.isSelectMenu()){
    if(interaction.customId == "entities"){
      await CommandPhasmowiki.interactWithMenu(interaction);
    }
  }
})

async function refreshCommandsSlash(){
  const commands = [{
    name: 'phasmowiki',
    description: 'Consulter le wiki Phasmophobia des entités'
  }];

  const rest = new REST({ version: '9' }).setToken(configParsed.token);
  (async () => {
    try {
      console.log('Actualisation des commandes (/) sur les serveurs...');

      bot.guilds.cache.forEach(async function (guild, key, map) {
          await rest.put(
            Routes.applicationGuildCommands(bot.user.id, guild.id),
            { body: commands }
          );
        })
  
      console.log('Commandes (/) actualisées !');
    } catch (error) {
      console.error(error);
    }
  })();
}

bot.login(configParsed.token);