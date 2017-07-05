const Discord = require("discord.js");
const TOKEN = "MzMxMDk1ODg3ODA5ODcxODcz.DD00zg.-88qWkw_ElFZ-8qqkHutvhe_LX8";
const PREFIX = "&"

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome").sendMessage("Welcome " + member.toString() + " to the server! Make sure to read #Rules! :D");
   
    member.addRole(member.guild.roles.find("name", "Members"));
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" "); 

    var embed = new Discord.RichEmbed();

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("PONG!");
            break;

        case "info":
            var embed = new Discord.RichEmbed()
                    .addField("Hi there! I'm HaQonity", "I'm a simple moderator bot that has some nice features!")
                    .addField("Who created me?", "I'm created by @Dragonwinq#3326! He made me because he was bored and wanted to do something with his life!")
                    .addField("How am I created?", "My owner created me using JavaScript node.js and used the library is Discord.js")
                    .addField("Sorry! I can't join your server.", "Im getting hosted on my creator's pc! He doesn't have the money to 24/7 host me. That's why im offline most of the time. I'm not a bot that you need 24/7 so if my owner needs me he'll press the button and im there!")
                    .addField("Do you have some ideas?", "If you have an idea or a command that I should know, don't be scared and just message it to @Dragonwinq#3326")
                    .addField("Do you like YouTube?", "If do, please check out my creator's YouTube channel! https://www.youtube.com/c/Dragonwinq")
                    .setColor(0x00FFFF)
                    .setTimestamp()
                    
            message.channel.sendEmbed(embed);
            break;
        
    }   
});



bot.login(TOKEN);