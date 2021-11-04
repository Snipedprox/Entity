module.exports = {
name: "work",
code:`
$if[$getglobaluservar[gem1on]==on]
$globalcooldown[7s;wait \`%time%\` ]
$author[worker]
$color[GREEN]
$description[you worked as $randomText[a developer;teacher;bdfd dev;a dog] and earned $random[506;9000]$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[506;9000]]]
$else
$globalcooldown[20s;wait \`%time%\` ]
$author[worker]
$color[GREEN]
$description[you worked as $randomText[a developer;teacher;bdfd dev;a dog] and earned $random[50;900]$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[50;900]]]
$else
$if[$getglobaluservar[gem2on]==true]
$globalcooldown[2s;wait \`%time%\` ]
$author[worker]
$color[GREEN]
$description[you worked as $randomText[a developer;teacher;bdfd dev;a dog] and earned $random[239;10000]$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[239;10000]]]
$else
$globalcooldown[7s;wait \`%time%\` ]
$author[worker]
$color[GREEN]
$description[you worked as $randomText[a developer;teacher;bdfd dev;a dog] and earned $random[506;9000]$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[506;9000]]]
$endif
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
}