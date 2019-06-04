const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTgyNTY1MDY4MTg1Nzk2NjEw.XOw-Qg.yOk4LBgQOm3ILKZ63rcUCXgJqnE'

var PREFIX = '+';

bot.on('ready', () =>{
    console.log('this bot is online');
    bot.user.setActivity('+help' , { type: 'PLAYING'}).catch(console.error);

})

bot.on('message', message=>{

    
    var args = message.content.substring(PREFIX.length).split(" ");
    
    switch(args[0]){
        case 'user':
            if(args[1] === 'inf');
            const embed = new Discord.RichEmbed()
            .setTitle('**User information**')
            .setColor(0x46FF00)
            .setThumbnail(message.author.avatarURL)
            .addField('User Name',message.author.username)
            .addField('The user id','<' + message.author.id + '>')
            .addField('User tag' ,message.author.tag)
            .setTimestamp()
            message.channel.sendEmbed(embed);
            break;
        }
        

    if (message.content == "+yesno") {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
		var msg2 = Array(2);
		msg2[1] = "Yes!";
	    msg2[2] = "No!";
        var x = getRandomInt(0, 8);
		if (x < 4){
			message.channel.sendMessage(msg2[1]);
		}
		else{
			message.channel.sendMessage(msg2[2]);
		}
	}
   switch(args[0]){
        //ia kthen mesazhin+i bon pink atij qe e thirr
        case 'arjel':
            message.reply('sup pro!');
            break;
        case 'hi':
            message.reply('hi pro');
            break;
            // ia kthen mesazhin pa i bo ping atij qe e thirr
        case 'Arjel':
            message.channel.sendMessage('sup bro!');
            break;
        case 'ckm':
            message.channel.sendMessage('ckemi si jeni!');
            break;
        case 'noyes':
            message.channel.sendMessage('yes');
            break;
        case 'hello':
            message.channel.sendMessage('hey there :) how is ur day going?');
            break;
        case 'good':
            message.channel.sendMessage('im happy for you!!');
            break;
        case 'great':
            message.channel.sendMessage('im supa hapy for u...<3');
            break;
        case 'bad':
            message.channel.sendMessage('im so sorry..:(');
             break;
        case 'thanks':
            message.channel.sendMessage('Any time ');
            break;
        case 'emri':
            message.channel.sendMessage('kiara');
            break;
       case 'very ':
            if(args[1] === 'bad'){
            message.channel.sendMessage('im so sorry hearing that :(');
         }
            break;     
    }
    switch(args[0]){
        case 'what':
            if(args[1] === 'did'){
            if(args[2] === 'the')
            if(args[3] === 'legend')
            if(args[4] === 'sad?')
            message.channel.sendMessage('ᴡғ乡Led ==ne terment ra termet')
            }else{
                message.channel.sendMessage('Error')
            }
            break;

    }
    if (message.content == "pro") {
        message.channel.send("ragnar").then(async msg => {
            setTimeout(() => {
                    msg.edit('pro');}, 500);
                {
                    msg.edit('is');}
                {
                    msg.edit('so');}
                {
                    msg.edit('soooooooo');}
        });
}    
    switch(args[0]){
        case 'who':
            if(args[1] === 'is'){
            if(args[2] === 'mim')
            message.channel.sendMessage('ooo fuck off im not gona tell u everythink go and ask ur self .....lazyy ass')
            }else{
                message.channel.sendMessage('Error')
            }
            break;

    }
    
    switch(args[0]){
        case 'clear':
            if(!args[1]) return message.reply('Error please defin second arg');
            message.channel.bulkDelete(args[1])
            message.channel.send("**Succsefully cleaned " + args[1] + " messages**")
            .then(msg => msg.delete(5000))
             break;
    }
    
    switch(args[0]){
        case 'avatar' :
            message.channel.sendMessage(message.author.avatarURL);
            break;
          
    }
    switch(args[0]){
        case '':
            if(args[1] === 'inf');
            const embed = new Discord.RichEmbed()
            .setTitle('**User profile picture**')
            .setColor(0x46FF00)
            .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);
            break;
        }
       
       
    
})

bot.login(process.env.BOT_TOKEN); 
