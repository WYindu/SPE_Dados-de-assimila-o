const { Client, GatewayIntentBits } = require("discord.js");
const rolarDados = require("./Sub_Sistemas/rolarDados");

const token = process.env.DISCORD_TOKEN;    // Lê o token do bot a partir de uma variável de ambiente.

if (!token) {
  console.error("Erro: configure a variável DISCORD_TOKEN.");
  process.exit(1);
}

const client = new Client({     // Conecta o bot ao Discord e define as permissões necessárias
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const rolagemDados = new rolarDados();

client.on("messageCreate", async (message) => {   // Executa quando uma mensagem é enviada no Discord
  if (message.author.bot) return;   // Não responde a mensagens de outros bots
  if (!/^!a(?:\s|$)/i.test(message.content)) return; // Aceita !a e !A, mas não comandos como !ataque

  const expressao = message.content.slice(2).trim();
  try {
    const resultado = rolagemDados.roll(expressao);
    await message.reply(resultado.detalhes.join("\n"));
  } catch (erro) { // Retorno de mensagem em caso de erro ou desacordo com os comandos do bot
    await message.reply
      ({content:
      `**AGEMASEM!!** ${erro.message}`,
      files: ["./Gifs/special-week-agemasen.gif"]});
  }
});

client.once("ready",() => {console.log(`Bot conectado como ${client.user.tag}!`);}); //Avisa quando o bot se conecta
client.login(token);  // Inicia a conexão.
