const Discord = require('discord.js');
const dotenv = require('dotenv');

const { prefix } = require('./config.json');


dotenv.config();

console.log(process.env.TOKEN);

const ghost = new Discord.Client();

ghost.once('ready', () => {
    console.log('Auuuuuuuu.. Jon I\'m ready!!');
});

ghost.login(process.env.TOKEN);

ghost.on('typingStart', () => {
    console.log('soemeone is typing')
})
/*
ghost.on('guildMemberAvailable', member => {
    console.log(member.displayName)
})

ghost.on('guildMemberAdd', member => {
    console.log(member.nickname)
    member.setNickname('Nobita')
})
ghost.on('guildMemberAdd', member => {
    member.send('Wlekum!!')
    member.createDM(true);
});
*/

ghost.on('message', message => {
    console.log(message.content);
    if (message.content.startsWith(`${prefix}`)) {
        if (message.content==='-hello' || message.content==='-hi' || message.content==='-Hi' || message.content==='-Hello') {
        console.log('they r greeting me jon');
        message.channel.send("Hi @"+ message.author.username + ".. Good to see You!!")
        } else if (message.content==='-hi ghost' || message.content==='-Hi Ghost') {
            message.author.send('Hi '+ message.author.username + '.. I\'m Ghost, pet direwolf of Manish. Outside of Westeros, I\'m known as Discord Bot. Have you watched Game of Thrones? P.S.: Use \'-\' before answering!')
        } else if (message.content === '-no' || message.content==='-No') {
            message.author.send('Since, You havent watched GoT, so, i wont blabber about it much. I will just recommend you to watch it!')
        } else if(message.content==='-yes') {
            message.author.send('Since you have watched GoT... You know me well! & and my master as well!')
        } else {
            console.log('New commands arriving');
            message.reply('Since, I\'m still in development stage (I\'m evolving!) I wasnt able to understand you. Use proper syntax');
        }
    }
});







//official
/*
// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    console.log(message.content);
    if (message.content.startsWith(`${prefix}ping`)) {
	message.channel.send('Pong.');
} else if (message.content.startsWith(`${prefix}beep`)) {
	message.channel.send('Boop.');
} else if (message.content === `${prefix}server`) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
}
});


// login to Discord with your app's token
client.login('your-token-goes-here');

*/