module.exports = ({
    name: "play",
    aliases: ['p'],
    description: "Play some music!",
    usage: "play <song/url>",
    category: "music",
    code: `$color[RANDOM]
    $title[Song added to the queue!;$songInfo[url]]
    $description[✅ Added **$playSong[$message;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]**]
    $footer[Requested by $userTag]
    $addTimestamp
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$message!=;{description: You have to specify a song name/url to play!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
    $onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
    $botTyping[3s]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`   
})