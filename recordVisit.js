var selectedCustomer = null;

let selectedCustomerRow = document.getElementById("selected-customer-row");

//TODO add customer data with function
function selectCustomerButtonClicked() {
    //    This is prototype code
    selectedCustomerRow.innerHTML = "";
    selectedCustomerRow.appendChild(createTDWithData("Jake"));
    selectedCustomerRow.appendChild(createTDWithData("Bellotti"));
    selectedCustomerRow.appendChild(createTDWithData("1/1/1990"));
    selectedCustomerRow.appendChild(createTDWithData("1234567890"));

//    TODO open search/create window
}

function clearButtonClicked() {
//    TODO clear
    alert("good bye");
}

function callBackDaysChanged(e) {
    console.log(e);
}