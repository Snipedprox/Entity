module.exports = ({
name:"lmsg",
aliases:"level-message",
category:"Levelling",
usage:"lmsg add/remove <role> <message>",
description:"Add a custom level up message for a specific level!",
code:`$if[$message[1]==add]
$setservervar[level_morder;$getservervar[level_morder]$message[2]/]
$setservervar[level_msges;$getservervar[level_msges]$messageslice[2]/]
I successfully added the message **$messageslice[2]** to the level \`$message[2]\`
$argscheck[>2;Enter atleast 3 arguments! $getservervar[prefix]lmsg <add/remove> <level> <message>]
$elseif[$message[1]==remove]
$setservervar[level_morder;$replacetext[$getservervar[level_morder];$message[2]/;;1]]
$setservervar[level_msges;$replacetext[$getservervar[level_msges];$advancedtextsplit[$getservervar[level_msges];/;$findtextsplitindex[$message[2]]]/;;1]]
I successfully removed the role of the level \`$message[2]\`
$textsplit[$getservervar[level_morder];/]
$onlyif[$findtextsplitindex[$message[2]]!=0;Could not find the level!]
$endelseif
$else
Use either \`add\` or \`remove\`!
$endif
$onlyif[$isnumber[$message[2]]==true;Not a valid number!]
$onlyperms[manageserver;Not enough permissions!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`})