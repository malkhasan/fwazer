const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");

var prefix = "-";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`فوازير رمضان 🌙 II -فوازير`,"https://www.twitch.tv/ahmad107996")
client.user.setStatus("dnd")
});

client.on("message", message => {
  if(message.content.startsWith("-فوازير")) {
if(!message.channel.guild) return;
      if(message.author.bot) return;
let channel = message.guild.channels.find("name", "فوازير-رمضان🌙")
  if(!channel) return message.reply("**لقد انتهي وقت الاجابة**")
  message.channel.send( message.member + ', **:timer:**').then( (m) =>{
    m.edit( message.member + ', **اسمك**' )
    m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
        m1 = m1.first();
        var name = m1.content;
          m1.delete();
        m.edit(message.member + ', **:timer:**').then( (m) =>{
            m.edit( message.member + ', **الاجابة**' )
            m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
            m2=m2.first()
            age=m2.content
             m2.delete()
          m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
              
                let embed = new Discord.RichEmbed()
              .setColor('RANDOM')
              .setTitle(`**فوازير-رمضان🌙** [__**${message.guild.name}**__]`)
              .addField('**`الاسم`**', `${name}` , true)    
              .addField('**`االاجابة`**', `${age}` , true)                   
              .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
              channel.send(embed)
              
          })  
          })
      })})})}});

        client.on('message', message=>{
            if(message.content.startsWith("-room1")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("فوازير-رمضان🌙", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تم انشاء روم فوازير رمضان بنجاح**")
            }
          })
       
//////////////////////
//////////////////////


client.on('message',function(message) {
	let prefix = "-";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`** #${args}**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});   

///////////////////
//////////////////

///////////////////
//////////////////
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
