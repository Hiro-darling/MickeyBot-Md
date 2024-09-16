
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://qu.ax/vJHQ.mp4'
m.react('💫')
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `+Bienvenido Al Apartado De Grupos Mickey Bot 💫+

*💫 Canal Oficial Mickey*
${canal}

*💫 Grupo Oficial Mickey*
${bgp4}
`
await conn.sendButton(m.chat, estado, '@yallico.owner', pp, [
['Mickey Owner 💫', '.owner'], ['Donar 💫', '.donat']], null, [['Canal 💫', `${canal}`]], m)
}
handler.help = ['grupos']
handler.tags = ['info']
handler.command = /^(grupos|groups|support?)$/i

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
