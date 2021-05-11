const { Plugin } = require("powercord/entities");

module.exports = class QRCode extends Plugin {
    startPlugin() {
        powercord.api.commands.registerCommand({
            command: "qrcode",
            usage: "[text]",
            description: "Send a QR Code",
            executor: this.generateQR.bind(this)
        });
    }

    generateQR(args) {
        return {
            send: true,
            result: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${args.join(" ")}`
        }
    }
    
    pluginWillUnload() {
        powercord.api.commands.unregisterCommand("qrcode");
    }
}