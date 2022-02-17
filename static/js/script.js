$(document).ready(function(){
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ],
          datasets: [{
              label: 'BTC price',
              data: [12, 19, 3, 5, 2, 3, 9, 10, 11, 12, 13, 15],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
})
