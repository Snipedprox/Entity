module.exports = ({
  name: "starter",
  code: `Welcome $username!
Here is your starter kit: 5,000 $getservervar[simbol]
Spend them wisely!

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];5000]]
$onlyIf[$getGlobalUserVar[starter]==0;:x: You can use starter pack only once!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
})