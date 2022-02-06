const { MessageActionRow, MessageSelectMenu } = require('discord.js');

const Esprit = JSON.parse(JSON.stringify(require("../entities/Esprit.json")));
const Spectre = JSON.parse(JSON.stringify(require("../entities/Spectre.json")));
const Fantome = JSON.parse(JSON.stringify(require("../entities/Fantome.json")));
const Poltergeist = JSON.parse(JSON.stringify(require("../entities/Poltergeist.json")));
const Banshee = JSON.parse(JSON.stringify(require("../entities/Banshee.json")));
const Djinn = JSON.parse(JSON.stringify(require("../entities/Djinn.json")));
const Cauchemar = JSON.parse(JSON.stringify(require("../entities/Cauchemar.json")));
const Revenant = JSON.parse(JSON.stringify(require("../entities/Revenant.json")));
const Ombre = JSON.parse(JSON.stringify(require("../entities/Ombre.json")));
const Demon = JSON.parse(JSON.stringify(require("../entities/Demon.json")));
const Yurei = JSON.parse(JSON.stringify(require("../entities/Yurei.json")));
const Oni = JSON.parse(JSON.stringify(require("../entities/Oni.json")));
const Yokai = JSON.parse(JSON.stringify(require("../entities/Yokai.json")));
const Hantu = JSON.parse(JSON.stringify(require("../entities/Hantu.json")));
const Goryo = JSON.parse(JSON.stringify(require("../entities/Goryo.json")));
const Myling = JSON.parse(JSON.stringify(require("../entities/Myling.json")));
const Onryo = JSON.parse(JSON.stringify(require("../entities/Onryo.json")));
const LesJumeaux = JSON.parse(JSON.stringify(require("../entities/LesJumeaux.json")));
const Raiju = JSON.parse(JSON.stringify(require("../entities/Raiju.json")));
const Obake = JSON.parse(JSON.stringify(require("../entities/Obake.json")));
const LeMimic = JSON.parse(JSON.stringify(require("../entities/LeMimic.json")));

const entities = new Map();
entities.set(Esprit.value, Esprit);
entities.set(Spectre.value, Spectre);
entities.set(Fantome.value, Fantome);
entities.set(Poltergeist.value, Poltergeist);
entities.set(Banshee.value, Banshee);
entities.set(Djinn.value, Djinn);
entities.set(Cauchemar.value, Cauchemar);
entities.set(Revenant.value, Revenant);
entities.set(Ombre.value, Ombre);
entities.set(Demon.value, Demon);
entities.set(Yurei.value, Yurei);
entities.set(Oni.value, Oni);
entities.set(Yokai.value, Yokai);
entities.set(Hantu.value, Hantu);
entities.set(Goryo.value, Goryo);
entities.set(Myling.value, Myling);
entities.set(Onryo.value, Onryo);
entities.set(LesJumeaux.value, LesJumeaux);
entities.set(Raiju.value, Raiju);
entities.set(Obake.value, Obake);
entities.set(LeMimic.value, LeMimic);

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
                label: Esprit.name,
                value: Esprit.value
              },
              {
                label: Spectre.name,
                value: Spectre.value
              },
              {
                label: Fantome.name,
                value: Fantome.value
              },
              {
                label: Poltergeist.name,
                value: Poltergeist.value
              },
              {
                label: Banshee.name,
                value: Banshee.value
              },
              {
                label: Djinn.name,
                value: Djinn.value
              },
              {
                label: Cauchemar.name,
                value: Cauchemar.value
              },
              {
                label: Revenant.name,
                value: Revenant.value
              },
              {
                label: Ombre.name,
                value: Ombre.value
              },
              {
                label: Demon.name,
                value: Demon.value
              },
              {
                label: Yurei.name,
                value: Yurei.value
              },
              {
                label: Oni.name,
                value: Oni.value
              },
              {
                label: Yokai.name,
                value: Yokai.value
              },
              {
                label: Goryo.name,
                value: Goryo.value
              },
              {
                label: Myling.name,
                value: Myling.value
              },
              {
                label: Onryo.name,
                value: Onryo.value
              },
              {
                label: LesJumeaux.name,
                value: LesJumeaux.value
              },
              {
                label: Raiju.name,
                value: Raiju.value
              },
              {
                label: Obake.name,
                value: Obake.value
              },
              {
                label: LeMimic.name,
                value: LeMimic.value
              }
            ])
        );
        interaction.reply({ content: "Choix d'une entité", components: [row] });
    }

}