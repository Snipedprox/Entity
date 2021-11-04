module.exports = {
name: "call",
code: `
**Answer the call**
$playSong[https://youtu.be/eb1nc8an6N0;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`}