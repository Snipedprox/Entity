module.exports = {
name: "promocode",
code: `
$if[$message==$getVar[promocode]]
<a:levelup:899245630243893269> **Hooray you claimed your promocode you earned

+** \`$random[506;9000]\`$getservervar[simbol]

**+** \`$random[506;900]\`$getservervar[esimbol]




$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[506;9000]]]



$setGlobalUserVar[ecash;$sum[$getGlobalUserVar[ecash];$random[506;900]]]

$setVar[promocode; ]

$else
$author[Promocode error;https://cdn.discordapp.com/emojis/904162273650704414.png?size=128]
$thumbnail[https://cdn.discordapp.com/emojis/904162273650704414.png?size=128]
$color[RED]
$description[**Error the promocode** \`$message\` **could not be found this error occured because**
<:wifi:904370605871210537> The promocode might be used
<:bomb:904159339827327006> The promocode is destroyed
<:misc:904340351999959101> The promocode does not exist]
$endif`}