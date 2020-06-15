//CHART PAGE HYPPIQUE ENJEUX PBJ
var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
          label: "Année 2018",
          backgroundColor: 'rgba(58, 170, 52, 0.5)',
          borderColor: '#3AAA34',
          data: ["10", "23", "12", "15", "23", "10", "12"],
        },
        {
          label: "Année 2017",
          backgroundColor: 'rgba(192,192,192, 0.3)',
          borderColor: '#C0C0C0',
          data: ["22", "17", "20", "12", "14", "17", "14"],
        }]
    },
    // Configuration options go here
    options: {
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display:false
          },
          scaleLabel: {
              display: true,
              labelString: 'Month'
            }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display:false
          },
          scaleLabel: {
              display: true,
              labelString: 'CA ( en millions € )'
            }
        }]
      }
    }
});


// //CHART HYPPIQUE EVOLUTION HEBDO. / HIPPIQUE PAR RÉSEAU
const dataSource = {
  "chart": {
    "caption": "",
    "yaxisname": "Chiffre d'affaire",
    "subcaption": "",
    "flatscrollbars": "0",
    "scrollheight": "10",
    "numvisibleplot": "8",
    "plottooltext": "",
    "theme": "fusion"
  },
  "categories": [
    {
      "category": [
        {
          "label": "Janvier"
        },
        {
          "label": "Février"
        },
        {
          "label": "Mars"
        },
        {
          "label": "Avril"
        },
        {
          "label": "Mais"
        },
        {
          "label": "Juin"
        },
        {
          "label": "Juillet"
        },
        {
          "label": "Aout"
        },
        {
          "label": "Septembre"
        },
        {
          "label": "Octobre"
        },
        {
          "label": "Novembre"
        },
        {
          "label": "Décembre"
        }
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "Mobile",
      "data": [
        {
          "value": "15622"
        },
        {
          "value": "10612"
        },
        {
          "value": "15820"
        },
        {
          "value": "26723"
        },
        {
          "value": "35415"
        },
        {
          "value": "25555"
        },
        {
          "value": "81803"
        },
        {
          "value": "47950"
        },
        {
          "value": "42396"
        },
        {
          "value": "19435"
        },
        {
          "value": "9780"
        },
        {
          "value": "23243"
        },
        {
          "value": "28619"
        },
        {
          "value": "8477"
        }
      ]
    },
    {
      "seriesname": "Internet",
      "data": [
        {
          "value": "3622"
        },
        {
          "value": "2612"
        },
        {
          "value": "5820"
        },
        {
          "value": "6723"
        },
        {
          "value": "5415"
        },
        {
          "value": "5555"
        },
        {
          "value": "1803"
        },
        {
          "value": "7950"
        },
        {
          "value": "2396"
        },
        {
          "value": "9435"
        },
        {
          "value": "2780"
        },
        {
          "value": "3243"
        },
        {
          "value": "8619"
        },
        {
          "value": "1477"
        }
      ]
    }
  ]
};

FusionCharts.ready(function() {
   var myChart = new FusionCharts({
      type: "scrollstackedcolumn2d",
      renderAt: "chart-hippique-internetMobile",
      width: "100%",
      height: "18%",
      dataFormat: "json",
      dataSource
   }).render();
});



// Jauge 1
FusionCharts.ready(function() {
  var csatGauge = new FusionCharts({
      "type": "angulargauge",
      "renderAt": "hippique-gauge",
      "width": "450",
      "height": "250",
      "dataFormat": "json",
      "dataSource": {
          // Chart Configuration
          "chart": {
              "caption": "Enjeux par paris",
              "lowerLimit": "-100",
              "upperLimit": "100",
              "showValue": "1",
              "numberSuffix": "%",
              "numberPrefix": "+",
              "theme": "fusion",
              "showToolTip": "0"
          },
          // Chart Data
          "colorRange": {
              "color": [{
                  "minValue": "-100",
                  "maxValue": "0",
                  "code": "#F40026"
              },{
                  "minValue": "0",
                  "maxValue": "100",
                  "code": "#3AAA34"
              }]
          },
          "dials": {
              "dial": [{
                  "value": "+43"
              }]
          }
      }
  });
  csatGauge.render();
});


//Jauge 2
FusionCharts.ready(function() {
  var csatGauge = new FusionCharts({
      "type": "angulargauge",
      "renderAt": "hippique-gauge2",
      "width": "450",
      "height": "250",
      "dataFormat": "json",
      "dataSource": {
          // Chart Configuration
          "chart": {
              "caption": "Enjeux par réseaux",
              "lowerLimit": "-100",
              "upperLimit": "100",
              "showValue": "1",
              "numberSuffix": "%",
              "numberPrefix": "+",
              "theme": "fusion",
              "showToolTip": "0"
          },
          // Chart Data
          "colorRange": {
              "color": [{
                  "minValue": "-100",
                  "maxValue": "0",
                  "code": "#F40026"
              },{
                  "minValue": "0",
                  "maxValue": "100",
                  "code": "#3AAA34"
              }]
          },
          "dials": {
              "dial": [{
                  "value": "2,8",
              }]
          }
      }
  });
  csatGauge.render();
});
