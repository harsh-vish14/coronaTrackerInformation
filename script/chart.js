function CoronaInIndia() {
  var monthconfermed = [];
  var monthRecovered = [];
  var monthDeaths = [];
  var dates = [];
  $.get("https://api.covid19api.com/total/dayone/country/india", function (
    data
  ) {
    var countinweek = 0;
    var lengthCount = data.length;
    while (true) {
      monthconfermed.push(parseInt(data[lengthCount - 1]["Confirmed"]));
      dates.push(data[lengthCount - 1]["Date"]);
      monthRecovered.push(parseInt(data[lengthCount - 1]["Recovered"]));
      monthDeaths.push(parseInt(data[lengthCount - 1]["Deaths"]));
      if (countinweek == 29) {
        break;
      }
      lengthCount = lengthCount - 1;
      countinweek = countinweek + 1;
    }
    monthconfermed.reverse();
    monthRecovered.reverse();
    monthDeaths.reverse();
    dates.reverse();
    //   console.log(week);
  });
  var ctx = document.getElementById("IndiaChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dates,

      datasets: [
        {
          label: "Confirmed",
          backgroundColor: "red",
          // borderColor: "rgba(255, 99, 132, 1)",
          data: monthconfermed,
        },
        {
          label: "Recovered",
          backgroundColor: "green",
          // borderColor: "green",
          data: monthRecovered,
        },
        {
          label: "Deaths",
          backgroundColor: "orange",
          // borderColor: "orange"/,
          data: monthDeaths,
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
    },
  });
}
CoronaInIndia();

function CoronaInIndiaStates() {
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
  var ctx = document.getElementById("statesChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: stateName,

      datasets: [
        {
          label: "Confirmed",
          backgroundColor: "red",
          // borderColor: "rgba(255, 99, 132, 1)",
          data: Confirmed,
        },
        {
          label: "Recovered",
          backgroundColor: "green",
          // borderColor: "green",
          data: Recovered,
        },
        {
          label: "Deaths",
          backgroundColor: "orange",
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
    },
  });
}
CoronaInIndiaStates();
