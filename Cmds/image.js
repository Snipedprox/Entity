module.exports = [{
    name: "image",
    aliases: ['search', 'imagesearch'],
    code: `
$djsEval[ 
require('g-i-s')("$message", logResults)

async function logResults(error, results) {
	if (error) {
    	const { MessageEmbed } = require('discord.js')

        const embed = new MessageEmbed()
            .setAuthor("$userTag", "$authorAvatar")
            .setDescription("$getVar[no]  An error occured, please try again")
            .setColor("RED")
            .setFooter(error)

        channel.send(embed)
    } else {
        let length = results.length
        let number = 0

        let isDisable = false

        if (length === 1) isDisable = true

        const { MessageEmbed } = require('discord.js')
        const { MessageButton, MessageActionRow } = require('discord-buttons')

        const embed2 = new MessageEmbed()
            .setAuthor("$userTag", "$authorAvatar")
            .setImage(results[0].url)
            .setFooter(\`Page \$\{number + 1\}\/\$\{length\}\`)
            .setColor("BLUE")

        let left = new MessageButton()
            .setEmoji("$advancedTextSplit[$getVar[bleft];|;2]")
            .setStyle("blurple")
            .setID("imageleft")
            .setDisabled(true)

        let close = new MessageButton()
            .setEmoji("$advancedTextSplit[$getVar[bno];|;2]")
            .setStyle("red")
            .setID("imageclose")

        let right = new MessageButton()
            .setEmoji("$advancedTextSplit[$getVar[bright];|;2]")
            .setStyle("blurple")
            .setID("imageright")
            .setDisabled(isDisable)

        let row = new MessageActionRow()
            .addComponents(left, close, right)
        
        const msg = await message.channel.send(embed2, row)

        client.db.set('main', \`imageauthor_\$\{msg.id\}\`, author.id)
        client.db.set('main', \`imageresult_\$\{msg.id\}\`, JSON.stringify(results, null, ' '))
        client.db.set('main', \`imagelength_\$\{msg.id\}\`, length)
        client.db.set('main', \`imagenumber_\$\{msg.id\}\`, number)
        client.db.set('main', \`imagepage_\$\{msg.id\}\`, number + 1)
    }
}]
$botTyping
$suppressErrors
$onlyIf[$message!=;Empty message, really?]
$onlyIf[$toLowercase[$message[1]]!=alconera130;]
$globalCooldown[10s;{author:$userTag[$authorID]:$authorAvatar}{description:⏱️ You cannot use this command for 10 seconds, %time% left.}{color:BLUE}]
`,
}, {
    type: "interactionCommand",
    prototype: "button",
    name: "imageleft",
    code: `
$setMessageVar[imagenumber;$sub[$getMessageVar[imagenumber;$get[id]];1];$get[id]]
$setMessageVar[imagepage;$sub[$getMessageVar[imagepage;$get[id]];1];$get[id]]
$interactionReply[;{author:$userTag:$authorAvatar:}
{image:$get[url]}
{footer:Page $sub[$getMessageVar[imagepage;$get[id]];1]/$getMessageVar[imagelength;$get[id]]:}
{color:3A97D4};{actionRow:,2,1,imageleft,$getVar[bleft],$get[left]:,2,4,imageclose,$getVar[bno],false:,2,1,imageright,$getVar[bright],false};0;7]
$let[left;$replaceText[$replaceText[$checkCondition[$sub[$getMessageVar[imagepage;$get[id]];1]==1];true;true];false;false]]
$let[url;$djsEval[$getMessageVar[imageresult;$get[id]][$getMessageVar[imagenumber;$get[id]] - 1].url;yes]]
$onlyIf[$interactionData[author.id]==$getMessageVar[imageauthor;$interactionData[message.id]];]
$let[id;$interactionData[message.id]]
$suppressErrors
`,
}, {
    type: "interactionCommand",
    prototype: "button",
    name: "imageright",
    code: `
$setMessageVar[imagenumber;$sum[$getMessageVar[imagenumber;$get[id]];1];$get[id]]
$setMessageVar[imagepage;$sum[$getMessageVar[imagepage;$get[id]];1];$get[id]]
$interactionReply[;{author:$userTag:$authorAvatar:}
{image:$get[url]}
{footer:Page $sum[$getMessageVar[imagepage;$get[id]];1]/$getMessageVar[imagelength;$get[id]]:}
{color:3A97D4};{actionRow:,2,1,imageleft,$getVar[bleft],false:,2,4,imageclose,$getVar[bno],false:,2,1,imageright,$getVar[bright],$get[right]};0;7]
$let[right;$replaceText[$replaceText[$checkCondition[$sum[$getMessageVar[imagepage;$get[id]];1]==$getMessageVar[imagelength;$get[id]]];true;true];false;false]]
$let[url;$djsEval[$getMessageVar[imageresult;$get[id]][$getMessageVar[imagenumber;$get[id]] + 1].url;yes]]
$onlyIf[$interactionData[author.id]==$getMessageVar[imageauthor;$interactionData[message.id]];]
$let[id;$interactionData[message.id]]
$suppressErrors
`,
}, {
    type: "interactionCommand",
    prototype: "button",
    name: "imageclose",
    code: `
$deleteMessage[$interactionData[message.id]]
$onlyIf[$interactionData[author.id]==$getMessageVar[imageauthor;$interactionData[message.id]];]
$suppressErrors
`
}]