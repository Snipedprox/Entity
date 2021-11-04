module.exports = ({
name: "avatar",
aliases: ['av' , 'ava'],
code:`$if[$message!=server]
$title[$username[$findmember[$message;yes]]'s avatar]
$description[$addfield[Avatar links;[PNG]($replaceText[$userAvatar[$findmember[$message;yes]];webp;png]) | [WEBP]($replaceText[$userAvatar[$findmember[$message;yes]];png;webp]) | [JPEG]($replaceText[$replaceText[$userAvatar[$findmember[$message;yes]];webp;jpeg];png;jpeg]);no]]
$image[$userAvatar[$findmember[$message;yes]]]
$color[BLUE]
$elseif[$message==server]
$title[$servername's server icon]
$description[$addfield[Avatar links;[PNG]($replaceText[$servericon;webp;png]) | [WEBP]($replaceText[$servericon;png;webp]) | [JPEG]($replaceText[$replaceText[$servericon;webp;jpeg];png;jpeg]);no]]
$image[$servericon]
$color[BLUE]
$endelseif
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`})