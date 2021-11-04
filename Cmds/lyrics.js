module.exports = ({
    name: "lyrics",
    aliases: ['ly', 'l'],
    description: "Get lyrics from the current playing or a specific song",
    usage: "lyrics (song)",
    category: "music",
    code: `$color[RANDOM]
    $if[$argsCount>0]
    $title[Lyrics for $message]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;{description: No lyrics found for this song!}{color:RANDOM}]]
    $elseIf[$argsCount==0]
    $title[Lyrics for $songInfo[title]]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;{description: No lyrics found for this song!}{color:RANDOM}]]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $endelseif
    $endif
    $botTyping
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyBotPerms[embedlinks; {description:❌ I require these permissions - **Embed Links**}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
})