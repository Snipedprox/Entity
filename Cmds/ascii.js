module.exports = {
    name: "ascii",
    code: `
$description[\`\`\`arm
$jsonRequest[https://artii.herokuapp.com/make?text=$replaceText[$message; ;%20;-1]]
\`\`\`]
$color[RANDOM]
$onlyIf[$charCount[$noEscapingMessage]<20;{author:$username[$authorID]#$discriminator[$authorID]:$authorAvatar}{description:$getVar[no] Message must not be longer than 20 characters}{color:RED}]
$onlyIf[$message!=;{author:$username[$authorID]#$discriminator[$authorID]:$authorAvatar}{description:$getVar[no] Too few arguments given.

Usage:
\`ascii <message>\`}{color:RED}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
}