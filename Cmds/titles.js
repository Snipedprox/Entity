module.exports = {
name: "titles",
code: `
$title[$userTag[$findUser[$message]]'s titles;https://lol.gg]
$thumbnail[https://images-ext-1.discordapp.net/external/xr_EOFJN0eVbEN-YzlcFBPwuVDblqo9BxE_lJc71vOA/https/i.imgur.com/fZYN6TY.png?width=421&height=421]
$color[RANDONM]
$description[**$usertag[$findUser[$message]] titles lets see what titles they own

Titles:**

$replaceText[$replaceText[$getGlobalUserVar[title1;$findUser[$message]];empty; ];titlev1;<:title1:903379667392794674> **Rich guy**]

$replaceText[$replaceText[$getGlobalUserVar[title2;$findUser[$message]];empty; ];titlev2;<:title2:903379772355264543> **God's son**]

$replaceText[$replaceText[$getGlobalUserVar[title3;$findUser[$message]];empty; ];titlev3;<:title3:903379793213522011> **God of titles**]]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`}
