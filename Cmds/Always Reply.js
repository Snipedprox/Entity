module.exports = ({
name:"$alwaysExecute",
code:`$setUserVar[exp;$sum[$getUserVar[exp];$random[4;8]]]
$cooldown[7s]
$onlyif[$getservervar[levelling]==true;]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`})