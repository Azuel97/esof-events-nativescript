var dialogs = require("tns-core-modules/ui/dialogs");
const firebase = require("nativescript-plugin-firebase");
const ScheduleItemsViewModel = require("./schedule-items-view-model");

/*
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


// Ritorna user corrente
firebase.getCurrentUser()
    .then(user => console.log("** USER ** ",user))
    .catch(error => console.error(error))

*/

// Isolo il model, per avere il controllo su di esso in modod da poterlo modificare
const viewModel = new ScheduleItemsViewModel();

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = viewModel;
}

function showDialog() {
    console.log("LOGIN")
    dialogs.login({
        title: "Login",
        message: "Enter credentials",
        okButtonText: "Go",
        cancelButtonText: "Cancel",
        // neutralButtonText: "Neutral",
        userName: "Username",
        password: "Password"
    }).then(function (r) {
        console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
        if(r.result) {
            console.log("Go")
            // Login con autenticazione
            firebase.login({
                type: firebase.LoginType.PASSWORD,
                passwordOptions: {
                    email: r.userName,
                    password: r.password
                }
            }).then(resutl => {
                console.log("OK", resutl)
                alert({
                    title: "Autenticazione OK",
                    message: `CIao, ${resutl.email}`,
                    okButtonText: "OK"
                })
                viewModel.set("isLogin",true)
            }).catch(error => {
                alert({
                    title: "Autenticazione fallita",
                    message: `Dati sbagliati o inesistenti, ${error}`,
                    okButtonText: "OK"
                })
                viewModel.set("isLogin",false)
            })
        }else{
            console.log("Cancel")
        }
    });
}

const fn = firebase.functions.httpsCallable("helloNome")


exports.onNavigatingTo = onNavigatingTo;
exports.showDialog = showDialog;
exports.showFunctions = function () {
    fn("Firebase-from-NativeScript")
        .then((myData) => {
            alert({
                title: "FIrebase Functions Output",
                message: myData.messaggio,
                okButtonText: "OK"
            })
        })
        .catch((errorMessage) => {
            alert({
                title: "Errore",
                message: errorMessage,
                okButtonText: "Ok, thanks"
            })
        })
};
