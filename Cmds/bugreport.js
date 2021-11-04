module.exports = {
name: "bugreport",
aliases: "report",
code: `
$channelSendMessage[$channelID;your report has sucessfully been send
Your report: \`$message\`;no]
$useChannel[901639832093208626]
$color[RED]
$description[
  $userTag[$authorid]'s report is

**$message**]
$argsCheck[<150;report should be atleast 10 charactars or more longnot more than 150 charactars long]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`}