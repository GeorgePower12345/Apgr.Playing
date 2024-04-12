const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('PLAYING')
        .setURL('https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .setState('Join my Discord Server')
        .setName('Apgr.')
        .setDetails('Check my SocialMedia & 24/7 Support Me')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1165731774580674562/1228423876128542752/standard.gif?ex=662bfde3&is=661988e3&hm=6cec102ace9142b536dbb04714d3e9d11cbfb9bd9cb7e9b083d29b16b3053d07&')
        
        .addButton('Discord (Click To Join)', 'https://discord.com/invite/s4PyrDDs6J')
        .addButton('Twitch (Follow Me)', 'https://www.twitch.tv/apgrgt');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);












