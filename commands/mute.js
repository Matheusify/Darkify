module.exports = {
    name: "mute",
    code: `
    $username[$mentioned[1]] was Muted for $message seconds!
    $setTimeout[timeoutCommand;$message[2]s;{ "channelID": $channelID}]
    $timeoutMember[$guildID;$mentioned[1];$message[2]]
    $onlyIf[$mentioned[1;false]!=;You need to mention someone first!]
    $onlyIf[$message[2]!=;You need to setup a time to timeout someone!]
    $onlyIf[$isNumber[$message[2]]==true;{newEmbed: {description:you need to type a time to timeout someone.}{color:B74F6F}}]
    $onlyPerms[managemessages;You need to have the \"Manage Messages\" permission to use this command.]
    `
}