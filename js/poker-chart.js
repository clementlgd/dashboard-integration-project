// CHART PAGE POKER
var ctxPoker = document.getElementById('myChartPoker').getContext('2d');
var chartPoker = new Chart(ctxPoker, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
  labels: ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"],
  datasets: [{
    label: "Année 2017",
    backgroundColor: 'rgba(29,80,145, 0.5)',
    borderColor: '#1D5091',
    data: ["15","12","13","12","14","15","16","15","14","16","13","12"],
  },
  {
    label: "Année 2016",
    backgroundColor: 'rgba(192,192,192, 0.3)',
    borderColor: '#C0C0C0',
    data:["13","14","12","14","15","13","14","13","15","16","12","13"],
  }]
},
// Configuration options
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
        labelString: 'Mois'
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
