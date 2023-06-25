module.exports = {
    name: "ban",
    code: `
    $channelSendMessage[$channelID;$username[$mentioned[1]] was successfully banned!]
    $ban[$guildID;$mentioned[1;false];0;$noMentionMessage]
    $sendDM[You were banned from $guildName[$guildID] for $noMentionMessage by $username[$authorID];$mentioned[1]]
    $onlyIf[$mentioned[1;false]!=;You need to mention someone to ban.]
    $onlyPerms[banmembers;You need to have the "Ban Members" permission to use this command!]
    `
}