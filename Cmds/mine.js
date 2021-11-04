module.exports = {
name: "mine",
code: `
<:pickaxe:901797142610473011> You went mining in a cave and found $random[1;3] $randomText[iron;iron;iron;stone;stone;diamond]
 and sold it for $random[60;900]$getservervar[simbol]!!


$globalCooldown[30s;wait %time%]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[60;900]]]
$onlyIf[$getGlobalUserVar[pickaxe]>=1;You dont even own a <:pickaxe:901797142610473011>]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`}


