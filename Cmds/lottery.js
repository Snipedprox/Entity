module.exports = {
name: "lottery",
code: `
$channelSendMessage[$channelID;you entered the 150k <:looott:901640510458974238>lottery and paid 250$getservervar[simbol] wait 1 day to get the results also please dont enter again thank you;no]
$useChannel[901639832093208626]
$userTag[$authorid] 
<@$authorID>
ID - $authorid

$setGlobalUserVar[lotto;true]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];250]]
$onlyIf[$getGlobalUserVar[cash]>=250;You dont have enough money]
$onlyIf[$getGlobalUserVar[lotto]==false;you already joined the lottery???]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`}