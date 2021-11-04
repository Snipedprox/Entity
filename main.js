const Aoijs = require("aoi.js");
const Discord = require("discord.js");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/config/cloud.html');
});
app.listen(3000, () => console.log(`PROPER FUNCTIONING`));

const bot = new Aoijs.Bot({

  token: process.env.TOKEN,
  prefix: ['$getservervar[prefix]', '<@$clientID>', '<@!$clientID>'],
  mobile: false,
connectedBots: false,
suppressAll: true,
errorMessage: "",
sharding: false,
fetchInvites: true,
applicationCache: true

})
bot.variables(require('./config/Variables.js'))


bot.status(require('./config/Status.js'))


const disbut = require('discord-buttons')
disbut(bot.client)
//Allows to execute Command


const fetch = require('node-fetch');


  
bot.loadCommands(`./Cmds/`)



bot.onMessage({
  guildOnly: true,

  respondToBots: false// commands will work in dms. set "true" for commands to work in guilds 
});





bot.botJoinCommand({
channel: "$randomChannelID",
code: `$author[Entity;$userAvatar[$clientid]]
$thumbnail[$replaceText[$servericon;null;$userAvatar]]
$color[BLUE]
$description[<:entity:905168339138142258> **Entitity** <:entity:905168339138142258>
Entity is a discord economy + moderation discord bot
Entity offers 
<:badge3:903014250493116428> Badge system

<:banknote:901866414158250055> Promocodes :eyes:

<:looott:901640510458974238> Lottery system 

<:kick:904339194044874782> Moderation

<:levels:904340614030716988> Economy

my prefix is \`$\` i was created by \`Aly#1134\` if u found an error run the command $bugreport to report a serious bug
]`})


