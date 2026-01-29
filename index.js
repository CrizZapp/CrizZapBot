process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);
import makeWASocket, {
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  DisconnectReason,
  generateForwardMessageContent,
  generateWAMessageFromContent
} from "@whiskeysockets/baileys";
import { Boom } from "@hapi/boom";
import readline from "readline";
import { translate } from '@vitalets/google-translate-api';
import { cmdToIGif } from "./commands/toigif.js";
import { cmdToImg } from "./commands/toimg.js";
import chalk from "chalk";
import pino from "pino";
import { isBanned } from "./utils/ban.js";
import { mafiaCommand, mafiaDB } from "./games/mafia.js";



import { cmdPublicarGacha, cmdGacha, cmdGclaim } from "./gachaCommands.js";


import { exec } from "child_process";
import OpenAI from "openai";

import cmdTranslate from './commands/translate.js';
import { cmdToIVideo } from "./commands/toivideo.js";

// Crear instancia con tu API Key
const channelInfo = {
    isForwarded: true,
    forwardingScore: 2,
    forwardedNewsletterMessageInfo: {
        newsletterJid: "120363422781423966@newsletter",
        newsletterName: "🌹CrizZapp🌹",
        serverMessageId: 1
    }
};
//pwpepdkd9d
const openai = new OpenAI({
  apiKey: "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"
});
import { menuText, menuImage } from "./menu.js";
import { cmdPerfil } from './commands/perfil.js';
import * as economia from './utils/economy.js';
import cmdTts from "./commands/tts.js";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import { cmdTienda, cmdComprar, cmdApoyar } from "./utils/shop.js";
import { cmdSetBio } from "./commands/setbio.js";
import axios from 'axios';
import { load } from 'cheerio';
const owner = "74694329925676@lid";
import figlet from "figlet";
import {
  personajes,
  cmdRW,
  cmdClaim,
  cmdColeccion,
  cmdBoost,
  cmdGift,
  cmdVender,
  cmdVerTiendarw,
  cmdComprarrw
} from "./commands/rw.js";
import { messageStore } from "./messageStore.js";
import { loadUsers, saveUsers, initializeUser } from './utils/users.js';
import { cmdMeme } from "./commands/meme.js";
import { mascota, adoptar, alimentar, jugar, dormir, verMascota } from './mascota.js';

// Lee tu propio index.js
const indexFile = fs.readFileSync("./index.js", "utf-8");

// Extrae todos los comandos
const comandos = [...indexFile.matchAll(/case\s+"(.+?)"/g)].map(m => m[1]);
// Al inicio de tu index.js
import ytSearch from 'yt-search';
import ytdl from 'ytdl-core';
const OWNER = "74694329925676@lid";
import { nsfwHandler } from "./commands/nsfw.js";
import { antiDelete } from "./antidelete.js";

// Función universal para descargar media SIN usar sock.*
global.nsfwGroups = global.nsfwGroups || {};

if (fs.existsSync("./nsfw.json")) {
    global.nsfwGroups = JSON.parse(fs.readFileSync("./nsfw.json"));
}

function saveNSFW() {
    fs.writeFileSync("./nsfw.json", JSON.stringify(global.nsfwGroups, null, 2));
}

// ⬆️ ARRIBA DEL TODO, antes del sock.ev.on

function saludoPorHora() {
    const hora = new Date().getHours();

    if (hora >= 0 && hora < 6) {
        return "🌃 Mejor Duerme, es tarde";
    } else if (hora >= 6 && hora < 12) {
        return "🌅 Buenos días";
    } else if (hora >= 12 && hora < 18) {
        return "☀️ Buenas tardes";
    } else {
        return "🌙 Buenas noches";
    }
}

//psñd
async function descargarMedia(msg) {
    const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;

    const media =
        msg.message?.imageMessage ||
        msg.message?.videoMessage ||
        quoted?.imageMessage ||
        quoted?.videoMessage;

    if (!media) return null;

    const type = media.mimetype.startsWith("video") ? "video" : "image";
    const stream = await downloadContentFromMessage(media, type);

    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    return buffer;
}
//pepe
import { downloadContentFromMessage } from "@whiskeysockets/baileys";

async function getFileBufferBaileys(message) {
    const type = Object.keys(message)[0]; 
    const stream = await downloadContentFromMessage(
        message[type],
        type.replace("Message", "")
    );
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
}
//XD
// Usuarios muteados por grupo
const mutedUsers = new Set();
// key: groupJid
// value: Set de usuarios muteados
//j
async function getBuffer(url) {
    const res = await axios.get(url, { responseType: "arraybuffer" });
    return Buffer.from(res.data);
}
// Objeto para guardar estado del antilink 
async function resumirTexto(texto) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini", // puedes usar gpt-4o-mini o gpt-4o
    messages: [
      { role: "system", content: "Eres un asistente que resume textos." },
      { role: "user", content: texto }
    ],
    max_tokens: 200
  });

  return response.choices[0].message.content;
}
//por grupo
let welcomeStatus = {}; // { "id_grupo": true/false }
let antilinkStatus = {}; // ejemplo: { "120363403524067469@g.us": true }
let giftActive = false;
let giftedCharacter = null;

let byeStatus = {};

let giftEndsAt = null;
// Objeto para guardar el estado de los juegos por usuario o chat
let juegos = {}; // <--- esto es clave
// Luego en tu manejador de comandos:

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));
const gruposBaneados = new Set();
const nombresUsuarios = {};  // <-- Declaración global UNA sola vez

export async function cmdPing(sock, from) {
  const start = Date.now();

  const sentMsg = await sock.sendMessage(from, {
    text: "⏱️ Calculando ping...",
  });

  const ping = Date.now() - start;

  await sock.sendMessage(from, {
    text: `🏓 *Ping:* ${ping}ms\n⚡ Latencia estable.`,
    edit: sentMsg.key,
  });
}
// ======================
// ESTADO PERSISTENTE
try {
    const data = fs.readFileSync('./status.json', 'utf-8');
    const parsed = JSON.parse(data);
    welcomeStatus = parsed.welcomeStatus || {};
    byeStatus = parsed.byeStatus || {};
    antilinkStatus = parsed.antilinkStatus || {};
} catch {
    console.log("No se encontró status.json, se creará uno nuevo.");
}

function saveStatus() {
    fs.writeFileSync(
        './status.json',
        JSON.stringify({ welcomeStatus, byeStatus, antilinkStatus }, null, 2)
    );
}

async function startBot() {
  console.clear();
  figlet('Cris Bot Base', (err, data) => {
  if (err) {
    console.log('Error creando arte ASCII');
    console.error(err);
    return;
  }
  console.log(data); // Esto imprime las letras grandes en consola

  console.log("🔥 Iniciando Cris-Base"); // Tu mensaje normal
});

  const { state, saveCreds } = await useMultiFileAuthState("./session");
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    browser: ["Ubuntu", "Chrome", "20.0.0"],
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" })),
    },
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    syncFullHistory: false,
  });
//pepe
sock.ev.on("group-participants.update", async (update) => {
    const { id, participants, action } = update;


if (!byeStatus[id]) return;
if (action !== "remove") return;

for (let user of participants) {

    const jid = typeof user === "string" ? user : user.id;
    const nombre = jid.split("@")[0];

    // ----- FOTO DE PERFIL -----
    let perfil;
    try {
        const url = await sock.profilePictureUrl(jid, "image");
        if (url) {
            const res = await axios.get(url, { responseType: "arraybuffer" });
            perfil = Buffer.from(res.data);
        }
    } catch {
        perfil = null;
    }

    // Imagen backup si no tiene foto
    if (!perfil) {
        const res = await axios.get("https://i.imgur.com/7Y4kF3k.jpeg", { responseType: "arraybuffer" });
        perfil = Buffer.from(res.data);
    }

    // ----- MENSAJE DE DESPEDIDA -----
    const mensaje =
`╭── *👋 ADIÓS* ──╮
│ 👤 Usuario: @${nombre}
│ 😢 Ha salido del grupo
│ 🍀 ¡Suerte en tu camino!
╰────────────────╯`;

    await sock.sendMessage(id, {
        image: perfil,
        caption: mensaje,
        mentions: [jid]
    });
}

    if (!welcomeStatus[id]) return;
    if (action !== "add") return;

    for (let user of participants) {

        // Fix para Baileys (objeto o string)
        const jid = typeof user === "string" ? user : user.id;
        const nombre = jid.split("@")[0];

        // ----- FOTO DE PERFIL -----
        let perfil;
        try {
            const url = await sock.profilePictureUrl(jid, "image");
            if (url) {
                const res = await axios.get(url, { responseType: "arraybuffer" });
                perfil = Buffer.from(res.data);
            }
        } catch {
            perfil = null;
        }

        // Imagen backup si no tiene foto
        if (!perfil) {
            const res = await axios.get("https://i.imgur.com/7Y4kF3k.jpeg", { responseType: "arraybuffer" });
            perfil = Buffer.from(res.data);
        }

        // ----- MENSAJE BONITO -----
        const mensaje = 
`╭── *🌟 BIENVENIDO 🌟* ──╮
│ 👤 Usuario: @${nombre}
│ 🎉 ¡Disfruta del grupo!
│ 📌 Lee las reglas para evitar sanciones.
╰──────────────────╯`;

        await sock.sendMessage(id, {
            image: perfil,
            caption: mensaje,
            mentions: [jid]
        });
    }
});

  // Spam delay
