module.exports = {
name: "pingme",
code: `
**Get pinged nerds** 
$playSong[https://youtu.be/qnIbmE5ggI4;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`}