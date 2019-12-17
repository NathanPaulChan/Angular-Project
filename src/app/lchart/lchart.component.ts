import { Component, OnInit } from '@angular/core';
import { TableService } from '../table/table.service';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-lchart',
  templateUrl: './lchart.component.html',
  styleUrls: ['./lchart.component.css']
})
export class LchartComponent implements OnInit {
  Age:any;
  Id:any;
  tableDate:any;
  message: any;
  chart:any;
  total:any;
  FirstName:any;

  
getData(){
  console.log(this.Age);
  console.log(this.total);
}




  constructor(private data: TableService) { }

  ngOnInit() {

this.data.currentMessage.subscribe(message =>{
  let all = message.map(message => this.message = message)


  let table_Age = message.map(message => message.Age) //map creates a new array with the results for every array element. storing the new array elements into a variable
  let table_Gender = message.map(message => message.Gender)
  let table_Date = message.map(message => message.Date)
  let table_Id= message.map(message => message.PersonId)
  let table_FirstName= message.map(message => message.FirstName)
  let table_ScreenTime = message.map(message => message.ScreenTime)
console.log(table_Age);
// Chart.defaults.global.legend.onClick = function() {
// }


//chart.js
this.chart = new Chart('canvas',{
type: 'line', //what kind of chart it is
data:{
labels: table_FirstName, //labels the data separately
datasets:[
 {data: table_Age, label: 'Age',backgroundColor: "#CD5C5C"},
{data: table_ScreenTime, label: 'Screen Time',backgroundColor:"#3cba9f"}, 
]//datasets
},//data
options: { //able to customize the chart jj
  scales:{



    yAxes:[{scaleLabel:{ //y axis
      display: true,
      labelString: "Age"
    },

  }],
    xAxes:[{scaleLabel:{ //x axis
      display: true,
      labelString: "Name"
    }}],
    
  },
  
  
  }//options

})//canvas and chart

 })//subscribe

   }//ngoninit
  




}//barchartcomponent
