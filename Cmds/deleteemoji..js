module.exports = {
  name: "deleteemoji",
  code: `$if[$stringstartswith[$message[1];<]==true]
    $deleteemojis[$customemoji[$emoji[$resolveemojiid[$emojisfrommessage[$message[1]]];name];$guildid]]
    $wait[1s]
    $addfield[Success!;Deleted the emoji with the name \`$message[1]\`.]
    $color[#206694]
    $else
    $deleteemojis[$customemoji[$get[name];$guildid]]
    $wait[1s]
    $addfield[Success!;Deleted the emoji with the name \`$get[name]\`.]
    $color[#206694]
    $let[name;$replacetext[$messageslice[0;$argscount]; ;_;-1]]
    $endif
    $onlyBotPerms[manageemojis;:x: I need \`Manage Emojis\` to do that]
    $onlyPerms[manageemojis;:x: You need \`Manage Emojis\` to do that]
    $suppresserrors[Oops!:It seems this is not an existing emoji in this server, please send the name of a valid emoji]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
  `
}