module.exports = ({
name:"calculate",
aliases:"calculator",
category:"Utility",
explanation:"Your own calculator! From the NPM package \"Weky\"",
bot:"Embed Links",
user:"None",
usage:"calc",
example:"calc",
explain:"Adds buttons from 0-9 with basic operators like +, -, * and /, brackets, % and ^",
code:`$djseval[( async () => {const { Calculator } = require ("weky")
await Calculator (message)})()]
$servercooldown[10s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**⛔ You need \`premium\` to use this command**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`})