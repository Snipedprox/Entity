module.exports = ({
name:"set-levelling",
aliases:"levelling",
usage:"set-levelling (reset/<optional channel> <optional message>)",
description:"Set your levelling. If no message is specified, the original message is sent.",
category:"Levelling",
code:`$if[$message==reset]
$setservervar[levelling;false]
I successfully reset levelling for this server!
$else
$setservervar[levelling;true]
$setservervar[level_channel;$findchannel[$message[1]]]
$setservervar[level_msg;$replacetext[$replacetext[$checkcondition[$message[2]==];true;$getservervar[level_msg]];false;$nomentionmessage]]
Levelling system successfully set up! If you did not use any place holders, and want to use them, check below ->
{user.name} -> $username
{user.mention} -> <@$authorid>
{level} -> 1
$onlyif[$mentionedchannels[1]!=;Could not find the channel!]
$endif
$onlyperms[manageserver;Not enough permissions! You need manage server permissions to execute this!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`})
 
 