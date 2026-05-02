const { Client, GatewayIntentBits } = require("discord.js");

// 🔐 YAHAN APNA BOT TOKEN DALO
const TOKEN = "MTQ5OTc5Mzk3OTkxNzYwMjg0Nw.GO9Mli.2mXN5ADaUg7LxBIswCSPE1bLn21LxonU-ytiO4";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// ✅ Ready event
client.once("ready", () => {
  console.log(`🔥 Bot Online: ${client.user.tag}`);
});

// ✅ Basic command test (slash commands ke bina bhi chalega)
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 Pong!");
  }
});

// 🔐 Login
client.login(TOKEN);
console.log("TOKEN LEN:", process.env.TOKEN?.length);
console.log("TOKEN START:", process.env.TOKEN?.slice(0,5));
