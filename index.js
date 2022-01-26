const { Client, Intents, User, Guild } = require("discord.js");
const { token } = require("./token.json");
const utilisateur = ""
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const test = [];

client.on("ready", () => {
  console.log("loggedOn");
});



client.on("messageCreate", (message) => {
  console.log("ok");
  if (message.toString() == "ping") {
    message.channel
      .send("pong")
      .then((message) => console.log(`Sent message: ${message.content}`));
  } else if (message.toString() == "Et ça fait") {
    message
      .reply("BIM " + "BAM " + "BOUM")
      .then(() => console.log(`Replied to message "${message.content}"`));
  } //else if (message.toString() == "thinking") {
   // message.Id({919954725108068352}).react("🤔").then(console.log).catch(console.error);} 
   else if (message.toString() == "!test") {
    message.channel.messages.fetch({ limit: 30 }).then((messages) => {
      let count = 0;
      messages.each((value, key) => {
        if (value.toString() == "ping") {
          count++;
        }
      });
      console.log("ping a été trouvé", count, "fois");
      message.channel.send("ping a été trouvé " + count + " fois");
    });
  } else if (message.toString() == "yeees") {
    message.channel
      .send(":falcon:")
      .then((message) => console.log(`Sent message: ${message.content}`));
  }
  else if (message.toString() == "fnatrique") {
    const fnc = test.push('fnc est la pire équipe du monde ptdr');
    message.channel
    .send(test[0])
    .then((message) => console.log(`Sent message: ${message.content}`));
  }
  else if (message.toString() == "okfrer") {
    message.channel
    .send(`tu as été ajouté à la liste de course de chevaux monsieur ${message.author}`)
    .then((message) => console.log(`Sent message: ${message.content}`));
    
  } 
});

client.login(token);

// id channel discord salon-bot : 480684227298459659
