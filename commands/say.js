module.exports = {
    name: "say",
    code: `
    $message
    $deletecommand
    $disableMentionType[everyone]
    $channelSendMessage[1122325368217546762;{newEmbed: {title:Say Logs}{description:Message sent: $noMentionMessage
    User: $username[$authorID]}{color:41337A}}]
    `
}