module.exports = [{
    name: "chatbot",
    code: `
$if[$toLowercase[$message[1]]==enable]
$author[$userTag[$authorID];$authorAvatar]
$description[ The chatbot AI is successfully enabled. $userTag[$clientid] can now talk to you in this channel]
$color[GREEN]
$setChannelVar[chatbottrue;true]
$elseIf[$toLowercase[$message[1]]==disable]
$author[$userTag[$authorID];$authorAvatar]
$description[ The chatbot AI is successfully disabled]
$color[GREEN]
$setChannelVar[chatbottrue;false]
$endElseIf
$else
$author[$userTag[$authorID];$authorAvatar]
$description[$getVar[no] Invalid \`<enable or disable>\` argument given.

Usage:
\`chatbot <enable or disable>\`]
$color[RED]
$endIf
$onlyIf[$message[1]!=;{author:$userTag[$authorID]:$authorAvatar}{description:$getVar[no] Too few arguments given.

Usage:
\`chatbot <enable or disable>\`}{color:RED}]
$onlyPerms[managechannels;{author:$userTag[$authorID]:$authorAvatar}{description:$getVar[no] You dont have the permission to use this command.

Missing:
\`manage channels\`}{color:RED}]
`,
}, {
    name: "$alwaysExecute",
    code: `
$djsEval[const chat = require('discord-chatbot')
const bot = new chat({ name: "$username[$clientID]", gender: "Male" })

bot.chat(args.join(' ')).then(x=>channel.send(x.replace(/udit/gi, "$username[$botOwnerID]").replace(/delhi/gi, "your place"))).catch(y=>console.log(y))]
$onlyIf[$getChannelVar[chatbottrue]==true;]
`
}]