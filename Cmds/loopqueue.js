module.exports = ({
    name: "loopqueue",
    aliases: ['lpq', 'lq'],
    description: "Loops the current queue",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[🔁 $replaceText[$replaceText[$loopQueue;true;Now looping the queue!];false;No longer looping the queue.]]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
    `
})