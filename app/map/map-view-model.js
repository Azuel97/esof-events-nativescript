const observableModule = require("tns-core-modules/data/observable");

function MapViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        latitude: 45.645128244509806,
        longitude: 13.7661518,
        zoom: 14
    });

    return viewModel;
}

module.exports = MapViewModel;
