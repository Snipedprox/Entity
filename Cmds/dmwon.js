module.exports = {
name: "dmwon",
code: `
$senddm[$message;**you won the 150k lottery go check your balance!!!**]
   $setGlobalUserVar[lotto;false;$findUser[$message]]
$setGlobalUserVar[cash;$sum[$getGLobalUserVar[cash;$findUser[$message]];150000];$findUser[$message]]
]
$onlyForIDs[$botownerid;896846485805744168;]`
}