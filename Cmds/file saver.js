module.exports = {
name: "save",
aliases: ['js','aoi','savecode','store','djs','code'],
code: `
<@$authorID>
**Text**
\`\`\`kt
$cropText[$message;4000]\`\`\`

**File**
$createFile[$message;$userTag[$authorid]$randomString[3].txt]
$useChannel[904902343735263232]
$onlyForServers[867081064484962314;not for dis server]`}