bot.command({
name: "firstmessage",
aliases: ["fm"],
code: `
$author[$userTag[$getMessage[$get[ch];$get[msgID];userID]];$userAvatar[$getMessage[$get[ch];$get[msgID];userID]]]
$description[
$getMessage[$get[ch];$get[msgID];content]
[Jump To The First Message]($get[link])]
$addtimestamp[$get[timestamp]]
$let[timestamp;$djsEval[d.client.channels.cache.get('$get[ch]').messages.cache.get('$get[msgID]').createdTimestamp;yes]
$color[RANDOM]
$footer[In $channelName[$get[ch]]]
$let[link;https://discord.com/channels/$guildID/$get[ch]/$get[msgID]]
$let[msgID;$firstMessageID[$get[ch]]]
$let[ch;$findChannel[$message[1]];yes]]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
});


bot.command({
 name: "lb",
 aliases: ['leaderboard','lboard','leaderb'],
 code:`
 $if[$message==cash]
 $description[$globalUserLeaderboard[cash;asc;{top} - {username} - {value} $getServerVar[simbol]]]
 $title[This is the wallet lb]
 $color[RANDOM]
 $else
 $if[$message==wallet]
 $description[$globalUserLeaderboard[cash;asc;{top} - {username} - {value} $getServerVar[simbol]]]
 $title[This is the wallet lb]
 $color[RANDOM]
 $else
 $if[$message==money]
 $description[$globalUserLeaderboard[cash;asc;{top} - {username} - {value} $getServerVar[simbol]]]
 $title[This is the wallet lb]
 $color[RANDOM]
 $else
 $if[$message==ecash]
 $description[$globalUserLeaderboard[ecash;asc;{top} - {username} - {value} $getServerVar[esimbol]]]
 $title[This is the ecash lb]
 $color[RANDOM]
 $else
 **Uhm invalid sintax you can only choose from**: \`cash\`,\`wallet\`,\`money\`,\`ecash\`
 $endif
 $endif
 $endif
 $endif`
})

  
bot.command({
  name: "stats",
  cooldown: "3s",
  code: `$color[$getVar[color]]
$addField[Size Database;> $cropText[$fileSize[$getVar[database];kb];5]KB;yes]
$addField[Size Server;> $cropText[$numberSeparator[$multi[$get[sizeserver];8];.];5]KB;yes]
$addField[Size Code;> $cropText[$fileSize[$getVar[file];kb];5]KB;yes]
$addField[Command;> $numberSeparator[$commandsCount];yes]
$addField[Server;> $numberSeparator[$serverCount];yes]
$addField[Members;> $numberSeparator[$allMembersCount];yes]
$addField[RAM Left;> $cropText[$divide[$sub[$maxRam;$ram];1024];4]GB;yes]
$addField[RAM;> $cropText[$divide[$ram;1024];4]GB;yes]
$addField[CPU;> $cropText[$cpu;4]%;yes]
$addField[Is Deafen/Mute;> $replaceText[$isDeafened[$clientID];null;false]-$isSelfDeafened[$clientID] / $replaceText[$isMuted[$clientID];null;false]-$isSelfMuted[$clientID];yes]
$addField[Is Playing;> $checkCondition[$queueLength!=0];yes]
$addField[Is Connect;> $checkCondition[$voiceID[$clientID]!=];yes]
$addField[API Ping;> $numberSeparator[$botPing]ms;yes]
$addField[DB Ping;> $numberSeparator[$dbPing]ms;yes]
$addField[WS Ping;> $numberSeparator[$ping]ms;yes]
$addField[Platform;> $djsEval[require ('os').platform();yes];yes]
$addField[Last Online;> <t:$cropText[$getVar[last];10]:R>;yes]
$addField[Uptime;> $client[readytimestamp];yes]
$footer[Ver. $packageVersion ($nodeVersion);$userAvatar[$authorID;512]]
$thumbnail[$userAvatar[$clientID]]
$addTimestamp
$let[sizeserver;$charCount[$serverNames[]]]
$cacheMembers
$setGlobalUserVar[commanduserused;$sum[$getGlobalUserVar[commanduserused];1]]
$cooldown[$commandInfo[stats;cooldown];Please wait **%time%** before using again.]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
});

bot.command({
  name: "ping",
  cooldown: "3s",
  code: `$title[$userTag[$client ID;https://lllll.com]
$color[CYAN]
$addTimeStamp
$description[
\`\`\`
Websocket Ping   : $numberSeparator[$ping]ms
API       Ping   : $numberSeparator[$botPing]ms
Database  Ping   : $numberSeparator[$dbPing]ms
Message   Ping   : $executionTimems
Shard     Ping   : $numberSeparator[$sub[$dateStamp;$get[stamp]]]ms $wait[$dbping] $let[stamp;$dateStamp]
Average   Ping   : $numberSeparator[$truncate[$divide[$sum[$ping;$botPing;$dbPing];3]]]ms
\`\`\`\] 
$setGlobalUserVar[commanduserused;$sum[$getGlobalUserVar[commanduserused];1]]
$cooldown[$commandInfo[ping;cooldown];Please wait **%time%** before using again.]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
});

bot.command({
 name: "$alwaysExecute",
 code: `
$channelSendMessage[$getGlobalUserVar[channel;$getGlobalUserVar[user]];<:ann:903452719895969823> **$userTag[$authorid]**: $message]

$onlyIf[$getGlobalUserVar[chat]==true;]

`
 })

bot.command({
 name: "joincall",
 code: `
$if[$getVar[match]==]
$sendMessage[Join matchmaking please wait till someone else connects...;no]
$setVar[match;$authorID]
$setGlobalUserVar[channel;$channelID]
$else
$sendMessage[Match!;no]
$sendMessage[Join matchmaking please wait till someone else connects...;no]
$setVar[match;]
$channelSendMessage[$getGlobalUserVar[channel;$getVar[match]];Match!]
$setGlobalUserVar[chat;true;$getVar[match]]
$setGlobalUserVar[chat;true]
$setGlobalUserVar[user;$authorID;$getVar[match]]
$setGlobalUserVar[user;$getVar[match]]
$setGlobalUserVar[channel;$channelID]
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`})

bot.command({
 name: "leavecall",
 code: `
$setGlobalUserVar[user;] 
$setGlobalUserVar[chat;false;$getGlobalUserVar[user]]
$setGlobalUserVar[chat;false]
$setGlobalUserVar[user;;$getGlobalUserVar[user]]
$setGlobalUserVar[channel;$getGlobalUserVar[user]]
$setGlobalUserVar[channel;]
$sendMessage[Call Ended!;no]
$channelSendMessage[$getGlobalUserVar[channel;$getGlobalUserVar[user]];Call Ended!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`})

bot.command({
  name: "uptime",
  cooldown: "3s",
  code: `\`\`\`
ive been on for $uptime
\`\`\`
$setGlobalUserVar[commanduserused;$sum[$getGlobalUserVar[commanduserused];1]]
$cooldown[$commandInfo[uptime;cooldown];Please wait **%time%** before using again.]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
});

bot.command({
name:"bgstart",
code:`$editmessage[$get[e];{author:🎉 GIVEAWAY (ENDED) 🎉:}{thumbnail:https://media.discordapp.net/attachments/896847103647694862/900376604935606292/ffff.gif?width=147&height=147}{title:$get[prize]}{description:**Hosted By#COLON#** <@$authorid>\n**Winner:** <@$get[winner]>\n**Ended** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[Congratulations <@$get[winner]>! You won **$get[prize]**;no]
$onlyif[$getmessagevar[ended]==false;]
$onlyif[$get[winner]!=;No winner decided due to lack of participation]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$wait[$get[time]]
$setmessagevar[endstamp;$get[endstamp];$get[e]]
$setmessagevar[hoster;$authorid;$get[e]]
$setmessagevar[prize;$get[prize];$get[e]]
$let[e;$apimessage[$channelid;;{author:🎉 GIVEAWAY 🎉:}{thumbnail:https://media.discordapp.net/attachments/896847103647694862/900376604935606292/ffff.gif?width=147&height=147}{title:$get[prize]}{description:**Hosted By#COLON#** <@$authorid>\n**Nº Winners:** 1\n**Ends** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**No one** has joined this giveaway}{footer:Ends at:}{timestamp:$get[endstamp]}{color:BLUE};{actionRow:🎊 Join 🎊,2,3,join:🔁 Reroll 🔁,2,1,reroll:🔚 End 🔚,2,4,end};;yes]]
$let[endstamp;$sum[$datestamp;$ms[$get[time]]]]
$let[prize;$messageslice[1]]
$onlyif[$ms[$get[time]]!=undefined;Invalid time provided]
$let[time;$message[1]]
$onlyif[$message[2]!=;Enter a time and a prize]
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**⛔ You need \`premium\` to use this command**]`
})
bot.interactionCommand({
name:"join",
prototype:"button",
code:` $editmessage[$get[msg];{author:🎉 GIVEAWAY 🎉:}{thumbnail:https://media.discordapp.net/attachments/896847103647694862/900376604935606292/ffff.gif?width=147&height=147}{title:$get[prize]}{description:**Hosted By#COLON#** <@$get[host]>\n**Nº Winners:** 1\n**Ends** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users have participated in this giveaway.}{footer:Ends at:}{timestamp:$get[endstamp]}{color:BLUE}]
$setmessagevar[joinedusers;$getmessagevar[joinedusers;$get[msg]]$authorid@;$get[msg]]
$setmessagevar[joined;$get[participated];$get[msg]]
$onlyif[$get[condition]==false;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];false;Joined the giveaway];true;You have already joined the giveaway];ended;The giveaway ended];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;ended];false;$get[condition]]]
$let[condition;$checkcontains[$getmessagevar[joinedusers;$interactiondata[message.id]];$authorid]]
$let[participated;$sum[$getmessagevar[joined;$get[msg]];1];$get[msg]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`})
bot.interactionCommand({
name:"reroll",
prototype:"button",
code:`$editmessage[$get[e];{author:🎉 GIVEAWAY (REROLLED) 🎉:}{thumbnail:https://media.discordapp.net/attachments/896847103647694862/900376604935606292/ffff.gif?width=147&height=147}{title:$get[prize]}{description:**Hosted By#COLON#** <@$authorid>\n**Winner After Reroll:** <@$get[winner]>\n**Ended** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[Congratulations <@$get[winner]>! You won the reroll of **$get[prize]**;no]
$onlyif[$get[winner]!=;No winner decided due to lack of participation]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]
$onlyif[$get[condition]==perform;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Rerolled the giveaway];true;This giveaway has not ended yet];false;You do not have enough perms];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;$replacetext[$replacetext[$get[condition];true;perform];false;false]];false;$get[condition]]]
$let[condition;$hasperms[$authorid;manageserver]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`})
bot.interactionCommand({
name:"end",
prototype:"button",
code:`$editmessage[$get[e];{author:🎉 GIVEAWAY (FORCE ENDED) 🎉:}{thumbnail:https://media.discordapp.net/attachments/896847103647694862/900376604935606292/ffff.gif?width=147&height=147}{title:$get[prize]}{description:**Hosted By#COLON#** <@$authorid>\n**Winner After Force End:** <@$get[winner]>\n**Ended** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[Congratulations <@$get[winner]>! You won the giveaway(force ended) of **$get[prize]**;no]
$onlyif[$get[winner]!=;No winner decided due to lack of participation]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]
$onlyif[$get[condition]==perform;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Ended the giveaway];true;This giveaway has already ended];false;You do not have enough perms];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];false;$replacetext[$replacetext[$get[condition];true;perform];false;false]];true;$get[condition]]]
$let[condition;$hasperms[$authorid;manageserver]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`})

bot.timeoutCommand({
 code: `
 $sendDM[$timeoutData[userID];Your mythical gem expired!]
 $setGlobalUserVar[gem2on;off;$timeoutData[userID]]`
})




bot.timeoutCommand({
 code: `
 $sendDM[$timeoutData[userID];Your Silver gem expired!]
 $setGlobalUserVar[gem1on;off;$timeoutData[userID]]`
})

bot.timeoutCommand({
 code: `
 $sendDM[$timeoutData[userID];Your laser boost has just run out!]
 $setGlobalUserVar[lasere;false;$timeoutData[userID]]`
})

bot.timeoutCommand({
 code: `
 $sendDM[$timeoutData[userID];Your premium has just run out!]
 $setGlobalUserVar[premium;false;$timeoutData[userID]]`
})








bot.command({
name: "ccadd",
code: `
$setservervar[ccmd;$replacetext[$replacetext[$checkcondition[$getservervar[ccmd]!=];false;$tolowercase[$message[1]]/];true;$getservervar[ccmd]$tolowercase[$message[1]]/]]
$setservervar[cdes;$getservervar[cdes]$messageslice[1;10]/]
Successfully added $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<] to the commands list, type \`$getservervar[prefix]cclist\` to see all available commands
$onlyif[$findtextsplitindex[$tolowercase[$message[1]]]==0;{description:Command \`$tolowercase[$message[1]]\` is available in the command list}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:ff2050}]
$argscheck[>2;{description:Correct use \n\`\`\`\n$getservervar[prefix]ccadd <trigger> <response>\n\`\`\`}{color:ff2050}]
$onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:ff2050}{timestamp}]
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**⛔ You need \`premium\` to use this command**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
})


bot.command({
name: "ccdel",
code: `
$setservervar[ccmd;$replacetext[$getservervar[ccmd];$advancedtextsplit[$getservervar[ccmd];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
$setservervar[cdes;$replacetext[$getservervar[cdes];$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
Successfully cleared command $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;{description:Command \`$tolowercase[$message]\` not available in the command list}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:ff2050}]
$argscheck[>1;{description:Correct use \n\`\`\`\n$getservervar[prefix]ccdel <trigger>\n\`\`\`}{color:ff2050}]
$onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:ff2050}{timestamp}]
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**⛔ You need \`premium\` to use this command**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
}) 

bot.command({
name: "cclist",
code: `
$title[**__Custom Commands__**]
$color[RANDOM]
$thumbnail[https://images-ext-2.discordapp.net/external/swRdKls7P6ywC1LugeV80TdPKLPFPKI_9XRttmdAjRU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/899810192621961216/385798d1182bf64e110229bc560c3d75.webp?width=421&height=421]
$description[\`$replacetext[$replacetext[$replacetext[$getservervar[ccmd];#right_click#;>];#left_click#;<];/;, ]\`]
$addtimestamp
$onlyif[$gettextsplitlength>=2;{description:There are no custom commands on the server \`$servername\`}{color:ff2050}]
$textsplit[$getservervar[ccmd];/] 
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**⛔ You need \`premium\` to use this command**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
}) 

bot.command({
name: "$alwaysExecute",
code: `
$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;]
$onlyif[$isbot[$authorid]==false;]
$textsplit[$getservervar[ccmd];/] 
`
})

bot.reactionAddCommand({
channel:"$channelid",
code:`$if[$suppresserrors$getmessagevar[smid]$suppresserrors==]
$setmessagevar[smid;$splittext[1]]
$textsplit[$channelsendmessage[$getservervar[schannel];**⭐ $reactioncount[$channelid;$messageid;⭐]** | <#$channelid> | Originally Posted By <@$get[a]>{author:$usertag[$get[a]]}{description:$getmessage[$channelid;$messageid;content]}{field:Original Message:[Jump To Message!](https://discord.com/channels/$guildid/$channelid/$messageid):no}{image:$replacetext[$replacetext[$isvalidlink[$messageattachment];true;$messageattachment];false;]}{color:YELLOW}{footer:Starred At $day-$month-$year | StarBoard System Of $username[$clientid]};yes]; ]
$let[a;$getmessagevar[author;$messageid]]
$suppresserrors
$else
$editmessage[$getmessagevar[smid];**⭐ $reactioncount[$channelid;$messageid;⭐]** | <#$channelid> | Originally Posted By <@$get[a]>{author:$usertag[$get[a]]}{description:$getmessage[$channelid;$messageid;content]}{field:Original Message:[Jump To Message!](https://discord.com/channels/$guildid/$channelid/$messageid):no}{image:$replacetext[$replacetext[$isvalidlink[$messageattachment];true;$messageattachment];false;]}{color:YELLOW}{footer:$getembed[$getservervar[schannel];$getmessagevar[smid];footer]};$getservervar[schannel]]
$let[a;$getmessagevar[author]]
$endif
$onlyif[$suppresserrors$reactioncount[$channelid;$messageid;⭐]$suppresserrors>=$getservervar[sreq];]
$onlyif[$emojitostring==⭐;]
$onlyif[$serverchannelexists[$getservervar[schannel]]==true;]
$onlyif[$getservervar[sreq]!=0;]`})
bot.reactionRemoveCommand({
channel:"$channelid",
code:`$if[$suppresserrors$reactioncount[$channelid;$messageid;⭐]$suppresserrors!=0]
$editmessage[$getmessagevar[smid];**⭐ $reactioncount[$channelid;$messageid;⭐]** | <#$channelid> | Originally Posted By <@$get[a]>{author:$usertag[$get[a]]}{description:$getmessage[$channelid;$messageid;content]}{field:Original Message:[Jump To Message!](https://discord.com/channels/$guildid/$channelid/$messageid):no}{image:$replacetext[$replacetext[$isvalidlink[$messageattachment];true;$messageattachment];false;]}{color:YELLOW}{footer:$getembed[$getservervar[schannel];$getmessagevar[smid];footer]};$getservervar[schannel]]
$let[a;$getmessagevar[author]]
$suppresserrors
$onlyif[$suppresserrors$reactioncount[$channelid;$messageid;⭐]$suppresserrors>=$getservervar[sreq];]
$else
$deletemessage[$getservervar[schannel];$getmessagevar[smid]]
$suppresserrors
$endif
$onlyif[$suppresserrors$messageexists[$getservervar[schannel];$getmessagevar[smid]]$suppresserrors==true;]
$onlyif[$replacetext[$emojitostring;⭐;]==;]
$onlyif[$channelexists[$getservervar[schannel]]==true;]
$onlyif[$getservervar[sreq]!=0;]`})

bot.command({
name: "blacklist", 
code: `$setGlobalUserVar[Blacklist;true;$findUser[$message]]
$senddm[$findUser[$message];**$username[$findUser[$message]]#$discriminator[$findUser[$message]] you are blacklisted now**]
$userTag[$findUser[$message]] has been blacklisted!!
$onlyIf[$findUser[$message]==$authorid;nu]
$onlyForIDs[$botownerid;896846485805744168;**⛔ Only the owner can use this command**]`
})
 
bot.command({
name: "unblacklist", 
code: `$setGlobalUserVar[Blacklist;false;$findUser[$message]]
**$username[$findUser[$message]]#$discriminator[$findUser[$message]] ✅ You are no longer on the blacklist**

$onlyForIDs[$botownerid;896846485805744168;**⛔ You are not the owner**]`
})

bot.deletedCommand({
 channel: "$channelID",
 code: `$setChannelVar[snipe_msg;$message]
 $setChannelVar[snipe_author;$authorID]
 $setChannelVar[snipe_channel;$channelID]
 $setChannelVar[snipe_date;$day $month $year - $hour:$minute]`
});

 
bot.command({
name: "snipe",
code: `$color[RANDOM]
$author[$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]
$description[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]]
$footer[#$channelName[$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]] | $getChannelVar[snipe_date;$mentionedChannels[1;yes]]]
$onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=;Theres nothing to snipe in <#$mentionedChannels[1;yes]>]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
})


bot.command({
name: "setavatar",
code: `
**Changed my avatar to**
$image[$messsage]
$setBotAvatar[$message]
$onlyForIDS[$botownerid;896846485805744168;]`})

bot.command({
name: "setname",
code:` **Changed my name to** \`$message\`
$setBotName[$message]
$onlyForIDS[$botownerid;896846485805744168;]`})


bot.onReactionAdd()
 bot.onReactionRemove()
 bot.onLeave()
 bot.onJoined()
 bot.onGuildJoin()
 bot.onGuildLeave()
 bot.onBanAdd()
 bot.onTypingStart()
 bot.onRateLimit()
 bot.onInviteCreate()
 bot.onChannelDelete()
 bot.onChannelUpdate()
 bot.onChannelCreate()
 bot.onInviteDelete()
 bot.onVoiceStateUpdate()
 bot.onRoleUpdate()
 bot.onMemberUpdate()
 bot.onRoleDelete()
 bot.onRoleCreate()
 bot.onBanRemove()
 bot.onMessageUpdate()
 bot.onPresenceUpdate()
 bot.onUserUpdate()
 bot.onMessageDelete()
 bot.onInteractionCreate()
 bot.onGuildUpdate()
 bot.onEmojiCreate()
 bot.onEmojiUpdate()
 bot.onEmojiDelete()
 bot.onMessageDeleteBulk()
 bot.onWebhookUpdate()
 bot.onChannelPinsUpdate()
 bot.onFunctionError()
 bot.onVariableCreate()
 bot.onVariableUpdate()
 bot.onVariableDelete()
 bot.onApplicationCmdCreate()
 bot.onApplicationCmdUpdate()
 bot.onApplicationCmdDelete()

bot.command({
name: "circle",
code: `
$image[https://frenchnoodles.xyz/api/endpoints/circle/?image=$userAvatar[$mentioned[1;yes]]]`
})

bot.command({
name: "rt",
code: `
$replaceText[$message[1];$message[2];$message[3]
$onlyForIDS[$botownerid;896846485805744168;]
`
})

bot.command({
name: "help",
aliases: ['halp','hepp','hepl','hellp','hell','hapl','hilp'],
  code: `$reactionCollector[$splitText[1];everyone;15h;⬅️,➡️,🏠;awaitReaction1,awaitReaction2,awaitReaction3;yes]
  $textSplit[$sendMessage[
{title:$usertag[$clientid] command list}
{thumbnail:$userAvatar[$clientid]}
{color:GREEN}
{footer:Bot Commands}
{description:
**Prefix for this server is:** \`$getservervar[prefix]\`
**Total commands:** \`$commandscount\`
\`\`\`diff
- [] = optional argument
- <> = required argument
\`\`\`
[Support](https://discord.gg/RX678VqQVX) | [Github](https://github.com/Snipedprox/Axxa-bot) | [Invite](https://discord.com/api/oauth2/authorize?client_id=899810192621961216&permissions=8&scope=bot%20applications.commands) | [vote](https://top.gg/bot/899810192621961216)
**Categories**
\`\`\`yaml
Left, Right, Home\`\`\`};yes]; ]
$setMessageVar[messageid;$messageID]
  `
})

  bot.awaitedCommand({
    name: "awaitReaction1",
    code: `$editMessage[$message[1];
{author:Page 1:$userAvatar[$clientid]} 
{footer:Commands with the symbol ✨ are only for premium users}{thumbnail:$userAvatar[$clientid]} {description:
$customemoji[bcash;902955744440254464] **Economy usage**
\`buy\` \`daily\` \`farm\` \`pay\` \`bal\` \`shop\` \`use\` \`weekly\` \`inventory\` \`claims\` \`work\` \`lottery\` \`mine\` \`flex\` \`crime\` \`rob\` \`bevip\` \`✨vip\` \`✨vhourly\` \`✨vwork\` \`profile\` \`pray\` \`titles\` \`promocode\` \`lb\` \`beg\` \`withdraw\` \`deposit\`

<a:confettie:905588254772977694> **Giveaway usage**
\`✨bgstart\` \`giveaway\` \`giveaway start\` \`giveaway end\` \`giveawat reroll\`

<:utils:905616124119486544> **Utility usage**
\`invite\` \`avatar\` \`ping\` \`uptime\` \`stats\` \`help\` \`prefix\` \`firstmessage\` \`chatbot\` \`ascii\` \`year\` \`8ball\` \`meme\` \`image\` \`joincall\` \`leavecall\` \`addemoji\` \`imoji\` \`deleteemoji\` \`emojiinfo\` \`✨snipe\` \`✨cclist\` \`✨ccadd\` \`✨ccdel\` \`✨afkroles\` \`✨afk\` \`✨calculate\` \`✨remind\` \`✨ starboard\` \`✨setsymbol\`}
]
   `})

   bot.awaitedCommand({
    name: "awaitReaction2",
    code: `
    $editMessage[$message[1];
{author:Page 2:$userAvatar[$clientid]} 
{footer:Commands with the symbol 🌿 are only for my devs} {thumbnail:$userAvatar[$clientid]} {description:

<:mod:905621034592518185> **Moderation usage**
\`mute\` \`ban\` \`lock\` \`botlogs\` \`nick\` \`checkwarns\` \`clearwarn\` \`nuke\` \`purge\` \`kick\` \`setmute\` \`mutesettings\` \`unban\` \`unlockv\` \`setverifyrole\` \`userinfo\` \`verify\` \`viewlock\` \`viewunlock\` \`role\` \`slowmode\` \`tempban\` \`tempmute\`

<a:beat:905615766622183434> **Music usage**
\`play\` \`volume\` \`pause\` \`loop\` \`resume\` \`stop\` \`nowplaying\` \`queue\` \`skip\` \`lyrics\` \`skipto\` \`join\` \`loopqueue\`

<a:levelup:899245630243893269> **Levelling usage**
\`lmsg\` \`lrole\` \`rank\` \`levelling\` \`card\`

<a:micro:905625800831819796> **Soundboard usage**
\`pingme\` \`hello\` \`rickroll\` \`trapcall\` \`call\` \`amogus\` \`sus\` \`dripsus\` \`bababoey\`

<:bluecircle:905619911429218367> **Developer usage**
\`🌿dmwon\` \`🌿eval\` \`🌿djs\` \`🌿promo\` \`🌿cpromo\` \`🌿calculator\` \`🌿uc\` \`🌿test\` \`🌿award\` \`🌿blacklist\` \`🌿unblacklist\` \`🌿setavatar\` \`🌿setname\`}]
    `
   })


   bot.awaitedCommand({
    name: "awaitReaction3",
    code: `
    {title:$usertag[$clientid] command list}
{thumbnail:$userAvatar[$clientid]}
{color:GREEN}
{footer:Bot Commands}
{description:
**Prefix for this server is:** \`$getservervar[prefix]\`
**Total commands:** \`$commandscount\`
\`\`\`diff
- [] = optional argument
- <> = required argument
\`\`\`
[Support](https://discord.gg/RX678VqQVX) | [Github](https://github.com/Snipedprox/Axxa-bot) | [Invite](https://discord.com/api/oauth2/authorize?client_id=899810192621961216&permissions=8&scope=bot%20applications.commands) | [vote](https://top.gg/bot/899810192621961216)
**Categories**
\`\`\`yaml
Left, Right, Home\`\`\`}]
    `
   })






/* soundboard */

bot.command({
name: "trapcall",
code: `
**Only elites shall answer :eyes:** 
$playSong[https://youtu.be/Na6r5_XPOtk;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`})

bot.command({
name: "amogus",
code: `
**Sussy baaka** 
$playSong[https://youtu.be/zhdNANsw0Jo;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`})



bot.command({
name: "sus",
code: `
**Sus ngl** 
$playSong[https://youtu.be/neeBnp9JpCE;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`})


bot.command({
name: "dripsus",
code: `
**drip sus** 
$playSong[https://youtu.be/grd-K33tOSM;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`})




bot.command({
name: "bababoey",
code: `
**Bababoey** 
$playSong[https://youtu.be/ia3Tc9FTgk0;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`})


bot.command({
  name: "deposit",
  aliases: "dep",
  code: `$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank;$authorID];$message];$authorID]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$authorID];$message];$authorID]
$title[Deposited]
$thumbnail[$replaceText[$replaceText[$userAvatar[$findMember[$message]];null;$serverIcon];$servericon;null;$userAvatar[$clientid]]]
$color[RANDOM]
$description[
$username, you deposited \`$numberSeparator[$message;,]\` $getservervar[simbol] into your bank!]
$footer[💵 $$numberSeparator[$sub[$getGlobalUserVar[cash;$authorID];$message]] | 🏦 $$numberSeparator[$sum[$getGlobalUserVar[bank;$authorID];$message]] | 📊 $$numberSeparator[$sum[$getGlobalUserVar[cash;$authorID];$getGlobalUserVar[bank;$authorID]]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[cash;$authorID];Cannot deposit more than what's in your wallet!]
$argsCheck[>1;How much are you depositing? Try this: \`$getServerVar[prefix]dep <amount>\`]
$onlyIf[$getGlobalUserVar[cash;$authorID]>0;There's nothing to deposit!]`
});

bot.command({
  name: "withdraw",
  aliases: "with",
  code: `$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];$message];$authorID]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank;$authorID];$message];$authorID]
$title[Withdrew money]
$thumbnail[$replaceText[$replaceText[$userAvatar[$findMember[$message]];null;$serverIcon];$servericon;null;$userAvatar[$clientid]]]
$color[RANDOM]
$description[
$username, you withdrew \`$numberSeparator[$message;,]\`$getservervar[simbol] from your bank!]
$footer[💵 $$numberSeparator[$sum[$getGlobalUserVar[cash;$authorID];$message]] | 🏦 $$numberSeparator[$sub[$getGlobalUserVar[bank;$authorID];$message]] | 📊 $$numberSeparator[$sum[$getGlobalUserVar[cash;$authorID];$getGlobalUserVar[bank;$authorID]]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[bank;$authorID];Cannot withdraw more than what's in your bank!]
$argsCheck[>1;How much are you withdrawing?]
$onlyIf[$getGlobalUserVar[bank;$authorID]>0;There's nothing to withdraw!]`
})


bot.command({
name: "setsymbol",
aliases: ['set-symbol','symvol','set symbol'],
code: `
**Successfully set $message as new money symbol**
$setServerVar[esimbol;$message]
$setServerVar[simbol;$message]
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**You need** \`premium\` **for this command**]
`
})
