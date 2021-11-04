module.exports = {
name: "invite",
code:`
$color[BORDO]
$description[Invite me [here](https://discord.com/api/oauth2/authorize?client_id=899810192621961216&permissions=8&scope=bot%20applications.commands)]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
}