function getMentionedJid(msg) {
    return (
        msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] ||
        null
    );
}
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  if (!sock.authState.creds.registered) {
    let number = await question(chalk.cyan("📱 Escribe tu número de WhatsApp con código de país (solo números): "));
    number = number.replace(/[^0-9]/g, "");
    if (!number) {
      console.log(chalk.red("❌ Número inválido."));
      process.exit(1);
    }

    console.log(chalk.yellow("⌛ Solicitando código de vinculación..."));
    try {
      const code = await sock.requestPairingCode(number);
      console.log(chalk.bgGreen.black("✅ CÓDIGO DE VINCULACIÓN:"), chalk.white(code));
      console.log(chalk.gray("Comparte este código para conectar tu subbot."));
    } catch (err) {
      console.error(chalk.red("❌ Error al generar código de vinculación:"), err.message);
      process.exit(1);
    }
  }

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      if (reason === DisconnectReason.loggedOut) {
        console.log(chalk.red("❌ Sesión cerrada, elimina ./session para reemparejar"));
        process.exit(0);
      } else {
        console.log(chalk.yellow("⚠️ Conexión cerrada, intentando reconectar..."));
        startBot();
      }
    } else if (connection === "open") {
      console.log(chalk.greenBright("✅ Conectado sin QR"));
      exec("rm -rf tmp && mkdir tmp");
    }
  });

  const OWNER_JID = "74694329925676@lid";  // Define aquí tu JID owner

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("messages.upsert", async (m) => {
    try {
      const msg = m.messages[0];
      if (!msg.message) return;
      if (msg.key && msg.key.remoteJid === "status@broadcast") return;

      const from = msg.key.remoteJid;
      const isGroup = from.endsWith("@g.us");
      const sender = isGroup ? msg.key.participant : from;

//nekd
// 🔇 BLOQUEAR MENSAJES DE USUARIOS MUTEADOS
if (isGroup && mutedUsers.has(sender)) {
    await sock.sendMessage(from, {
        delete: {
            remoteJid: from,
            fromMe: false,
            id: msg.key.id,
            participant: sender
        }
    });
    return;
}

      // Ignorar mensajes si el grupo está baneado
      if (isGroup && gruposBaneados.has(from)) {
        return;
      }

      const type = Object.keys(msg.message)[0];
      const text =
        type === "conversation"
          ? msg.message.conversation
          : type === "extendedTextMessage"
          ? msg.message.extendedTextMessage.text
          : "";
// Detectar nuevos miembros cuando welcome está activo
if (m.type === "notify" && m.messages[0]?.messageStubType === 27) {
    const grupo = msg.key.remoteJid;

    if (welcomeStatus[grupo]) {
        const nuevos = msg.messageStubParameters; 

        for (let user of nuevos) {
            await sock.sendMessage(grupo, {
                text: `👋 *Bienvenido @${user.split("@")[0]}*  
✨ Disfruta del grupo.`,
                mentions: [user]
            });
        }
    }
}


    // 🧠 GUARDAR MENSAJES (antes de procesar comandos)
    if (msg.key && msg.message && !msg.message.protocolMessage) {
        messageStore[msg.key.id] = {
            message: msg.message,
            sender: msg.key.participant || msg.key.remoteJid,
            from
        };
    }

    // 🚨 MENSAJE BORRADO
    if (msg.message?.protocolMessage?.type === 0) {
        const deletedKey = msg.message.protocolMessage.key;
        const deletedMsg = messageStore[deletedKey.id];

        if (!deletedMsg) return;
        if (!isGroup || !antiDelete[from]) return;

        const user = deletedMsg.sender;

        await sock.sendMessage(from, {
            text: `🛑 *Mensaje eliminado*\n👤 @${user.split("@")[0]}`,
            mentions: [user]
        });

        await sock.relayMessage(
    from,
    deletedMsg.message,
    { messageId: deletedKey.id }
);
        return;
    }

if (msg.key?.remoteJid?.endsWith('@newsletter')) {
  global.ultimoMensajeCanal = msg
}

if (isGroup && antilinkStatus[from]) {
    let msgText = '';

    if (msg.message.conversation) msgText = msg.message.conversation;
    else if (msg.message.extendedTextMessage) msgText = msg.message.extendedTextMessage.text;
    else if (msg.message.imageMessage && msg.message.imageMessage.caption) msgText = msg.message.imageMessage.caption;
    else if (msg.message.videoMessage && msg.message.videoMessage.caption) msgText = msg.message.videoMessage.caption;

    const linkRegex = /(https?:\/\/\S+|chat\.whatsapp\.com\/\S+|wa\.me\/\S+)/gi;

    if (linkRegex.test(msgText)) {
        const groupMeta = await sock.groupMetadata(from);
        const adminIds = groupMeta.participants.filter(p => p.admin !== null).map(p => p.id);

        if (!adminIds.includes(sender)) {
            try {
                // 🔹 BORRAR MENSAJE
                await sock.sendMessage(from, {
                    delete: {
                        remoteJid: from,
                        id: msg.key.id,
                        participant: msg.key.participant
                    }
                });

                // 🔹 EXPULSAR USUARIO
                await sock.groupParticipantsUpdate(from, [sender], "remove");

                await sock.sendMessage(from, { 
                    text: `❌  fue expulsado por enviar un link.` 
                });
            } catch (err) {
                console.error(err);
                await sock.sendMessage(from, { text: "❌ No se pudo expulsar al usuario o borrar el mensaje. ¿Soy admin?" });
            }
        }
    }
}
      const now = new Date();
      const hora = now.toLocaleTimeString("es-ES", { hour12: false });
      const data = now.toLocaleDateString("es-ES");

      const pushName = msg.pushName || "Desconocido";

      // Log mensajes
      if (text) {
        if (!isGroup) {
          if (text.startsWith("#")) {
            console.log(
              `\n╔═━━━━ ${chalk.blue("CMD 「 USUARIO 」")} ━━━━╗\n` +
                `${chalk.green("NOMBRE :")} ${chalk.cyan(pushName)}\n` +
                `${chalk.green("MENSAJE :")} ${chalk.cyan(text)}\n` +
                `${chalk.green("HORA   :")} ${chalk.cyan(hora)}\n` +
                `${chalk.green("FECHA  :")} ${chalk.cyan(data)}\n` +
                "╚━━━━━━━━━━━━━━━━━━━━━━━━━╝"
            );
          } else {
            console.log(
              `\n╔═━━━━━ ${chalk.blue("CHAT 「 BOT 」")} ━━━━━╗\n` +
                `${chalk.green("NOMBRE :")} ${chalk.cyan(pushName)}\n` +
                `${chalk.green("MENSAJE :")} ${chalk.cyan(text)}\n` +
                `${chalk.green("HORA   :")} ${chalk.cyan(hora)}\n` +
                `${chalk.green("FECHA  :")} ${chalk.cyan(data)}\n` +
                "╚━━━━━━━━━━━━━━━━━━━━━━━━╝"
            );
          }
        } else {
          console.log(
            `\n╔═━━━━━ ${chalk.blue("GRUPO 「 BOT 」")} ━━━━━╗\n` +
              `${chalk.green("GRUPO  :")} ${chalk.cyan(from)}\n` +
              `${chalk.green("NOMBRE :")} ${chalk.cyan(pushName)}\n` +
              `${chalk.green("MENSAJE:")} ${chalk.cyan(text)}\n` +
              `${chalk.green("HORA   :")} ${chalk.cyan(hora)}\n` +
              `${chalk.green("FECHA  :")} ${chalk.cyan(data)}\n` +
              "╚━━━━━━━━━━━━━━━━━━━━━━━━╝"
          );
        }
      }

      const prefixes = ['#', '.', '!', '/', '$']

if (!prefixes.some(p => text.startsWith(p))) return

      const args = text.slice(1).trim().split(/ +/);
      const command = args.shift().toLowerCase();

      // Aquí NO redeclarar nombresUsuarios, solo usar la global
      if (pushName && sender) {
        nombresUsuarios[sender] = pushName;
      }

      switch (command) {
        case "hi":
          await sock.sendMessage(from, { text: "Hola amigo 👋" });
          break;

case "mafias":
  {
    const activeGames = Object.values(mafiaDB)
      .filter(g => !g.started)
      .map(g => `🎮 Partida: *${g.name}*\n👥 Jugadores: ${Object.keys(g.players).length}`)
      .join("\n\n");

    if (!activeGames) {
      return sock.sendMessage(from, { text: "💬 No hay partidas activas.", quoted: m });
    }

    return sock.sendMessage(from, { text: `🎲 Partidas activas:\n\n${activeGames}`, quoted: m });
  }
break;

        case "comaf":
          await sock.sendMessage(from, { text: `🎮 Comandos de Mafia:\n
#mafia crear → Crear partida
#mafia entrar → Entrarse a la partida
#mafia iniciar → Iniciar juego y asignar roles
#mafia matar @user → Solo lobos en la noche
#mafiaa → Ver mafias
#mafia finnoches → Terminar noche y pasar al día
#mafia votar @user → Votar en día
#mafia findia → Terminar día y eliminar al más votado
#mafia estado → Ver jugadores vivos y fase actual` });
          break;

case "chao":
          await sock.sendMessage(from, { text: "Goodbye Bitch\n> by :Jeffrey" });
          break;

        case "bucle":
          await sock.sendMessage(from, { text: "#bucle" });
          break;


        case "list": {
    const gachasText = `
╔══════════════════════╗
║        🎰 LISTA GACHAS 🎰        
╚══════════════════════╝

👑 ════ ✦ DIVINE ✦ ════ 👑
✦ Madara Dios
✦ Zen’ō (Zeno-sama)
✦ Saitama
✦ Goku Instinto Ultra Maestro ●•

━━━━━━━━━━━━━━━━━━━━━━━

⚫️ ════ ✦ OG ✦ ════ ⚫️
✦ Iansini Prosini
✦ El Abrahaham
✦ Light Yagami
✦ Bonbon y Chuchu 
✦ Sonic El Pendejo ●•

━━━━━━━━━━━━━━━━━━━━━━━

⚫️ ════ ✦ OG ??? ✦ ════ ⚪️
✦ ¿ ¿ 67 ? ?

━━━━━━━━━━━━━━━━━━━━━━━

⚪ ════ ✦ SECRETOS ✦ ════ ⚪
✦ Hinata Hyuga
✦ Son Gokū
✦ Naruto Uzumaki ○

━━━━━━━━━━━━━━━━━━━━━━━

🟠 ════ ✦ ÉPICOS ✦ ════ 🟠
✦ Obito Uchiha
✦ Sakura Haruno
✦ Rock Lee
✦ Tenten
✦ Yamato
✦ Iruka Umino ○°

━━━━━━━━━━━━━━━━━━━━━━━

🟢 ════ ✦ COMUNES ✦ ════ 🟢
✦ Choji Akimichi
✦ Ino Yamanaka
✦ Sai
✦ Kurenai Yuhi
✦ Asuma Sarutobi
✦ Konohamaru Sarutobi

━━━━━━━━━━━━━━━━━━━━━━━

🟡 ════ ✦ RAROS ✦ ════ 🟡
✦ Sasuke Uchiha
✦ Kakashi Hatake
✦ Gaara
✦ Shino Aburame
✦ Kiba Inuzuka

━━━━━━━━━━━━━━━━━━━━━━━
🎮 Usa *#rw* para invocar
🍀 La suerte decide tu destino
`;

    await sock.sendMessage(from, { text: gachasText });
}
break;

case 'pregunta': {
    const preguntas = [
        "¿Quién te gusta del grupo? 👀",
        "¿Tu mayor vergüenza? 😳",
        "¿A quién eliminarías del grupo? 😈",
        "¿Has stalkeado a alguien aquí? 📱",
        "¿Mentiste hoy? 🤥"
    ];

    const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];

    await sock.sendMessage(from, {
        text: `❓ *PREGUNTA*\n\n${pregunta}`
    });
    break;
}

case 'reto': {
    const retos = [
        "Envía un audio cantando 🎤",
        "Cambia tu foto por 10 minutos 🖼️",
        "Etiqueta a alguien que te caiga bien 😏",
        "Di una verdad incómoda 😳",
        "Escribe sin usar vocales por 5 mensajes 🤐"
    ];

    const reto = retos[Math.floor(Math.random() * retos.length)];

    await sock.sendMessage(from, {
        text: `🎯 *RETO*\n\n${reto}`
    });
    break;
}

case 'reto:3': {
  const retos = [
    "Mandar un audio cantando como oveja owo",
    "Decir algo cursi",
    "Llamar a un Random",
    "Declararse a un amigo/a",
    "Ver un vídeo de Fede vigevani XD"
  ];
  const reto = retos[Math.floor(Math.random() * retos.length)];
  await sock.sendMessage(from, { text: `${reto} \n> by :Jeffrey` });
  break;
}

case 'reto:1': {
  const retos = [    "Ver un vídeo de Fede vigevani XD"  ];
  
    const reto = retos[Math.floor(Math.random() * retos.length)];
  await sock.sendMessage(from, { text: `${reto} \n> by :Ian` });
  break;
}

case "promote": {
    if (!isGroup) return await sock.sendMessage(from, { text: "❌ Este comando solo funciona en grupos." });

    const groupMeta = await sock.groupMetadata(from);
    const adminIds = groupMeta.participants.filter(p => p.admin !== null).map(p => p.id);
    if (!adminIds.includes(sender)) return await sock.sendMessage(from, { text: "❌ Solo un admin puede usar este comando." });

    const botParticipant = groupMeta.participants.find(p => p.id === sock.user.id);
    const isBotAdmin = botParticipant?.admin !== null;
    if (!isBotAdmin) return await sock.sendMessage(from, { text: "❌ Necesito ser admin para promover a alguien." });

    const mentioned = msg.message.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || mentioned.length === 0) return await sock.sendMessage(from, { text: "❌ Menciona a alguien para promoverlo." });

    for (let jid of mentioned) {
        await sock.groupParticipantsUpdate(from, [jid], "promote");
    }

    // Construir mensaje de aviso
    const senderName = pushName || "Alguien";
    let message = '';
    for (let jid of mentioned) {
        const userName = jid.split('@')[0];
        message += `⚠️ Aviso: @${userName} ahora es admin\n> Acción hecha por *@${senderName}*\n\n`;
    }

    await sock.sendMessage(from, {
        text: message,
        mentions: [...mentioned, sender]
    });
}
break;

case 'report': {
    try {
        if (!args.length) {
            return await sock.sendMessage(from, {
                text:
`🧾 *Reporte de errores*
Usa:
#report <describe el problema>

Ej:
#report el comando play no manda audio`
            }, { quoted: msg });
        }

        const reporte = args.join(" ");

        const textoOwner =
`🚨 *NUEVO REPORTE*

👤 Usuario: ${pushName || "Sin nombre"}
📱 JID: ${sender}
📍 Chat: ${isGroup ? "Grupo" : "Privado"}
📝 Reporte:
${reporte}`.trim();

        // Enviar al OWNER
        await sock.sendMessage(OWNER, {
            text: textoOwner
        });

        // Confirmación al usuario
        await sock.sendMessage(from, {
            text: "✅ Tu reporte fue enviado al creador, Lo veremos lo mas pronto posible"
        }, { quoted: msg });

    } catch (e) {
        console.log("REPORT ERROR:", e);
        await sock.sendMessage(from, {
            text: "❌ No se pudo enviar el reporte."
        }, { quoted: msg });
    }
    break;
}

case 'sugerrw':
case 'votar':
case 'vote': {
    try {
        if (!args.length) {
            return await sock.sendMessage(from, {
                text:
`*Sugerir Roll ( ≧∀≦)ノ*
Usa:#vote *personaje*

> ej: #vote Ayase Nagatoro`
            }, { quoted: msg });
        }

        const reporte = args.join(" ");

        const textoOwner =
`❖⏔❖NUEVA SUGERENCIA❖⏔❖

❖ Usuario: ${pushName || "Sin nombre"}
❖ ID: ${sender}
❖ Chat: ${isGroup ? "Grupo" : "Privado"}
❖ Sugerencia:
${reporte}`.trim();

        // Enviar al OWNER
        await sock.sendMessage(OWNER, {
            text: textoOwner
        });

        // Confirmación al usuario
        await sock.sendMessage(from, {
            text: "✅ Tu sugerencia fue enviada al creador, Lo veremos lo mas pronto posible"
        }, { quoted: msg });

    } catch (e) {
        console.log("SUGERENCIA ERROR:", e);
        await sock.sendMessage(from, {
            text: "❌ No se pudo enviar el reporte."
        }, { quoted: msg });
    }
    break;
}


case "demote": {
    if (!isGroup) return await sock.sendMessage(from, { text: "❌ Este comando solo funciona en grupos." });

    const groupMeta = await sock.groupMetadata(from);
    const adminIds = groupMeta.participants.filter(p => p.admin !== null).map(p => p.id);
    if (!adminIds.includes(sender)) return await sock.sendMessage(from, { text: "❌ Solo un admin puede usar este comando." });

    const botParticipant = groupMeta.participants.find(p => p.id === sock.user.id);
    const isBotAdmin = botParticipant?.admin !== null;
    if (!isBotAdmin) return await sock.sendMessage(from, { text: "❌ Necesito ser admin para degradar a alguien." });

    const mentioned = msg.message.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || mentioned.length === 0) return await sock.sendMessage(from, { text: "❌ Menciona a alguien para quitarle el admin." });

    for (let jid of mentioned) {
        await sock.groupParticipantsUpdate(from, [jid], "demote");
    }

    // Construir mensaje de aviso
    const senderName = pushName || "Alguien";
    let message = '';
    for (let jid of mentioned) {
        const userName = jid.split('@')[0];
        message += `⚠️ Aviso: @${userName} dejó de ser admin\n> Acción hecha por *@${senderName}* \n\n`;
    }

    await sock.sendMessage(from, {
        text: message,
        mentions: [...mentioned, sender]
    });
}
break;



 case 'admin':
    // Verificar si mencionaron a alguien
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (mentioned.length === 0) {
        await sock.sendMessage(from, { text: '❌ Etiqueta a alguien para usar este comando' });
        break;
    }

    const senderName = pushName || 'Alguien';
    
    // Construir el mensaje
    let message = '';
    for (let i = 0; i < mentioned.length; i++) {
        const userJid = mentioned[i];
        const userName = userJid.split('@')[0];
        message += `@${userName} @${senderName} te tiró admin panel 😎\n`;
    }

    // Enviar mensaje con imagen
    await sock.sendMessage(from, {
        image: { url: 'https://i.postimg.cc/x11C2TfY/Screenshot-20251129-173850-You-Tube.jpg' }, // <-- Pon aquí tu imagen
        caption: message,
        mentions: mentioned
    });
    break;
   
case "nsfw": {
    // ❌ Solo grupos
    if (!isGroup) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        await sock.sendMessage(from, { text: "❌ Solo en grupos." });
        break;
    }

    const groupMeta = await sock.groupMetadata(from);
    const admins = groupMeta.participants
        .filter(p => p.admin)
        .map(p => p.id);

    // ❌ No admin
    if (!admins.includes(sender)) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        await sock.sendMessage(from, {
            text: "❌ Solo admins pueden usar este comando."
        });
        break;
    }

    const option = args[0];

    // ✅ Es admin y el comando es válido
    if (option === "on") {
        await sock.sendMessage(from, {
            react: { text: "✅", key: msg.key }
        });

        global.nsfwGroups[from] = true;
        saveNSFW();
        await sock.sendMessage(from, { text: "🔞 NSFW ACTIVADO" });
    } 
    else if (option === "off") {
        await sock.sendMessage(from, {
            react: { text: "✅", key: msg.key }
        });

        delete global.nsfwGroups[from];
        saveNSFW();
        await sock.sendMessage(from, { text: "🚫 NSFW DESACTIVADO" });
    } 
    else {
        await sock.sendMessage(from, {
            react: { text: "⚠️", key: msg.key }
        });

        await sock.sendMessage(from, {
            text: "Usa:\n#nsfw on\n#nsfw off"
        });
    }
    break;
}
     
case 'ass': {
    if (!isGroup) {
        await sock.sendMessage(from, { text: "❌ Solo en grupos." });
        break;
    }

    if (!global.nsfwGroups?.[from]) {
        await sock.sendMessage(from, {
            text: "🔞 NSFW desactivado.\nUn admin debe usar *#nsfw on*"
        });
        break;
    }

    try {
        const res = await fetch("https://api.waifu.pics/nsfw/ass");
        const data = await res.json();

        if (!data?.url) throw new Error("No URL");

        await sock.sendMessage(from, {
            image: { url: data.url },
            caption: "🍑 Ass"
        });
    } catch (e) {
        console.error(e);
        await sock.sendMessage(from, { text: "❌ Error NSFW." });
    }
    break;
}



