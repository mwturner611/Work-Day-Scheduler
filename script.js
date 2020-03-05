// add current day to the page
$("#currentDay").append(moment().format('MMMM Do YYYY'));

var currentHour = moment().format('ha');

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

