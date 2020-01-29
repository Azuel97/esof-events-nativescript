const functions = require('firebase-functions');
const data = require("./peoples")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send(`
        <h2>Hello from Firebase!</h2>
        <p>Pagina html ftom <b>Firebase Function</b></p>
    `);
});

exports.helloWorld2 = functions.https.onRequest((request, response) => {
    console.log("Nome : ", request.query.name)
    response.send(`
           <h2>Hello ${request.query.name}</h2>
           <p>Welcome lorem ipsum bla bla bla</p>
       `);
});

exports.helloWorldJson = functions.https.onRequest((request, response) => {
    response.json({
        "peoples": data,
        "version": "0.0.1"
    });
});

// @data params
exports.helloNome = functions.https.onCall((data, context) => {
    return {
        status: "OK",
        messaggio: `Ciao, ${data}`
    }
})


// Ogni minuto lancia questa funzione, API a pagamento
// exports.scheduleFunction = functions.pubsub.schedule("every 1 minutes").onRun((context) => {
//     console.log("FIRE ogni 1 minuto")
//     return null
// });