case 'boobs': {
    if (!isGroup) {
        await sock.sendMessage(from, { text: "❌ Solo en grupos." });
        break;
    }

    if (!global.nsfwGroups?.[from]) {
        await sock.sendMessage(from, {
            text: "🔞 NSFW desactivado.\nUn admin debe usar *#nsfw on*"
        });
        break;
    }

    try {
        const res = await fetch("https://nekobot.xyz/api/image?type=boobs");
        const data = await res.json();

        if (!data?.message) throw new Error("No image");

        await sock.sendMessage(from, {
            image: { url: data.message },
            caption: "🍒 Boobs"
        });
    } catch (e) {
        console.error(e);
        await sock.sendMessage(from, { text: "❌ Error NSFW." });
    }
    break;
}


     
case "menus":
case "menu":
case "help": {
    const saludo = saludoPorHora();

    const thumb = await fs.readFileSync("./image.jpg"); // o el thumbnail que quieras

   
    
    await sock.sendMessage(from, {

        text: menuText
            .replace("@@USER", `@${sender.split("@")[0]}`)
            .replace("@@SALUDO", saludo),

        mentions: [sender],

        contextInfo: {
            isForwarded: true,
            forwardingScore: 1,

            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363422781423966@newsletter",
                newsletterName: "🌹CrizZapp🌹",
                serverMessageId: 1
            },

            externalAdReply: {
                title: "꧁༺ Shoko Komi ༻꧂",
                body: "api.crisbots.com",
                thumbnail: thumb,
                sourceUrl: "https://whatsapp.com/channel/0029VbBN8qCG3R3cZASjRO1I",
                mediaType: 1,
                renderLargerThumbnail: true
 
            }
        }
      }, { quoted: msg });
    await sock.sendMessage(from, {

    react: { text: "🖼", key: msg.key }
    });
    
}
break;

case "ayuda": {
  const userTag = `@${sender.split("@")[0]}`;

  const ayudaTexto =
`👋 ¡Hola ${userTag}!

🤖 Soy *🅂🄷🄾🄺🄾 🄺🄾🄼🄸*, un Bot de WhatsApp
🛠️ Desarrollado por *CrizZapp*

📌 Comandos básicos:
• Usa *#help* para ver el menú completo
• Usa *#report* para enviar sugerencias o errores

🧸 Espero que te sea útil y si no, gracias por usar el bot 🌹`;

  // 📩 Enviar al PRIVADO (respondiendo al mensaje original)
  await sock.sendMessage(
    sender,
    {
      text: ayudaTexto,
      mentions: [sender]
    },
    { quoted: msg }
  );

  // 💬 Aviso en el chat donde se usó (también respondiendo)
  await sock.sendMessage(
    from,
    {
      text: "📩 Te envié la información al privado."
    },
    { quoted: msg }
  );

  break;
}

case "menus":
case "menu":
case "help": {
    const saludo = saludoPorHora();

    const thumb = await fs.readFileSync("./image.jpg"); // o el thumbnail que quieras

   
    
    await sock.sendMessage(from, {

        text: menuText
            .replace("@@USER", `@${sender.split("@")[0]}`)
            .replace("@@SALUDO", saludo),

        mentions: [sender],

        contextInfo: {
            isForwarded: true,
            forwardingScore: 1,

            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363422781423966@newsletter",
                newsletterName: "☼🌹CrizZapp🌹☼",
                serverMessageId: 1
            },

            externalAdReply: {
                title: "꧁༺ Shoko Komi ༻꧂",
                body: "api.crisbots.com",
                thumbnail: thumb,
                sourceUrl: "https://whatsapp.com/channel/0029VbBN8qCG3R3cZASjRO1I",
                mediaType: 1,
                renderLargerThumbnail: true
 
            }
        }
      }, { quoted: msg });
    await sock.sendMessage(from, {

    react: { text: "🖼", key: msg.key }
    });
    
}
break;



case "owner":
case "creador": {
    const saludo = saludoPorHora();

   
    
    await sock.sendMessage(from, {

        text: `°⋆.ೃ Hola 😌 @@USER 

Soy el creador de *Shoko Komi BOT*
Estoy aprendiendo a desarrollar bots de WhatsApp ೃ.⋆°

*─────── ⋆⋅☆⋅⋆ ─────────*

📌 *Información*
👤 Nombre: Cris
🎄 Versión del bot:🌃Año nuevo *2026*
📞 Número: +59898476523

*⫘⫘⫘⫘《♱》⫘⫘⫘⫘⫘*

🧸 ~Sigue el canal~ 🧸: `
            .replace("@@USER", `@${sender.split("@")[0]}`)
            .replace("@@SALUDO", saludo),

        mentions: [sender],

        contextInfo: {
            isForwarded: true,
            forwardingScore: 2,

            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363422781423966@newsletter",
                newsletterName: "꧁༺ Shoko Komi ༻꧂",
                serverMessageId: 1
            }
        }
      }, { quoted: msg });
    await sock.sendMessage(from, {

    react: { text: "🤦", key: msg.key }
    });
    
}
break;


case "code":
case "serbot": {
    const saludo = saludoPorHora();

   
    
    await sock.sendMessage(from, {

        text: "《✧》 No se han encontrado espacios disponibles para registrar un `Sub-Bot`.\n> Por favor intenta en unos minutos."
            .replace("@@USER", `@${sender.split("@")[0]}`)
            .replace("@@SALUDO", saludo),

        mentions: [sender],

        contextInfo: {
            isForwarded: true,
            forwardingScore: 2,

            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363422781423966@newsletter",
                newsletterName: "꧁༺ Shoko Komi ༻꧂",
                serverMessageId: 1
            }
        }
      }, { quoted: msg });
    await sock.sendMessage(from, {

    react: { text: "🤦", key: msg.key }
    });
    
}
break;


case 'veteranff': {
    if (!args[0]) {
        await sock.sendMessage(from, {
            text: '❌ Usa el comando así:\n#veteranff <ID>'
        });
        break;
    }

    const id = parseInt(args[0]);
    if (isNaN(id)) {
        await sock.sendMessage(from, {
            text: '❌ El ID debe ser un número válido.'
        });
        break;
    }

    let porcentaje;
    let epoca;

    if (id < 50000000) {
        porcentaje = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
        epoca = '2018 – 2019';
    } else if (id < 150000000) {
        porcentaje = Math.floor(Math.random() * (89 - 70 + 1)) + 70;
        epoca = '2019 – 2020';
    } else if (id < 300000000) {
        porcentaje = Math.floor(Math.random() * (69 - 40 + 1)) + 40;
        epoca = '2020 – 2021';
    } else if (id < 600000000) {
        porcentaje = Math.floor(Math.random() * (39 - 15 + 1)) + 15;
        epoca = '2021 – 2022';
    } else {
        porcentaje = Math.floor(Math.random() * 15);
        epoca = '2023+';
    }

    const barras = '▰'.repeat(Math.floor(porcentaje / 10)) + '▱'.repeat(10 - Math.floor(porcentaje / 10));

    const mensaje = `
🎮 *Análisis Free Fire*

🆔 ID: ${id}

📊 *Antigüedad estimada*
${barras} ${porcentaje}%

🕰️ Época aproximada:
${epoca}

⚠️ Este resultado es una estimación
basada en rangos de ID.
`.trim();

    await sock.sendMessage(from, { text: mensaje });
    break;
}

case "w":
case "work": {
    await sock.sendMessage(from, {
        react: { text: "🕵‍♂️", key: msg.key }
    });

    await economia.cmdWork(
        sock,
        from,
        sender,
        pushName
    );

    break;
}

case "pay":
case "give":
case "givecoins": {
    const channelInfo = {
        isForwarded: true,
        forwardingScore: 2,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363422781423966@newsletter",
            newsletterName: "☼Cris Bot - oficial channel✧",
            serverMessageId: 1
        }
    };

    const mentioned = getMentionedJid(msg);
    const amount = args[1];

    // MENSAJE ANCLA (canal)
    await sock.sendMessage(
        from,
        {
            text: "💸 Procesando transferencia...",
            contextInfo: channelInfo
        },
        { quoted: msg }
    );

    if (!mentioned) {
        await sock.sendMessage(from, {
            text: "❌ Debes mencionar a alguien.\nEjemplo:\n#givecoins @usuario 500",
            contextInfo: channelInfo
        });
        break;
    }

    // Reacción
    await sock.sendMessage(from, {
        react: { text: "💷", key: msg.key }
    });

    await economia.cmdGiveCoins(
        sock,
        from,
        sender,
        mentioned,
        amount,
        pushName,
        async (msgText) => {
            await sock.sendMessage(from, {
                text: msgText,
                contextInfo: {
                    ...channelInfo,
                    mentions: [mentioned]
                }
            });
        }
    );

    break;
}

case "bal":
case "balance": {
    const channelInfo = {
        isForwarded: true,
        forwardingScore: 2,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363422781423966@newsletter",
            newsletterName: "☼Cris Bot - oficial channel✧",
            serverMessageId: 1
        }
    };

    // Mensaje inicial
    await sock.sendMessage(
        from,
        {
            text: "Buscando..",
            contextInfo: channelInfo
        },
        { quoted: msg }
    );

    // Reacción
    await sock.sendMessage(from, {
        react: { text: "🕵‍♂️", key: msg.key }
    });

    // Resultado del trabajo (también con canal)
    await economia.cmdBal(
        sock,
        from,
        sender,
        pushName,
        async (msgText) => {
            await sock.sendMessage(from, {
                text: msgText,
                contextInfo: channelInfo
            });
        }
    );

    break;
}



case "buyvip": {
    await sock.sendMessage(from, { react: { text: "✔️", key: msg.key } });
    await economia.cmdBuyVip(sock, from, sender, pushName, async (msg) => 
        await sock.sendMessage(from, { text: msg })
    );
    break;
}

case "daily": {
    await sock.sendMessage(from, {
        react: { text: "🎁", key: msg.key }
    });

    await economia.cmdDaily(
        sock,
        from,
        sender,
        pushName,
        async (msgText) => {
            await sock.sendMessage(
                from,
                {
                    text: msgText,
                    contextInfo: channelInfo
                },
                { quoted: msg }
            );
        }
    );

    break;
}

case "fish": {
    await sock.sendMessage(from, {
        react: { text: "🎣", key: msg.key }
    });

    await economia.cmdFish(
        sock,
        from,
        sender,
        pushName,
        async (msgText) => {
            await sock.sendMessage(
                from,
                {
                    text: msgText,
                    contextInfo: channelInfo
                },
                { quoted: msg }
            );
        }
    );

    break;
}

case "perfil":
case "profile": {
    await sock.sendMessage(from, {
        react: { text: "🧑‍⚖️", key: msg.key }
    });

    await cmdPerfil(
        sock,
        from,
        sender,
        pushName
    );

    break;
}

case "steal": {
    await sock.sendMessage(from, { react: { text: "🥷", key: msg.key } });

    if (args.length < 1) {
        await sock.sendMessage(from, { text: "❌ Debes poner el ID del usuario a robar." });
        break;
    }

    const target = args[0];
    await economia.cmdStealCoins(sock, from, sender, pushName, async (msg) => {
        await sock.sendMessage(from, { text: msg });
    }, target);

    break;
}

case "regalo": {
  const coins = Math.floor(Math.random() * 500) + 100;

  await sock.sendMessage(from, {
    text: `🎁✨ REGALO NAVIDEÑO ✨🎁

🎄 Has recibido: *${coins} coins*
🎅 Vuelve mañana por otro regalo

¡Feliz Navidad! ❄️`
  });
  break;
}

case "botoff":
case "bangp": {
    // ❌ Solo grupos
    if (!isGroup) {
        await sock.sendMessage(from, { react: { text: "🚫", key: msg.key } });
        await sock.sendMessage(from, { text: "❌ Este comando solo funciona en grupos." });
        break;
    }

    // ✅ Obtener admins del grupo
    const meta = await sock.groupMetadata(from);
    const adminIds = meta.participants.filter(p => p.admin !== null).map(p => p.id);

    // ❌ No es admin
    if (!adminIds.includes(sender)) {
        await sock.sendMessage(from, { react: { text: "🚫", key: msg.key } });
        await sock.sendMessage(from, { text: "❌ Solo un admin puede usar este comando." });
        break;
    }

    // ✅ Bannear grupo
    gruposBaneados.add(from);
    await sock.sendMessage(from, { react: { text: "✅", key: msg.key } });
    await sock.sendMessage(from, { text: "✅ Este grupo ha sido baneado. No responderé más aquí." });
    break;
}

case "boton":
case "unbangp": {
    // ❌ Solo grupos
    if (!isGroup) {
        await sock.sendMessage(from, { react: { text: "🚫", key: msg.key } });
        await sock.sendMessage(from, { text: "❌ Este comando solo funciona en grupos." });
        break;
    }

    // ✅ Obtener admins del grupo
    const meta = await sock.groupMetadata(from);
    const adminIds = meta.participants.filter(p => p.admin !== null).map(p => p.id);

    // ❌ No es admin
    if (!adminIds.includes(sender)) {
        await sock.sendMessage(from, { react: { text: "🚫", key: msg.key } });
        await sock.sendMessage(from, { text: "❌ Solo un admin puede usar este comando." });
        break;
    }

    // ✅ Desbanear grupo
    gruposBaneados.delete(from);
    await sock.sendMessage(from, { react: { text: "✅", key: msg.key } });
    await sock.sendMessage(from, { text: "✅ El grupo ha sido desbaneado. Volveré a responder aquí." });
    break;
}

case "add":
case "añadir": {
    // ❌ Solo grupos
    if (!isGroup) {
        await sock.sendMessage(from, { text: "❌ Este comando solo funciona en grupos." });
        return;
    }

    // ❌ No pasó número
    if (!args[0]) {
        await sock.sendMessage(from, { text: "❌ Uso: #add 598XXXXXXXX" });
        return;
    }

    // Limpiar número
    const number = args[0].replace(/\D/g, "");
    const user = number + "@s.whatsapp.net";

    // Obtener admins del grupo
    const groupMeta = await sock.groupMetadata(from);
    const adminIds = groupMeta.participants
        .filter(p => p.admin !== null)
        .map(p => p.id);

    // ❌ Usuario no es admin
    if (!adminIds.includes(sender)) {
        await sock.sendMessage(from, { text: "❌ Solo un admin puede usar este comando." });
        return;
    }

    try {
        // Intentar añadir
        await sock.groupParticipantsUpdate(from, [user], "add");
        await sock.sendMessage(from, { text: `✅ @${number} fue añadido al grupo.`, mentions: [user] });
    } catch (err) {
        console.error("Error add:", err);
        // Mostrar error real
        if (err.message.includes("bad-request")) {
            await sock.sendMessage(from, { text: "❌ No se pudo añadir: WhatsApp requiere que el bot tenga el número guardado." });
        } else {
            await sock.sendMessage(from, { text: `❌ No se pudo añadir: ${err.message}` });
        }
    }
    break;
}

        case "miid":
          await sock.sendMessage(from, { text: `Tu JID es: ${sender}` });
          break;

case "close":
case "#close": {
    // ❌ Solo grupos
    if (!isGroup) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        return await sock.sendMessage(from, {
            text: "❌ Este comando solo funciona en grupos."
        });
    }

    // Obtener admins
    const groupMeta = await sock.groupMetadata(from);
    const adminIds = groupMeta.participants
        .filter(p => p.admin !== null)
        .map(p => p.id);

    // ❌ No admin
    if (!adminIds.includes(sender)) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        return await sock.sendMessage(from, {
            text: "❌ Solo un admin puede cerrar el grupo."
        });
    }

    // ✅ Es admin → cerrar grupo
    await sock.sendMessage(from, {
        react: { text: "✅", key: msg.key }
    });

    await sock.groupSettingUpdate(from, "announcement");

    await sock.sendMessage(from, {
        text: "🔒 *Grupo cerrado*\nSolo los admins pueden enviar mensajes."
    });

    break;
}

case "banbot": {
  if (sender !== OWNER_JID)
    return sock.sendMessage(from, { text: "❌ Solo el OWNER puede usar este comando." });

  const user = mentionedJid?.[0];
  if (!user)
    return sock.sendMessage(from, { text: "⚠️ Menciona a alguien." });

  banUser(user);

  await sock.sendMessage(from, {
    text: `🚫 @${user.split("@")[0]} fue *baneado del bot*.`,
    mentions: [user]
  });
  break;
}

