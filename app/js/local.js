var categories = ["Date", "Organization", "Location", "Hours", "Contact", "Description", "  "];
var eventCategories = ["Event", "Date", "Location", "Volunteers"];
var catNum = categories.length;
var eventCatNum = eventCategories.length;
var rowNum = 7;

function browseTableCreate(){
  var body = document.getElementById("browse-work"),
      tbl  = document.createElement('table');
  tbl.style.border = '1px solid white';

  var header = document.createElement('H3');
  var h3text = document.createTextNode("Upcoming Volunteer Opportunities in Hoboken");
  header.appendChild(h3text);
  body.appendChild(header);

  for(var i = 0; i < rowNum; i++){
      var tr = tbl.insertRow();
      for(var j = 0; j < catNum; j++){
        var td = tr.insertCell();
        if(i == 0) {
          td.appendChild(document.createTextNode(categories[j]));
        } else {
          if(categories[j] == "  ") {
            var deleteCell = document.createElement('I');
            deleteCell.classList.add("fa");
            deleteCell.classList.add("fa-check-square");
            td.appendChild(deleteCell);
          } else {
            td.appendChild(document.createTextNode('Cell'));
          }
        }
        td.style.border = '1px solid white';
      }
  }
  body.appendChild(tbl);
}


function upcomingTableCreate(){
  var body = document.getElementById("upcoming-work"),
      tbl  = document.createElement('table');
  tbl.style.border = '1px solid white';

  var header = document.createElement('H3');
  var h3text = document.createTextNode("Your Upcoming Volunteer Work");
  header.appendChild(h3text);
  body.appendChild(header);

  for(var i = 0; i < rowNum; i++){
      var tr = tbl.insertRow();
      for(var j = 0; j < catNum; j++){
        var td = tr.insertCell();
        if(i == 0) {
          td.appendChild(document.createTextNode(categories[j]));
        } else {
          if(categories[j] == "  ") {
            var deleteCell = document.createElement('I');
            deleteCell.classList.add("fa");
            deleteCell.classList.add("fa-times-circle");
            td.appendChild(deleteCell);
          } else {
            td.appendChild(document.createTextNode('Cell'));
          }
        }
        td.style.border = '1px solid white';
      }
  }
  body.appendChild(tbl);
}

function completedTableCreate(){
  var body = document.getElementById("completed-work"),
      tbl  = document.createElement('table');
  tbl.style.border = '1px solid white';

  var header = document.createElement('H3');
  var h3text = document.createTextNode("Your Completed Volunteer Work");
  header.appendChild(h3text);
  body.appendChild(header);

  for(var i = 0; i < rowNum; i++){
      var tr = tbl.insertRow();
      for(var j = 0; j < (catNum-1); j++){
        var td = tr.insertCell();
        if(i == 0) {
          td.appendChild(document.createTextNode(categories[j]));
        } else {
          td.appendChild(document.createTextNode('Cell'));
        }
        td.style.border = '1px solid white';
      }
  }
  body.appendChild(tbl);
}

function eventTableCreate(){
  var body = document.getElementById("event-work"),
      tbl  = document.createElement('table');
  tbl.style.border = '1px solid white';

  var header = document.createElement('H3');
  var h3text = document.createTextNode("Events");
  header.appendChild(h3text);
  body.appendChild(header);

  for(var i = 0; i < rowNum; i++){
      var tr = tbl.insertRow();
      for(var j = 0; j < eventCatNum; j++){
        var td = tr.insertCell();
        if(i == 0) {
          td.appendChild(document.createTextNode(eventCategories[j]));
        } else {
          td.appendChild(document.createTextNode('Cell'));
        }
        td.style.border = '1px solid white';
      }
  }
  body.appendChild(tbl);
}

for(var x=0; x < eventData.length; x++) {
  console.log(eventData[x].split(", "));
}
/*
console.log("local.js file!");
browseTableCreate();
upcomingTableCreate();
completedTableCreate();
eventTableCreate();
*/
