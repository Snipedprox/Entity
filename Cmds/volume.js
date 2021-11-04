module.exports = ({
    name: "volume",
    aliases: ['vol', 'v'],
    description: "Change the music volume",
    category: "music",
    usage: "volume <number>",
    code: `$color[RANDOM]
    $description[🔊 Change the Volume to "$message".]
    $volume[$message]
    $onlyIf[$voiceID==$voiceID[$clientID];{color:RANDOM}{description:You must be in the same Voice Channel as the Bot!} {field:Bot's Voice Channel:<#$voiceID[$clientID]>} {field:User Voice Channel:<#$voiceID>}] 
    $onlyIf[$queueLength>0;{description:The queue is empty!}{color:RANDOM}]
    $onlyIf[$isNumber[$message[1]]==true;{description: Argument must be a number!}{color:RANDOM}]
    $onlyIf[$message[1]<=200;{description: The max Volume is "200"!}{color:RANDOM}] 
    $onlyIf[$message[1]>=1;{description: The min Volume is "1"!}{color:RANDOM}] 
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
    $onlyBotPerms[embedlinks; {description:❌ I require these permissions - **Embed Links**}{color:RANDOM}]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
    }) 