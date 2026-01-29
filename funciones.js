export async function descargarMedia(msg) {
    // Esto depende de tu librería, ejemplo para baileys v5:
    if (msg.message?.imageMessage) {
        return await sock.downloadMediaMessage(msg);
    } else if (msg.message?.videoMessage) {
        return await sock.downloadMediaMessage(msg);
    } else if (msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage) {
        return await sock.downloadMediaMessage(msg);
    } else if (msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage) {
        return await sock.downloadMediaMessage(msg);
    }
    return null;
}