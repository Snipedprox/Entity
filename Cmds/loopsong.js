module.exports = ({
    name: "loopsong",
    aliases: ['lps', 'ls'],
    description: "Loops the current song",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[🔁 $replaceText[$replaceText[$loopSong;true;Now looping the song!];false;No longer looping the song.]]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
})