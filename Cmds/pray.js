module.exports = ({
  name: "pray",
  code: `
$if[$random[1;5]==1]
$color[RANDOM]
$title[Praying is good]
$description[You went to your bedroom to pray to $randomText[your cat;a god;To my owner] who in return gave you $random[10;250] $getservervar[simbol]]
$footer[Keep praying  ]
$globalCooldown[30m;Smh if you keep praying they wont bless you try again in %time%]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;250]]]
$else
$if[$random[1;5]==2]
$color[RANDOM]
$title[Praying is good]
$description[You went to your bedroom to pray to $randomText[your cat;a god;To my owner] who in return gave you $random[10;250] $getservervar[simbol]]
$footer[Keep praying  ]
$globalCooldown[30m;Smh if you keep praying they wont bless you try again in %time%]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;250]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;250]]]

$else

$if[$random[1;5]==3]

$color[RANDOM]
$title[Praying is good]
$description[You went to your bedroom to pray to $randomText[your cat;a god;To my owner] who in return gave you $random[10;250] $getservervar[simbol]]
$footer[Keep praying  ]
$globalCooldown[30m;Smh if you keep praying they wont bless you try again in %time%]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;250]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;250]]]

$else
$if[$random[1;5]==4]
$color[RANDOM]
$title[Praying is good]
$description[You went to your bedroom to pray to $randomText[your cat;a god;To my owner] who in return gave you $random[10;250] $getservervar[simbol]]
$footer[Keep praying  ]
$globalCooldown[30m;Smh if you keep praying they wont bless you try again in %time%]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;250]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;250]]]

$else
$if[$random[1;5]==5]
<@$authorid> hollup the gods blessed you with a new badge named **Loyal worshipper** sadly they only do this once :eyes:
$color[RANDOM]
$title[Praying is the best thing to do]
$description[You went to your carpit and praid to the gods for a blessing and they gave you $random[10;250] $getservervar[simbol]]
$footer[Keep praying  ]
$globalCooldown[30m;Smh if you keep praying they wont bless you try again in %time%]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;250]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;250]]]
$setGlobalUserVar[badge5;praid]
$setglobaluservar[pray;false]

$onlyIf[$getglobaluservar[pray]==true;]
$endif
$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
})
