module.exports = [{
    name: "giveaway",
    code: `
$if[$message==]
$author[$userTag[$authorID];$authorAvatar]
$title[Giveaway options]
$description[
$addField[End;End a giveaway using a message ID or URL
> \`giveaway end <message ID/URL>\`;yes]
$addField[Reroll;Reroll giveaway using a message ID or URL
> \`giveaway reroll <message ID/URL>\`;yes]
$addField[Start;Start a giveaway
> \`giveaway start <prize>?-<description>?-{time}\`;yes]
]
$color[BLUE]
$elseIf[$toLowercase[$message[1]]==start]
$setTimeout[$get[replace];messageID: $get[id]
channelID: $channelID
guildID: $guildID
description: $splitText[2]
prize: $get[replace2]
time: $get[time]]
$setMessageVar[giveawayisgiveaway;true;$get[id]]
$setMessageVar[giveawaytime;$get[time];$get[id]]
$setMessageVar[giveawaydescription;$splitText[2];$get[id]]
$setMessageVar[giveawayprize;$get[replace2];$get[id]]
$setMessageVar[giveawaychannelid;$channelID;$get[id]]
$setMessageVar[giveawayguildid;$guildID;$get[id]]
$let[id;$sendMessage[{author:$userTag[$authorID]:$authorAvatar}
{title:A giveaway has been started!}
{field:Prize#COLON#:\`$get[replace2]\`:yes}
{field:Description#COLON#:$splitText[2]:yes}
{field:Time#COLON#:<t#COLON#$get[time]#COLON#R> <t#COLON#$get[time]#COLON#T>:yes}
{footer:React with 🎉 to participate}
{timestamp}
{color:BLUE}
{reactions:🎉};yes]]
$let[time;$truncate[$divide[$djsEval[$ms[$get[replace]] + $dateStamp;yes];1000]]]
$onlyIf[$djsEval[require('ms')("$get[replace]") ? true : false;yes]==true;{author:$userTag[$authorID]:$authorAvatar}
{description:$get[no] Invalid \`<time>\` argument given.
Usage:
$get[usage]}
{color:RED}]
$onlyIf[$splitText[2]!=;$get[err]]
$onlyIf[$get[replace2]!=;$get[err]]
$let[replace2;$advancedTextSplit[$messageSlice[1];?-;1]]
$let[replace;$djsEval["$replaceText[$splitText[3]; ;]" || '1 hour';yes]]
$let[err;{author:$userTag[$authorID]:$authorAvatar}
{description:$getVar[no] Too few arguments given.
Usage:
$get[usage]
$let[usage;\`giveaway start <prize>?-<description>?-{time}\`]}
{color:RED}]
$textSplit[$message;?-]
$endElseIf
$elseIf[$toLowercase[$message[1]]==reroll]
$replaceText[$replaceText[$checkCondition[$get[st]==$clientID];true;Nobody];false;<@$get[st]> has] won the giveaway!
$author[$userTag[$get[st]];$userAvatar[$get[st]]]
$title[A giveaway has been rerolled!;https://discord.com/channels/$getMessageVar[giveawayguildid;$get[id]]/$getMessageVar[giveawaychannelid;$get[id]]/$get[id]]
$description[
$addField[Time:;<t:$getMessageVar[giveawaytime;$get[id]]:R> <t:$getMessageVar[giveawaytime;$get[id]]:T>;yes]
$addField[Description:;$getMessageVar[giveawaydescription;$get[id]];yes]
$addField[Prize:;\`$getMessageVar[giveawayprize;$get[id]]\`;yes]
]
$addTimestamp
$color[BLUE]
$let[st;$splitText[$get[random]]]
$let[random;$djsEval[Math.floor(Math.random() * $getTextSplitLength) + 1;yes]]
$textSplit[$getMessageVar[giveawayparticipants;$get[id]]; ]
$onlyIf[$getMessageVar[giveawayisfinished;$get[id]]==true;{author:$userTag[$authorID]:$authorAvatar}
{description:$getVar[no] Please wait until giveaway [$get[id]](https://discord.com/channels/$getMessageVar[giveawayguildid;$get[id]]/$getMessageVar[giveawaychannelid;$get[id]]/$get[id]) ends, or do \`$getServerVar[prefix]giveaway end $get[id]\` to end.}
{color:RED}]
$onlyIf[$getMessageVar[giveawayisgiveaway;$get[id]]==true;{author:$userTag[$authorID]:$authorAvatar}
{description:$getVar[no] \`$get[id]\` is not a valid giveaway}
{color:RED}]
$let[id;$replaceText[$replaceText[$checkCondition[$get[split]==];true;$message[2]];false;$get[split]]]
$onlyIf[$get[if]==true;$get[err]]
$onlyIf[$message[2]!=;{author:$userTag[$authorID]:$authorAvatar}
{description:$getVar[no] Too few arguments given.
Usage:
\`$get[usage]\`}
{color:RED}]
$let[if;$replaceText[$replaceText[$checkCondition[$isNumber[$message[2]]==true];true;$checkCondition[$charCount[$message[2]]==18]];false;$replaceText[$replaceText[$checkCondition[$isNumber[$get[split]]==true];true;$checkCondition[$charCount[$get[split]]==18]];false;false]]]
$let[split;$advancedTextSplit[$message[2];//;2;/;5]]
$let[err;{author:$userTag[$authorID]:$authorAvatar}
{description:$getVar[no] Invalid \`<message ID/URL>\` given.
Usage:
$get[usage]}
{color:RED}]
$let[usage;\`giveaway reroll <message ID/URL>\`]
$endElseIf
$elseIf[$toLowercase[$message[1]]==end]
$setMessageVar[giveawaytime;$get[time];$get[id]]
$setMessageVar[giveawayisfinished;true;$get[id]]
$setMessageVar[giveawayparticipants;$get[participants];$get[id]]
$replaceText[$replaceText[$checkCondition[$get[st]==$clientID];true;Nobody];false;<@$get[st]> has] won the giveaway!
$author[$userTag[$get[st]];$userAvatar[$get[st]]]
$title[A giveaway has been ended!;https://discord.com/channels/$getMessageVar[giveawayguildid;$get[id]]/$getMessageVar[giveawaychannelid;$get[id]]/$get[id]]
$description[
$addField[Time:;<t:$get[time]:R> <t:$get[time]:T>;yes]
$addField[Description:;$getMessageVar[giveawaydescription;$get[id]];yes]
$addField[Prize:;\`$getMessageVar[giveawayprize;$get[id]]\`;yes]
]
$addTimestamp
$color[BLUE]
$let[time;$truncate[$divide[$datestamp;1000]]]
$let[st;$splitText[$get[random]]]
$let[random;$djsEval[Math.floor(Math.random() * $getTextSplitLength) + 1;yes]]
$textSplit[$get[participants]; ]
$let[participants;$replaceText[$replaceText[$getReactions[$getMessageVar[giveawaychannelid;$get[id]];$get[id];🎉;id];$clientID,;];,; ]]
$onlyIf[$getMessageVar[giveawayisfinished;$get[id]]==false;{author:$userTag[$authorID]:$authorAvatar}
{description:$getVar[no] Giveaway [$get[id]](https://discord.com/channels/$getMessageVar[giveawayguildid;$get[id]]/$getMessageVar[giveawaychannelid;$get[id]]/$get[id]) has already been ended}
{color:RED}]
$onlyIf[$getMessageVar[giveawayisgiveaway;$get[id]]==true;{author:$userTag[$authorID]:$authorAvatar}
{description:$getVar[no] \`$get[id]\` is not a valid giveaway}
{color:RED}]
$let[id;$replaceText[$replaceText[$checkCondition[$get[split]==];true;$message[2]];false;$get[split]]]
$onlyIf[$get[if]==true;$get[err]]
$onlyIf[$message[2]!=;{author:$userTag[$authorID]:$authorAvatar}
{description:$getVar[no] Too few arguments given.
Usage:
\`$get[usage]\`}
{color:RED}]
$let[if;$replaceText[$replaceText[$checkCondition[$isNumber[$message[2]]==true];true;$checkCondition[$charCount[$message[2]]==18]];false;$replaceText[$replaceText[$checkCondition[$isNumber[$get[split]]==true];true;$checkCondition[$charCount[$get[split]]==18]];false;false]]]
$let[split;$advancedTextSplit[$message[2];//;2;/;5]]
$let[err;{author:$userTag[$authorID]:$authorAvatar}
{description:$getVar[no] Invalid \`<message ID/URL>\` given.
Usage:
$get[usage]}
{color:RED}]
$let[usage;\`giveaway end <message ID/URL>\`]
$endElseIf
$endIf
$onlyBotPerms[addreactions;{author:$userTag[$authorID]:$auhorAvatar}
{description:$getVar[no] I dont have the permission to use this command.
Missing:
\`add reactions\`}
{color:RED}]
$onlyPerms[managechannels;{author:$userTag[$authorID]:$authorAvatar}
{description:$getVar[no] You dont have the permission to use this command.
Missing:
\`manage channels\`}
{color:RED}]
`,
}, {
    type: "timeoutCommand",
    code: `
$setMessageVar[giveawayisfinished;true;$get[id]]
$setMessageVar[giveawayparticipants;$get[participants];$get[id]]
$channelSendMessage[$timeoutData[channelID];$replaceText[$replaceText[$checkCondition[$get[st]==$clientID];true;Nobody];false;<@$get[st]> has] won the giveaway!
{author:$userTag[$get[st]]:$userAvatar[$get[st]]}
{title:A giveaway has ended!}
{url:https://discord.com/channels/$timeoutData[guildID]/$timeoutData[channelID]/$get[id]}
{field:Prize#COLON#:\`$timeoutData[prize]\`:yes}
{field:Description#COLON#:$timeoutData[description]:yes}
{field:Time#COLON#:<t#COLON#$timeoutData[time]#COLON#R> <t#COLON#$timeoutData[time]#COLON#T>:yes}
{timestamp}
{color:BLUE}]
$let[id;$timeoutData[messageID]]
$let[st;$splitText[$get[random]]]
$let[random;$djsEval[Math.floor(Math.random() * $getTextSplitLength) + 1;yes]]
$textSplit[$get[participants]; ]
$let[participants;$replaceText[$replaceText[$getReactions[$timeoutData[channelID];$timeoutData[messageID];🎉;id];$clientID,;];,; ]]
$onlyIf[$getMessageVar[giveawayisfinished;$timeoutData[messageID]]==false;]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
}]