module.exports = ({
  name: "crime",
  code: `$color[RANDOM]
$title[Crime]
$if[$random[1;2]==1]
$description[**$username did successful crime** and got $random[500;1500]$getservervar[simbol] for $randomText[robbing;doing heist;**playing fortnite**;killing someone;stealing someone's credit card]
Your wanted level is $random[1;5] :star: which results to not able to do crime again for 12h]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[500;1500]]]
$else
$description[**$username has been caught** and had to pay $random[500;1500]$getservervar[simbol]
In order to do crime again, you have to wait 12h]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$random[500;1500]]]
$endif
$footer[$randomText[Crime;Gun;Knife;Dagger;Sword;Grenade;Fortnite] is my life - $username]
$globalCooldown[12h;You can't rob for %time%]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
})