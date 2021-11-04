module.exports = {
name: "claims",
code: `
$thumbnail[$useravatar[$clientid]]
$color[GREEN]
$description[

  **Reward claim.**
$replaceText[$replaceText[$getGlobalUserVar[day;$findUser[$message]];false;$customemoji[redtickk;896847103647694859]];true;$customemoji[greetick;896847103647694859]] Daily

$replaceText[$replaceText[$getGlobalUserVar[weekly;$findUser[$message]];false;$customemoji[redtickk;896847103647694859]];true;$customemoji[greetick;896847103647694859]] Weekly]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
}