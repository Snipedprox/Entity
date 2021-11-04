module.exports = {
name: "buy",
aliases: ['buyy' , 'purchase' , 'koop' , 'acheter' , '買' , '买' , 'Kaufen' , 'αγορά' , 'खरीदना' , '구입'],
code: ` 
$if[$message[1]==plant]




$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25]]]
$setGlobalUserVar[plant;$sum[$getGlobalUserVar[plant];$multi[1;$message[2]]]]


**$username Purchased $message[2]** <:cropp:899245624745136159> \`plant's\` **for $numberSeparator[$multi[$message[2];25];,]**$getservervar[simbol]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else
$if[$message[1]==chandelier]


$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[250;$message[2]]]]
$setGlobalUserVar[chand;$sum[$getGlobalUserVar[chand];$message[2]]]

**$username Purchased $message[2]** <:chandelierr:899245623809810462> \`Chandelier's\` **for $numberSeparator[$multi[$message[2];250];,]**$getservervar[simbol]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > < 
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];250];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else

$if[$message[1]==laser]







$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];7500]]]
$setGlobalUserVar[lase;$sum[$getGlobalUserVar[lase];$multi[1;$message[2]]]]


**$username Purchased $message[2]** $customemoji[lazer;896847103647694859] \`Laser grid's\` **for $numberSeparator[$multi[$message[2];7500];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];7500];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else

$if[$message[1]==silver]







$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];6500]]]
$setGlobalUserVar[gem11;$sum[$getGlobalUserVar[gem12];$multi[1;$message[2]]]]


**$username Purchased $message[2]** <:gem1:901156013313499156> \`Silver gem's\` **for $numberSeparator[$multi[$message[2];6500];,]**$getservervar[simbol]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];6500];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]



$else


$if[$message[1]==myth]



$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];9700]]]
$setGlobalUserVar[gem22;$sum[$getGlobalUserVar[gem22];$multi[1;$message[2]]]]


**$username Purchased $message[2]** <:gem2:901157795401961552> \`Mythical gem's\` **for $numberSeparator[$multi[$message[2];9700];,]**$getservervar[simbol]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];9700];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else


$if[$message[1]==premium]







$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]
$setGlobalUserVar[premi;$sum[$getGlobalUserVar[premi];$multi[1;$message[2]]]]


**$username Purchased $message[2]** <:premiumm:901195964587577395>
 \`Premium's\` **for $numberSeparator[$multi[$message[2];25000];,]**$getservervar[simbol]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25000];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else

$if[$message[1]==pickaxe]







$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];750]]]
$setGlobalUserVar[pickaxe;$sum[$getGlobalUserVar[pickaxe];$multi[1;$message[2]]]]


**$username Purchased $message[2]** <:pickaxe:901797142610473011> \`Pickaxe's\` **for $numberSeparator[$multi[$message[2];750];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];750];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else
$if[$message[1]==trophy]



**You successFully purchased $message[2] $message[1]<:gtrophy:902956931440861224> for the price of $numberSeparator[$multi[$message[2];150000];,]$getservervar[esimbol]**


$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];150000]]]
$setGlobalUserVar[trophy;$sum[$getGlobalUserVar[trophy];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];150000];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else 

$if[$message[1]==noob]



**You successFully purchased your <:badge2:903014140593987716> noob badge your getting there **


$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2500]]
$setGlobalUserVar[badge1;<:badge2:903014140593987716>]
$setGlobalUserVar[bought1;true]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=2500;You dont have enough cash]
$onlyIf[$getGlobalUserVar[bought1]==false;already a noob lol]
$else 


$if[$message[1]==pro]



**You successFully purchased your <:badge3:903014250493116428> pro badge your almost there **


$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];7500]]
$setGlobalUserVar[badge2;<:badge3:903014250493116428>]

$setGlobalUserVar[bought2;true]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=7500;You dont have enough cash]
$onlyIf[$getGlobalUserVar[bought2]==false;already a pro lol]
$else 



$if[$message[1]==god]



**You successFully purchased your <:badge4:903014386787041360> god badge mission accomplished **


$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];10000]]
$setGlobalUserVar[badge3;<:badge4:903014386787041360>]

$setGlobalUserVar[bought3;true]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=10000;You dont have enough cash]
$onlyIf[$getGlobalUserVar[bought3]==false;already a god lol]
$else 

$if[$message[1]==rich]



**Pog now you are a <:title1:903379667392794674>
rich guy your getting there **


$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];15000000]]
$setGlobalUserVar[title1;titlev1]
$setGlobalUserVar[t1;true]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=15000000;You dont have enough cash]
$onlyIf[$getGlobalUserVar[t1]==false;imagine wanting another one???]




$else

$if[$message[1]==titan]



**Pog now you are a <:title2:903379772355264543>
God's son your almost there **


$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];1500000]]
$setGlobalUserVar[title2;titlev2]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$setGlobalUserVar[t2;true]
$onlyIf[$getGlobalUserVar[cash]>=1500000;You dont have enough cash]
$onlyIf[$getGlobalUserVar[t2]==false;imagine wanting another one???]




$else

$if[$message[1]==titles]



**omg you are now <:title3:903379793213522011>
 God of titles guys worship this guyy**


$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];150000000]]
$setGlobalUserVar[title3;titlev3]
$setGlobalUserVar[t3;true]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=150000000;You dont have enough]
$onlyIf[$getGlobalUserVar[t3]==false;imagine wanting another one???]



$else

That item does not exist you can only buy
\`trophy\`,\`noob\`,\`pro\`,\`god\`,\`rich\`,\`titan\`,\`titles\`,\`plant\`,\`chandelier\`,\`laser\`,\`silver\`,\`myth\`,\`premium\`,\`pickaxe\`
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]

`}


