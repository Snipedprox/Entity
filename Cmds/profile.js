module.exports = {
name: "profile",
aliases: "prof",
code: `
$thumbnail[https://images-ext-1.discordapp.net/external/oTnUiOw1P-M2u610xC0D9lBVtxXZpHSKqNVZQm8BOYs/%3Fwidth%3D512%26format%3Dpng%26auto%3Dwebp%26s%3D78fa554869f19dfafc592ea8a280768a3e350b45/https/preview.redd.it/twjrfgjn68f71.png?width=92&height=92]
$title[$userTag[$findUser[$message]]'s profile;https://nonexistendwebsite.com]
$color[RANDOM]
$addTimeStamp
$description[
**welcome to $userTag[$findUser[$message]] profile lets see their stats**

\`Badges\`: $replaceText[$replaceText[$getGlobalUserVar[badge1;$findUser[$message]];empty; ];<:badge2:903014140593987716>;<:badge2:903014140593987716>] $replaceText[$replaceText[$getGlobalUserVar[badge3;$findUser[$message]];empty; ];<:badge4:903014386787041360>;<:badge4:903014386787041360>] $replaceText[$replaceText[$getGlobalUserVar[badge2;$findUser[$message]];empty; ];<:badge3:903014250493116428>;<:badge3:903014250493116428>] $replaceText[$replaceText[$getGlobalUserVar[badge4;$findUser[$message]];empty; ];gained;<:workholic:903362661897609266>]$replaceText[$replaceText[$getGlobalUserVar[badge5;$findUser[$message]];empty; ];praid;<:pray:903366733069438996>]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`}


