module.exports = {
    name: "meme",
    code: `
$if[$jsonRequest[https://meme-api.herokuapp.com/gimme;nsfw]!=true]
$editMessage[$get[id];{title:$jsonRequest[https://meme-api.herokuapp.com/gimme;title;]}
{url:$jsonRequest[https://meme-api.herokuapp.com/gimme;postLink;]}
{image:$jsonRequest[https://meme-api.herokuapp.com/gimme;url;]}
{color:RANDOM}]
$wait[0.$random[2;4]s]
$let[id;$sendMessage[<a:loading:819146602903896064>;yes]]
$else
$editMessage[$get[id];{title:$jsonRequest[https://meme-api.herokuapp.com/gimme;title;]}
{url:$jsonRequest[https://meme-api.herokuapp.com/gimme;postLink;]}
{image:$jsonRequest[https://meme-api.herokuapp.com/gimme;url;]}
{color:RANDOM}]
$wait[0.$random[2;4]s]
$let[id;$sendMessage[<a:loading:819146602903896064>;yes]]
$onlyNSFW[The requested meme contains NSFW so I wont show it]
$endIf
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
} 
