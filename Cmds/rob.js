module.exports = {
name: "rob",
code: `$if[$randomText[lose;lose;win]==win]
$color[GREEN]
$title[You successfully robbed $username]
$footer[Risky man]
$addTimestamp


$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$mentioned[1]];$random[5;$getGlobalUserVar[cash;$mentioned[1]]]];$mentioned[1]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];$random[5;$getGlobalUserVar[cash;$mentioned[1]]]];$authorID]
$description[You stole $random[5;$getGlobalUserVar[cash;$mentioned[1]]] $getservervar[simbol] from $username]

$elseif[$randomText[lose;lose;win]==lose]
$color[RED]
$title[You got caught while robbing $username]
$footer[Robbing bad]
$addTimestamp

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$authorID];$random[5;$getGlobalUserVar[cash;$authorID]]];$authorID]
$description[You got caugh and paid $random[5;$getGlobalUserVar[cash;$authorID]] $getservervar[simbol] fine]

$endelseif
$endif


$globalCooldown[10s;:x: Try to rob someone again in %time%]
$onlyIf[$getGlobalUserVar[cash]>2500;:x: You need more than 2500 $getservervar[simbol] to rob someone!]
$onlyIf[$getGlobalUserVar[cash;$mentioned[1]]>2500;:x: You can't rob people which have less (or equal) than 2500$getservervar[simbol]]
$onlyIf[$isMentioned[$mentioned[1]]==true;:x: You need to mention someone!]
$onlyIf[$mentioned[1]!=$authorID;:x: You can't rob yourself!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
}