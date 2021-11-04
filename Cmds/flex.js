module.exports = {
name: "flex",
code: `
**$username** is flexing on everyone with their trophies they have** \`$getGlobalUserVar[trophy]\`<:gtrophy:902956931440861224> **of them what a pro
$onlyIf[$getGlobalUserVar[trophy]>=1;**KEK** you dont have any trophies]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
}