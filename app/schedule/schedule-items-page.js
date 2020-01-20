const firebase = require("nativescript-plugin-firebase");
const ScheduleItemsViewModel = require("./schedule-items-view-model");


// Login con autenticazione
firebase.login({
    type: firebase.LoginType.PASSWORD,
    passwordOptions: {
        email: "azuel@hotmail.it",
        password: "123456"
    }
}).then(resutl => {
    console.log("OK", resutl)
    alert({
        title: "Autenticazione OK",
        message: `CIao, ${resutl.email}`,
        okButtonText: "OK"
    })
}).catch(error => console.error(error))

// Logout
firebase.logout()
    .then(() => console.log("LOG OUT"))
    .catch(error => console.error(error))

/* Reset della password tramite il passaggio della email

firebase.sendPasswordResetEmail("azuel@hotmail.it")
    .then(() => console.log("Password resert by email"))
    .catch(error => console.error(error))
*/

// Ritorna user corrente
firebase.getCurrentUser()
    .then(user => console.log("** USER ** ",user))
    .catch(error => console.error(error))




function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new ScheduleItemsViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
