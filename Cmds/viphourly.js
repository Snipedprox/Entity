module.exports = ({
  name: "vhourly",
  code: `$color[RANDOM]
$title[VIP - Hourly]
$description[You got $random[250;500] $getservervar[simbol] for nothing kek. Nice]
$footer[Free money, but for vips!]
$globalCooldown[1h;You sadly can only claim vip once an hour so wait %time% and try again]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[250;500]]]
$onlyIf[$getGlobalUserVar[vip]==1;:x: You're not vip user! get it by doing \`bevip\`]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
 `
})