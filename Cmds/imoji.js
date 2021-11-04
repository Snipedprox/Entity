module.exports = {
  name: "imoji",
  aliases: ['imojiadd'],
  code: `$if[$stringstartswith[$message[1];https://]==true]
    $addfield[Success!;Added emoji $addemoji[$message[1];$message[2];yes] under the name $message[2]]
    $thumbnail[$message[1]]
    $color[#206694]
    $onlyif[$message[2]!=;{title:Oops!}{description:Please submit an emoji name after sending the image URL!}{color:#206694}]
    $else
    $onlyperms[manageemojis;:x: You need \`Manage Emojis\` to do that]
    $onlybotperms[manageemojis;{title:Oops!}{description:It seems I don't have the manage emojis permissions required to execute this command}{color:#206694}]
    $addfield[Success!;Added emoji $addemoji[$messageattachment;$message[1];yes] under the name $message[1].]
    $thumbnail[$messageattachment]
    $color[#206694]
    $onlyif[$message[1]!=;{title:Oops!}{description:Please submit an emoji name after sending the image URL!}{color:#206694}]
    $endif
    $onlyBotPerms[manageemojis;:x: I need \`Manage Emojis\` to do that]
    $onlyPerms[manageemojis;:x: You need \`Manage Emojis\` to do that]
    $suppresserrors[Uh Oh, it seems an error occurred, it is likely that the emoji is too large to upload or isn't a valid image or gif, if you're sure everything should work please report this bug!]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
};