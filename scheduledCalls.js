let tomorrow = document.getElementById("tomorrow-button");
let today = document.getElementById("today-button");
let yesterday = document.getElementById("yesterday-button");
// mdc-button--raised
// mdc-button--outlined

function tomorrowButtonClicked() {

}

function todayButtonClicked() {

}

function yesterdayButtonClicked() {

}

function addTestData() {
    let scheduledCallsTable = document.getElementById("scheduled-calls-table").querySelector("tbody");

    for (let i = 0; i < 20; i++) {
        let row = document.createElement("tr");
        row.appendChild(createTDWithData("FirstName" + i));
        row.appendChild(createTDWithData("LastName" + i));
        row.appendChild(createTDWithData("Phone" + i));
        row.appendChild(createTDWithData("Location" + i));
        row.appendChild(createTDWithData("Yes"));
        scheduledCallsTable.appendChild(row);
    }
//    TODO add rows
}

addTestData();
