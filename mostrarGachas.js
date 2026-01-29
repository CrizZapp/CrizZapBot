import fs from "fs";

export async function handleMostrarGachas(sock, msg) {
  try {
    const from = msg.key?.remoteJid;
    if (!from) return;

    const filePath = "./gachas.json";
    if (!fs.existsSync(filePath)) return sock.sendMessage(from, { text: "❌ No hay personajes publicados." });

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (!data.length) return sock.sendMessage(from, { text: "❌ No hay personajes publicados." });

    for (const item of data) {
      const caption = `❀ Nombre » *${item.nombre}*
⚥ Género » *${item.genero}*
✰ Valor » *${item.rareza}*
♡ Estado » *Libre*
❖ Fuente » *${item.anime}*
👤 Publicado por » *${item.autor}*
🗓 Fecha » ${new Date(item.fecha).toLocaleString()}`;

      if (item.imagen && fs.existsSync(item.imagen)) {
        const buffer = fs.readFileSync(item.imagen);
        if (item.imagen.endsWith(".mp4")) {
          await sock.sendMessage(from, { video: buffer, caption });
        } else {
          await sock.sendMessage(from, { image: buffer, caption });
        }
      } else {
        await sock.sendMessage(from, { text: caption });
      }
    }

  } catch (err) {
    console.error(err);
    if (msg?.key?.remoteJid) await sock.sendMessage(msg.key.remoteJid, { text: "❌ Error mostrando personajes." });
  }
}