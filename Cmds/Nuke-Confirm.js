module.exports = [{
name:"confirm",
type:"awaitedCommand",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A channel was nuked!:$authoravatar}{description:<@$authorid> nuked the channel with the name $channelname, and the new created channel was <#$splittext[1]>!}{color:FF0000}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$channelsendmessage[$splittext[1];{image:https#COLON#//media2.giphy.com/media/oe33xf3B50fsc/200.gif}{author:Nuked by $usertag!:$authoravatar}{color:FF0000}{timestamp};no]
$wait[1s]
$deletechannels[$getservervar[nc]]
$textsplit[$clonechannel[$getservervar[nc];yes]; ]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`}]