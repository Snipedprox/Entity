module.exports = {
name: "shop",
code: `$author[Welcome to my shop;$replaceText[$authorAvatar;null;$userAvatar[$clientid]]]
$color[ORANGE]
$addTimeStamp
$thumbnail[$replaceText[$authorAvatar;null;$userAvatar[$clientid]]
$description[
__**Information**__: IDS should be typed in the correct format

<:cropp:899245624745136159> **Pepper plant** (plant) —  [25](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[simbol]
A pepper plant is used for farming.


<:chandelierr:899245623809810462> **Chandelier** (chandelier) —  [250](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[simbol]
A chandelier is useless but cool.


<:lazer:899245625722408961> **Laser grids** (laser) —  [7,500](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[simbol]
A laser grid can be used for multiplier.


<:gem1:901156013313499156> **Silver gems** (silver) —  [6,500](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[simbol]
A silver gem can be used as a multiplier.


<:gem2:901157795401961552> **Mythical gems** (myth) —  [9,700](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[simbol]
A mythical gem can be used as a multiplier.


<:premiumm:901195964587577395>**Premium** (premium) —  [25,000](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[simbol]
Premium points unlock all premium commands.


<:pickaxe:901797142610473011>**Pickaxes** (pickaxe) —  [750](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[simbol]
With a pickaxe u can mine.


<:gtrophy:902956931440861224> **Trophy** (trophy) —  [150,000](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[esimbol]
Trophys are a flex item .


<:badge2:903014140593987716> **Noob badge** (noob) —  [2,500](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[esimbol]
A noob badge just to show your nobness .


<:badge3:903014250493116428> **Pro badge** (pro) —  [7,500](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[esimbol]
A pro badge to show your pro .


<:badge4:903014386787041360> **God badge** (god) —  [10,000](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[esimbol]
Gods of pros and noobs now has been made possible .


<:title1:903379667392794674> **Rich guy** (rich) —  [15,000,000](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[esimbol]
Wow very expensive only for rich guys hehe .


<:title2:903379772355264543> **God's son** (titan) —  [1,500,000](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[esimbol]
Nobody thought it was possible to become gods son well now it is .


<:title3:903379793213522011> **God of titles** (titles) —  [150,000,000](https://www.youtube.com/watch?v=_BD140nCDps)$getservervar[esimbol]
Expensive but with this u can show off to those normies hehe .
]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`}