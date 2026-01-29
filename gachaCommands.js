import fs from "fs";
import path from "path";
import { downloadMediaMessage } from "@whiskeysockets/baileys";
import { loadUsers, saveUsers, initializeUser } from "./utils/users.js";

// -----------------
// Publicar personaje
// -----------------
export async function cmdPublicarGacha(sock, msg) {
  try {
    const from = msg.key?.remoteJid;
    const autor = msg.pushName || "Usuario";
    if (!from) return;

    const ctx = msg.message?.extendedTextMessage?.contextInfo;
    const quoted = ctx?.quotedMessage;
    if (!quoted) return sock.sendMessage(from, { text: "❌ RESPONDE a una imagen o video para publicar el personaje." });

    const media = quoted.imageMessage || quoted.videoMessage || quoted.documentMessage;
    if (!media) return sock.sendMessage(from, { text: "❌ Mensaje citado NO es media válida." });

    const buffer = await downloadMediaMessage(
      { message: quoted, key: { remoteJid: from, id: ctx.stanzaId, participant: ctx.participant } },
      "buffer"
    );
    if (!buffer) return sock.sendMessage(from, { text: "❌ No se pudo descargar la media." });

    const dir = "./gachas_imagenes";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    let ext = "jpg";
    if (media.mimetype?.includes("video")) ext = "mp4";

    const archivo = path.join(dir, `media_${Date.now()}.${ext}`);
    fs.writeFileSync(archivo, buffer);

    // Texto del comando: .gachas Nombre | Descripción | Género | Rareza | Anime
    let fullText = msg.message?.conversation || msg.message?.extendedTextMessage?.text || "";
    let contenido = fullText.replace(/^(\.gachas|#gachas)/i, "").trim();
    if (!contenido) return sock.sendMessage(from, { text: "❌ Escribí al menos el nombre del personaje." });

    let [nombre, descripcion, genero, rareza, anime] = contenido.split("|").map(s => s?.trim());

    const jsonPath = "./gachas.json";
    let data = [];
    if (fs.existsSync(jsonPath)) data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

    data.push({
      nombre: nombre || "Desconocido",
      descripcion: descripcion || "",
      genero: genero || "Desconocido",
      rareza: rareza || "Normal",
      anime: anime || "Desconocido",
      autor,
      imagen: archivo,
      fecha: new Date().toISOString()
    });

    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
    await sock.sendMessage(from, { text: `✅ Personaje ${nombre} publicado correctamente.` });

  } catch (err) {
    console.error(err);
    if (msg?.key?.remoteJid) await sock.sendMessage(msg.key.remoteJid, { text: "❌ Error publicando personaje." });
  }
}

// -----------------
// Obtener personaje al azar (#gacha)
// -----------------
export async function cmdGacha(sock, from, sender) {
  const jsonPath = "./gachas.json";
  if (!fs.existsSync(jsonPath)) return sock.sendMessage(from, { text: "❌ No hay personajes publicados aún." });

  const gachas = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  if (!gachas.length) return sock.sendMessage(from, { text: "❌ No hay personajes publicados." });

  const users = loadUsers();
  initializeUser(users, sender);

  const index = Math.floor(Math.random() * gachas.length);
  const personaje = gachas[index];

  // Guardar como lastRW
  users[sender].lastRW = personaje;
  saveUsers(users);

  const caption = `❀ Nombre » *${personaje.nombre}*
⚥ Género » *${personaje.genero || "Desconocido"}*
✰ Valor » *${personaje.rareza || "Normal"}*
♡ Estado » *Pendiente de reclamar*
❖ Fuente » *${personaje.anime || "Desconocido"}*`;

  if (personaje.imagen && fs.existsSync(personaje.imagen)) {
    const buffer = fs.readFileSync(personaje.imagen);
    if (personaje.imagen.endsWith(".mp4")) {
      await sock.sendMessage(from, { video: buffer, caption });
    } else {
      await sock.sendMessage(from, { image: buffer, caption });
    }
  } else {
    await sock.sendMessage(from, { text: caption });
  }
}

// -----------------
// Reclamar personaje (#claim)
// -----------------
export async function cmdGclaim(sock, from, sender) {
  const users = loadUsers();
  initializeUser(users, sender);

  const lastRW = users[sender].lastRW;
  if (!lastRW) {
    await sock.sendMessage(from, { text: `❌ ${sender}, primero haz #gacha para obtener un personaje.` });
    return;
  }

  users[sender].rw.push(lastRW);
  users[sender].lastRW = null;
  saveUsers(users);

  await sock.sendMessage(from, { text: `✅ ¡Has reclamado a ${lastRW.nombre} (${lastRW.rareza}) en tu colección!` });
}