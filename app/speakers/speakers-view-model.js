const observableModule = require("tns-core-modules/data/observable");
const data = require("./data")

const redata = data.map((item) => {
    item.interventoCompleto = `${item.intervento} ${item.inizio} - ${item.fine}`
    return item
});

function SpeakersViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        items: redata,
    });

    //console.log(viewModel)
    return viewModel;
}

module.exports = SpeakersViewModel;
