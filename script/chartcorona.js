var Confirmed = [];
var Recovered = [];
var Deaths = [];
var stateName = [];
$.get("https://api.covidindiatracker.com/state_data.json", function (data) {
  // var countinweek = 0;
  var lengthCount = data.length;
  for (let i = 1; i < lengthCount; i++) {
    stateName.push(data[i - 1]["state"]);
    Confirmed.push(parseInt(data[i - 1]["confirmed"]));
    Recovered.push(parseInt(data[i - 1]["recovered"]));
    Deaths.push(parseInt(data[i - 1]["deaths"]));
  }
});

// var monthconfermed = [];
// var monthRecovered = [];
// var monthDeaths = [];
// var dates = [];
// $.get("https://api.covid19api.com/total/dayone/country/india", function (data) {
//   var countinweek = 0;
//   var lengthCount = data.length;
//   while (true) {
//     monthconfermed.push(parseInt(data[lengthCount - 1]["Confirmed"]));
//     dates.push(data[lengthCount - 1]["Date"]);
//     monthRecovered.push(parseInt(data[lengthCount - 1]["Recovered"]));
//     monthDeaths.push(parseInt(data[lengthCount - 1]["Deaths"]));
//     if (countinweek == 29) {
//       break;
//     }
//     lengthCount = lengthCount - 1;
//     countinweek = countinweek + 1;
//   }
//   monthconfermed.reverse();
//   monthRecovered.reverse();
//   monthDeaths.reverse();
//   dates.reverse();
//   //   console.log(week);
// });

var countryName = [];
var ConfirmedInCountry = [];
var RecoverInCountry = [];
var DeathsInCountry = [];
$.get("https://coronavirus-19-api.herokuapp.com/countries", function (data) {
  var lengthCount = data.length;
  console.log(data);
  for (var i = 1; i < lengthCount; i++) {
    countryName.push(data[i]["country"]);
    ConfirmedInCountry.push(parseInt(data[i]["cases"]));
    DeathsInCountry.push(parseInt(data[i]["deaths"]));
    RecoverInCountry.push(parseInt(data[i]["recovered"]));
  }
});
// function CoronaInIndia() {
//   var ctx = document.getElementById("IndiaChart").getContext("2d");
//   var myChart = new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: dates,

//       datasets: [
//         {
//           label: "Confirmed",
//           backgroundColor: "#ec0101",
//           // borderColor: "rgba(255, 99, 132, 1)",
//           data: monthconfermed,
//         },
//         {
//           label: "Recovered",
//           backgroundColor: "#81b214",
//           // borderColor: "green",
//           data: monthRecovered,
//         },
//         {
//           label: "Deaths",
//           backgroundColor: "#ff5722",
//           // borderColor: "orange"/,
//           data: monthDeaths,
//         },
//       ],
//     },

//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               beginAtZero: true,
//             },
//           },
//         ],
//       },
//       responsive: true,
//       tooltips: {
//         mode: "nearest",
//       },
//       easing: "easeInOutBounce",
//     },
//   });
// }
// CoronaInIndia();

function CoronaInIndiaStates() {
  var ctx = document.getElementById("statesChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: stateName,

      datasets: [
        {
          label: "Confirmed",
          backgroundColor: "#ec0101",
          // borderColor: "rgba(255, 99, 132, 1)",
          data: Confirmed,
        },
        {
          label: "Recovered",
          backgroundColor: "#81b214",
          // borderColor: "green",
          data: Recovered,
        },
        {
          label: "Deaths",
          backgroundColor: "#ff5722",
          // borderColor: "orange"/,
          data: Deaths,
        },
      ],
    },

    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      // responsive: true,
      tooltips: {
        mode: "nearest",
      },
      easing: "easeInOutBounce",
    },
  });
}
CoronaInIndiaStates();

function CoronaInWorld() {
  var ctx = document.getElementById("WorldChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: countryName,

      datasets: [
        {
          label: "Confirmed",
          backgroundColor: "#ec0101",
          borderColor: "#ec0101",
          data: ConfirmedInCountry,
        },
        {
          label: "Recovered",
          backgroundColor: "#81b214",
          borderColor: "#81b214",
          data: RecoverInCountry,
        },
        {
          label: "Deaths",
          backgroundColor: "#ff5722",
          borderColor: "#ff5722",
          data: DeathsInCountry,
        },
      ],
    },

    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      responsive: true,
      tooltips: {
        mode: "nearest",
      },
      easing: "easeInOutBounce",
    },
  });
}
CoronaInWorld();
function refresh() {
  // CoronaInIndia();
  CoronaInIndiaStates();
  CoronaInWorld();
}
