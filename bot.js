const Discord = require("discord.js");
const bot = new Discord.Client({intents: []});
const token = 'OTA1MDc5MDk3NTc3ODQ0NzY2.YYE2mA.bgodS0rY3pS29CSw0CmpV4Ufuos'

bot.on('ready', () => {
    console.log('bot is ready');
})

const prefix = '!';
console.log(prefix);
bot.on('messageCreate', message => {
    console.log(message.content);
    if(message.content === 'go') {
        message.reply({
            constent : 'Go Away',
        })
    }
});

bot.login(token);