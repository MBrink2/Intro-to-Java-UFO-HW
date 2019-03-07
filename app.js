// from data.js
var tableData = data;
var tbody = d3.select('tbody');

// append raw data to html table
tableData.forEach(function(ufoReport){
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
});

button.on("click", function(){
    
    //prevent refresh
    d3.event.preventDefault();

    d3.selectAll("td").remove();

    // get input value == datetime as HTML
    var inputdatetime = d3.select("#datetime");

    // get the value property of the input element
    var inputdatetime = inputdatetime.property("value");
    
    var filteredData = tableData.filter(date => date.datetime===inputdatetime);

});

///Part 2 




