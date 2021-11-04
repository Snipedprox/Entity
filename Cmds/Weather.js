module.exports = ({
name:"weather",
category:"Utility",
explanation:"Get the weather of a place!",
bot:"None",
user:"None",
usage:"weather <place>",
example:"weather Mumbai",
explain:"Get the weather of the place mumbai!",
code:`$author[Weather of $tolocaleuppercase[$message];$servericon]
$image[$get[p]]
$color[RANDOM]
$description[Here is the weather of the place, <@$authorid>!]
$footer[If you cannot see the image, either there is a bug(try again), or you have entered an invalid place!]
$onlyif[$message!=;Enter a place!]
$servercooldown[10s;On a cooldown!]
$onlyif[$get[p]!=;{description:Place not found!}{color:FF0000}]
$let[p;https://api.avux.ga/weatherimage?location=$message&background=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWoknYCckV17nqFV8Lo-HyxEPZ_syVkg5KvA&usqp=CAU]
$onlyif[$isbot[$authorid]==false;]
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**⛔ You need \`premium\` to use this command**]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`})