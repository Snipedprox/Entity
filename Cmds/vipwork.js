module.exports = ({
  name: "vwork",
  code: `
$if[$random[1;5]==1]
$title[VIP - Work]
$color[RANDOM]

$description[You worked as $randomText[cashier;programmer;Elon Musk;alien] for additional $random[1;6]h and got $random[1000;2500] $getservervar[simbol]]
$footer[Free money, but for vips! ]
$globalCooldown[15m;You can work every 15m. Wait %time% and work again]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;2500]]]
$onlyIf[$getGlobalUserVar[vip]==1;:x: You're not vip user! get it by doing \`bevip\`]

$else

$if[$random[1;5]==2]
$color[RANDOM]
$title[VIP - Work]
$description[You worked as $randomText[cashier;programmer;Elon Musk;alien] for additional $random[1;6]h and got $random[1000;2500] $getservervar[simbol]]
$footer[Free money, but for vips! ]
$globalCooldown[15m;You can work every 15m. Wait %time% and work again]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;2500]]]
$onlyIf[$getGlobalUserVar[vip]==1;:x: You're not vip user! get it by doing \`bevip\`]
$else

$if[$random[1;5]==3]
$color[RANDOM]
$title[VIP - Work]

$description[You worked as $randomText[cashier;programmer;Elon Musk;alien] for additional $random[1;6]h and got $random[1000;2500] $getservervar[simbol]]
$footer[Free money, but for vips! ]
$globalCooldown[15m;You can work every 15m. Wait %time% and work again]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;2500]]]
$onlyIf[$getGlobalUserVar[vip]==1;:x: You're not vip user! get it by doing \`bevip\`]
$else

$if[$random[1;5]==4]
$color[RANDOM]
$title[VIP - Work]
$onlyIf[$getglobaluservar[wbage]==true;]
$description[You worked as $randomText[cashier;programmer;Elon Musk;alien] for additional $random[1;6]h and got $random[1000;2500] $getservervar[simbol]]
$footer[Free money, but for vips! ]
$globalCooldown[15m;You can work every 15m. Wait %time% and work again]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;2500]]]
$onlyIf[$getGlobalUserVar[vip]==1;:x: You're not vip user! get it by doing \`bevip\`]
$else
$if[$random[1;5]==5]
$title[VIP - Work]
$color[RANDOM]
<@$authorid> wait you successfully managed to get the a brand new badge which is only obtainable once you got the <:workholic:903362661897609266> Workaholic badge this is a 1 out 5 chance to get :eyes:
$description[You worked as $randomText[cashier;programmer;Elon Musk;alien] for additional $random[1;6]h and got $random[1000;2500] $getservervar[simbol]]
$footer[Free money, but for vips! ]
$globalCooldown[15m;You can work every 15m. Wait %time% and work again]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;2500]]]
$setGlobalUserVar[badge4;gained]
$setglobaluservar[wbage;false]
$onlyIf[$getGlobalUserVar[vip]==1;:x: You're not vip user! get it by doing \`bevip\`]
$onlyIf[$getglobaluservar[wbage]==true;]
$endif
$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
})
