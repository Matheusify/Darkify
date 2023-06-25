module.exports = {
    name: "setprefix",
    code: `
    $description[My prefix is now \`$message\`]
    $setGuildVar[prefixa;$message;$guildID]
    $argsCheck[<=3;{newEmbed: {description:My prefix need to be less then 4 characters.}{color:44355B}}]
    $onlyIf[$message[1]!=;{newEmbed: {description:You need to type something to set as my prefix!}{color:581908}}]
    $onlyPerms[manageguild;You need to have the \"Manage Server\" permission to use this command.]
    `
}