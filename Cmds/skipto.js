module.exports = ({
    name: "skipto",
    aliases: ['skt'],
    description: "Skip to a different song in the queue",
    usage: "skipto <number>",
    category: "music",
    code: `$color[RANDOM]
    $description[⏩ Skipped the song to queue number "$message"!]
    $skipTo[$message]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$message!=;{description: You have to specify a queue number to skip to!}{color:RANDOM}]
    $onlyIf[$isNumber[$message]==true;{description: Please specify a valid queue number!}{color:RANDOM}]
    $onlyIf[$queueLength>$message;{description: That queue number doesn't exist!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
})