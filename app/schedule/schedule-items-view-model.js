const observableModule = require("tns-core-modules/data/observable");

function ScheduleItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: [
            {
                name: "Schedule 1",
                description: "Schedule for Item 1"
            },
            {
                name: "Schedule 2",
                description: "Schedule for Item 2"
            },
            {
                name: "Schedule 3",
                description: "Schedule for Item 3"
            },
            {
                name: "Schedule 4",
                description: "Schedule for Item 4"
            },
            {
                name: "Schedule 5",
                description: "Schedule for Item 5"
            },
            {
                name: "Schedule 6",
                description: "Schedule for Item 6"
            },
            {
                name: "Schedule 7",
                description: "Schedule for Item 7"
            },
            {
                name: "Schedule 8",
                description: "Schedule for Item 8"
            },
            {
                name: "Schedule 9",
                description: "Schedule for Item 9"
            },
            {
                name: "Schedule 10",
                description: "Schedule for Item 10"
            },
            {
                name: "Schedule 11",
                description: "Schedule for Item 11"
            },
            {
                name: "Schedule 12",
                description: "Schedule for Item 12"
            },
            {
                name: "Schedule 13",
                description: "Schedule for Item 13"
            },
            {
                name: "Schedule 14",
                description: "Schedule for Item 14"
            },
            {
                name: "Schedule 15",
                description: "Schedule for Item 15"
            },
            {
                name: "Schedule 16",
                description: "Schedule for Item 16"
            }
        ]
    });

    return viewModel;
}

module.exports = ScheduleItemsViewModel;
