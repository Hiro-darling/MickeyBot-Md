let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `☁️ *EQUIPO DE MICKEY BOT*
☕ *Bot:* ${global.botname}
☕ *Versión:* ${global.vs}

💫 *Propietario:* 💫

• Mickey
☁️ *Rol:* Propietario
☁️ *Número:* ${creador}
☁️ *GitHub:* https://github.com/MickeyVipPro

💫 *Colaborador:* 💫

• Angelito
☁️ *Rol:* Colab
☁️ *GitHub:* https://github.com/Angelito-OFC`
await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `☁️ Colaborador ☁️`,
body: `💫 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaborador', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
