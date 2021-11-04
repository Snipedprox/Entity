module.exports = {
name: "hello",
code: `
**Hello :eyes:** 
$playSong[https://youtu.be/UGxTxW9Q3Ng;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`}