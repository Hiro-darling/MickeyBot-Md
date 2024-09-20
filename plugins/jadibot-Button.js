let media = 'https://qu.ax/EPuS.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
await m.react('☁️');
let str = `*Mickey Bot MD 💫*`
await conn.sendButton(m.chat, `Elije Que Método De Conexión Desea Usar 💫\n`, str, media, [
['Qr 💫', '.serbotqr'],
['Code 8 Digitos 💫', '.serbotcode']], null, [
['Creador 💫', `https://wa.me/51926956637`]], estilo)}
handler.command = /^serbot$/i
export default handler
