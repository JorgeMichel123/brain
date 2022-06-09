//const { ButtonInteraction } = require("discord.js");
//import  NeuralNetwork  from "brain.js";

const {NeuralNetwork} = require ("brain.js");

const trainingData=[
    {
        input: "http://disocrde.gift",
        output: [1]
    },
    {
        input: "http://discnrd.gift",
        output: [1]
    },
    {
        input: "http://dIiscordapp.com",
        output: [1]
    },
    {
        input: "http://dIscrod-game.com",
        output: [1]
    },
    {
        input: "http://dilscord-gifts.com",
        output: [1]
    },
    {
        input: "http://discordsteamr.com",
        output: [1]
    },
    {
        input: "http://storesteamr.gift",
        output: [1]
    },
    {
        input: "http://discrod.com",
        output: [1]
    },
    {
        input: "http://storer.steam",
        output: [1]
    },
    {
        input: "http://dlscord.com",
        output: [1]
    },
    {
        input: "http://discrodnitro.com",
        output: [1]
    },
    {
        input: "http://101nitro.com",
        output: [1]
    },
    {
        input: "http://1nitro.club",
        output: [1]
    },
    {
        input: "http://2discord.com",
        output: [1]
    },
    {
        input: "http://3-month-get.com",
        output: [1]
    },
    {
        input: "http://activate-gift-1month.gq",
        output: [1]
    },
    {
        input: "http://dlicords.com",
        output: [1]
    },
    {
        input: "dliscord-gg.com",
        output: [1]
    },
    {
        input: "http://dliscord-gifts.com",
        output: [1]
    },
    {
        input: "http://dliscord.pw",
        output: [1]
    },
    {
        input: "http://dliscordapp-gifts.com",
        output: [1]
    },
    {
        input: "http://dliscordglift-nitro.com",
        output: [1]
    },
    {
        input: "http://dliscordl.com",
        output: [1]
    },
    {
        input: "http://dliscords-go.com",
        output: [1]
    },
    {
        input: "http://dljscord.com",
        output: [1]
    },
    {
        input: "http://dljscordl.com",
        output: [1]
    },
    {
        input: "http://dllscord.fun",
        output: [1]
    },
    {
        input: "http://dlsccord-club.com",
        output: [1]
    },
    {
        input: "http://dlsccordapp.com",
        output: [1]
    },
    {
        input: "http://dlsccordclub.com",
        output: [1]
    },
    {
        input: "http://dlsccrd.com",
        output: [1]
    },
    {
        input: "http://dlscocrd.club",
        output: [1]
    },
    {
        input: "http://dlscorcl-app.com",
        output: [1]
    },
    {
        input :"http://dlscorcl-up.com",
        output: [1]
    },
    {
        input: "http://dlscorcl.info",
        output: [1]
    },
    {
        input: "http://dlscorcl.shop",
        output: [1]
    },
    {
        input: "http://dlscord-alirdrop.site",
        output: [1]
    },
    {
        input: "http://dlscord-app.info",
        output: [1]
    },
    {
        input: "http://dlscord-app.shop",
        output: [1]
    },
    {
        input:"http://dlscoed.com",
        output: [1]
    },
    {
        input: "http://dlscord-apps.su",
        output: [1]
    },
    {
        input: "http://dlscord-apps.su",
        output: [1]
    },
    {
        input: "http://dlscord-egift.com",
        output: [1]
    },
    {
        input: "http://dlscord-game.com",
        output: [1]
    },
    {
        input: "http://dlscord-gg.me",
        output: [1]
    },
    {
        input: "http://dlscord-gift.info",
        output: [1]
    },
    {
        input: "http://dlscord-glfte.com",
        output: [1]
    },
    {
        input: "http://dlscord-glfted.com",
        output: [1]
    },
    {
        input :"http://dlscord-glfted.org",
        output: [1]
    },
    {
        input: "http://dlscord-glfts.com",
        output: [1]
    },
    {
        input: "http://dlscord-glfts.su",
        output: [1]
    },
    {
        input: "http://dlscord-go.com",
        output: [1]
    },
    {
        input: "http://dlscord-group.com",
        output: [1]
    },
    {
        input: "http://dlscord-hypespuad.com",
        output: [1]
    },
    {
        input: "http://dlscord-hypesquads.com",
        output: [1]
    },
    {
        input: "http://dlscord-inventory.fun",
        output: [1]
    },
    {
        input: "http://dlscord-me.com",
        output: [1]
    },
    {
        input: "http://dlscord-new.com",
        output: [1]
    },
    {
        input: "http://dlscord-newyear.com",
        output: [1]
    },
    {
        input: "http://dlscord-nitro.click",
        output: [1]
    },
    {
        input: "http://dlscord-nitro.fun",
        output: [1]
    },
    {
        input: "http://dlscord-nitro.gifts",
        output: [1]
    },
    {
        input: "http://dlscord-nitro.me",
        output: [1]
    },
    {
        input: "http://dlscord-nitro.shop",
        output: [1]
    },
    {
        input: "http://dlscord-nitro.site",
        output: [1]
    },
    {
        input: "http://dlscord-nitro.space",
        output: [1]
    },
    {
        input: "http://dlscord-nitro.store",
        output: [1]
    },
    {
        input: "http://dlscord-nitro.xyz",
        output: [1]
    },
    {
        input: "http://dlscord-nltro.com",
        output: [1]
    },
    {
        input: "http://dlscord-nltro.ru",
        output: [1]
    },
    {
        input: "http://dlscord-nltro.site",
        output: [1]
    },
    {
        input: "http://dlscord-nltro.space",
        output: [1]
    },
    {
        input: "http://dlscord-nltro.xyz",
        output: [1]
    },
    {
        input: "http://dlscord-nt.com",
        output: [1]
    },
    {
        input: "http://dlscord-online.ru",
        output: [1]
    },
    {
        input: "http://dlscord-partners.com",
        output: [1]
    },
    {
        input: "http://dlscord-promo.com",
        output: [1]
    },
    {
        input: "http://dlscord-promo.xyz",
        output: [1]
    },
    {
        input: "http://dlscord-steam-gift.com",
        output: [1]
    },
    {
        input: "http://dlscord-steam.com",
        output: [1]
    },
    {
        input: "http://dlscord-steam.xyz",
        output: [1]
    },
    {
        input: "http://dlscord-verification.com",
        output: [1]
    },
    {
        input: "http://dlscord-winter.online",
        output: [1]
    },
    {
        input: "http://dlscord-winter.ru",
        output: [1]
    },
    {
        input: "http://dlscord.app",
        output: [1]
    },
    {
        input: "http://dlscord.art",
        output: [1]
    },
    {
        input: "http://dlscord.best",
        output: [1]
    },
    {
        input: "http://dlscord.biz",
        output: [1]
    },
    {
        input: "http://dlscord.blog",
        output: [1]
    },
    {
        input: "http://dlscord.cam",
        output: [1]
    },
    {
        input: "http://dlscord.cc",
        output: [1]
    },
    {
        input: "http://dlscord.cf",
        output: [1]
    },
    {
        input: "http://dlscord.click",
        output: [1]
    },
    {
        input: "http://dlscord.cloud",
        output: [1]
    },
    {
        input: "http://dlscord.co",
        output: [1]
    },
    {
        input: "http://dlscord.codes",
        output: [1]
    },
    {
        input: "http://dlscord.com",
        output: [1]
    },
    {
        input: "http://dlscord.design",
        output: [1]
    },
    {
        input: "http://dlscord.dev",
        output: [1]
    },
    {
        input: "http://dlscord.eu",
        output: [1]
    },
    {
        input: "http://dlscordairdrop.com",
        output: [1]
    },
    {
        input: "http://dlscord.fr",
        output: [1]
    },
    {
        input: "http://dlscord.gifts",
        output: [1]
    },
    {
        input: "http://dlscord.help",
        output: [1]
    },
    {
        input: "http://dlscord.in",
        output: [1] 
    },
    {
        input: "http://dlscord.info",
        output: [1]
    },
    {
        input: "http://dlscord.ink",
        output: [1]
    },
    {
        input: "http://dlscord.link",
        output: [1]
    },
    {
        input: "http://dlscord.live",
        output: [1]
    },
    {
        input: "http://dlscord.net",
        output: [1]
    },
    {
        input: "http://dlscord.news",
        output: [1]
    },
    {
        input: "http://dlscord.one",
        output: [1]
    },
    {
        input: "http://dlscord.online",
        output: [1]
    },
    {
        input: "http://dlscord.org",
        output: [1]
    },
    {
        input: "http://dlscord.party",
        output: [1]
    },
    {
        input: "http://dlscord.photos",
        output: [1]
    },
    {
        input: "http://dlscord.press",
        output: [1]
    },
    {
        input: "http://dlscord.pro",
        output: [1]
    },
    {
        input: "http://dlscord.rocks",
        output: [1]
    },
    {
        input: "http://dlscord.space",
        output: [1]
    },
    {
        input: "http://dlscord.support",
        output: [1]
    },
    {
        input: "http://dlscord.tech",
        output: [1]
    },
    {
        input: "http://dlscord.tips",
        output: [1]
    },
    {
        input: "http://dlscord.win",
        output: [1]
    },
    {
        input: "http://dlscord.shop",
        output: [1]
    },
    {
        input: "http://dlscord.site",
        output: [1]
    },
    {
        input: "http://dlscord-gift.site",
        output: [1]
    },
    {
        input: "http://dlscorb.com",
        output: [1]
    },
    {
        input: "http://dlscorb.gift",
        output: [1]
    },
    {
        input: "http://diiscord.gift",
        output: [1]
    },
    {
        input: "https://discord.com",
        output: [0]
    },
    {
        input: "https://discord.app",
        output: [0]
    },
    {
        input: "https://twitter.com",
        output: [0]
    },
    {
        input: "https://youtube.com",
        output: [0]
    },
    {
        input: "https://store.steam",
        output: [0]
    },
    {
        input: "https://discord.gift",
        output: [0]
    },
    {
        input: "https://eneba.com",
        output: [0]
    },
    {
        input: "https://g2a.com",
        output: [0]
    },
    {
        input: "https://imgur.com",
        output: [0]
    },
    {
        input: "https://discord.js.org",
        output: [0]
    },
    {
        input: "https://google.com",
        output: [0]
    }
]


let trainedNet;

//const brain = require("./brain.js");

function encode(arg){
    let result =""
    if (typeof arg === 'string'){
    result = arg.split("").map(
        x=>(x.charCodeAt(0)/255)
    )}
    return result
}

function processTrainingData(data){
    return data.map(d=>{
        /*console.log("d" +d);
        console.log(d.output);
        console.log("d 0"+d.output[0]);*/
        return{
            input: encode(d.input),
            output: d.output[0]
        }
    })
}


function train(data){

    let net=new NeuralNetwork();

    net.train(processTrainingData(data));

   // console.log(processTrainingData(data));

    trainedNet=net.toFunction();
        
    console.log("finished training");

    //console.log(data);
   

}

function execute(input){
    let result = trainedNet(encode(input))
    console.log(result)
    return result
}

//const nett =new brain.NeuralNetwork

train(trainingData)

module.exports = {
    "execute" : execute
}

