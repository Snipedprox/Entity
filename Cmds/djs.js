module.exports = {
name: "djs",
  code: `
$title[Discord.js Evaluation]
$author[$userTag[$authorID];$authorAvatar]
$description[
$addField[📤 Output:;\`\`\`js
$djsEval[(async () => {
try {
    return $message
} catch (error) {
    return error
}})();yes]\`\`\`;yes]
$addField[📥 Input:;\`\`\`js
$message\`\`\`;yes]
]
$color[BLUE]
$addTimestamp
$onlyForIDs[$botOwnerID;870441674525012018;896846485805744168;]
$suppressErrors
`}