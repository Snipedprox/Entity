module.exports = ({
  name: "dehoist",
  code: `
  $suppressErrors
  $if[$checkContains[$username[$mentioned[1]];!;/;.]==true]
    Successfully dehoisted $username[$mentioned[1]]!
    $changeNickname[$mentioned[1];$replaceText[$replaceText[$replaceText[$username[$mentioned[1]];!;;-1];/;;-1];.;;-1]]
  $elseif[$checkContains[$nickname[$mentioned[1]];!;/;.]==true]
    Successfully dehoisted $username[$mentioned[1]]!
    $changeNickname[$mentioned[1];$replaceText[$replaceText[$replaceText[$nickname[$mentioned[1]];!;;-1];/;;-1];.;;-1]]
  $argsCheck[>1;Mention a user to dehoist]
  $onlyPerms[managenicknames;You need the \`MANAGE_NICKNAMES\` permission in order to use this]
  $endelseif
  $endif
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
  `
})