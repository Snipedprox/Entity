module.exports = [{
    name: "define",
    aliases: ['urban'],
    code: `
\`\`\`kt
$djsEval[require('relevant-urban')("$message").then(d=>d.definition);yes]
\`\`\`
Ex:
\`\`\`kt
$djsEval[require('relevant-urban')("$message").then(bruh => bruh.example);yes]
\`\`\`
$onlyIf[$djsEval[require('relevant-urban')("$message").then(uwu => uwu.sounds);yes]==null;{execute:define}]
$onlyIf[$djsEval[require('relevant-urban')("$message").then(uwu => uwu.example);yes]!=;{execute:define2}]
$onlyIf[$charCount[$djsEval[require('relevant-urban')("$message").then(uwu => uwu.definition);yes]]<=2000;{execute:define3}]
$onlyIf[$djsEval[require('relevant-urban')("$message").then(uwu => uwu.definition);yes]!=undefined;Couldn't find a definition for you]
$onlyIf[$message!=;Empty message? Then I cant find a definition for you]
$suppressErrors
`,
}, {
    type: "awaitedCommand",
    name: "define",
    code: `
\`\`\`kt
$djsEval[require('relevant-urban')("$message").then(d => d.definintion);yes]
\`\`\`
Ex:
\`\`\`kt
$djsEval[require('relevant-urban')("$message").then(bruh => bruh.example);yes]
\`\`\`
$attachment[$djsEval[require('relevant-urban')("$message").then(lol => lol.sounds)]]
$suppressErrors
`,
}, {
    type: "awaitedCommand",
    name: "define2",
    code: `
\`\`\`kt
$djsEval[require('relevant-urban')("$message").then(d => d.definition);yes]
\`\`\`
$suppressErrors
`,
}, {
    type: "awaitedCommand",
    name: "define3",
    code: `
$createFile[$djsEval[require('relevant-urban')("$message").then(d => d.definition);yes]
$replaceText[$replaceText[$checkCondition[$get[death]==];true;];false;ex:]
$get[death]
;definition.txt]
$let[death;$djsEval[require('relevant-urban')("$message").then(bruh => bruh.example);yes]]
$suppressErrors
`
}]