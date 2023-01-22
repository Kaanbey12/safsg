var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', { 
pid: process.pid, 
activity : {
details : "DETAYLAR",  // Detaylar bölümünde gözükür.
assets : {
large_image : "IMAGE ADI",  // Buraya Rich P. kısmından koyduğunuz fotonun adını yazacaksınız.
large_text : "IMAGE ÜSTÜ YAZI" // Oynuyor kısmınızda gösterilecek + fotoğrafın üstüne mouse getirince gözükecek.
},
buttons : [{label : "Vikont RolePlay - DC" , url : "https://discord.gg/EkkFNfxJx2"}]
}
})
})
client.login({ clientId : "----" }).catch(console.error); //clientID bölümüne kendi Application ID'ni yazaksınız.

