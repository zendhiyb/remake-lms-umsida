var nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 120) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

var options = {
  series: [44, 55, 67],
  chart: {
    height: 350,
    type: 'radialBar',
  },
  colors: ['#1C2A44', '#3A4A68', '#5A6B89'],
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
          label: 'ALL',
          formatter: function (w) {
            return
          }
        }
      }
    }
  },
  labels: ['Materials', 'Assignments', 'Quizzes'],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();