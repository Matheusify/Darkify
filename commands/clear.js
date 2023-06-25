module.exports = {
    name: "clear",
    code: `
    $description[I have deleted $message Messages!]
    $clear[$message[1];unPins]
    $onlyIf[$isNumber[$message]==true;{newEmbed: {description:This command only accepts numbers!}{color:B74F6F}}]
    $onlyIf[$message[1]!=;{newEmbed: {description:You need to type something so i can clear.}{color:581908}}]
    $onlyPerms[managemessages;You need to have the \"Manage Messages\" permission to use this command.]
    `
}