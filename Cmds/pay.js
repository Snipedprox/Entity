module.exports = ({
name:"give",
aliases:"pay",
category:"Economy",
explanation:"Pay money to someone!",
bot:"Embed Links",
user:"None",
usage:"pay <amount> <user>",
example:"pay 1000 Stickman",
explain:"Pay 1000 money to the user Stickman!",
code:`$sendmessage[{author:Success!:$authoravatar}{description:Successfully paid $getservervar[simbol] **$get[amount]** to **$usertag[$get[user]]**!\n\nYou now have $getservervar[simbol] **$getglobaluservar[cash]**, and they have $getservervar[simbol] **$getglobaluservar[cash;$get[user]]**!}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[cash;$sub[$getglobaluservar[cash];$get[amount]]]
$setglobaluservar[cash;$sum[$getglobaluservar[cash;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot pay 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot pay negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[cash];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[cash;$authorID];1];max;$getglobalUserVar[cash;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot pay yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`})