case "unbanbot": {
  if (sender !== OWNER_JID)
    return sock.sendMessage(from, { text: "❌ Solo el OWNER puede usar este comando." });

  const user = mentionedJid?.[0];
  if (!user)
    return sock.sendMessage(from, { text: "⚠️ Menciona a alguien." });

  unbanUser(user);

  await sock.sendMessage(from, {
    text: `✅ @${user.split("@")[0]} fue *desbaneado del bot*.`,
    mentions: [user]
  });
  break;
}

case "del":
case "delete": {
    // ❌ Solo grupos
    if (!isGroup) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        return await sock.sendMessage(from, {
            text: "❌ Este comando solo funciona en grupos."
        });
    }

    // ❌ Debe responder a un mensaje
    const ctx = msg.message?.extendedTextMessage?.contextInfo;
    if (!ctx?.stanzaId || !ctx?.participant) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        return await sock.sendMessage(from, {
            text: "❌ Responde al mensaje que quieres eliminar."
        });
    }

    // Obtener admins (IGUAL que #close)
    const groupMeta = await sock.groupMetadata(from);
    const adminIds = groupMeta.participants
        .filter(p => p.admin !== null)
        .map(p => p.id);

    // ❌ Usuario no admin
    if (!adminIds.includes(sender)) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        return await sock.sendMessage(from, {
            text: "❌ Solo un admin puede borrar mensajes."
        });
    }

    // ✅ Intentar borrar (WhatsApp decide si el bot puede)
    try {
        await sock.sendMessage(from, {
            delete: {
                remoteJid: from,
                fromMe: false,
                id: ctx.stanzaId,
                participant: ctx.participant
            }
        });

        await sock.sendMessage(from, {
            react: { text: "✅", key: msg.key }
        });

        await sock.sendMessage(from, {
            text: "🗑️ *Acción hecha*"
        });

    } catch (e) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });

        await sock.sendMessage(from, {
            text: "❌ No se pudo borrar el mensaje (¿el bot no es admin?)."
        });
    }

    break;
}

case "open":
case "#open": {
    // ❌ Solo grupos
    if (!isGroup) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        return await sock.sendMessage(from, {
            text: "❌ Este comando solo funciona en grupos."
        });
    }

    // Obtener admins
    const groupMeta = await sock.groupMetadata(from);
    const adminIds = groupMeta.participants
        .filter(p => p.admin !== null)
        .map(p => p.id);

    // ❌ No admin
    if (!adminIds.includes(sender)) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        return await sock.sendMessage(from, {
            text: "❌ Solo un admin puede abrir el grupo."
        });
    }

    // ✅ Es admin → abrir grupo
    await sock.sendMessage(from, {
        react: { text: "✅", key: msg.key }
    });

    await sock.groupSettingUpdate(from, "not_announcement");

    await sock.sendMessage(from, {
        text: "🔓 *Grupo abierto*\nTodos pueden enviar mensajes."
    });

    break;
}



case "mute": {
    if (!isGroup)
        return sock.sendMessage(from, { text: "❌ Solo en grupos." });

    const groupMeta = await sock.groupMetadata(from);
    const adminIds = groupMeta.participants
        .filter(p => p.admin !== null)
        .map(p => p.id);

    if (!adminIds.includes(sender))
        return sock.sendMessage(from, { text: "❌ Solo admins." });

    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || mentioned.length === 0)
        return sock.sendMessage(from, { text: "❌ Menciona a alguien." });

    mentioned.forEach(u => mutedUsers.add(u));

    await sock.sendMessage(from, {
        text: `🔇 ${mentioned.map(u => "@" + u.split("@")[0]).join(", ")} fue muteado.`,
        mentions: mentioned
    });
    break;
}

case "escopeta":
  try {
    await sock.sendMessage(from, {
      audio: { url: "./media/escopeta.mp3" },
      mimetype: "audio/mpeg",
      ptt: false
    });
  } catch (e) {
    console.log("Error enviando el audio:", e);
  }
break;

case "tralalerita":
  try {
    await sock.sendMessage(from, {
      audio: { url: "./media/tralalerita.mp3" },
      mimetype: "audio/mpeg",
      ptt: false
    });
  } catch (e) {
    console.log("Error enviando el audio:", e);
  }
break;

case "fuentes":
case "fonts": {
    // ❌ Sin texto
    if (!args || args.length === 0) {
        await sock.sendMessage(from, { text: "✏️ *Ejemplo:* #fuentes hola bro" });
        break;
    }

    // Texto limpio
    const clean = args.join(" ");

    // Array de funciones de fuentes
    const fonts = [
        (t) => t.toUpperCase(),
        (t) => t.toLowerCase(),
        (t) => `𝙁𝙤𝙣𝙩: ${t.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt(0) + 0x1D00))}`,
        (t) => `★彡 ${t} 彡★`,
        (t) => `『 ${t} 』`,
        (t) => `✦•······• ${t} •······•✦`,
        (t) => `✨ ${t} ✨`,
        (t) => `➤ ${t} ◄`,
    ];

    // Mensaje inicial
    await sock.sendMessage(from, { text: `✨ *FUENTES PARA:* ${clean}` });

    // Mandar cada fuente
    for (let i = 0; i < fonts.length; i++) {
        await sock.sendMessage(from, { text: `*${i + 1}.* ${fonts[i](clean)}` });
    }

    // Reacción al final
    await sock.sendMessage(from, {
        react: { text: "🔠", key: msg.key }
    });

    break;
}

case "waifu": {
  try {
    const res = await axios.get("https://api.waifu.pics/sfw/waifu");

    await sock.sendMessage(from, {
      image: { url: res.data.url },
      caption: "✨ Imagen anime"
     });
    //Reaccion
        await sock.sendMessage(from, {
        react: { text: "❤️‍🔥", key: msg.key }
    });
  } catch (e) {
    await sock.sendMessage(from, {
      text: "❌ Error al obtener la imagen."
    });
  }
}
break;

  case "gachas":
  case "#gachas":
    await cmdPublicarGacha(sock, msg);
  break;

  case "gacha":
  case "#gacha":
    await cmdGacha(sock, from, sender);
  break;

  case "claimgacha":
  case "gclaim":
    await cmdClaim(sock, from, sender);
  break;


case "hora":
    {
        const fecha = new Date();
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'America/Montevideo' // Cambialo si estás en otra zona horaria
        };
        const horaActual = fecha.toLocaleString('es-ES', opciones);

        await sock.sendMessage(from, { text: `🕒 Hora y fecha actual:\n${horaActual}` });
    //Reaccion
        await sock.sendMessage(from, {
        react: { text: "⌚️", key: msg.key }
    });
    }
    break;

case "einfo":
  await economia.cmdEinfo(sock, from, sender, m);
  break;
  
  case "lyrics":
case "lyric":
case "cancion": {
    try {
        const query = args.join(" ");
        if (!query) {
            await sock.sendMessage(from, {
                text: "❌ Escribe el nombre de la canción.\nEj: #lyrics Milo J Niño"
            });
            break;
        }

        await sock.sendMessage(from, {
            text: `🎵 Buscando letra de: *${query}*...`
        });

        // Buscar en YouTube
        const search = await ytSearch(query);
        if (!search.videos || !search.videos.length) {
            await sock.sendMessage(from, { text: "❌ No encontré resultados." });
            break;
        }

        let title = search.videos[0].title;

        // LIMPIEZA DEL TÍTULO
        title = title
            .replace(/\(.*?\)/g, "")
            .replace(/\[.*?\]/g, "")
            .replace(/official.*$/i, "")
            .replace(/video.*$/i, "")
            .replace(/lyrics.*$/i, "")
            .trim();

        // Separar artista - canción
        let artist = "";
        let song = "";

        if (title.includes("-")) {
            [artist, song] = title.split("-").map(t => t.trim());
        } else {
            song = title;
            artist = search.videos[0].author?.name || "";
        }

        if (!artist || !song) {
            await sock.sendMessage(from, {
                text: "❌ No pude identificar artista y canción."
            });
            break;
        }

        const url = `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`;
        const res = await axios.get(url);

        if (!res.data?.lyrics) {
            await sock.sendMessage(from, {
                text: "❌ Letra no encontrada."
            });
            break;
        }

        const lyrics = res.data.lyrics.slice(0, 3800); // evita límite WA

        await sock.sendMessage(from, {
            text:
`🎤 *${song}*
👤 *Artista:* ${artist}

${lyrics}`
        });

    } catch (e) {
        console.error("Error en #lyrics:", e);
        await sock.sendMessage(from, {
            text: "❌ Error buscando la letra."
        });
    }
    break;
}

case "yt":
case "video":
    try {
        const query = args.join(" ");
        if (!query)
            return sock.sendMessage(from, { text: "❗ Escribe el nombre del video o link." });

        let url = query;
        const isLink = /(youtube\.com|youtu\.be)/i.test(query);
        let video;

        if (!isLink) {
            await sock.sendMessage(from, { text: `🔎 Buscando *${query}*...` });

            const search = await ytSearch(query);
            if (!search.videos.length)
                return sock.sendMessage(from, { text: "❌ No encontré resultados." });

            video = search.videos[0];
            url = video.url;
        } else {
            // Extraer el ID del link
            const idMatch = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
            const videoId = idMatch ? idMatch[1] : "default";

            video = {
                title: "Video de YouTube",
                duration: "Desconocido",
                thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
                author: { name: "Desconocido" },
                views: "Desconocidas"
            };
        }

        const thumb = await getBuffer(video.thumbnail);
        const views = video.views ? video.views.toLocaleString("en-US") : "N/A";

        await sock.sendMessage(from, {
            image: thumb,
            caption: `🎬 *${video.title}*\n🧑‍🎤 Creador: *${video.author?.name}*\n👁️ Visitas: *${views}*\n⏱️ Duración: *${video.duration}*\n\n📥 *Preparando el video...*`
        });

        const output = `/sdcard/${Date.now()}.mp4`;

        exec(`yt-dlp -f "best[height<=720]" -o "${output}" "${url}"`, async (err) => {
            if (err) {
                console.log(err);
                return sock.sendMessage(from, { text: "❌ Error descargando el video." });
            }

            await sock.sendMessage(from, {
                video: { url: output },
                caption: "🎥 Aquí tienes tu video."
            });

            fs.unlinkSync(output);
        });

    } catch (e) {
        console.log("Error #yt:", e);
        sock.sendMessage(from, { text: "❌ Error procesando el comando." });
    }
break;

case "tiktok":
case "tt":
    try {
        const query = args.join(" ");
        if (!query) return sock.sendMessage(from, { text: "❗ Escribe el nombre del TikTok o una búsqueda." });

        await sock.sendMessage(from, { text: `🎵 Buscando en TikTok: *${query}*...` });

        // 1. Buscar en TikTok usando yt-dlp
        exec(`yt-dlp "ytsearch1:${query} tiktok" --dump-json`, async (err, stdout) => {
            if (err || !stdout) {
                console.log("Error búsqueda TikTok:", err);
                return sock.sendMessage(from, { text: "❌ No encontré ningún TikTok relacionado." });
            }

            const info = JSON.parse(stdout);
            const url = info.webpage_url;
            const title = info.title || "TikTok";

            await sock.sendMessage(from, { text: `⬇️ Descargando TikTok...\n📹 *${title}*` });

            // 2. Descargar el video
            const output = `/sdcard/${Date.now()}.mp4`;

            exec(`yt-dlp -f mp4 --no-warnings -o "${output}" "${url}"`, async (err2) => {
                if (err2) {
                    console.log("Error descargando TikTok:", err2);
                    return sock.sendMessage(from, { text: "❌ Error descargando el TikTok." });
                }

                // 3. Enviar el video
                await sock.sendMessage(from, {
                    video: { url: output },
                    caption: title
                });
            });
        });

    } catch (e) {
        console.log("Error #tiktok:", e);
        sock.sendMessage(from, { text: "❌ Error procesando el comando." });
    }
break;


case "s":
case "sticker": {
    try {
        const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;

        const media =
            msg.message?.imageMessage ||
            msg.message?.videoMessage ||
            quoted?.imageMessage ||
            quoted?.videoMessage;

        if (!media) {
            return sock.sendMessage(from, {
                text: "❌ Envía o responde una imagen o video (máx 10s)."
            });
        }

        if (media.seconds && media.seconds > 10) {
            return sock.sendMessage(from, { 
                text: "⏱️ El video no puede pasar 10 segundos." 
            });
        }

        await sock.sendMessage(from, { text: "✨ Creando sticker..." });

        // Descargar buffer universal
        const buffer = await descargarMedia(msg);
         if (!buffer) throw new Error("Error descargando media");

        const base = Date.now();
        const input = `/sdcard/st_${base}.${media.mimetype.startsWith("video") ? "mp4" : "jpg"}`;
        const output = `/sdcard/st_${base}.webp`;

        fs.writeFileSync(input, buffer);

        // ffmpeg para convertir imagen o video → webp
        const font = "/system/fonts/Roboto-Regular.ttf";
const text = "by CrisBot";
const cmd = media.mimetype.startsWith("video")
? `ffmpeg -i '${input}' -vf "drawtext=fontfile=${font}:text='${text}':fontcolor=white:fontsize=24:shadowcolor=black:shadowx=2:shadowy=2:x=w-tw-10:y=10" -vcodec libwebp -loop 0 -preset default -an -vsync 0 '${output}'`
: `ffmpeg -i '${input}' -vf "drawtext=fontfile=${font}:text='${text}':fontcolor=white:fontsize=24:shadowcolor=black:shadowx=2:shadowy=2:x=w-tw-10:y=10" -vcodec libwebp -lossless 1 -preset picture -loop 0 -an -vsync 0 '${output}'`;

        await new Promise((resolve, reject) =>
            exec(cmd, (e) => (e ? reject(e) : resolve()))
        );

        const final = fs.readFileSync(output);

        await sock.sendMessage(from, {
            sticker: final,
            packname: "CrisBot Pack",
            author: pushName || "Usuario"
        });

        fs.unlinkSync(input);
        fs.unlinkSync(output);

    } catch (err) {
        console.error(err);
        sock.sendMessage(from, { text: "❌ Error creando sticker." });
    }
}
break;



