module.exports = ({
  name: "welcome",
  aliases: ['setwelcomechannel'],
  code: `$setServerVar[welcomeChannel;$mentionedChannels[1]]
  Successfully set your welcome channel to <#$mentionedChannels[1]>
  $onlyIf[$mentionedChannels[1]!=;Mention a channel to set as your welcome channel]
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
})