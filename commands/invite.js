module.exports = {
    name: "invite",
    description: "Sends the invite link for the bot.",
    async execute(client, message, args) {
        return message.channel.send("Here is my invite link: https://discordapp.com/oauth2/authorize?client_id=685159987638435861&scope=bot&permissions=347136");
    }
}