case "pin": {
    try {
        if (!args.length) {
            return await sock.sendMessage(from, {
                text: "📌 Usa:\n*#pin <búsqueda> [cantidad]*\nEj: #pin gojo satoru 3"
            }, { quoted: msg });
        }

        let cantidad = parseInt(args[args.length - 1]);
        if (isNaN(cantidad)) cantidad = 4;
        cantidad = Math.min(Math.max(cantidad, 2), 7);

        const queryArgs = isNaN(parseInt(args[args.length - 1])) ? args : args.slice(0, -1);
        const query = queryArgs.join(" ");

        const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&form=HDRSC2&first=1`;

        const { data } = await axios.get(url, {
            headers: { "User-Agent": "Mozilla/5.0" }
        });

        let imgs = [...data.matchAll(/murl&quot;:&quot;(.*?)&quot;/g)]
            .map(v => v[1])
            .filter(u => u.startsWith("http"));
        imgs = [...new Set(imgs)];

        if (!imgs.length) {
            return await sock.sendMessage(from, { text: "❌ No encontré imágenes." }, { quoted: msg });
        }

        const seleccion = imgs.slice(0, cantidad);

        for (const img of seleccion) {
            await sock.sendMessage(from, {
                image: { url: img },
                caption: `📌 Pinterest style\n🔎 *${query}*`
            }, { quoted: msg });
        }

    } catch (e) {
        console.error("PIN ERROR:", e);
        await sock.sendMessage(from, { text: "❌ Error buscando imágenes.\nUsa #report pin" }, { quoted: msg });
    }
    break;
}


case "setbirth": {
  const users = loadUsers();
  initializeUser(users, sender);

  if (!args[0])
    return sock.sendMessage(from, { text: "❀ Usa: #setbirth DD/MM/AAAA" });

  users[sender].birth = args[0];
  saveUsers(users);

  sock.sendMessage(from, { text: "🎂 Cumpleaños guardado." });
}
break;

case "genero": {
  const users = loadUsers();
  initializeUser(users, sender);

  if (!args[0])
    return sock.sendMessage(from, { text: "⚥ Usa: #genero masculino/femenino/otro" });

  users[sender].genero = args.join(" ");
  saveUsers(users);

  sock.sendMessage(from, { text: "⚥ Género guardado." });
}
break;



case "brat": {
    try {
        const text = args.join(" ");
        if (!text)
            return sock.sendMessage(from, { text: "✏️ Escribe un texto para generar el brat." });

        const base = Date.now();
        const png = `/sdcard/brat_${base}.png`;
        const webp = `/sdcard/brat_${base}.webp`;

        const bg = "#FF69B4";

        const len = text.length;
        const size = len < 15 ? 90 : len < 30 ? 70 : len < 60 ? 55 : len < 100 ? 40 : 30;

        const wrapped = text.replace(/(.{1,18})(\s+|$)/g, "$1\n").trim();

        // Esta fuente existe en TODOS los Android y es la que usa WhatsApp
        const font = "/system/fonts/Roboto-Regular.ttf";

        // SIN antialias (ES LO QUE TE ROMPÍA)
        const cmd = `
ffmpeg -f lavfi -i color=c=${bg}:s=600x600 \
-vf "drawtext=text='${wrapped.replace(/'/g, "\\'")}':fontcolor=black:fontsize=${size}:line_spacing=15:fontfile='${font}':x=(w-text_w)/2:y=(h-text_h)/2" \
-frames:v 1 '${png}'
`;
        await new Promise((resolve, reject) => exec(cmd, (e) => (e ? reject(e) : resolve())));

        const cmd2 = `ffmpeg -i '${png}' -vcodec libwebp -lossless 1 -preset picture -loop 0 -an -vsync 0 '${webp}'`;
        await new Promise((resolve, reject) => exec(cmd2, (e) => (e ? reject(e) : resolve())));

        const webpBuffer = fs.readFileSync(webp);

        await sock.sendMessage(from, {
            sticker: webpBuffer,
            packname: "Brat Pack 💖",
            author: "CrisBot"
        });

        fs.unlinkSync(png);
        fs.unlinkSync(webp);

    } catch (err) {
        console.error(err);
        await sock.sendMessage(from, { text: "❌ Error generando brat 😭" });
    }
}
break;



case 'emojimix': {
    const texto = args.join(" ");

    if (!texto)
        return sock.sendMessage(from, { text: "👉 Usa *#emojimix 😊+😂*" });

    await sock.sendMessage(from, { text: "🔁 Mezclando emojis..." });

    try {
        let [emoji1, emoji2] = texto.split("+");

        if (!emoji1 || !emoji2)
            return sock.sendMessage(from, { text: "❌ Formato incorrecto.\n👉 Usa: *#emojimix 😊+😂*" });

        const url = `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`;

        const { data } = await axios.get(url);

        if (!data.results || data.results.length === 0)
            return sock.sendMessage(from, { text: "❌ Esa combinación no existe 😭" });

        for (let res of data.results) {
            await sock.sendMessage(from, {
                image: { url: res.url },
                caption: `✨ EmojiMix\n${emoji1} + ${emoji2}`
            });
        }

    } catch (err) {
        console.log(err);
        await sock.sendMessage(from, { text: "❌ Error generando emojimix 😭" });
    }
}
break;

case "play":
case "audio":
case "ytaudio":
    try {
        const query = args.join(" ");
        if (!query)
            return sock.sendMessage(from, { text: "❗ Escribe el nombre de la canción o un link." });

        let url = query;
        const isLink = /(youtube\.com|youtu\.be)/i.test(query);
        let video;

        if (!isLink) {
            await sock.sendMessage(from, { text: "`🔎 Buscando...`" });

            const search = await ytSearch(query);
            if (!search.videos.length)
                return sock.sendMessage(from, { text: "❌ No encontré resultados." });

            video = search.videos[0];
            url = video.url;
        } else {
            video = {
                title: "Audio de YouTube",
                duration: "Desconocido",
                thumbnail: "https://i.ytimg.com/vi/default.jpg",
                author: { name: "Desconocido" },
                views: "Desconocidas"
            };
        }

        // MINIATURA
        const thumb = await getBuffer(video.thumbnail);

        // VISITAS formateadas
        const views = video.views ? video.views.toLocaleString("en-US") : "N/A";

        // ENVIAR INFO
        await sock.sendMessage(from, {
            image: thumb,
            caption:
`> ✐ Canal » *${video.author?.name}*
> ⴵ Duracion » *${video.duration}*
> ✰ Visitas:  *${views}*
> ❒ Titulo » *${video.title}*

🎧 *Preparando el audio...*`
        });

        // DESCARGAR AUDIO
            await sock.sendMessage(from, { text: "Sevidor » `CrizZapp...`"});

        const output = `/sdcard/${Date.now()}.mp3`;

        exec(
`yt-dlp \
-f "ba[ext=m4a]/ba/best" \
--no-playlist \
--extractor-args "youtube:player_client=web" \
--add-header "User-Agent:Mozilla/5.0" \
-x --audio-format mp3 --audio-quality 5 \
-o "${output}" "${url}"`,
{ shell: true },
async (err) => {
            if (err) {
                console.log(err);
                return sock.sendMessage(from, { text: "❌ Error descargando el audio." });
            }

            const buffer = fs.readFileSync(output);

            // ENVIAR AUDIO
            await sock.sendMessage(from, {
                audio: buffer,
                mimetype: "audio/mpeg",
                ptt: false
            });


            fs.unlinkSync(output);
        });

    } catch (e) {
        console.log("Error #play:", e);
        sock.sendMessage(from, { text: "❌ Error procesando el audio." });
    }
break;

case "para":
  try {
    // Leer el archivo GIF
    const gif = fs.readFileSync("./menu.gif");

    // Enviar el mensaje con el GIF
    await sock.sendMessage(from, {
      video: gif,
      gifPlayback: true, // 🔥 ESTO ES LA CLAVE
      caption: `a @${sender.split("@")[0]} se le para el titan 🗿`,
      mentions: [sender],
      contextInfo: {
        isForwarded: true,
        forwardingScore: 1,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363422781423966@newsletter",
          newsletterName: "🌹CrizZapp🌹",
          serverMessageId: 1
        }
      }
    }, { quoted: msg });

    // Enviar una reacción
    await sock.sendMessage(from, {
      react: {
        text: "🍆",
        key: msg.key
      }
    }, { quoted: msg });
  } catch (error) {
    console.error("Error enviando:", error);
    await sock.sendMessage(from, {
      text: "Error enviando el comando. Intenta de nuevo."
    }, { quoted: msg });
  }
  break;

case "mafia":
    mafiaCommand({ sock, from, sender, args, m });
break;

    case "prueba":
        await handlePrueba(sock, from, args);
        break;

case "calculadora":
case "calc":
    try {
        let expresion = args.join(" ");
        if (!expresion) {
            await sock.sendMessage(from, { text: "❌ Debes ingresar una operación. Ej: #calculadora 2 + 2" });
            break;
        }

        // Solo permitir números, paréntesis, espacios y operadores conocidos
        if (/[^0-9+\-*/().\s×÷%^√^><=±]/.test(expresion)) {
            await sock.sendMessage(from, { text: "❌ Operación inválida. Solo se permiten números y operadores." });
            break;
        }

        // Reemplazar símbolos por operadores JS
        expresion = expresion
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/√/g, "Math.sqrt")
            .replace(/\^/g, "**")
            .replace(/%/g, "/100")
            .replace(/±/g, "+-"); // ± lo tratamos como +- (o se puede personalizar)

        // Evaluar la expresión de manera segura
        // NOTA: eval se usa con precaución porque ya filtramos caracteres
        const resultado = eval(expresion);

        // Manejar comparaciones simples (> < >= <=)
        // Si la expresión incluye >, <, >=, <=, devolvemos true/false
        await sock.sendMessage(from, { text: `💻 Resultado: ${resultado}` });
    } catch (err) {
        await sock.sendMessage(from, { text: "❌ Error al calcular la expresión." });
        console.error(err);
    }
    break;

case "nekos":
case "neko":
    try {
        const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

        // Opcional: podés filtrar por tag, por ejemplo 'neko', 'waifu', etc.
        const tag = args[0] || "neko"; // si el usuario pone #nekos waifu, usa 'waifu'

        const res = await fetch(`https://api.nekosapi.com/v4/images?tags=${tag}`);
        if (!res.ok) throw new Error("Error al obtener la imagen");

        const data = await res.json();

        if (!data.results || data.results.length === 0)
            throw new Error("No hay imágenes disponibles");

        const imageUrl = data.results[0].url;

        // Descargar la imagen como buffer
        const buffer = await (await fetch(imageUrl)).arrayBuffer();

        // Enviar imagen al chat
        await sock.sendMessage(from, {
            image: Buffer.from(buffer),
            caption: `✨ Imagen de Nekos (${tag})`
        });

    } catch (err) {
        console.log("Error #nekos:", err);
        await sock.sendMessage(from, { text: "❌ Error al obtener la imagen." });
    }
break;

case "ppt": // #ppt para jugar
    const opciones = ["piedra", "papel", "tijera"];
    const eleccionBot = opciones[Math.floor(Math.random() * opciones.length)];
    const eleccionUsuario = args[0]?.toLowerCase(); // lo que el usuario escribe después del comando

    if (!opciones.includes(eleccionUsuario)) {
        await sock.sendMessage(from, { text: `❌ Uso: #ppt <piedra|papel|tijera>` });
        break;
    }

    let resultado = "";
    if (eleccionUsuario === eleccionBot) {
        resultado = "🤝 Empate!";
    } else if (
        (eleccionUsuario === "piedra" && eleccionBot === "tijera") ||
        (eleccionUsuario === "papel" && eleccionBot === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionBot === "papel")
    ) {
        resultado = "🎉 Ganaste!";
    } else {
        resultado = "💀 Perdeste!";
    }

    await sock.sendMessage(from, { text: `Tu elección: ${eleccionUsuario}\nBot: ${eleccionBot}\n${resultado}` });
    break;



  case 'adoptar': {
    // Ej: #adoptar Firulais https://i.postimg.cc/wTkPCNtt/1764291026183.png
    const [nombre, urlImagen] = args; 
    const mensaje = adoptar(nombre, urlImagen);
    await sock.sendMessage(from, {
      image: { url: mascota.imagen },
      caption: mensaje
    });
    break;
  }

  case 'alimentar': {
    const mensaje = alimentar();
    await sock.sendMessage(from, {
      image: { url: mascota.imagen },
      caption: mensaje
    });
    break;
  }

  case 'jugar': {
    const mensaje = jugar();
    await sock.sendMessage(from, {
      image: { url: mascota.imagen },
      caption: mensaje
    });
    break;
  }

  case 'dormir': {
    const mensaje = dormir();
    await sock.sendMessage(from, {
      image: { url: mascota.imagen },
      caption: mensaje
    });
    break;
  }

case "gift": {


const text =
  msg.message?.conversation ||
  msg.message?.extendedTextMessage?.text ||
  "";

    if (sender !== OWNER_JID) return await sock.sendMessage(from, { text: "❌ Solo el OWNER puede usar este comando." });

    // Separar args usando el texto del mensaje
    const args = text.trim().split(" ");
    args.shift(); // eliminar "#gift"

    if (args.length < 2) return await sock.sendMessage(from, { text: "❌ Uso: #gift [nombre del personaje] [tiempo]\nEj: #gift Hinata Hyuga 15m" });

    const durationArg = args.pop(); // último argumento = duración
    const nombrePersonaje = args.join(" "); // resto = nombre del personaje

    let giftDuration;
    if (durationArg.endsWith("h")) giftDuration = parseInt(durationArg) * 60 * 60 * 1000;
    else if (durationArg.endsWith("m")) giftDuration = parseInt(durationArg) * 60 * 1000;
    else return await sock.sendMessage(from, { text: "❌ Tiempo inválido. Usa 15m o 1h." });

    await cmdGift(sock, from, sender, nombrePersonaje, giftDuration);
    break;
}

case "giftoff":
case "apagargift":
    if(sender !== owner) return await sock.sendMessage(from, { text: "❌ Solo el OWNER puede usar esto." });
    if(!giftActive) return await sock.sendMessage(from, { text: "⚠️ No hay gift activo." });

    giftActive = false;
    giftedCharacter = null;
    giftEndsAt = null;

    await sock.sendMessage(from, { text: "✅ Gift cancelado exitosamente." });
    break;

case "ownercoins": {

const text =
  msg.message?.conversation ||
  msg.message?.extendedTextMessage?.text ||
  "";

    if (sender !== OWNER_JID)
        return await sock.sendMessage(from, { text: "❌ Solo el OWNER puede usar este comando." });

    const args = text.trim().split(" ");
    args.shift();

    const amount = parseInt(args[args.length - 1]);
    if (isNaN(amount) || amount <= 0)
        return await sock.sendMessage(from, { text: "❌ Cantidad inválida." });

    const target = m.mentionedJid?.[0] || sender;

    // === LEER USERS.JSON (igual que ranking) ===
    const dataRaw = fs.readFileSync("./settings/users.json", "utf-8");
    const users = JSON.parse(dataRaw);

    // Crear usuario si no existe
    if (!users[target]) {
        users[target] = {
            coins: 0,
            xp: 0,
            vip: false,
            vipExpire: 0
        };
    }

    users[target].coins += amount;

    // === GUARDAR ===
    fs.writeFileSync(
        "./settings/users.json",
        JSON.stringify(users, null, 2)
    );

    await sock.sendMessage(from, {
        text: `🪙 *Coins otorgadas*\n\n👤 Usuario: @${target.split("@")[0]}\n💰 Cantidad: ${amount}`,
        mentions: [target]
    });

    break;
}

  case 'ver': {
    const data = verMascota();
    await sock.sendMessage(from, {
      image: { url: data.image },
      caption: data.text
    });
    break;
  }

case 'welcome': {
    if (!isGroup)
        return await sock.sendMessage(from, { text: "❌ Este comando solo funciona en grupos." });

    const meta = await sock.groupMetadata(from);
    const adminIds = meta.participants.filter(p => p.admin !== null).map(p => p.id);

    if (!adminIds.includes(sender))
        return await sock.sendMessage(from, { text: "❌ Solo un admin puede activar el welcome." });

    if (args[0] === "off") {
        welcomeStatus[from] = false;
        saveStatus(); // ✅ guardar estado
        return await sock.sendMessage(from, { text: "🔕 *Welcome desactivado.*" });
    }

    welcomeStatus[from] = true;
    saveStatus(); // ✅ guardar estado
    await sock.sendMessage(from, { text: "🔔 *Welcome activado.*\nUsa:* #welcome off *para apagarlo.*" });
}
break;



case "ahorcado":
  // Lista de palabras
  const palabras = ["javascript", "programador", "whatsapp", "robot", "computadora"];
  // Elegir palabra al azar
  const palabra = palabras[Math.floor(Math.random() * palabras.length)];
  
  // Crear estado del juego
  let estado = "_".repeat(palabra.length);
  let intentos = 6; // vidas
  let usadas = []; // letras usadas

  // Guardar el juego en memoria (puedes usar un objeto global por chat)
  juegos[from] = { palabra, estado, intentos, usadas };

  await sock.sendMessage(from, { text: `🎯 Ahorcado iniciado!\n${estado}\nTienes ${intentos} intentos.\nUsa #letra <letra>` });
  break;

case "sticker":
case "s": {
    try {

        // Leer si el usuario respondió un mensaje con imagen o video
        const quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;

        const img = quoted?.imageMessage || info.message?.imageMessage;
        const vid = quoted?.videoMessage || info.message?.videoMessage;

        // Si no hay imagen ni video → error
        if (!img && !vid)
            return sock.sendMessage(from, { text: "📌 Responde a una *imagen o video (máx 10s)* para hacer sticker." });

        // Si es imagen
        if (img) {
            const buffer = await sock.downloadMediaMessage({ message: { imageMessage: img } });

            await sock.sendMessage(
                from,
                {
                    sticker: buffer,
                    packname: "CrisBot Stickers",
                    author: "Cris"
                },
                { quoted: info }
            );

            return;
        }

        // Si es video de más de 10 s → error
        if (vid && vid.seconds > 10)
            return sock.sendMessage(from, { text: "⚠️ El video no puede durar más de 10 segundos." });

        // Si es video válido
        if (vid) {
            const buffer = await sock.downloadMediaMessage({ message: { videoMessage: vid } });

            await sock.sendMessage(
                from,
                {
                    sticker: buffer,
                    packname: "CrisBot Stickers",
                    author: "Cris"
                },
                { quoted: info }
            );

            return;
        }

    } catch (e) {
        console.error(e);
        await sock.sendMessage(from, { text: "❌ Error creando sticker." });
    }
}
break;

case "letra":
  const juego = juegos[from];
  if(!juego) return sock.sendMessage(from, { text: "No hay juego en curso. Usa #ahorcado para iniciar." });

  const letra = args[0]?.toLowerCase();
  if(!letra || letra.length !== 1) return sock.sendMessage(from, { text: "Usa una letra válida. Ej: #letra a" });

  if(juego.usadas.includes(letra)) return sock.sendMessage(from, { text: `Ya usaste la letra ${letra}.` });

  juego.usadas.push(letra);

  if(juego.palabra.includes(letra)) {
    // Actualizar estado
    let nuevoEstado = "";
    for(let i = 0; i < juego.palabra.length; i++) {
      nuevoEstado += juego.usadas.includes(juego.palabra[i]) ? juego.palabra[i] : "_";
    }
    juego.estado = nuevoEstado;
    if(!juego.estado.includes("_")) {
      delete juegos[from];
      return sock.sendMessage(from, { text: `🎉 ¡Ganaste! La palabra era: ${juego.palabra}` });
    }
  } else {
    juego.intentos--;
    if(juego.intentos <= 0) {
      delete juegos[from];
      return sock.sendMessage(from, { text: `💀 Perdiste! La palabra era: ${juego.palabra}` });
    }
  }

  await sock.sendMessage(from, { text: `🎯 ${juego.estado}\nIntentos restantes: ${juego.intentos}\nLetras usadas: ${juego.usadas.join(", ")}` });
  break;
 
  case "tts": {
    await cmdTts(
        sock,
        from,
        args.join(" "),
        channelInfo,
        msg
    );
    break;
} 

case "translate": {
  const channelInfo = {
    isForwarded: true,
    forwardingScore: 2,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363422781423966@newsletter",
      newsletterName: "☼Cris Bot - oficial channel✧",
      serverMessageId: 1
    }
  };

  // reacción
  await sock.sendMessage(from, {
    react: { text: "🌍", key: msg.key }
  });

  await cmdTranslate(
    sock,
    from,
    args,
    async (audioData) => {
      await sock.sendMessage(from, {
        audio: audioData,
        mimetype: "audio/mp4",
        ptt: true,
        contextInfo: channelInfo
      });
    }
  );

  break;
}

