var categories = ["Organization", "Description", "Location", "Hours", "Contact", "Date"];
var catNum = categories.length;
var rowNum = 7;

function tableCreate(){
  var body = document.getElementById("completed-work"),
      tbl  = document.createElement('table');
  tbl.style.border = '1px solid white';

  var header = document.createElement('H3');
  var h3text = document.createTextNode("Completed Volunteer Work");
  header.appendChild(h3text);
  body.appendChild(header);

  for(var i = 0; i < rowNum; i++){
      var tr = tbl.insertRow();
      for(var j = 0; j < catNum; j++){
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

console.log("local.js file!");
tableCreate();
