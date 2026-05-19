import fs from "fs";

function salvarLog(tipo, origem, mensagem) {
    const texto = `[${new Date().toLocaleString()}] [${tipo}] [${origem}] ${mensagem}\n`;

    fs.appendFileSync("logs.txt", texto);
}

export function logInfo(origem, mensagem) {
    salvarLog("INFO", origem, mensagem);
}

export function logError(origem, mensagem, erro) {
    const textoErro = erro ? `${mensagem} - ${erro.message}` : mensagem;

    salvarLog("ERROR", origem, textoErro);
}