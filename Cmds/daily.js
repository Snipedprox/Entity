module.exports = {
name: "daily",
code: `
$if[$getglobaluservar[gem1on]==on]
$globalCooldown[20h;$customemoji[redtickk;896847103647694859] Im sorry what? its called **daily not secondly** so wait \`%time%\` ]
$thumbnail[$userAvatar[$clientid]]
$author[Daily;$userAvatar[$clientid]]
$color[BLACK]
$description[You claimed your daily and got \`2000\`$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];2000]]
$setGlobaluservar[day;true]
$else
$globalCooldown[24h;$customemoji[redtickk;896847103647694859] Im sorry what? its called **daily not secondly** so wait \`%time%\` ]
$thumbnail[$userAvatar[$clientid]]
$author[Daily;$userAvatar[$clientid]]
$color[BLACK]
$description[You claimed your daily and got \`2000\`$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];2000]]
$setGlobaluservar[day;true]
$else
$if[$getglobaluservar[gem2on]==true]
$globalCooldown[12h;$customemoji[redtickk;896847103647694859] Im sorry what? its called **daily not secondly** so wait \`%time%\` ]
$thumbnail[$userAvatar[$clientid]]
$author[Daily;$userAvatar[$clientid]]
$color[BLACK]
$description[You claimed your daily and got \`2000\`$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];2000]]
$setGlobaluservar[day;true]
$else
$globalCooldown[24h;$customemoji[redtickk;896847103647694859] Im sorry what? its called **daily not secondly** so wait \`%time%\` ]
$thumbnail[$userAvatar[$clientid]]
$author[Daily;$userAvatar[$clientid]]
$color[BLACK]
$description[You claimed your daily and got \`2000\`$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];2000]]
$setGlobaluservar[day;true]
$endif
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
}