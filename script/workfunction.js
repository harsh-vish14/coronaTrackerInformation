function Counter() {
  fetch("https://api.covid19api.com/summary")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#Cases").innerHTML =
        data["Global"]["TotalConfirmed"];

      document.querySelector("#new-Cases").innerHTML =
        data["Global"]["NewConfirmed"];

      document.querySelector("#Recover").innerHTML =
        data["Global"]["TotalRecovered"];

      document.querySelector("#new-Recover").innerHTML =
        data["Global"]["NewRecovered"];

      document.querySelector("#Deads").innerHTML =
        data["Global"]["TotalDeaths"];

      document.querySelector("#new-Deads").innerHTML =
        data["Global"]["NewDeaths"];
    })
    .catch((err) => console.log(err));
}
Counter();
function fetchCountries() {
  $.get("https://api.covid19api.com/summary", function (data) {
    // console.log(data["Countries"].length);
    var lengthCount = data["Countries"].length;
    var country = document.querySelector("#countries");
    for (var i = 1; i < lengthCount; i++) {
      var x = country.insertRow();
      x.insertCell(0);
      country.rows[i].cells[0].innerHTML = data["Countries"][i - 1]["Country"];
      x.insertCell(1);
      country.rows[i].cells[1].innerHTML =
        data["Countries"][i - 1]["TotalConfirmed"];
      x.insertCell(2);
      country.rows[i].cells[2].innerHTML =
        data["Countries"][i - 1]["TotalDeaths"];
      x.insertCell(3);
      country.rows[i].cells[3].innerHTML =
        data["Countries"][i - 1]["TotalRecovered"];
      x.insertCell(4);
      country.rows[i].cells[4].innerHTML =
        "<i class='fa fa-arrow-up' aria-hidden='true'></i> " +
        data["Countries"][i - 1]["NewConfirmed"];

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
document.getElementById("submit").addEventListener("submit", submitFrom);
function submitFrom(e) {
  e.preventDefault();
  alert("Pressed");
}
