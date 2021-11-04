module.exports = {
 name: "join",
 aliases: ['connect'],
 code: `
Successfully joined <#$voiceid[$authorid]>
$joinvc[$voiceid[$authorid]]
$onlyif[$voiceid[$clientid]==;:x: Someone is listening to songs in another Voice Channel\nEither join their Voice Channel or use this command later.]
$onlyIf[$voiceid[$authorid]!=;:x: Please join a Voice Channel and use this command.]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
}