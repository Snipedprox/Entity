module.exports = {
    name: "owofy",
    aliases: ['owofi', 'furry', 'fuwwy', 'furryfy', 'furrfi', 'owo'],
    code: `
$replaceText[$replaceText[$replaceText[$replaceText[$message;l;w];L;W];r;w];R;W]

- \`$userTag[$authorID]\`
$onlyIf[$message!=;No owo...? Hmph!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
}