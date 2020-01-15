const firebase = require("nativescript-plugin-firebase/app");
const observableModule = require("tns-core-modules/data/observable");
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;


const myObservableArray = new ObservableArray();
const schedule = firebase.firestore().collection("schedule");
schedule.get().then((document) => {
    console.log('2 *****  ', document)
    document.forEach((doc) => {
        const tmp = doc.data()
        console.log('1 *****  ',tmp)
        tmp.sub = `${tmp.inizio} — ${tmp.fine} ${tmp.luogo}`
        console.log('*****  ', tmp)
        myObservableArray.push(tmp);
    });
});

function ScheduleItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: myObservableArray

    });
    return viewModel;
}

module.exports = ScheduleItemsViewModel;
