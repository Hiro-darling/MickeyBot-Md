let media = 'https://qu.ax/vJHQ.mp4'
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let str = `
*Estas Son Las Redes Oficial De Megatron Bot 🤖*

*WhatsApp Oficial :* Wa.me/51926956637

*Instagram Oficial :* https://www.instagram.com/yallico.owner

*Facebook Oficial :* https://www.facebook.com/profile.php?id=100094780575612

*PayPal Oficial :* https://paypal.me/YallicoPe
`
await conn.sendButton(m.chat, str, `` + wm, media, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🤖', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 🤖', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 🤖', '/menu']], null, [
['𝘿𝙤𝙣𝙖𝙧 🤖', `https://paypal.me/YallicoPe`]], fkontak)}
/*conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": `𝙈𝙀𝙂𝘼𝙏𝙍𝙊𝙉 𝘽𝙊𝙏 𝙋𝙍𝙊`, 
body: ig, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": paypal, 
}}}, { quoted: fkontak })}*/
/*conn.sendHydrated(m.chat, str, `𝙈𝙀𝙂𝘼𝙏𝙍𝙊𝙉 𝘽𝙊𝙏 𝙋𝙍𝙊\n${asistencia}\n\n` + wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
handler.command = /^redes|redes$/i
handler.exp = 80
export default handler
