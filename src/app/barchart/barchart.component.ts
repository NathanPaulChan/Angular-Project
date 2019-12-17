import { Component, OnInit } from '@angular/core';
import { TableService } from '../table/table.service';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  Age:any;
  Id:any;
  tableDate:any;
  message: any;
  chart:any;
  total:any;
  FirstName:any;
  // barChartOptions:any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };

  //    barChartLabels =this.tableDate;
  //    barChartType = 'bar';
  //    barChartLegend = true;
  
  //    barChartColors:Array<any> = [
  //   {
  //     backgroundColor: 'rgba(105,159,177,0.2)',
  //     borderColor: 'rgba(105,159,177,1)',
  //     pointBackgroundColor: 'rgba(105,159,177,1)',
  //     pointBorderColor: '#fafafa',
  //     pointHoverBackgroundColor: '#fafafa',
  //     pointHoverBorderColor: 'rgba(105,159,177)'
  //   },
  //   { 
  //     backgroundColor: 'rgba(77,20,96,0.3)',
  //     borderColor: 'rgba(77,20,96,1)',
  //     pointBackgroundColor: 'rgba(77,20,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,20,96,1)'
  //   }
  // ];
  //   barChartData = [
  //     {data: this.Age},
     
  //     // {data: this.message.Age, label: 'Company A'},
  //     // {data: this.message.Gender, label: 'Company B'}
  //   ];
  
  //   // events
  //    chartClicked() {
      
  //   }
  
  //    chartHovered(){
      
  //   }
  
getData(){
  console.log(this.Age);
  console.log(this.total);
}




  constructor(private data: TableService) { }

  ngOnInit() {
   // this.data.currentMessage.subscribe(message => this.message = message) // subscribe to the current message observable
  //  this.data.currentMessage.subscribe(message => {
  //    let table_Age = message.map(message => message.Age)
  //    let table_Gender = message.map(message => message.Gender)
  //    let table_date = message.map(message => message.Date)

this.data.currentMessage.subscribe(message =>{
  let all = message.map(message => this.message = message)


  let table_Age = message.map(message => message.Age) //map creates a new array with the results for every array element. storing the new array elements into a variable
  let table_Gender = message.map(message => message.Gender)
  let table_Date = message.map(message => message.Date)
  let table_Id= message.map(message => message.PersonId)
  let table_FirstName= message.map(message => message.FirstName)
  let table_ScreenTime = message.map(message => message.ScreenTime)

//storing them in a global variable (was using them when I was using BaseChart which was not apart of the subscribe.)
this.Age = table_Age; 
this.Id = table_Id;
this.tableDate=table_Date;
this.total = all;
this.FirstName = table_FirstName;


// Chart.defaults.global.legend.onClick = function() {
// }


//chart.js
this.chart = new Chart('canvas',{
type: 'bar', //what kind of chart it is
data:{
labels: this.FirstName, //labels the data separately
datasets:[
 {data: table_Age, label: 'Age',backgroundColor: "#CD5C5C"},
{data: table_ScreenTime, label: 'Screen Time',backgroundColor:"#3cba9f"}, //change this - doesnt make sense to have a string being outputted into a bar chart
]//datasets
},//data
options: { //able to customize the chart jj
  scales:{



    yAxes:[{scaleLabel:{ //y axis
      display: true,
      labelString: "Age"
    },
  ticks:{
min:1,
max: 100,
stepSize: 20
  }
  }],
    xAxes:[{scaleLabel:{ //x axis
      display: true,
      labelString: "Name"
    }}],
    
  },
  tooltips:{
    callbacks:{ //what is a callback , and how did it fix the hover , how does the bar chart scale the data? / know the ticks and max and min ... remove for loop that checks if it ischecked or not - because it takes too long
      label: function(tooltipitem){ //functions that outputs the date onhover of the bar. 
        return table_Date[tooltipitem.index];
      }//label function
    }//callbacks
  }//tooltips
  
  }//options

})//canvas and chart

 })//subscribe

   }//ngoninit
  




}//barchartcomponent
