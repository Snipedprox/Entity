module.exports = [{
    name: "func",
    aliases: ['functions', 'commandlist'],
    code: `
$title[$get[name];https://npmjs.com/package/aoi.js]
$thumbnail[https://media.discordapp.net/attachments/852052322045001740/868139372048953364/9438025f5847afab3a2ca040076b23f5.png]
$description[\`\`\`
$get[desc]
\`\`\`
$addField[Usage:;\`\`\`
$get[usage]
\`\`\`
[Click me for documentation]($get[link])]
]
$color[BLUE]
$footer[Aoi.js Version: 4.2.1 latest]
$onlyIf[$get[name]!=$get[usage];{execute:function}]
$onlyIf[$get[usage]!=Error 404 Function not found;{author:$userTag[$authorID]:$authorAvatar}{description:$getVar[no] The function \`$message[1]\` does not exist}{color:RED}]
$onlyIf[$checkCondition[$message[1]!=]$isNumber[$message[1]]!=falsefalse;{execute:function2}]
$let[link;https://aoi.leref.ga/functions/$toLowercase[$replaceText[$get[name];$;usd]]]
$let[desc;$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].desc;]]
$let[name;$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].name;]]
$let[usage;$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].usage;{author:$userTag[$authorID]:$authorAvatar}{description:$getVar[no] The function \`$message\` does not exist}{color:RED}]]
$onlyIf[$stringStartsWith[$message[1];$]==true;{execute:function3}]
$onlyIf[$isNumber[$message[1]]!=true;{execute:function2}]
$onlyIf[$message[1]!=;{execute:function3}]
`,
}, {
    type: "awaitedCommand",
    name: "function",
    code: `
$title[$get[name];https://npmjs.com/package/aoi.js]
$thumbnail[https://media.discordapp.net/attachments/852052322045001740/868139372048953364/9438025f5847afab3a2ca040076b23f5.png]
$description[\`\`\`
$get[desc]
\`\`\`
[Click me for documentation]($get[link])]
$color[BLUE]
$footer[Aoi.js Version: 4.2.1 latest]
$let[link;https://aoi.leref.ga/functions/$replaceText[$get[name];$;usd]]
$let[desc;$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].desc]]
$let[name;$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].name]]
`,
}, {
    type: "awaitedCommand",
    name: "function2",
    code: `
$title[Aoi.JS - Command List Aoi.JS Version: 4.2.1 latest;https://npmjs.com/package/aoi.js]
$thumbnail[https://media.discordapp.net/attachments/852052322045001740/868139372048953364/9438025f5847afab3a2ca040076b23f5.png]
$description[
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[0].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[1].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[2].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[3].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[4].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[5].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[6].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[7].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[8].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[9].usage]
]
$color[BLUE]
$footer[Page $get[msg] of $jsonRequest[https://api.leref.ga/functions?limit=10&page=1;pages].
Displayed 10 of $jsonRequest[https://api.leref.ga/functions?limit=10&page=1;length].
Use $getServerVar[prefix]commandlist $<function> to get more information.
]
$let[msg;$replaceText[$replaceText[$checkCondition[$message[1]==];true;1];false;$message[1]]]
$onlyIf[$message[1]<=$jsonRequest[https://api.leref.ga/functions?limit=10&page=1;pages];{execute:function3}]
$onlyIf[$message[1]!=;{execute:function3}]
`,
}, {
    type: "awaitedCommand",
    name: "function3",
    code: `
$title[Aoi.JS - Command List Aoi.JS Version: 4.2.1 latest;https://npmjs.com/package/aoi.js]
$thumbnail[https://media.discordapp.net/attachments/852052322045001740/868139372048953364/9438025f5847afab3a2ca040076b23f5.png]
$description[
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[0].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[1].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[2].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[3].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[4].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[5].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[6].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[7].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[8].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[9].usage]
]
$color[BLUE]
$footer[Page $get[msg] of $jsonRequest[https://api.leref.ga/functions?limit=10&page=1;pages].
Displayed 10 of $jsonRequest[https://api.leref.ga/functions?limit=10&page=1;length].
Use $getServerVar[prefix]commandlist $<function> to get more information.
]
$let[msg;1]
`
}]
