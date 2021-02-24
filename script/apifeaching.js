function Counter() {
  fetch("https://coronavirus-19-api.herokuapp.com/countries")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#Cases").innerHTML = data[0]["cases"];

      document.querySelector("#new-Cases").innerHTML = data[0]["todayCases"];

      document.querySelector("#Recover").innerHTML = data[0]["recovered"];

      document.querySelector("#Deads").innerHTML = data[0]["deaths"];

      document.querySelector("#new-Deads").innerHTML = data[0]["todayDeaths"];
    })
    .catch((err) => console.log(err));
}
Counter();
function new_recovered() {
  fetch("https://api.covid19api.com/summary")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#new-Recover").innerHTML =
        data["Global"]["NewRecovered"];
    })
    .catch((err) => console.log(err));
}
new_recovered();
function fetchCountries() {
  $.get("https://coronavirus-19-api.herokuapp.com/countries", function (data) {
    // console.log(data["Countries"].length);
    var lengthCount = data.length;
    var country = document.querySelector("#countries");
    for (var i = 1; i < lengthCount; i++) {
      var x = country.insertRow();
      x.insertCell(0);
      country.rows[i].cells[0].innerHTML = data[i - 1]["country"];
      x.insertCell(1);
      country.rows[i].cells[1].innerHTML = data[i - 1]["cases"];
      x.insertCell(2);
      country.rows[i].cells[2].innerHTML = data[i - 1]["deaths"];
      x.insertCell(3);
      country.rows[i].cells[3].innerHTML = data[i - 1]["recovered"];
      x.insertCell(4);
      country.rows[i].cells[4].innerHTML =
        "<i class='fa fa-arrow-up' aria-hidden='true'></i>" +
        data[i - 1]["active"];

      country.rows[i].cells[4].style.color = "#e70838";
    }
  });
}
fetchCountries();
function fetchstatesinIndia() {
  $.get("https://api.covidindiatracker.com/state_data.json", function (data) {
    // console.log(data["Countries"].length);
    var lengthCount = data.length;
    var state = document.querySelector("#states");
    for (var i = 1; i < lengthCount; i++) {
      var x = state.insertRow();
      x.insertCell(0);
      state.rows[i].cells[0].innerHTML = data[i - 1]["state"];
      x.insertCell(1);
      state.rows[i].cells[1].innerHTML = data[i - 1]["confirmed"];
      x.insertCell(2);
      state.rows[i].cells[2].innerHTML = data[i - 1]["recovered"];
      x.insertCell(3);
      state.rows[i].cells[3].innerHTML = data[i - 1]["deaths"];
      x.insertCell(4);
      state.rows[i].cells[4].innerHTML =
        "<i class='fa fa-arrow-up' aria-hidden='true'></i> " +
        data[i - 1]["active"];
      state.rows[i].cells[4].style.color = "#e70838";
    }
  });
}
fetchstatesinIndia();
(function (document) {
  "use strict";

  var TableFilter = (function (myArray) {
    var search_input;

    function _onInputSearch(e) {
      search_input = e.target;
      var tables = document.getElementsByClassName(
        search_input.getAttribute("data-table")
      );
      myArray.forEach.call(tables, function (table) {
        myArray.forEach.call(table.tBodies, function (tbody) {
          myArray.forEach.call(tbody.rows, function (row) {
            var text_content = row.textContent.toLowerCase();
            var search_val = search_input.value.toLowerCase();
            row.style.display =
              text_content.indexOf(search_val) > -1 ? "" : "none";

            document.getElementById("Table-header-countries").style.display =
              "";
            document.getElementById("Table-header-india").style.display = "";
          });
        });
      });
    }

    return {
      init: function () {
        var inputs = document.getElementsByClassName("search-input");
        myArray.forEach.call(inputs, function (input) {
          input.oninput = _onInputSearch;
        });
      },
    };
  })(Array.prototype);

  document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
      TableFilter.init();
    }
  });
})(document);

var a = "asD";
valueOf();
