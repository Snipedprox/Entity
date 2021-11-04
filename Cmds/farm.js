module.exports = ({
  name: "farm",
  description: "Work at a farm and get some money",
  usage: "$getserverVar[prefix]farm",
  code: `







Pog you farmed up $message pepper plants and earned \`$numberSeparator[$multi[$message;60];,]\`$getServerVar[simbol]
!
  
$setGlobalUserVar[plant;$sub[$getGlobalUserVar[plant];$multi[$message;1]]]

  $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message;60]]]

  $globalcooldown[1m;Sorry the farm is closed for the next %time%]
$onlyIf[$getGlobalUserVar[cash]<=1500000;You have reached max go buy some items because your balance can not be more than \`1,500,000\`]
$onlyIf[$getGlobalUserVar[plant]>=$message;You dont have enough plants]
$onlyIf[$message>=1;**SPECIFY AN AMOUNT**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
})