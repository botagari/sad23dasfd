const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'Memper'));
});
 
 
client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith('$rec')) {
        let modlog = client.channels.find('name', 'general');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`ضع رياكشن للتفعيل `).then(msg => {
       
       
        msg.react(':white_check_mark: ')
       .then(() => msg.react(':white_check_mark: '))
     
     
 
       let activeFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                       
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Nav"));
                                   message.member.removeRole(message.guild.roles.find("name", "Memper"));
                                   msg.delete();
                                   message.channel.send(`**تم تفعيل حسابك.**`).then(m => m.delete(1000));
     
                                   })
                                   })
                                   }
                                   });


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء