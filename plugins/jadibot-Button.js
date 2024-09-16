let media = 'https://qu.ax/vJHQ.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
await m.react('☁️');
let str = `𝐌𝐢𝐜𝐤𝐞𝐲 𝐁𝐨𝐭 - 𝐌𝐃`
await conn.sendButton(m.chat, `᥀·࣭࣪̇˖💫 𝗖𝗢𝗠𝗢 𝗗𝗘𝗦𝗘𝗔 𝗩𝗜𝗡𝗖𝗨𝗟𝗔𝗥\n\n• 𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗔 𝗨𝗡 𝗕𝗢𝗧𝗢𝗡.\n`, str, media, [
['Qr Bot 💫', '.serbotqr'],
['Code Bot 💫', '.serbotcode']], null, [
['Creador 💫', `https://wa.me/51926956637`]], estilo)}
handler.command = /^serbot$/i
export default handler
