//const { ButtonInteraction } = require("discord.js");
//import  NeuralNetwork  from "brain.js";

const {NeuralNetwork} = require ("brain.js");

const trainingData=[
    {
        input: "http://disocrde.gift",
        output: 1
    },
    {
        input: "http://discnrd.gift",
        output: 1
    },
    {
        input: "http://dIiscordapp.com",
        output: 1
    },
    {
        input: "http://dIscrod-game.com",
        output: 1
    },
    {
        input: "http://dilscord-gifts.com",
        output: 1
    },
    {
        input: "http://discordsteamr.com",
        output: 1
    },
    {
        input: "http://storesteamr.gift",
        output: 1
    },
    {
        input: "http://discrod.com",
        output: 1
    },
    {
        input: "http://storer.steam",
        output: 1
    },
    {
        input: "http://dlscord.com",
        output: 1
    },
    {
        input: "http://discrodnitro.com",
        output: 1
    },
    {
        input: "http://diiscord.gift",
        output: 1
    },
    {
        input: "https://discord.com",
        output :0
    },
    {
        input: "https://discord.app",
        output: 0
    },
    {
        input: "https://store.steam",
        output: 0
    },
    {
        input: "https://discord.gift",
        output: 0
    },
    {
        input: "https://discord.js.org",
        output : 0
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
        return{
            input:encode(d.input),
            output:d.output
        }
    })
}


function train(data){

    let net=new NeuralNetwork();

    net.train(processTrainingData(data));

    trainedNet=net.toFunction();

    //console.log("finished training");

}

function execute(input){
    let result = trainedNet(encode(input))
    return result

}

//const nett =new brain.NeuralNetwork

train(trainingData)

module.exports = {
    "execute" : execute
}

