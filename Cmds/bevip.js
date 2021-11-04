module.exports = ({
  name: "bevip",
  code: `$color[RANDOM]
$title[VIP user woohoo]
$description[
$username bought VIP <:vip:902993905006559252> for 100,000 $getservervar[simbol] and now is VIP user!]
$footer[Item shop]

$setGlobalUserVar[vip;1]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];100000]]
$onlyIf[$getGlobalUserVar[cash]>=100000;:x: You need 100,000$getservervar[simbol] to buy VIP]
$onlyIf[$getGlobalUserVar[vip]==0;:x: You can't have 2 vip cards smh!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
})