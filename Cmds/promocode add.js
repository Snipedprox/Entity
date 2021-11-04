module.exports = {
name: "promo",
aliases: ['promoadd','addpromo'],
code: ` 
$channelSendMessage[$channelID;**Successfully gave $userTag[$findUser[$message]] their promocode check your dms for the promocode**]
$senddm[$authorID;**Their promocode is** ||$randomString[8]|| **do not share this with anyone else**]

$senddm[$findUser[$message];<:sender:904162273650704414> **Hello $userTag[$mentioned[1;yes]] one of my devs gave you a promocode here you go** ||$randomString[8]||]

$setVar[promocode;$randomString[8];$findUser[$message]]]





$onlyForIDS[$botownerid;896846485805744168;$getServerVar[serverdev];$customEmoji[bomb;904055070784622593] Only my developers can use this command or a \`Server developer\` that has been assigned by my owner other than that nobody else can use this command]`}