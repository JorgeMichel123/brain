const {Client, Intents, MessageEmbed} = require('discord.js');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})

client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`)
});

//mensaje embded de respuesta ante un enlace malicioso.
const me=new MessageEmbed().setColor("FUCHSIA")
.setTitle("Mensaje eliminado")
.setAuthor("BOT ANTI-PHISHING", "https://i.imgur.com/SmFVH3G.png")
.setDescription("el mensaje contenia enlaces peligrosos, fue borrado por su seguridad");

client.on("messageCreate", (msg) => {

    //verificar que el mensaje no sea de un bot
    if(msg.author.bot){
        return;
    }

    const string = msg.content
   //console.log(string);
    const matches = string.match(/\bhttp?:\/\/\S+/gi);
    //console.log(matches);
    const oper = require("./script.js")

    let total = oper.execute(matches);
    

    //comprobacion si el mensaje tiene un enlace malicioso
    //if(msg.content.includes(""))
    if (total=1)
    {

        //borrado del mensaje
        msg.delete();

        const target = msg.author;

        //identificacion del autor del mensaje
        let membertarget = msg.guild.members.cache.get(target.id);

        //timeout al infractor de 24hrs.
        membertarget.timeout(86400000, "Enlace malicioso");
                
        //obtencion de los roles de miembro y silenciado
        let mainrole = msg.guild.roles.cache.find(role => role.name === 'member');
        let muterole = msg.guild.roles.cache.find(role => role.name === 'muteado');
     

        //quitar el rol al infractor y ponerle un rol silenciado
        membertarget.roles.remove(mainrole.id);
        membertarget.roles.add(muterole.id);

        //envio del mensaje embded
        msg.channel.send({embeds: [me]});

           
        //informar al auto que ha infrigido las normas y se ponga en contacto con los moderadores
        msg.author.send(`Usted ha sido muteado en el servidor ${msg.guild.name} por mandar un enlace
        malicioso que va contra las normas del servidor, comunicate con su moderador del servidor para 
        quitarte el baneo, si pasan 24hrs perdera todos sus rangos y no podra escribir en el servidor hasta que
        un moderador le de sus roles nuevamente`);
        
               
     }

          
});

// token proporcionado por discord para la implementacion del bot
client.login("OTY4MzIzMTQ1NDY1NDY2OTYx.YmdLNA.8Gpsw7wi0cjheVOrAbcen-X2NOM");