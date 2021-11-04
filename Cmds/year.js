module.exports = {
  name: "year",
  code: `
$description[Bruh, you dont know what year is it? The year today is $year]
$footer[imagine not knowing what year is it lol]
$color[RANDOM]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
}