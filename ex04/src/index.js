// Create a monitorsListArray here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    // Only change below above this line
    var monitorsList = [];
    for (var i=0; i < newMonitorsList.length; i++) {
      monitorsList.push(newMonitorsList[i], i+1);
    }
    return monitorsList;
    // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray)); // Change this line
module.exports - myMonitorsFunction;