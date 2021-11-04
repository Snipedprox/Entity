module.exports = {
name: "$alwaysExecute",
code: `
$if[$message==$getUserVar[beg]]
<:bomb:904159339827327006> **You escaped just in time you found $random[40;900]$getservervar[simbol] in his wallet**
$setuservar[beg;f686f6f7fjhgh67676878gg65g83gtybrjhhjjg7t7]
$else
$setglobalUservar[cash;15000000000000000000000000000000000000000000;$clientid]
$endif`
}

