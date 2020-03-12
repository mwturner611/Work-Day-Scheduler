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
    newRow.attr("id", hours[i] + "Row");

    // create the row content and add attributes
    var newTime = $("<td>" + hours[i] + "</td>");
    var newStuff = $("<td>");
    newStuff.attr({"colspan":"3"});
    var newInput = $("<input>");
    newInput.attr({"class":"form-control", "placeholder":"Your task here", "ID":hours[i]});
    var newButtonSpace = $("<td>");
    var newButton = $("<button>" + "Save" + "</button>");
    newButton.addClass("btn btn-info");
    newButton.attr({"type":"button","data-letter":hours[i]});

    // append elements inside row content, contents in row, row to tbody tag on page
    newStuff.append(newInput);
    newButtonSpace.append(newButton);
    newRow.append(newTime, newStuff, newButtonSpace);
    $("tbody").append(newRow);
    
}

// on click event for all buttons
$(".btn").on("click", function() {

    // get button's data-letter
    var dataLetter = $(this).attr("data-letter");
    
    // use button's data-letter as ID to collect input box's value
    var sample = $("#" + dataLetter).val();

    // post the value to local storage
    localStorage.setItem(dataLetter,JSON.stringify(sample));

    // run function to post from local storage to page
    postToDos();
});

// on open/refresh post any values from local storage to the page
postToDos();

// Function looping through local storage and posting it to the page
function postToDos (){
    var keys = Object.keys(localStorage);
         
    for (var j = 0; j < keys.length; j++){ 
      var toDo = JSON.parse(localStorage.getItem(keys[j]));
      $("#" + keys[j]).val(toDo);
    }
  }


//Clear local storage at 11:59pm for next day's use
if (moment().format('h:mma') === '8:57pm'){
    localStorage.clear();
}



// if statements to determine hour and color hours past,present,future
if (currentHour === '8am'){
    $("#8amRow").addClass("table-warning");
    $("#9amRow").addClass("table-success");
    $("#10amRow").addClass("table-success");
    $("#11amRow").addClass("table-success");
    $("#12pmRow").addClass("table-success");
    $("#1pmRow").addClass("table-success");
    $("#2pmRow").addClass("table-success");
    $("#3pmRow").addClass("table-success");
    $("#4pmRow").addClass("table-success");
}
else if (currentHour === '9am'){
    $("#8amRow").addClass("table-secondary");
    $("#9amRow").addClass("table-warning");
    $("#10amRow").addClass("table-success");
    $("#11amRow").addClass("table-success");
    $("#12pmRow").addClass("table-success");
    $("#1pmRow").addClass("table-success");
    $("#2pmRow").addClass("table-success");
    $("#3pmRow").addClass("table-success");
    $("#4pmRow").addClass("table-success");
}
else if (currentHour === '10am'){
    $("#8amRow").addClass("table-secondary");
    $("#9amRow").addClass("table-secondary");
    $("#10amRow").addClass("table-warning");
    $("#11amRow").addClass("table-success");
    $("#12pmRow").addClass("table-success");
    $("#1pmRow").addClass("table-success");
    $("#2pmRow").addClass("table-success");
    $("#3pmRow").addClass("table-success");
    $("#4pmRow").addClass("table-success");
}
else if (currentHour === '11am'){
    $("#8amRow").addClass("table-secondary");
    $("#9amRow").addClass("table-secondary");
    $("#10amRow").addClass("table-secondary");
    $("#11amRow").addClass("table-warning");
    $("#12pmRow").addClass("table-success");
    $("#1pmRow").addClass("table-success");
    $("#2pmRow").addClass("table-success");
    $("#3pmRow").addClass("table-success");
    $("#4pmRow").addClass("table-success");
}
else if (currentHour === '12pm'){
    $("#8amRow").addClass("table-secondary");
    $("#9amRow").addClass("table-secondary");
    $("#10amRow").addClass("table-secondary");
    $("#11amRow").addClass("table-secondary");
    $("#12pmRow").addClass("table-warning");
    $("#1pmRow").addClass("table-success");
    $("#2pmRow").addClass("table-success");
    $("#3pmRow").addClass("table-success");
    $("#4pmRow").addClass("table-success");
}
else if (currentHour === '1pm'){
    $("#8amRow").addClass("table-secondary");
    $("#9amRow").addClass("table-secondary");
    $("#10amRow").addClass("table-secondary");
    $("#11amRow").addClass("table-secondary");
    $("#12pmRow").addClass("table-secondary");
    $("#1pmRow").addClass("table-warning");
    $("#2pmRow").addClass("table-success");
    $("#3pmRow").addClass("table-success");
    $("#4pmRow").addClass("table-success");
}
else if (currentHour === '2pm'){
    $("#8amRow").addClass("table-secondary");
    $("#9amRow").addClass("table-secondary");
    $("#10amRow").addClass("table-secondary");
    $("#11amRow").addClass("table-secondary");
    $("#12pmRow").addClass("table-secondary");
    $("#1pmRow").addClass("table-secondary");
    $("#2pmRow").addClass("table-warning");
    $("#3pmRow").addClass("table-success");
    $("#4pmRow").addClass("table-success");
}
else if (currentHour === '3pm'){
    $("#8amRow").addClass("table-secondary");
    $("#9amRow").addClass("table-secondary");
    $("#10amRow").addClass("table-secondary");
    $("#11amRow").addClass("table-secondary");
    $("#12pmRow").addClass("table-secondary");
    $("#1pmRow").addClass("table-secondary");
    $("#2pmRow").addClass("table-secondary");
    $("#3pmRow").addClass("table-warning");
    $("#4pmRow").addClass("table-success");
}
else if (currentHour === '4pm'){
    $("#8amRow").addClass("table-secondary");
    $("#9amRow").addClass("table-secondary");
    $("#10amRow").addClass("table-secondary");
    $("#11amRow").addClass("table-secondary");
    $("#12pmRow").addClass("table-secondary");
    $("#1pmRow").addClass("table-secondary");
    $("#2pmRow").addClass("table-secondary");
    $("#3pmRow").addClass("table-secondary");
    $("#4pmRow").addClass("table-warning");
}
else if (currentHour < '4pm') {
    $("#8amRow").addClass("table-success");
    $("#9amRow").addClass("table-success");
    $("#10amRow").addClass("table-success");
    $("#11amRow").addClass("table-success");
    $("#12pmRow").addClass("table-success");
    $("#1pmRow").addClass("table-success");
    $("#2pmRow").addClass("table-success");
    $("#3pmRow").addClass("table-success");
    $("#4pmRow").addClass("table-success");
}
else {
    $("#8amRow").addClass("table-secondary");
    $("#9amRow").addClass("table-secondary");
    $("#10amRow").addClass("table-secondary");
    $("#11amRow").addClass("table-secondary");
    $("#12pmRow").addClass("table-secondary");
    $("#1pmRow").addClass("table-secondary");
    $("#2pmRow").addClass("table-secondary");
    $("#3pmRow").addClass("table-secondary");
    $("#4pmRow").addClass("table-secondary");
}

