module.exports = ({
name:"massrole",
aliases:"role-everyone",
category:"Mod",
explanation:"Give a role to every user in the server.",
bot:"Manage Roles, Embed Links",
user:"Manage Roles",
usage:"mass-role <role name/id/mention>",
example:"mass-role Testing",
explain:"Gives everyone the role **Testing**.",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:Mass Role Assigning!:$authoravatar}{description:<@$authorid> started a mass role assigning, giving the role <@&$findrole[$message]> to everyone!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:RANDOM}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$foreachmember[role]
$onlybotperms[manageroles;{description:Permissions required for execution of the command#COLON# \`Manage Roles\`. I do not have the necessary permissions!}{color:FF0000}]
$onlyif[$roleexists[$findrole[$message]]==true;Role not found!]
$onlyperms[manageroles;{description:Permissions required for execution of the command#COLON# \`Manage Roles\`. You do not have the necessary permissions!}{color:FF0000}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`})