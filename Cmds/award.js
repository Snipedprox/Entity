module.exports = ({
    name: "award",
    aliases: ['reward'],
    description: "Award a user some money[Developer Only]",
    usage: "award <user> <amount>",
    category: "economy",
    code: `$color[RANDOM]
    $author[$userTag[$findMember[$message[2]]];$userAvatar[$findMember[$message]]]
    $description[<@$findMember[$message[2]]> has been awarded **$getservervar[simbol]$numberSeparator[$message[1]]**!]
    $setGlobalUserVar[cash;$sum[$getGLobalUserVar[cash;$findMember[$message[2]]];$message[1]];$findMember[$message[2]]]
    $onlyIf[$message[1]!=;{description: Specify the amount to award.}{color:RANDOM}]
    $onlyIf[$findMember[$message[2]]!=;{description: <@$botOwnerID>, maybe try mentioning a user?}{color:RANDOM}]
    $onlyIf[$isBot[$findMember[$message[2]]]==false;{description: Why not try mention a user that is not a bot?}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;{description: Please do this in a guild!}{color:RANDOM}]
    $onlyForIDs[$botOwnerID;896846485805744168;{description:❌ You are not my Developer}{color:RANDOM}]
    $suppressErrors[{description: Correct Usage: $getServerVar[prefix]award <amount> <user>}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
    `
})