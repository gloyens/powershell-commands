// Load JSON on page load, and pass to populateTable()
window.addEventListener("load", async function loadJSON() { // await requires asynchronous function
  const requestURL = "commands.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const obj = await response.json();

  populateTable(obj);
})

// Populate table
function populateTable(obj) {
  let text = "";
  for (let x in obj) {
      text += "<tr>\
      <td>" + obj[x]["Unix Command"] + "</td>\
      <td>" + obj[x]["Powershell Command"] + "</td>\
      <td>" + obj[x]["Powershell Alias"] + "</td>\
      <td>" + obj[x]["Description"] + "</td>\
      </tr>";
  }
  document.getElementById("table").innerHTML = text;
}

function filter() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("tableFilter");
  filter = input.value.toUpperCase();
  table = document.getElementById("table1");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < tr.length; i++) {
    console.log(tr[i].innerHTML);
    if (tr[i].innerHTML.toUpperCase().includes(filter)) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}