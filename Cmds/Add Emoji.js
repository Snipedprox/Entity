module.exports = ({
name:"addemoji",
aliases:['emoji','steal'],
category:"Mod",
explanation:"Add an emoji to the server!",
bot:"Manage Emojis",
user:"Manage Emojis",
usage:"steal <emoji url/emoji> <name>",
example:"steal :kek: kek",
explain:"Adds the emoji :kek: with the name **kek**",
code:`**The requested emoji$get[e] was added with the name __$message[2]__!**
$let[e;$addemoji[$replacetext[$replacetext[$checkcondition[$isvalidlink[$message[1]]==true];true;$message[1]];false;https://cdn.discordapp.com/emojis/$findnumbers[$message[1]]];$message[2]]]
$onlybotperms[manageemojis;{description:I do not have the \`Manage Emojis\` permissions to execute this!}{color:FF0000}]
$onlyIf[$message[2]!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]emoji <emoji> <name>\`\`\`}{color:FF0000}]
$onlyperms[manageemojis;{description:You need the \`Manage Emojis\` permissions to do this!}{color:FF0000}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`})
