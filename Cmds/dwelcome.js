module.exports = ({
name: "dwelcome",
code: `Successfully disabled welcome messages for this guild! To enable them again, do \`$getServerVar[prefix]setwelcomechannel <#channel>\`.
$djseval[//if you dont use a customisable prefix system, replace $getServerVar[prefix] with your bot's prefix]
$resetServerVar[welcomeChannel]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
})