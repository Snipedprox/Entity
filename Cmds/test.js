module.exports = [{
    name: "test",
    code: `
$setUserVar[testid1;$splitText[1]]
$reactionCollector[$splitText[1];$authorID;10s;📤;output;yes;failed]
$textSplit[$sendMessage[react with 📤 for an output;yes]; ]
`,
}, {
    type: "awaitedCommand",
    name: "output",
    code: `
$editMessage[$getUserVar[testid1];troll]
`,
}, {
    name: "test2",
    code: `
$description[Hello\n\nHi]
`,
}, {
    name: "test3",
    code: `
$description[[hi](https://discordapp.com/oauth2/authorize?client_id=$message[1]&scope=bot&permissions=0)]
`,
}, {
    name: "test4",
    code: `
hi
$wait[5s]
hello
`,
}, {
    name: "test5",
    code: `
$awaitMessages[$authorID;1m;everything;test5;no u]
$findMembers[$message;10;{position} {username}]
$setUserVar[userav;$findMembers[$message;10;{id}]]
`,
}, {
    type: "awaitedCommand",
    name: "test5",
    code: `
$image[attachment://cutie-pie.jpg]
$attachment[$userAvatar[$splitText[$message[1]]?size=2048]]
$textSplit[$getUserVar[userav];\n]
$suppressErrors[owo]
`
}, {
    name: "test6",
    code: `
$let[q;$apiMessage[fowwow the button or suffew gweat consequences;;{actionRow:UWU DONT CWICK THIS BUTTON,2,4,UWU,};;yes]]
$onlyIf[3==2;no]
`
}, {
    type: "interactionCommand",
    prototype: "button",
    name: "UWU",
    code: `
$interactionEdit[$randomText[YOU... SHALL... PAY...;I'll just leave you here...;I'll just leave you here...;I'll just leave you here...]]
$wait[3s]
$interactionEdit[...]
$wait[4s]
$interactionEdit[Did I...?]
$wait[3s]
$interactionEdit[...]
$wait[4s]
$interactionReply[D-Didn't I towd you to not cwick the button...?;;;64;4]
`,
}, {
    name: "test7",
    code: `
$if[$toLowercase[$message[1]]==b]
$djsEval[const { MessageButton } = require('discord-buttons')
let button = new MessageButton()
    .setLabel('daddy @#& wont give me a pat :<')
    .setStyle('red')
    .setEmoji('852806730240491560')
    .setID('rawr')
message.channel.send('pat me pwease', button)]
$else
$djsEval[const { MessageButton } = require('discord-buttons')
let button = new MessageButton()
    .setLabel('uwu test rawr!')
    .setStyle('green')
    .setID('rawr')
message.channel.send('this is a test uwu', button)]
$endIf
`,
}, {
    type: "interactionCommand",
    prototype: "button",
    name: "rawr",
    code: `
$if[$randomText[true;true;true;true;true;true;true;true;false;false;false]==true]
$interactionReply[test [compwete](https://uwu.com), wetuwning to HQ;;;64]
$else
$interactionReply[wanna test it again? :3;;{actionRow:uwu,2,3,uwu,};64]
$endIf
`,
}, {
    type: "interactionCommand",
    prototype: "button",
    name: "uwu",
    code: `
$interactionReply[progen;;;64]
`,
}, {
    name: "test8",
    code: `
$djsEval[const canvacord = require("canvacord");
const Discord = require('discord.js')
const rank = new canvacord.Rank()
    .setAvatar("$replaceText[$replaceText[$userAvatar[$mentioned[1;no]];webp;png];gif;png]")
    .setCurrentXP(0)
    .setRequiredXP(250)
    .setStatus("$status")
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername("$username")
    .setRank(0)
    .setDiscriminator("$discriminator");
rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send(attachment);
    });
]
`,
}, {
    name: "test9",
    code: `
$usersInChannel[$voiceID;id;-]
$suppressErrors[no]
`,
}, {
    name: "test10",
    code: `
da emote id: \`$advancedTextSplit[$message[1];:;3;>;1]\`
da guild: \`$replaceTextWithRegex[$djsEval[client.emojis.cache.find(x=>x.id === "$advancedTextSplit[$message[1];:;3;>;1]").guild.name;yes];undefined;g;Undefined]\`
$image[https://cdn.discordapp.com/emojis/$advancedTextSplit[$message[1];:;3;>;1]$replaceText[$replaceText[$advancedTextSplit[$message[1];:;1];<a;.gif];<;.png]]
$suppressErrors
`,
}, {
    name: "test11",
    code: `
da emote id: \`$advancedTextSplit[$splittext[1];:;3;>;1]\`
da guild: \`$djsEval[client.emojis.cache.find(x => x.id === "$advancedTextSplit[$splitText[1];:;3;>;1]").guild.name;yes]\`
$image[https://cdn.discordapp.com/emojis/$advancedtextsplit[$splittext[1];:;3;>;1].$replaceText[$replaceText[$stringstartswith[$splittext[1];<a];true;gif];false;png]?size=4096;$advancedtextsplit[$splittext[1];:;2].$replaceText[$replaceText[$stringstartswith[$splittext[1];<a];true;gif];false;png]]
$onlyIf[$splitText[1]!=;Try again :>>>>>>>]
$textsplit[$randomemoji[$randomguildid]]
`,
}, {
    name: "test12",
    code: `
$awaitButtons[$get[id];$authorID;yes,no;test12,test12b;]
$let[id;$apiMessage[$channelID;ok press ze button now;;{actionRow:,2,3,yes,$getVar[byes]:,2,4,no,$getVar[bno]};;yes]]
`,
}, {
    name: "test13",
    code: `
$apiMessage[;{author:$userTag:$authorAvatar:}{image:https://cdn.discordapp.com/emojis/$advancedTextSplit[$getVar[yes];:;3;>;1].png}{color:#3198DB};{actionRow:,2,3,owo,$getVar[byes],true};;no]
`,
}, {
    name: "test14",
    code: `
$djsEval[
let a = "test string I defined"
channel.send(\`\$\{a\}\`)
]
`,
}, {
    name: "test15",
    code: `
$djsEval[
let me = /#LEFT_CLICK##COLON#\w+#COLON#[0-9]+#RIGHT_CLICK#/g;
let e = args[0].match(me)
let emoji = !e? false: true
if(emoji === "false") {
"That's not an emoji"
} else {
"That's an emoji"
}
;yes] 
`,
}, {
    name: "test16",
    code: `
$8ball
`,
}, {
    name: "test17",
    code: `
$djsEval[require('discord.js').Util.parseEmoji('$message');yes]
`,
}, {
    name: "test18",
    code: `
$get[res]
$onlyIf[$get[res]!=;Var '$message' not found]
$let[res;$findVars[$message;10;{position}# {name}]]
`,
}, {
    name: "test19",
    code: `
$forEachGuildChannel[test19]
$onlyIf[$message[1]!=;ok]
`,
}, {
    type: "awaitedCommand",
    name: "test19",
    code: `
$get[res]
$let[res;$msg[$channelID;$message[1];channelid]]
$suppressErrors[failed]
$onlyBotPerms[viewchannel;sendmessages;]
`,
}, {
    name: "test20",
    code: `
$setTimeout[$djsEval["$message" || '3s';yes];channelID: $channelID
userID: $authorID]
wait for $djsEval["$message" || '3s';yes]
$onlyIf[$djsEval[require ('ms')("$message") ? true : false;yes]==true;invalid time]
`,
} /*, {
    type: "timeoutCommand",
    code: `
hi <@$timeoutData[userID]>
$useChannel[$timeoutData[channelID]]
`
}*/]