case "pelea": {
  if (!isGroup)
    return sock.sendMessage(from, {
      text: "❌ Este comando solo funciona en grupos."
    });

  const mentioned =
    msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;

  if (!mentioned || mentioned.length === 0)
    return sock.sendMessage(from, {
      text: "⚔️ Debes mencionar a alguien\nEjemplo: #pelea @usuario"
    });

  const rival = mentioned[0];
  const user1 = `@${sender.split("@")[0]}`;
  const user2 = `@${rival.split("@")[0]}`;

  const channelInfo = {
    isForwarded: true,
    forwardingScore: 2,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363422781423966@newsletter",
      newsletterName: "☼Cris Bot - oficial channel✧",
      serverMessageId: 1
    }
  };

  const peleas = [
    {
      texto: `🥊 ${user1} le ganó a ${user2} ¡K.O.! 💥`,
      gif: "https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUybzdoZ2x3aWc2ano5OW93NmMwdmlqczRqMzV2ZjF0aTlsb3V1NnpxZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xGAv1tD7CBVGLjHj6n/giphy.mp4"
    },
    {
      texto: `🥊 ${user2} humilló a ${user1} 😵`,
      gif: "https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUybmx4MWcyeTlscnBsaWc3emJmNDN1Z215bmY1d21pZnVodDJ2cHpubiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HfMMHWhM9HwbQsRnVv/giphy.mp4"
    },
    {
      texto: `⚔️ ${user1} y ${user2} pelearon fuerte… ¡empate! 🤝`,
      gif: "https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyeHdoMmV5ZnQ5ZzRhY2g4aDI3cTFudWZpaWdtbDEzd3NiYWc1c3RtNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ofSB2k2KIyfnhi7iE/giphy.mp4"
    }
  ];

  const resultado = peleas[Math.floor(Math.random() * peleas.length)];

  // reacción
  await sock.sendMessage(from, {
    react: { text: "⚔️", key: msg.key }
  });

  await sock.sendMessage(from, {
    video: { url: resultado.gif },
    caption: resultado.texto,
    gifPlayback: true,
    mentions: [sender, rival],
    contextInfo: channelInfo
  });

  break;
}  

case 'beta': {
    // Mismo flujo que #pelea pero contra el bot
    const user1 = `@${sender.split("@")[0]}`;
    const user2 = '@CrisBot'; // El bot

    const peleas = [
        {
            texto: `🥊 ${user1} le ganó a ${user2} ¡K.O.! 💥`,
            gif: 'https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUybzdoZ2x3aWc2ano5OW93NmMwdmlqczRqMzV2ZjF0aTlsb3V1NnpxZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xGAv1tD7CBVGLjHj6n/giphy.mp4'
        },
        {
            texto: `🥊 ${user2} humilló a ${user1} 😵`,
            gif: 'https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUybmx4MWcyeTlscnBsaWc3emJmNDN1Z215bmY1d21pZnVodDJ2cHpubiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HfMMHWhM9HwbQsRnVv/giphy.mp4'
        },
        {
            texto: `⚔️ ${user1} y ${user2} pelearon fuerte… ¡empate! 🤝`,
            gif: 'https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyeHdoMmV5ZnQ5ZzRhY2g4aDI3cTFudWZpaWdtbDEzd3NiYWc1c3RtNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ofSB2k2KIyfnhi7iE/giphy.mp4'
        }
    ];
    

    const resultado = peleas[Math.floor(Math.random() * peleas.length)];

    await sock.sendMessage(from, {
        video: { url: resultado.gif },
        caption: resultado.texto,
        gifPlayback: true,
        mentions: [sender] // solo menciona al usuario, no al bot
    });

    break;
}

case 'apk': {

  // ⏳ Mensaje previo
  await sock.sendMessage(from, {
    text: '📦 Cargando APK… ⌛️\nPor favor espera.'
  });

  // 📱 Enviar APK
  await sock.sendMessage(from, {
    document: fs.readFileSync('/storage/emulated/0/CrisBot/CrisBot-Base/Que no se caiga! (BETA) .apk'),
    mimetype: 'application/vnd.android.package-archive',
    fileName: 'Que no se caiga! (BETA).apk'
  });

  break;
}

case "baltop":
case "ranking": {
    try {
        const dataRaw = fs.readFileSync("./settings/users.json", "utf-8");
        const users = JSON.parse(dataRaw);

        const sorted = Object.entries(users)
            .filter(([_, info]) => typeof info.coins === "number")
            .sort((a, b) => b[1].coins - a[1].coins)
            .slice(0, 10);

        if (sorted.length === 0) {
            await sock.sendMessage(from, { text: "❌ No hay usuarios en el ranking." });
            break;
        }

        let rankingMsg = `🏆 *TOP 10 — RANKING DE COINS* 🏆\n`;
        rankingMsg += `══════════════════\n\n`;

        const mentions = [];

        sorted.forEach(([jid, info], i) => {
            const numero = jid.split("@")[0];
            const name = nombresUsuarios?.[jid] || `@${numero}`;
            const medal =
                i === 0 ? "🥇" :
                i === 1 ? "🥈" :
                i === 2 ? "🥉" : "🔹";

            mentions.push(jid);

            rankingMsg += `${medal} *${i + 1}.* ${name}\n`;
            rankingMsg += `   💰 ${info.coins.toLocaleString()} coins\n\n`;
        });

        rankingMsg += `══════════════════\n`;
        rankingMsg += `🔥 *¿Podrás llegar al TOP 1?*`;

        await sock.sendMessage(
            from,
            {
                text: rankingMsg,
                mentions,
                contextInfo: channelInfo // si querés que salga con canal
            },
            { quoted: msg }
        );

    } catch (err) {
        console.error("Error leyendo ranking:", err);
        await sock.sendMessage(from, {
            text: "❌ Error al obtener el ranking."
        });
    }

    break;
}

case "bio":
case "setbio":
  await cmdSetBio(sock, from, sender, args);
  break;



case 'todos': {
    // Obtener metadata del grupo
    const meta = await sock.groupMetadata(from);
    const participantes = meta.participants;

    // Crear lista de IDs
    const menciones = participantes.map(p => p.id);

    // Generar texto con @tag por cada usuario
    let texto = `📢 *REVIVAN TODOS*\n\n`;
    for (let p of participantes) {
        texto += `@${p.id.split("@")[0]}\n`;
    }

    await sock.sendMessage(from, {
        text: texto,
        mentions: menciones
    });

    break;
}

case 'aviso': {
    // Texto que escribió el usuario
    const aviso = args.join(" ");
    if (!aviso) {
        return await sock.sendMessage(from, { 
            text: "📌 *Debes escribir el aviso*\nEjemplo: #aviso mañana no hay clases",
            quoted: msg 
        });
    }

    // Obtener metadata del grupo
    const meta = await sock.groupMetadata(from);
    const participantes = meta.participants;

    // Crear lista de menciones
    const menciones = participantes.map(p => p.id);

    // Construir mensaje
    let texto = `📢 *AVISO IMPORTANTE*\n\n${aviso}\n\n👥 Etiquetados:\n`;
    for (let p of participantes) {
        texto += `@${p.id.split("@")[0]}\n`;
    }

    await sock.sendMessage(from, {
        text: texto,
        mentions: menciones
    });
}
    break;



case 'infobot': {
  const users = JSON.parse(
    fs.readFileSync('./settings/users.json', 'utf-8')
  );

  const imageUrl = "https://i.postimg.cc/85L1jXnF/images-(22).jpg";
  const totalUsers = Object.keys(users).length;

  const ping = Date.now() - m.messageTimestamp * 1000;

  const userData = users[sender];
if (!userData.commandsUsed) userData.commandsUsed = 0;

  let estado = "🟢 Excelente";
  if (ping > 300) estado = "🟡 Chill";
  if (ping > 900) estado = "🔴 Saturado";

  await sock.sendMessage(from, {
    image: { url: imageUrl },
    caption: `⛧ INFO DEL BOT ⛧
👤 @${sender.split("@")[0]}

✿ *Nombre* ➔ ꧁༺ Shoko Komi ༻꧂

✦ *Usuarios* ➔ ${totalUsers}

❀ *Tipo* ➔ Prem Bot

✧ *Versión* ➔ *v1.5 - ꧁༺ Shoko Komi ༻꧂

⛧ *Comandos* ➔ 155

❀ *Comandos usados por @${sender.split("@")[0]}*: ${userData.commandsUsed}

✦ *Creador* ➔ +59898476523

𖤐 *Canal* » https://whatsapp.com/channel/0029VbBN8qCG3R3cZASjRO1I

❀ *Estado* ➔ ${estado}`,
    mentions: [sender]
  });

  await sock.sendMessage(from, {
    react: { text: "💗", key: msg.key }
  });
}
break;

case 'antilink': {
    if (!isGroup) return await sock.sendMessage(from, { text: "❌ Este comando solo funciona en grupos." });

    // Solo admins pueden activar
    const groupMeta = await sock.groupMetadata(from);
    const adminIds = groupMeta.participants.filter(p => p.admin !== null).map(p => p.id);
    if (!adminIds.includes(sender)) return await sock.sendMessage(from, { text: "❌ Solo un admin puede usar este comando." });

    // Obtener argumentos de forma segura
    let args = '';
    if (msg.message?.conversation) {
        args = msg.message.conversation.split(' ')[1];
    } else if (msg.message?.extendedTextMessage?.text) {
        args = msg.message.extendedTextMessage.text.split(' ')[1];
    }

    // Activar o desactivar
    if (args?.toLowerCase() === 'off') {
        antilinkStatus[from] = false;
        saveStatus();
        await sock.sendMessage(from, { text: "❌ Sistema antilink desactivado." });
    } else {
        antilinkStatus[from] = true;
        saveStatus();
        await sock.sendMessage(from, { text: "✅ Sistema antilink activado. Cualquier link será expulsado automáticamente." });
    }

    break;
}

case 'kick': {
    // ❌ Solo grupos
    if (!isGroup) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        return await sock.sendMessage(from, {
            text: "❌ Este comando solo funciona en grupos."
        });
    }

    // Obtener admins
    const groupMeta = await sock.groupMetadata(from);
    const participantes = groupMeta.participants;
    const adminIds = participantes
        .filter(p => p.admin !== null)
        .map(p => p.id);

    // ❌ No es admin
    if (!adminIds.includes(sender)) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        return await sock.sendMessage(from, {
            text: "❌ Solo un admin puede usar este comando."
        });
    }

    // ❌ No mencionó a nadie
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || mentioned.length === 0) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        return await sock.sendMessage(from, {
            text: "❌ Debes mencionar a alguien para expulsar."
        });
    }

    try {
        // ✅ Expulsar
        await sock.groupParticipantsUpdate(from, mentioned, "remove");

        // ✅ Reacción de éxito
        await sock.sendMessage(from, {
            react: { text: "✅", key: msg.key }
        });

        await sock.sendMessage(from, {
            text: `✅ ${mentioned.map(u => "@" + u.split("@")[0]).join(", ")} fue expulsado.`,
            mentions: mentioned
        });

    } catch (err) {
        console.error("Error expulsando usuario:", err);

        // 🚫 Error
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });

        await sock.sendMessage(from, {
            text: "❌ No se pudo expulsar al usuario."
        });
    }

    break;
}

