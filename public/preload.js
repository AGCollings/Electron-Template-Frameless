const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld(
    "api",
    {
        send: (channel) => {
            let validChannels = ["minimize", "maximize", "unmaximize", "close"]
            
            if (validChannels.includes(channel))
            {
                ipcRenderer.send(channel)
            }
        }
    }
)