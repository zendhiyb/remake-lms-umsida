var nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 120) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});


var options = {
  series: [44, 55, 67, 83, 83, 83],
  chart: {
  height: 350,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    dataLabels: {
      name: {
        fontSize: '22px',
      },
      value: {
        fontSize: '16px',
      },
      total: {
        show: true,
        label: 'Total',
        formatter: function (w) {
          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
          return 249
        }
      }
    }
  }
},
labels: ['Apples', 'Oranges', 'Bananas', 'Berries', 'Berries', 'Berries'],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


  // var options = {
  //   series: [{
  //     name: 'Series 1',
  //     data: [80, 50, 30, 40, 100, 20],
  //   }],
  //   chart: {
  //     height: 700,
  //     type: 'radar',
  //   },
  //   colors: ['#1C2A44'],
  //   title: {
  //     text: 'Basic Radar Chart'
  //   },
  //   yaxis: {
  //     stepSize: 20
  //   },
  //   xaxis: {
  //     categories: 
  //     [
  //       'GRAFIKA KOMPUTER', 
  //       'KECERDASAN BUATAN', 
  //       'PENGAMANAN SISTEM KOMPUTER', 
  //       'MANAJEMEN PROYEK TEKNOLOGI INFORMASI', 
  //       'DATA MINING', 
  //       'PEMROGRAMAN MOBILE']
  //   }
  // };

  // var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
  // chart3.render();
  