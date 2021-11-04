module.exports = ({
name:"prefix",
aliases:"setprefix",
category:"Mod",
explanation:"Set the bot's server prefix. The prefix with the name of the bot will permanently be there, you can only change the other prefix. Mention the bot if you forget it.",
user:"Manage Server",
bot:"None",
usage:"prefix <new prefix>",
example:"set-prefix !",
explain:"Sets the server prefix to **!**",
code:`$setservervar[prefix;$noescapingmessage[1]]
I set **$noescapingmessage[1]** as the server prefix!
$onlyif[$charcount[$noescapingmessage[1]]==1;{description:The prefix can only be a symbol, that is of 1 character!}{color:FF0000}]
$onlyif[$checkcontains[$message[1];everyone;here]==false;{description:Cannot keep the prefix as @everyone or @here!}{color:FF0000}]
$onlyif[$getservervar[prefix]!=$message[1];{description:That is already the current server prefix!}{color:FF0000}]
$onlyif[$mentioned[1]==;{description:Please do not mention someone!}{color:FF0000}]
$onlyif[$message!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]prefix <new prefix>\`\`\`}{color:FF0000}]
$onlyperms[manageserver;{description:You require the \`Manage Server\` permissions to execute this!}{color:FF0000}]
	
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`})