case "marry": {
    const users = loadUsers();
    initializeUser(users, sender);

    // 🔹 TOMAR MENCIÓN IGUAL QUE EN KICK
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    const target = mentioned?.[0];

    if (!target) {
        return await sock.sendMessage(from, {
            text: "♡ Usa: #marry @persona"
        });
    }

    if (target === sender) {
        return await sock.sendMessage(from, {
            text: "❌ No podés casarte contigo mismo."
        });
    }

    initializeUser(users, target);

    // ❌ Si alguno ya está casado
    if (users[sender].marry) {
        return await sock.sendMessage(from, {
            text: "❌ Ya estás casado."
        });
    }

    if (users[target].marry) {
        return await sock.sendMessage(from, {
            text: "❌ Esa persona ya está casada."
        });
    }

    // ✅ ACEPTAR MATRIMONIO
    if (users[sender].marryRequest === target) {
        users[sender].marry = target;
        users[target].marry = sender;

        users[sender].marryRequest = null;
        users[target].marryRequest = null;

        saveUsers(users);

        return await sock.sendMessage(from, {
            text: "💍 ¡Matrimonio aceptado!",
            mentions: [sender, target]
        });
    }

    // 📩 ENVIAR SOLICITUD
users[target].marryRequest = sender;
saveUsers(users);

await sock.sendMessage(from, {
  text: `💌 @${target.split("@")[0]}, @${sender.split("@")[0]} quiete casarse contigo💍

👉 Para aceptar escribe:
#marry @${sender.split("@")[0]}`,
  mentions: [sender, target]
});

    break;
}

case "divorce": {
  const users = loadUsers();
  initializeUser(users, sender);

  const pareja = users[sender].marry;
  if (!pareja) {
    return await sock.sendMessage(from, {
      text: "❌ No estás casado con nadie."
    });
  }

  // Asegurar que la pareja exista en users
  initializeUser(users, pareja);

  // Guardar IDs antes de borrar
  const ex1 = sender;
  const ex2 = pareja;

  // Romper matrimonio
  users[ex1].marry = null;
  users[ex2].marry = null;

  saveUsers(users);

  await sock.sendMessage(from, {
    text: `💔 El matrimonio entre @${ex1.split("@")[0]} y @${ex2.split("@")[0]} ha terminado.`,
    mentions: [ex1, ex2]
  });

  break;
}

case "spam":
    // Verifica si se proporcionaron los argumentos necesarios (cantidad y texto)
    if (args.length < 2) {
        await sock.sendMessage(from, { text: "❌ Uso incorrecto. Ejemplo: .spam 5 Hola mundo" });
        break;
    }

    // El primer argumento es la cantidad de mensajes a enviar
    const cantidad = parseInt(args[0]);
    // El resto de los argumentos forman el texto del mensaje
    const textoSpam = args.slice(1).join(" ");

    // Verifica que la cantidad sea un número válido y positivo
    if (isNaN(cantidad) || cantidad <= 0) {
        await sock.sendMessage(from, { text: "❌ La cantidad debe ser un número positivo." });
        break;
    }

    // Bucle para enviar el mensaje repetidamente
    for (let i = 0; i < cantidad; i++) {
        await sock.sendMessage(from, { text: textoSpam });
    }
    break;

case 'pfp': {
    // Obtener el JID de la persona mencionada  
    const mencionado = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];

    if (!mencionado) {
        return sock.sendMessage(from, { 
            text: '❌ Debes mencionar a alguien.\nEjemplo: #pfp @usuario',
            contextInfo: channelInfo,
            quoted: msg
        });
    }

    try {
        // Obtener la URL de la foto de perfil
        const url = await sock.profilePictureUrl(mencionado, 'image');

        // Enviar la imagen con mención, canal y citado
        await sock.sendMessage(from, {   
            image: { url: url },   
            caption: `📸 Foto de perfil de @${mencionado.split('@')[0]}`,
            contextInfo: {
                ...channelInfo,             // mantiene la info del canal
                mentionedJid: [mencionado] // agrega la mención
            },
            quoted: msg
        });
    } catch (err) {
        await sock.sendMessage(from, { 
            text: '❌ Esta persona no tiene foto de perfil o no se pudo obtener.',
            contextInfo: channelInfo,
            quoted: msg
        });
    }
    break;
}

case "tienda":
  await cmdTienda(sock, from, sender);
  break;

case "comprar":
  await cmdComprar(sock, from, sender, args);
  break;

case "apoyar":
  await cmdApoyar(sock, from, sender, args);
  break;
  
case "unmute": {
    if (!isGroup)
        return sock.sendMessage(from, { text: "❌ Solo en grupos." });

    const groupMeta = await sock.groupMetadata(from);
    const adminIds = groupMeta.participants
        .filter(p => p.admin !== null)
        .map(p => p.id);

    if (!adminIds.includes(sender))
        return sock.sendMessage(from, { text: "❌ Solo admins." });

    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || mentioned.length === 0)
        return sock.sendMessage(from, { text: "❌ Menciona a alguien." });

    mentioned.forEach(u => mutedUsers.delete(u));

    await sock.sendMessage(from, {
        text: `🔊 ${mentioned.map(u => "@" + u.split("@")[0]).join(", ")} fue desmuteado.`,
        mentions: mentioned
    });
    break;
}

        case "contar":
          await sock.sendMessage(from, { text: `Empezando a contar hasta 1000... ¡aguanta!` });
          for (let i = 1; i <= 1000; i++) {
            await delay(500);
            await sock.sendMessage(from, { text: `${i}` });
          }
          await sock.sendMessage(from, { text: `¡Terminé de contar!` });
          break;


case "p":
case "ping": {
  const start = Date.now();

  // Mensaje inicial (este SÍ puede ir quoted)
  const enviado = await sock.sendMessage(
    from,
    {
      text: "`¡Pong!`\n> ⴵ..."
    },
    { quoted: msg }
  );

  // Esperar unos ms para simular cálculo
  await new Promise(res => setTimeout(res, 600));

  // Calcular ping
  const ping = Date.now() - start;

  let estado = "Excelente";
  if (ping > 300) estado = "Aceptable";
  if (ping > 900) estado = "Lento";

  // Editar el mensaje inicial
  await sock.sendMessage(from, {
    edit: enviado.key,
    text:
`✰ *¡Pong!*
> Tiempo: ⴵ *${ping} ms*
> Estado: ✦ *${estado}*`
  });

  break;
}

case "toigif":
case "#toigif":
case "/toigif": {
  await cmdToIGif(sock, msg, from);
  break;
}

case "toimg":
  await cmdToImg(sock, msg, from);
  break;

case "toivideo":
  await cmdToIVideo(sock, msg, from);
  break;

case "regalornw": {
    const users = loadUsers();
    initializeUser(users, sender);

    // Solo personajes navideños 🎄
    const navidad = personajes.filter(p => p.rareza.includes("Navidad"));
    if (navidad.length === 0) return sock.sendMessage(from, { text: "❌ No hay personajes de Navidad disponibles." });

    // Elegir uno aleatorio
    const regalo = navidad[Math.floor(Math.random() * navidad.length)];

    // Enviar mensaje inicial de "abrir regalo"
    let msg = await sock.sendMessage(from, { text: "🎁 *Abriendo tu regalo navideño...*\n[▒▒▒▒▒▒▒▒▒▒] 0%" });

    const etapas = [
        "[█▒▒▒▒▒▒▒▒▒] 10%",
        "[██▒▒▒▒▒▒▒▒] 20%",
        "[███▒▒▒▒▒▒▒] 30%",
        "[████▒▒▒▒▒▒] 40%",
        "[█████▒▒▒▒▒] 50%",
        "[██████▒▒▒▒] 60%",
        "[███████▒▒▒] 70%",
        "[████████▒▒] 80%",
        "[█████████▒] 90%",
        "[██████████] 100%"
    ];

    for (let i = 0; i < etapas.length; i++) {
        await sock.sendMessage(from, {
            text: `🎁 *Abriendo tu regalo navideño...*\n${etapas[i]}`,
            edit: msg.key
        });
        await new Promise(res => setTimeout(res, 300));
    }

    // Guardar el personaje en la colección automáticamente
    users[sender].rw.push(regalo);
    saveUsers(users);

    // Mensaje final con la imagen
    await sock.sendMessage(from, {
  image: { url: regalo.img },
  caption: `🎄 ¡Felicidades ${pushName}! Has recibido a 
*${regalo.nombre}* 
  (${regalo.rareza})
📖 Ya se agregó a tu colección RW.`,
  contextInfo: channelInfo
});

    break;
}

case "texto": {
  if (!args.length) {
    return sock.sendMessage(from, {
      text: "✏️ Usa el comando así:\n#texto hola mundo",
      contextInfo: channelInfo
    });
  }

  const abecedario = {
    a: "🇦‌", b: "🇧‌", c: "🇨‌", d: "🇩‌", e: "🇪‌", f: "🇫‌",
    g: "🇬‌", h: "🇭‌", i: "🇮‌", j: "🇯‌", k: "🇰‌", l: "🇱‌",
    m: "🇲‌", n: "🇳‌", o: "🇴‌", p: "🇵‌", q: "🇶‌", r: "🇷‌",
    s: "🇸‌", t: "🇹‌", u: "🇺‌", v: "🇻‌", w: "🇼‌",
    x: "🇽‌", y: "🇾‌", z: "🇿‌"
  };

  const texto = args.join(" ").toLowerCase();
  let resultado = "";

  for (const letra of texto) {
    if (abecedario[letra]) {
      resultado += abecedario[letra];
    } else if (letra === " ") {
      resultado += "   ";
    } else {
      resultado += letra;
    }
  }

  await sock.sendMessage(from, {
    text: resultado,
    contextInfo: {
      ...channelInfo
    }
  });

  break;
}

case "goth":
case "gotico":
case "gótico": {
  if (!args.length) {
    return sock.sendMessage(from, {
      text: "✏️ Usa el comando así:\n#gotico Hola Mundo",
      contextInfo: channelInfo
    });
  }

  const mayusculas = {
    A:"𝕬", B:"𝕭", C:"𝕮", D:"𝕯", E:"𝕰", F:"𝕱",
    G:"𝕲", H:"𝕳", I:"𝕴", J:"𝕵", K:"𝕶", L:"𝕷",
    M:"𝕸", N:"𝕹", O:"𝕺", P:"𝕻", Q:"𝕼", R:"𝕽",
    S:"𝕾", T:"𝕿", U:"𝖀", V:"𝖁", W:"𝖂", X:"𝖃",
    Y:"𝖄", Z:"𝖅"
  };

  const minusculas = {
    a:"𝖆", b:"𝖇", c:"𝖈", d:"𝖉", e:"𝖊", f:"𝖋",
    g:"𝖌", h:"𝖍", i:"𝖎", j:"𝖏", k:"𝖐", l:"𝖑",
    m:"𝖒", n:"𝖓", o:"𝖔", p:"𝖕", q:"𝖖", r:"𝖗",
    s:"𝖘", t:"𝖙", u:"𝖚", v:"𝖛", w:"𝖜", x:"𝖝",
    y:"𝖞", z:"𝖟"
  };

  const texto = args.join(" ");
  let resultado = "";

  for (const letra of texto) {
    if (mayusculas[letra]) {
      resultado += mayusculas[letra];
    } else if (minusculas[letra]) {
      resultado += minusculas[letra];
    } else {
      resultado += letra; // espacios, números, símbolos
    }
  }

  await sock.sendMessage(from, {
    text: resultado,
    contextInfo: channelInfo
  });

  break;
}

case "memes":
case "meme": {
  await cmdMeme(sock, from, channelInfo);
  break;
}

case 'antiborrar':
case 'antidelete': {
    if (!isGroup) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        return await sock.sendMessage(from, {
            text: "❌ Este comando solo funciona en grupos."
        });
    }

    const groupMeta = await sock.groupMetadata(from);
    const adminIds = groupMeta.participants
        .filter(p => p.admin !== null)
        .map(p => p.id);

    if (!adminIds.includes(sender)) {
        await sock.sendMessage(from, {
            react: { text: "🚫", key: msg.key }
        });
        return await sock.sendMessage(from, {
            text: "❌ Solo un admin puede usar este comando."
        });
    }

    antiDelete[from] = !antiDelete[from];

    await sock.sendMessage(from, {
        react: { text: "✅", key: msg.key }
    });

    await sock.sendMessage(from, {
        text: `🛡️ *Anti-borrar* ${antiDelete[from] ? "activado" : "desactivado"}`
    });

    break;
}


// Ejemplo básico para enviar un video mp4 como reacción a un comando
// ------------------- REACCIONES ANIME -------------------

    case 'verchar':
    case 'chars':
        await cmdVerChar(sock, from, sender, args);
        break;


case 'kill': {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    const user1 = `@${sender.split("@")[0]}`;

    if (!mentioned || mentioned.length === 0) {
        await sock.sendMessage(from, {
            text: `${user1} acabó con su propia vida 💥`,
            mentions: [sender]
        });
    } else {
        const user2 = `@${mentioned[0].split("@")[0]}`;
        const videoUrl = 'https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyNjVvczhscTRjM3pxbTZlcTFzaG1ycXo2cWlqOWw0OHFkem5nOG0zNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BTV1vUcOWht2U/giphy.mp4';
        await sock.sendMessage(from, {
            video: { url: videoUrl },
            caption: `${user1} acabó con ${user2} 💥`,
            gifPlayback: true,
            mentions: [sender, mentioned[0]]
        });
    }
    break;
}

case 'hentai': {
    if (!isGroup) {
        await sock.sendMessage(from, { text: "❌ Solo funciona en grupos." });
        break;
    }

    if (!global.nsfwGroups?.[from]) {
        await sock.sendMessage(from, {
            text: "🔞 NSFW desactivado.\nUn admin debe usar *#nsfw on*"
        });
        break;
    }

    try {
        const res = await fetch("https://nekobot.xyz/api/image?type=hentai");
        const data = await res.json();

        if (!data?.message) throw new Error("No image");

        await sock.sendMessage(
            from,
            {
                image: { url: data.message },
                caption: "🔞 Hentai",
                contextInfo: channelInfo
            },
            { quoted: msg }
        );

    } catch (e) {
        console.error(e);
        await sock.sendMessage(from, {
            text: "❌ Error NSFW (API caída)."
        });
    }

    break;
}

case 'slap': {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    const user1 = `@${sender.split("@")[0]}`;

    if (!mentioned || mentioned.length === 0) {
        await sock.sendMessage(from, {
            text: `❌ ${user1}, debes mencionar a alguien para usar este comando 👋`,
            mentions: [sender]
        });
    } else {
        const user2 = `@${mentioned[0].split("@")[0]}`;
        const videoUrl = 'https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyYTYzbGpjMmNxdnJlcmZid3pmOWtya3FrbHF0dDl0NHNnZHI3NW5vMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HMGYrlGxQu4phgwcn1/giphy.mp4';
        await sock.sendMessage(from, {
            video: { url: videoUrl },
            caption: `👋 ${user1} le dio un cachetazo a ${user2}`,
            gifPlayback: true,
            mentions: [sender, mentioned[0]]
        });
    }
    break;
}

case 'cry': {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    const user1 = `@${sender.split("@")[0]}`;

    const videoUrl = 'https://media.giphy.com/media/ROF8OQvDmxytW/giphy.mp4';

    if (!mentioned || mentioned.length === 0) {
        await sock.sendMessage(from, {
            video: { url: videoUrl },
            caption: `😢 ${user1} está llorando solo en la oscuridad`,
            gifPlayback: true,
            mentions: [sender]
        });
    } else {
        const user2 = `@${mentioned[0].split("@")[0]}`;
        await sock.sendMessage(from, {
            video: { url: videoUrl },
            caption: `😢 ${user1} está llorando por ${user2}`,
            gifPlayback: true,
            mentions: [sender, mentioned[0]]
        });
    }
    break;
}

