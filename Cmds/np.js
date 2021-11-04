module.exports = ({
    name: "nowplaying",
    aliases: ['np'],
    description: "See the current playing song",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏯ Current playing song - **[$songInfo[title]\\]($songInfo[url])**]
    $thumbnail[$songinfo[thumbnail]]
    $addTimestamp
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyBotPerms[embedlinks; {description:❌ I require these permissions - **Embed Links**}{color:RANDOM}]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
})