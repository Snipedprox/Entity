module.exports = ({
 name: "use", 
 code:  `
$if[$message==laser]
$author[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
 $description[**$customemoji[greetick;896847103647694859] Success:** <@$authorID> You've claimed laser boost for 1 hour**]
 $color[GREEN]
$setGlobalUserVar[lasere;true;$authorID]
$setTimeout[1h;
userID: $authorID]
 $setGlobalUserVar[lase;$sub[$getGlobalUserVar[lase];1]
 $onlyIf[$getGlobalUserVar[lase]>=1;You dont have any lasers]
$onlyIf[$getGlobalUserVar[lasere;$authorID]==false;**⛔ You have already laser boosted**]
$else
$if[$message==silver]
$author[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
 $description[** Successfully enabled your **<:gem1:901156013313499156>
**Silver gem expires after 1 week**]
 $color[GREEN]
$setGlobalUserVar[gem1on;on;$authorID]
$setTimeout[1w;
userID: $authorID]
 $setGlobalUserVar[gem11;$sub[$getGlobalUserVar[gem11];1]
 $onlyIf[$getGlobalUserVar[gem11]>=1;You dont have any <:gem1:901156013313499156> Silver gems]
$onlyIf[$getGlobalUserVar[gem1on;$authorID]==off;**⛔ You have already have it on**]


$else

$if[$message==myth]
$author[$username[$authorID]#$discriminator[$authorID];https://images-ext-2.discordapp.net/external/swRdKls7P6ywC1LugeV80TdPKLPFPKI_9XRttmdAjRU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/899810192621961216/385798d1182bf64e110229bc560c3d75.webp?width=83&height=83]
 $description[
Successfully enabled your <:gem2:901157795401961552>
mythical gem expires after 1 week   
 ]
 $color[GREEN]
$setGlobalUserVar[gem2on;on;$authorID]
$setTimeout[1w;
userID: $authorID]
 $setGlobalUserVar[gem22;$sub[$getGlobalUserVar[gem22];1]
 $onlyIf[$getGlobalUserVar[gem22]>=1;You dont have any <:gem2:901157795401961552> Mythical gems]
$onlyIf[$getGlobalUserVar[gem2on;$authorID]==off;**⛔ You have already have it enabled**]


$else

$if[$message==premium]
$author[$username[$authorID]#$discriminator[$authorID];https://images-ext-2.discordapp.net/external/swRdKls7P6ywC1LugeV80TdPKLPFPKI_9XRttmdAjRU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/899810192621961216/385798d1182bf64e110229bc560c3d75.webp?width=83&height=83]
 $description[**You claimed 1<:premiumm:901195964587577395>
 premium point]
 $color[GREEN]
$setGlobalUserVar[prem;true;$authorID]
$setTimeout[1w;
userID: $authorID]
 $setGlobalUserVar[premi;$sub[$getGlobalUserVar[premi];1]
 $onlyIf[$getGlobalUserVar[premi]>=1;You dont have any premium points]
$onlyIf[$getGlobalUserVar[prem;$authorID]==false;**⛔ You have already claimed your premium**]
$else
you cant use that item you can only use
\`laser\`,\`silver\`,\`myth\`,\`premium\`
$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
})
 

 