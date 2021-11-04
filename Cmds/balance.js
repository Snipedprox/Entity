module.exports = {
name: "bal",
aliases: ['balance','cash','money','coins','coin','wallet','networth'],
code: `
$author[$username[$findMember[$message]];$replaceText[$replaceText[$userAvatar[$findMember[$message]];null;$serverIcon];$servericon;null;$userAvatar[$clientid]]]
$footer[Requested by $userTag[$authorid];https://media.discordapp.net/attachments/904055071300542466/905862377541611601/aoiblue.webp]
$thumbnail[$replaceText[$replaceText[$userAvatar[$findMember[$message]];null;$serverIcon];$servericon;null;$userAvatar[$clientid]]]
$color[29befb]
$description[
**Cash:** \`$numberSeparator[$getGlobalUserVar[cash;$findMember[$message]];,]\`$getServerVar[simbol]

**Bank:** \`$numberSeparator[$getGlobalUserVar[bank;$findMember[$message]];,]\`$getServerVar[simbol]

**Net Worth:** \`$numberSeparator[$sum[$getGlobalUserVar[bank;$findMember[$message]];$getGlobalUserVar[cash;$findMember[$message]]];,]\`$getServerVar[simbol]]
$onlyif[$memberExists[$findMember[$message]]==true;**The member** \`$message\` **does not exist**]
$onlyIf[$isBot[$findMember[$message]]!=true;<:sender:904162273650704414> **bots dont have any amount of moeny and they do not need it**]`}
