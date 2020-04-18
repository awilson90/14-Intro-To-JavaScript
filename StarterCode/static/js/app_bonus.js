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

// Declara variables for each column & convert to lowercase to match table format
var dateTime = d3.select("#datetime").property("value");

var CTR = d3.select("#country").property("value").toLowerCase();

var STA = d3.select("#state").property("value").toLowerCase();

var CTY = d3.select("#city").property("value").toLowerCase();

var SHP = d3.select("#shape").property("value").toLowerCase();

// initialize tableData as filteredData
filteredData = tableData;

if (dateTime) {
    filteredData = filteredData.filter(record => record.datetime === dateTime);
}
if (CTR) {
    filteredData = filteredData.filter(record => record.country === CTR);
}
if (STA) {
    filteredData = filteredData.filter(record => record.state === STA);
}
if (CTY) {
    filteredData = filteredData.filter(record => record.city === CTY);
}
if (SHP) {
    filteredData = filteredData.filter(record => record.shape === SHP);
}

// Filter report & display
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});