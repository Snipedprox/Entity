module.exports = ({
  name: "set-msg",
  aliases: ['setmsg'],
  code: `$setServerVar[welcomeMsg;$message]
  Successfully set your welcome message to \`$message\`.
  $onlyIf[$message!=;Input something for your welcome message to be]
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
})