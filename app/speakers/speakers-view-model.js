const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const data = require("./data")
const firebase = require("nativescript-plugin-firebase/app");


const firestore = firebase.firestore();
const speakers = firestore.collection("speakers");

/*
Popolo il db tramite un file json data

data.map((item) => {
    // ADD con auto ID
    speakers.add(item).then(documentRef => {
        const doc = speakers.doc(documentRef.id)
        doc.update({
            id: documentRef.id
        }).then(() => {
            return documentRef.id
            // console.log("SF population updated");
        });
    });
})
*/


const myObservableArray = new ObservableArray();
speakers.get().then((document) => {
    document.forEach((doc) => {
        const tmp = doc.data()
        tmp.interventoCompleto = `${tmp.intervento} ${tmp.inizio} - ${tmp.fine}`
        myObservableArray.push(tmp);
    });
});

function SpeakersViewModel() {
    const viewModel = {
        items: myObservableArray,
    };
    return viewModel;
}

module.exports = SpeakersViewModel;
