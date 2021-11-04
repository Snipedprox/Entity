module.exports = ({
name:"$alwaysExecute",
code:`$suppresserrors
$giverole[$authorid;$advancedtextsplit[$getservervar[level_roles];/;$findtextsplitindex[$getuservar[rank]]]]
$textsplit[$getservervar[level_order];/]
$setuservar[rank;$sum[$getuservar[rank];1]]
$setUserVar[req;$truncate[$sum[$getuservar[req];$math[$getuservar[req]*1/2]]]]
$setuservar[exp;0]
$channelsendmessage[$replacetext[$replacetext[$checkcondition[$getservervar[level_channel]==];true;$channelid];false;$getservervar[level_channel]];<@$authorid>{author:$usertag levelled up!:$authoravatar}{thumbnail:$authoravatar}{timestamp}{description:$replacetext[$replacetext[$replacetext[$get[msg];{user.name};$username];{user.mention};<@$authorID>];{level};$sum[$getUserVar[rank];1]]}{color:BLUE}]
$let[msg;$getservervar[$replacetext[$replacetext[$checkcondition[$findtextsplitindex[$sum[$getuservar[rank]];]==0];true;level_msg];false;level_msges]]]
$textsplit[$getservervar[level_morder];/]
$onlyIf[$getUserVar[exp]>=$getUserVar[req];]
$onlyif[$getservervar[levelling]==true;]
$suppresserrors
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`})