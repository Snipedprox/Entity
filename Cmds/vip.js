module.exports = ({
  name: "vip",
  code: `$color[RANDOM]
$title[<:vip:902993905006559252> | VIP - Info]
$description[What **VIP** gives **you**:
*Special commands:*
Farm money faster with \`vwork\` or \`vhourly\` 


**Buy:**
You can buy VIP using \`bevip\` for 100,000 $getservervar[simbol] 
Once you buy VIP it is with you forever!
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
 `
})