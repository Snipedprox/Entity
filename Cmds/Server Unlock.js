module.exports = ({
name:"serverunlock",
aliases:"unlock-server",
category:"Mod",
explanation:"Unlock all server channels.",
bot:"Manage Channels, Embed Links",
user:"Manage Channels",
usage:"server-unlock [reason]",
example:"server-unlock Testing",
explain:"Unlocks all channels, and sends message with the reason **Testing**",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user is unlocking the server!:$authoravatar}{description:<@$authorid> unlocked the whole server!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$foreachguildchannel[unlock]
$onlybotperms[managechannels;{description:Permissions required for execution of the command#COLON# \`Manage Channels\`. I do not have the necessary permissions!}{color:FF0000}]
$onlyperms[managechannels;{description:Permissions required for execution of the command#COLON# \`Manage Channels\`. You do not have the necessary permissions!}{color:FF0000}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`})