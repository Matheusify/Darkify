module.exports = {
    name: "unban",
    code: `
    $username[$message[1]] was unbanned successfully!
    $unban[$guildID;$message[1]]
    $onlyIf[$isNumber[$message[1]]==true;{newEmbed: {description:This command only accepts numbers!}{color:B74F6F}}]
    $suppressErrors[You need to type a user id!]
    $onlyPerms[banmembers;You need to have the "Ban Members" permission to use this command!]
    `
}