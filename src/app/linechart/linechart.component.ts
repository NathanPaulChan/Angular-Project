import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service'; //added for data injection from API
import { Chart } from 'chart.js';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

chart: any;
total: any;

  constructor(private _weather: WeatherService) { } //create instance of weather service. able to access weather service and its methods

  ngOnInit() {
    this._weather.dailyForecast() //accessing the methods from the service
    .subscribe(res => { //subscribing to the service so it allows passing of data
     console.log(res);
      let all2 = res['list'].map(res => res.main); //accessing the response - the array 'list' - map that array and create a new array
      this.total= all2; //could not use ngFor without storing the data as a global variable. because it was in ngOnInIt(), ngFor would not recognize the data.

     







      let temp_max = res['list'].map(res => res.main.temp_max) //gets temp max
      let temp_min = res['list'].map(res => res.main.temp_min) //gets temp min
      let alldates = res['list'].map(res => res.dt) //gets dates



     

      let weatherDates = []
      alldates.forEach((res) => { //converts dates 
        let jsdate = new Date(res * 1000)
        weatherDates.push(jsdate.toLocaleTimeString('en',{ year: 'numeric', month: 'short', day: 'numeric'}))
      });
// console.log(all);
 console.log(all2);

//chart.js
this.chart = new Chart('canvas',{
type: 'line', //what kind of chart it is
data:{
labels: weatherDates, //labels the data separately
datasets:[
 {data: temp_max, label: 'temp_max', borderColor:"#3cba9f", fill: false},
{data: temp_min, label: 'temp_min',backgroundColor:"ffcc00", fill: false}, //change this - doesnt make sense to have a string being outputted into a bar chart
]//datasets
},//data
options: { //able to customize the chart jj
  scales:{



    yAxes:[{scaleLabel:{ //y axis
      display: true,
      labelString: "Temperature"
    },
//   ticks:{
// min:1,
// max: 300,
// stepSize: 100
//  }
  }],
    xAxes:[{scaleLabel:{ //x axis
      display: true,
      labelString: "Dates"
    }}],
    
  },

  
  }//options

})//canvas and chart
    })//subscribe
  }//ngoninit

}
