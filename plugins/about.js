const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ʟᴇɢᴇɴᴅ ᴍᴅ-ʙᴏᴛ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ: ᴍʀ ʟᴇɢᴇɴᴅ*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ ᴍᴜɴᴇᴇʙ ᴀʟɪ *
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ᴍʀ ʟᴇɢᴇɴᴅ*
*│  ◦* *ᴀɢᴇ➠ 18 ʏᴇᴀʀs*
*│  ◦* *ғʀᴏᴍ: ᴘᴀᴋɪsᴛᴀɴ *
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ-ʙᴏᴛ ᴅᴇᴠᴇʟᴏᴘᴇʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • LEGEND-MD - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢☞Owner:ᴍʀ ʟᴇɢᴇɴᴅ*
*│  ◦* *▢☞Co-Owner:ᴡᴀʟᴋ ᴅʀᴏᴠᴇ
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ʟᴇɢᴇɴᴅ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
