const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

const Banshee = JSON.parse(JSON.stringify(require("../entities/Banshee.json")));
const Cauchemar = JSON.parse(JSON.stringify(require("../entities/Cauchemar.json")));
const Demon = JSON.parse(JSON.stringify(require("../entities/Demon.json")));
const Djinn = JSON.parse(JSON.stringify(require("../entities/Djinn.json")));
const Esprit = JSON.parse(JSON.stringify(require("../entities/Esprit.json")));
const Fantome = JSON.parse(JSON.stringify(require("../entities/Fantome.json")));
const Goryo = JSON.parse(JSON.stringify(require("../entities/Goryo.json")));
const Hantu = JSON.parse(JSON.stringify(require("../entities/Hantu.json")));
const LeMimic = JSON.parse(JSON.stringify(require("../entities/LeMimic.json")));
const LesJumeaux = JSON.parse(JSON.stringify(require("../entities/LesJumeaux.json")));
const Myling = JSON.parse(JSON.stringify(require("../entities/Myling.json")));
const Obake = JSON.parse(JSON.stringify(require("../entities/Obake.json")));
const Ombre = JSON.parse(JSON.stringify(require("../entities/Ombre.json")));
const Oni = JSON.parse(JSON.stringify(require("../entities/Oni.json")));
const Onryo = JSON.parse(JSON.stringify(require("../entities/Onryo.json")));
const Poltergeist = JSON.parse(JSON.stringify(require("../entities/Poltergeist.json")));
const Raiju = JSON.parse(JSON.stringify(require("../entities/Raiju.json")));
const Revenant = JSON.parse(JSON.stringify(require("../entities/Revenant.json")));
const Spectre = JSON.parse(JSON.stringify(require("../entities/Spectre.json")));
const Yokai = JSON.parse(JSON.stringify(require("../entities/Yokai.json")));
const Yurei = JSON.parse(JSON.stringify(require("../entities/Yurei.json")));

const entities = new Map();
entities.set(Banshee.value, Banshee);
entities.set(Cauchemar.value, Cauchemar);
entities.set(Demon.value, Demon);
entities.set(Djinn.value, Djinn);
entities.set(Esprit.value, Esprit);
entities.set(Fantome.value, Fantome);
entities.set(Goryo.value, Goryo);
entities.set(Hantu.value, Hantu);
entities.set(LeMimic.value, LeMimic);
entities.set(LesJumeaux.value, LesJumeaux);
entities.set(Myling.value, Myling);
entities.set(Obake.value, Obake);
entities.set(Ombre.value, Ombre);
entities.set(Oni.value, Oni);
entities.set(Onryo.value, Onryo);
entities.set(Poltergeist.value, Poltergeist);
entities.set(Raiju.value, Raiju);
entities.set(Revenant.value, Revenant);
entities.set(Spectre.value, Spectre);
entities.set(Yokai.value, Yokai);
entities.set(Yurei.value, Yurei);

module.exports = class CommandPhasmowiki{

    static match(interaction){
        return interaction.commandName === "phasmowiki"
    }

    static action(interaction){
        const row = new MessageActionRow().addComponents(
          new MessageSelectMenu()
            .setCustomId("entities")
            .setPlaceholder("Sélectionnez une entité")
            .addOptions([
              {
                label: Banshee.name,
                value: Banshee.value
              },
              {
                label: Cauchemar.name,
                value: Cauchemar.value
              },
              {
                label: Demon.name,
                value: Demon.value
              },
              {
                label: Djinn.name,
                value: Djinn.value
              },
              {
                label: Esprit.name,
                value: Esprit.value
              },
              {
                label: Fantome.name,
                value: Fantome.value
              },
              {
                label: Goryo.name,
                value: Goryo.value
              },
              {
                label: Hantu.name,
                value: Hantu.value
              },
              {
                label: LeMimic.name,
                value: LeMimic.value
              },
              {
                label: LesJumeaux.name,
                value: LesJumeaux.value
              },
              {
                label: Myling.name,
                value: Myling.value
              },
              {
                label: Obake.name,
                value: Obake.value
              },
              {
                label: Ombre.name,
                value: Ombre.value
              },
              {
                label: Oni.name,
                value: Oni.value
              },
              {
                label: Onryo.name,
                value: Onryo.value
              },
              {
                label: Poltergeist.name,
                value: Poltergeist.value
              },
              {
                label: Raiju.name,
                value: Raiju.value
              },
              {
                label: Revenant.name,
                value: Revenant.value
              },
              {
                label: Spectre.name,
                value: Spectre.value
              },
              {
                label: Yokai.name,
                value: Yokai.value
              },
              {
                label: Yurei.name,
                value: Yurei.value
              }
            ])
        );
        interaction.reply({ content: "Choix d'une entité", components: [row] });
    }

    static interactWithMenu(interaction){
      interaction.deferUpdate();
      let valueInteract = interaction.values[0];
      if(!entities.has(valueInteract)){
        interaction.reply("L'entité sélectionnée n'a pas été trouvée");
        return;
      }
      let entity = entities.get(valueInteract);

      let preuvesStr = "";
      entity.preuves.forEach((value,index,array) => {
        preuvesStr += "• " + value + "\n";
      })

      let informationsStr = "";
      entity.informations.forEach((value,index,array) => {
        informationsStr += "• " + value + "\n \n";
      })

      let contributeursStr = "";
      entity.contributeurs.forEach((value,index,array) => {
        contributeursStr += " " + value + ","
      })

      let PhasmoWiki = require('../PhasmoWiki');

      let embedIntro = new MessageEmbed()
        .setTitle('> ' + entity.name)
        .setURL(entity.url)
        .setDescription(entity.description)
        .addField("Preuves", preuvesStr)
        .addField("Force", entity.force, true)
        .addField("Faiblesse", entity.faiblesse, true)
        .addField("Pouvoir", entity.pouvoir)
      
      //let embedInfos = new MessageEmbed()
        .addField("Informations", informationsStr)
        .setFooter("Contributeurs:" + contributeursStr, PhasmoWiki.getBot().user.avatarURL())

      try{
        PhasmoWiki.getBot().channels.cache.get(interaction.channelId).send({content: "<@" + interaction.member.user.id + ">", embeds: [embedIntro]});
      }catch(error){
        console.error(error);
      }
    }

}