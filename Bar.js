var xValues = ["xd", "react", "androind", "java" , "angular"];
var yValues = [80, 70, 50, 60 ,0];
var barColors = ["red", "green","blue","orange", "black"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "My skills"
    }
  }
});