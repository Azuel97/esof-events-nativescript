const observableModule = require("tns-core-modules/data/observable");

function InformationViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        credits: ['Aldo Rossi', 'Giovanni Rossi', 'Giacomo Rossi', 'Mario Rossi','Mario Rossi',
                  'Aldo Rossi', 'Giovanni Rossi', 'Giacomo Rossi', 'Mario Rossi','Mario Rossi',
                  'Aldo Rossi', 'Giovanni Rossi', 'Giacomo Rossi', 'Mario Rossi','Mario Rossi',
                  'Aldo Rossi', 'Giovanni Rossi', 'Giacomo Rossi', 'Mario Rossi','Mario Rossi',]
    });

    return viewModel;
}

module.exports = InformationViewModel;
