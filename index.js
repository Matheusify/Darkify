const { AoiClient, LoadCommands } = require("aoi.js");
require('dotenv').config()

const bot = new AoiClient({
    token: process.env["token"],
    prefix: "$getGuildVar[prefixa]",
    intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers"],
    events: ["onMessage", "onInteractionCreate", "onJoin", "onLeave", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onRoleUpdate", "onRoleCreate", "onRoleDelete", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onChannelPinsUpdate", "onMemberUpdate"],
    guildOnly: true,
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});



bot.variables({
prefixa: "-",
staff: "Não setado",
servidor: "",
moedas: "0",
auroras: "0",
id: "",
linguagem: "",
prefixo: "",
descrição: "",
devcargo: "",
análise: "",
botaprovado: "",
verificador: "",
bot: "",
userid: "",
correios: "",
logs: "",
banco: "0",
sobremim: "O Bot boreal e tão legal!",
blmotivo: "Não definido",
blacklist: "não",
delete: "",
desc: "",
vote: "false",
userid: "",
voton: "",
vip: "Não",
setupbanco: "false",
nomebanco: "",
databanco: "",
bitcoin: "0",
bancario: "",
title: "",
cor: "ffb500",
chat: "Não setado",
descricao: "Não setado",
entrada: "teste",
saida: "teste",
cargo: "Não setado",
staffparceria: "Não setado",
chatparceria: "Não setado",
invite: "Não setado",
representante: "Não setado",
ping: "Não setado",
chatgpt: "",
vcjoin: "",
members: "",
counting: "1",
icounting: "",
borealpoints: "0",
clickpoints: "1",
fazenda: "0",
cursor: "0",
fabrica: "0",
authorButton: "",
})

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")