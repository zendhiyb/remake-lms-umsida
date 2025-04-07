var nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 120) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});


// var options = {
//   series: [70],
//   chart: {
//     height: 400,
//     type: 'radialBar',
//   },
//   colors: ['#1C2A44'], // Warna radial bar
//   plotOptions: {
//     radialBar: {
//       hollow: {
//         size: '50%',
//       }
//     },
//   },
//   labels: ['Total'],
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();


var options = {
  series: [44, 55, 67],
  chart: {
    height: 350,
    type: 'radialBar',
  },
  colors: ['#1C2A44', '#1C2A44', '#1C2A44'], // Ganti warna semua radial bars
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '25px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: '-',
          formatter: function (w) {
            return
          }
        }
      }
    }
  },
  labels: ['Kuliah', 'Tugas', 'Quiz'],
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
  