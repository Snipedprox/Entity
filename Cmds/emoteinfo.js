module.exports = {
  name: "emoji-info",
  aliases: ["emojiinfo", "emote-info", "emoteinfo"],
  code: `
    $author[Emoji Info;$userAvatar[$clientID]]
    $color[#206694]
    $image[attachment://$advancedTextSplit[$message[1];:;2].$replaceText[$replaceText[$checkCondition[$advancedTextSplit[$message[1];:;1]==<a];true;gif];false;png]]
    $attachment[$get[link];$advancedTextSplit[$message[1];:;2].$replaceText[$replaceText[$checkCondition[$advancedTextSplit[$message[1];:;1]==<a];true;gif];false;png]]
    $addField[Emoji Preview:;**[Emote Link]($get[link])**;no]
    $addField[Emoji Info:;
      ID: \`$advancedTextSplit[$message[1];:;3;>;1]\`
      NAME: $advancedTextSplit[$message[1];:;2];no]
    $let[link;https://cdn.discordapp.com/emojis/$advancedTextSplit[$message[1];:;3;>;1].$replaceText[$replaceText[$checkCondition[$advancedTextSplit[$message[1];:;1]==<a];true;gif];false;png]?size=4096]
    $onlyIf[$stringStartsWith[$message[1];<]==true;]
    $onlyIf[$message[1]!=;]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
}