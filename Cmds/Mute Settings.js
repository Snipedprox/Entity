module.exports = ({
name:"mutesettings",
aliases:"ms",
category:"Mod",
explanation:"Returns the server's mute role.",
user:"Manage Server",
bot:"Embed Links",
usage:"mute-settings",
example:"mute-settings",
explain:"Shows the mute role for the server",
code:`$author[Mute settings of $servername!;$servericon]
$description[<@&$getservervar[mrole]> is the mute role for the server! All mutes and tempmutes assign this role!]
$footer[Requested by $usertag]
$onlyperms[manageserver;{description:Permissions required for execution of the command#COLON# \`Manage Server\`. You do not have the necessary permissions!}{color:FF0000}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`})