// add current day to the page
$("#currentDay").append(moment().format('MMMM Do YYYY'));

// create current hour save it as a variable
var currentHour = moment().format('ha');

// create hour array
var hours = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm'];

// Main loop to create list items to the screen
for (var i = 0; i < hours.length; i++){
    // create row and add attributes
    var newRow = $("<tr>");
    newRow.addClass("text-center");
    newRow.attr("scope", "row");
    newRow.attr("id", hours[i]);

    // create the row content and add attributes
    var newTime = $("<td>" + hours[i] + "</td>");
    var newStuff = $("<td>");
    newStuff.attr({"colspan":"3", "ID":hours[i]+"Stuff"});
    var newInput = $("<input>");
    newInput.attr({"class":"form-control", "placeholder":"Your task here"});
    var newButtonSpace = $("<td>");
    var newButton = $("<button>" + "Save" + "</button>");
    newButton.addClass("btn btn-info");
    newButton.attr({"type":"button"});

    // append elements inside row content, contents in row, row to tbody tag on page
    newStuff.append(newInput);
    newButtonSpace.append(newButton);
    newRow.append(newTime, newStuff, newButtonSpace);
    $("tbody").append(newRow);

}

$(".btn").on("click", function() {
   console.log('it works');
});


// decide which current hour it is and format all the rows accordingly
if (currentHour === '8am'){
    $("#8am").addClass("table-warning");
    $("#9am").addClass("table-success");
    $("#10am").addClass("table-success");
    $("#11am").addClass("table-success");
    $("#12pm").addClass("table-success");
    $("#1pm").addClass("table-success");
    $("#2pm").addClass("table-success");
    $("#3pm").addClass("table-success");
    $("#4pm").addClass("table-success");
}
else if (currentHour === '9am'){
    $("#8am").addClass("table-secondary");
    $("#9am").addClass("table-warning");
    $("#10am").addClass("table-success");
    $("#11am").addClass("table-success");
    $("#12pm").addClass("table-success");
    $("#1pm").addClass("table-success");
    $("#2pm").addClass("table-success");
    $("#3pm").addClass("table-success");
    $("#4pm").addClass("table-success");
}
else if (currentHour === '10am'){
    $("#8am").addClass("table-secondary");
    $("#9am").addClass("table-secondary");
    $("#10am").addClass("table-warning");
    $("#11am").addClass("table-success");
    $("#12pm").addClass("table-success");
    $("#1pm").addClass("table-success");
    $("#2pm").addClass("table-success");
    $("#3pm").addClass("table-success");
    $("#4pm").addClass("table-success");
}
else if (currentHour === '11am'){
    $("#8am").addClass("table-secondary");
    $("#9am").addClass("table-secondary");
    $("#10am").addClass("table-secondary");
    $("#11am").addClass("table-warning");
    $("#12pm").addClass("table-success");
    $("#1pm").addClass("table-success");
    $("#2pm").addClass("table-success");
    $("#3pm").addClass("table-success");
    $("#4pm").addClass("table-success");
}
else if (currentHour === '12pm'){
    $("#8am").addClass("table-secondary");
    $("#9am").addClass("table-secondary");
    $("#10am").addClass("table-secondary");
    $("#11am").addClass("table-secondary");
    $("#12pm").addClass("table-warning");
    $("#1pm").addClass("table-success");
    $("#2pm").addClass("table-success");
    $("#3pm").addClass("table-success");
    $("#4pm").addClass("table-success");
}
else if (currentHour === '1pm'){
    $("#8am").addClass("table-secondary");
    $("#9am").addClass("table-secondary");
    $("#10am").addClass("table-secondary");
    $("#11am").addClass("table-secondary");
    $("#12pm").addClass("table-secondary");
    $("#1pm").addClass("table-warning");
    $("#2pm").addClass("table-success");
    $("#3pm").addClass("table-success");
    $("#4pm").addClass("table-success");
}
else if (currentHour === '2pm'){
    $("#8am").addClass("table-secondary");
    $("#9am").addClass("table-secondary");
    $("#10am").addClass("table-secondary");
    $("#11am").addClass("table-secondary");
    $("#12pm").addClass("table-secondary");
    $("#1pm").addClass("table-secondary");
    $("#2pm").addClass("table-warning");
    $("#3pm").addClass("table-success");
    $("#4pm").addClass("table-success");
}
else if (currentHour === '3pm'){
    $("#8am").addClass("table-secondary");
    $("#9am").addClass("table-secondary");
    $("#10am").addClass("table-secondary");
    $("#11am").addClass("table-secondary");
    $("#12pm").addClass("table-secondary");
    $("#1pm").addClass("table-secondary");
    $("#2pm").addClass("table-secondary");
    $("#3pm").addClass("table-warning");
    $("#4pm").addClass("table-success");
}
else if (currentHour === '4pm'){
    $("#8am").addClass("table-secondary");
    $("#9am").addClass("table-secondary");
    $("#10am").addClass("table-secondary");
    $("#11am").addClass("table-secondary");
    $("#12pm").addClass("table-secondary");
    $("#1pm").addClass("table-secondary");
    $("#2pm").addClass("table-secondary");
    $("#3pm").addClass("table-secondary");
    $("#4pm").addClass("table-warning");
}
else{
    $("#8am").addClass("table-success");
    $("#9am").addClass("table-success");
    $("#10am").addClass("table-success");
    $("#11am").addClass("table-success");
    $("#12pm").addClass("table-success");
    $("#1pm").addClass("table-success");
    $("#2pm").addClass("table-success");
    $("#3pm").addClass("table-success");
    $("#4pm").addClass("table-success");
}

