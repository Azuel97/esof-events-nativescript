const observableModule = require("tns-core-modules/data/observable");
const data = require("./data")


function SpeakersViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        items: data,
    });

    return viewModel;
}

module.exports = SpeakersViewModel;
