/// retrieve entries from js file
var tableData = data;
var tbody = d3.select("tbody");

// Display default dataset

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the submit button & execute
var submit = d3.select("#filter-btn");

submit.on("click", function() {

// Remove default table &  not refresh page
d3.select("tbody").html("");

d3.event.preventDefault();

// Get date value from inputbox
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

// Filter report by date & display
var filteredData = tableData.filter(record => record.datetime === dateTime);
console.log(filteredData);

filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});