case 'apoyo': {
    const user1 = `@${sender.split("@")[0]}`;

    const videoUrl = 'https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyaXlsMHB3YzlnbGl5cWs4NmtmN3V5d3drM3lxNGNwY2prZmttdjA0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HX8KSZbOU1udHj7skM/giphy.mp4';

    await sock.sendMessage(from, {
        video: { url: videoUrl },
        caption: `${user1} Tienes todo el apoyo de Komi-san (〃▽〃)`,
        gifPlayback: true,
        contextInfo: {
            ...channelInfo,
            mentionedJid: [sender]
        }
    }, { quoted: msg });

    break;
}

case 'animo': {
    const user1 = `@${sender.split("@")[0]}`;

    const videoUrl = 'https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUydDFwcGo5ZzRwajF0cGF6ejZrdnNnenZmODAyNGJwNm9oMDV2MTB6OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HX8KSZbOU1udHj7skM/giphy.mp4';

    await sock.sendMessage(from, {
        video: { url: videoUrl },
        caption: `${user1}-*Kun* tienes t-todo mi apoyo`,
        gifPlayback: true,
        contextInfo: {
            ...channelInfo,
            mentionedJid: [sender]
        }
    }, { quoted: msg });

    break;
}

case 'uwu':
case 'senpai': {
    const user1 = `@${sender.split("@")[0]}`;

    const videoUrl = 'https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyNHFnZHM4eWU4b2RrNDBhZTllMGE1N3Y4ZTQxbGQxOGgxY2hrdmptMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kbRdf2haH2iv2mqgPH/giphy.mp4';

    await sock.sendMessage(from, {
        video: { url: videoUrl },
        caption: `${user1}-*Kun* estas demasiado cerca (•￣∇￣•)`,
        gifPlayback: true,
        contextInfo: {
            ...channelInfo,
            mentionedJid: [sender]
        }
    }, { quoted: msg });

    break;
}



case 'hug': {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || mentioned.length === 0) {
        return await sock.sendMessage(from, {
            text: "❌ Debes mencionar a alguien para dar un abrazo 🤗"
        });
    }

    const user1 = `@${sender.split("@")[0]}`;
    const user2 = `@${mentioned[0].split("@")[0]}`;
    const videoUrl = 'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.mp4';

    await sock.sendMessage(from, {
        video: { url: videoUrl },
        caption: `🤗 ${user1} le da un abrazo a ${user2}`,
        gifPlayback: true,
        contextInfo: channelInfo,
        mentions: [sender, mentioned[0]]
    });

    break;
}

case 'eventos': {
  await sock.sendMessage(from, { 
    contextInfo: channelInfo, 
    text: `🌃*EVENTO AÑO NUEVO + ANIME*🌹 
🎁 Regalos diarios 
❄️ Comandos especiales 
🌹Bonificaciones en economía 
🧸Mensajes De Komi 

Usa: 
🎁 #regalo
🌃 #komibot 
🧸 #senpai 
🧸 #animo 
¡Felices fiestas! 🌃`
  });
  break;
}

case 'santaregalo':
case 'neveded': {
  await economia.cmdSantaRegalo(
    sock,
    from,
    sender,
    pushName,
    async (msg) => await sock.sendMessage(from, { text: msg })
  );
  break;
}

case 'komibot': {
  const mensajes = [
    'Komi dice: Se bueno o te quito las coins ',
    'Te estoy vigilando senpai🙂',
    'Usa #work cuidadito con usar #steal frente ami 😑'
  ];

  const random = mensajes[Math.floor(Math.random() * mensajes.length)];

  await sock.sendMessage(from, {     contextInfo: channelInfo, text: random });
  break;
}



case 'cerezo': {
  const texto = args.join(' ');
  if (!texto) {
    await sock.sendMessage(from, { text: '🌸 Usa: #cerezo <texto>' });
    break;
  }

  const cerezo = texto.split('').join(' 🌸 ');

  await sock.sendMessage(from, {
    text: `🌸🧸TEXTO DE CEREZO🧸🌸 

${cerezo}

✨️`
  });
  break;
}

case 'exit': {

    // Si el que envió el mensaje no es el owner, no se deja usar
    if (sender !== owner) {
        await sock.sendMessage(from, { 
            text: "❌ *Solo el OWNER puede usar este comando.*" 
        }, { quoted: msg });
        break;
    }

    // Confirmación en el chat
    await sock.sendMessage(from, {
        text: "🅂🄷🄾🄺🄾 🄺🄾🄼🄸 Se despide"
    });

    // Bot abandona el grupo
    await sock.groupLeave(from);

    break;
}



case 'coinflip': {
  const choice = args[0];
  const amount = args[1];

  await economia.cmdCoinflip(
    sock,
    from,
    sender,
    pushName,
    async (msg) => await sock.sendMessage(from, { text: msg }),
    choice,
    amount
  );
  break;
}

case 'regalo': {
  await economia.cmdRegalo(sock, from, sender, pushName, {
    contextInfo: channelInfo
  }, async (msg) => {
    await sock.sendMessage(from, { text: msg });
  });
  break;
}
case 'hug': {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    const user1 = `@${sender.split("@")[0]}`;

    if (!mentioned || mentioned.length === 0) {
        await sock.sendMessage(from, {
            text: `❌ Debes mencionar a alguien para dar un abrazo.`,
        });
        break;
    }

    const user2 = `@${mentioned[0].split("@")[0]}`;
    const videoUrl = 'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.mp4';

    await sock.sendMessage(from, {
        video: { url: videoUrl },
        caption: `🤗 ${user1} abrazó a ${user2}`,
        mentions: [sender, mentioned[0]],
        gifPlayback: true
    });
    break;
}

case 'smoke': {
    const user1 = `@${sender.split("@")[0]}`;

    // Lista de GIFs
    const gifs = [
        'https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUycWJlbTJ5OThtZjgzazZyYnFyYXczNDkzcXZtdndmZmRlNW83NHA3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cZutcPhC4FgTnxRHBb/giphy.mp4',
        'https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyZWJ1NHEycDE1bnBvYmkzZWg4b2l2OHk5cDNkdDBseW93bmk1bGUzayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GQnEAQaqwOfOHyZIwx/giphy.mp4',
        'https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyODF4bDZxMGpzaGN1OW5jeHV6MGhoMjV2cTBlb3ZzZ2FheDRnbXFtZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DnhwDPt62MJesiDNfT/giphy.mp4',
        'https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyeG5zOWh6Zmt1emtoaWEzYnM3bGk4eWo4czg2MG5lenFpdHRreXh1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8hmCdMaXUewzcroADq/giphy.mp4'
    ];

    // Elegir GIF aleatorio
    const gifUrl = gifs[Math.floor(Math.random() * gifs.length)];

    await sock.sendMessage(from, {
        video: { url: gifUrl },
        caption: `🚬 ${user1} está fumando…`,
        mentions: [sender],
        gifPlayback: true
    });

    break;
}



case 'kiss': {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    const user1 = `@${sender.split("@")[0]}`;

    if (!mentioned || mentioned.length === 0) {
        await sock.sendMessage(from, {
            text: `❌ Debes mencionar a alguien para besar.`,
        });
        break;
    }

    const user2 = `@${mentioned[0].split("@")[0]}`;
    const videoUrl = 'https://i.gifer.com/8Sbz.mp4';

    await sock.sendMessage(from, {
        video: { url: videoUrl },
        caption: `😘 ${user1} besó a ${user2}`,
        mentions: [sender, mentioned[0]],
        gifPlayback: true
    });
    break;
}

case 'angry': {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    const user1 = `@${sender.split("@")[0]}`;

    if (!mentioned || mentioned.length === 0) {
        await sock.sendMessage(from, {
            text: `Etiqueta a alguien para usar éste comando`,
        });
        break;
    }

    const user2 = `@${mentioned[0].split("@")[0]}`;
    const videoUrl = 'https://i.gifer.com/EEgX.mp4';

    await sock.sendMessage(from, {
        video: { url: videoUrl },
        caption: `😠 ${user1} está enojado con ${user2}`,
        mentions: [sender, mentioned[0]],
        gifPlayback: true
    });
    break;
}

case "tonto":
case "pendejo":
case "bsc_pendejo": {

  const channelInfo = {
    isForwarded: true,
    forwardingScore: 2,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363422781423966@newsletter",
      newsletterName: "꧁༺ Shoko Komi ༻꧂ ● oficial channel✧",
      serverMessageId: 1
    }
  };

  // 1) Obtener datos del grupo
  const meta = await sock.groupMetadata(from);
  const participantes = meta.participants;
  const ids = participantes.map(p => p.id);

  // 2) Elegir usuario random
  const randomUser = ids[Math.floor(Math.random() * ids.length)];

  // 3) Mensaje inicial (AQUÍ va el canal)
  let enviado = await sock.sendMessage(from, {
    text: "10.",
    contextInfo: channelInfo
  });

  // --- Edición 1 ---
  await new Promise(r => setTimeout(r, 500));
  await sock.sendMessage(from, {
    edit: enviado.key,
    text: "50.."
  });

  // --- Edición 2 ---
  await new Promise(r => setTimeout(r, 500));
  await sock.sendMessage(from, {
    edit: enviado.key,
    text: "90..."
  });

  // --- Edición 3 ---
  await new Promise(r => setTimeout(r, 500));
  await sock.sendMessage(from, {
    edit: enviado.key,
    text: "100%..⭐️."
  });

  // --- FINAL ---
  await new Promise(r => setTimeout(r, 800));
  await sock.sendMessage(from, {
    edit: enviado.key,
    text:
      `*Búsqueda de mensajes pendejos exitosa*\n\n` +
      `📌 *El elegido pendejo del grupo es:* @${randomUser.split("@")[0]}\n\n` +
      `Deja de ser tan pendejo, plis 💀`,
    mentions: [randomUser]
  });

  break;
}

case 'bye': {
    if (!isGroup)
        return await sock.sendMessage(from, { text: "❌ Este comando solo funciona en grupos." });

    const meta = await sock.groupMetadata(from);
    const adminIds = meta.participants
        .filter(p => p.admin !== null)
        .map(p => p.id);

    if (!adminIds.includes(sender))
        return await sock.sendMessage(from, { text: "❌ Solo un admin puede activar el bye." });

    if (args[0] === "off") {
        byeStatus[from] = false;
        saveStatus();
        return await sock.sendMessage(from, { text: "🔕 *Bye desactivado.*" });
    }

    byeStatus[from] = true;
    saveStatus();
    await sock.sendMessage(from, { text: "🔔 *Bye activado.*\nUsa: *#bye off* para apagarlo." });
}
break;

case 'sendall': {
    const mensaje = args.join(" ");
    if (!mensaje) {
        await sock.sendMessage(from, { text: "❌ Debes escribir el mensaje.\nEj: #sendall Tu mensaje largo aquí" });
        break;
    }

    // Obtener todos los grupos guardados en el store
    const chats = Array.from(store.chats.values())
        .filter(c => c.id.endsWith('@g.us'))  // solo grupos
        .map(c => c.id);

    if (chats.length === 0) {
        await sock.sendMessage(from, { text: "❌ No hay grupos donde enviar el mensaje." });
        break;
    }

    // Enviar mensaje a todos los grupos
    for (let grupo of chats) {
        await sock.sendMessage(grupo, { text: mensaje });
        await new Promise(r => setTimeout(r, 300)); // delay pequeño
    }

    await sock.sendMessage(from, { text: `✅ Mensaje enviado a ${chats.length} grupos.` });
}
break;


case 'dance': {
  const videoUrl = 'https://i.gifer.com/2eSh.mp4';

  await sock.sendMessage(from, {
    video: { url: videoUrl },
    caption: '¡A bailar! 💃🕺',
        gifPlayback: true
  });

  break;
}

// Dentro de tu switch de comandos:
case "rw":
  await cmdRW(sock, from, sender, pushName);
  break;

case "claim":
case "c":
  await cmdClaim(sock, from, sender);
  break;

 case "vender":
  await cmdVender(sock, from, sender, pushName, args.join(" "));
  break;

case "tiendarw":
  await cmdVerTiendarw(sock, from);
  break;

case "resumir":
  const text = args.join(" ");
  if (!text) return sock.sendMessage(from, { text: "❌ Uso: #resumir [texto]" });

  const resumen = await resumirTexto(text);
  await sock.sendMessage(from, { text: `📝 Resumen:\n${resumen}` });
  break;

case "comprarrw":
  await cmdComprarrw(sock, from, sender, args[0]);
  break;

case "suerte":
case "boost":
    await cmdBoost(sock, from, sender, args[0]);
    break;

case "coleccion":
case "misrw":
  await cmdColeccion(sock, from, sender, pushName);
  break;

case "ia":
  const prompt = args.join(" ");
  if (!prompt) return sock.sendMessage(from, { text: "❌ Uso: #ia [tu pregunta o texto]" });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // puedes cambiar a gpt-4o si quieres
      messages: [
        { role: "system", content: "Eres un asistente inteligente que se llama KomiAi Y responde de forma clara y concisa Y amigable Te creo CrizZapp" },
        { role: "user", content: prompt }
      ],
      max_tokens: 337
    });

    const reply = response.choices[0].message.content;
    await sock.sendMessage(from, { text: `\n${reply}` });

  } catch (err) {
    console.error(err);
    await sock.sendMessage(from, { text: "❌ Error al procesar la solicitud de IA." });
  }
  break;

case "tag": {
    if (!isGroup)
        return await sock.sendMessage(from, { text: "❌ Este comando solo funciona en grupos." });

    if (!args.length)
        return await sock.sendMessage(from, { text: "Debes escribir algo.\nEj: #tag Hola a todos!" });

    // Obtener participantes del grupo
    const groupMeta = await sock.groupMetadata(from);
    const participants = groupMeta.participants.map(p => p.id); // Todos los IDs

    // Mensaje que se enviará
    const msgText = args.join(" ");

    // ✅ Enviar mensaje mencionando a todos (aunque no se vea en el texto)
    await sock.sendMessage(from, {
        text: msgText,
        mentions: participants
    });

    break;
}

case "allcommands": {
    const lista = comandos.map(c => `ᯓ★ *#${c}*`).join("\n");
    await sock.sendMessage(from, { text: `> Lista de todos los comandos:\n${lista}` });
}
break;

case "say": {
  if (!args.length)
    return await sock.sendMessage(
      from,
      { text: "❌ Debes escribir algo.\nEj: #say Hola!" },
      { quoted: msg }
    );

  const channelInfo = {
    isForwarded: true,
    forwardingScore: 2,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363422781423966@newsletter",
      newsletterName: "- 🅂🄷🄾🄺🄾 🄺🄾🄼🄸 ○ oficial channel✧",
      serverMessageId: 1
    }
  };

  await sock.sendMessage(
    from,
    {
      text: args.join(" "),
      contextInfo: channelInfo
    },
    { quoted: msg }
  );

  break;
}

case "slut":
  await economia.cmdSlut(sock, from, sender, pushName, async (msg) => await sock.sendMessage(from, { text: msg }));
  break;

   case "double":
          await economia.cmdDoubleCoins(sock, from, sender, pushName, async (msg) => {
            await sock.sendMessage(from, { text: msg });
          });
          break;

          default:
  await sock.sendMessage(
    from,
    {
      text: `✎ El comando *#${command}* no existe\n> Usa *#help* para ver la lista de comandos disponibles.`
    },
    { quoted: msg } // ← así sí funciona
  );
      }
    } catch (error) {
      console.error(chalk.red("Error en mensajes:"), error);
    }
  });
}

startBot();
