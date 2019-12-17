import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
allDataSelected=false;
isChecked = true;
marked=false;
userData2=[]; 

 //array of data
  userData= [
    {PersonId: 1, FirstName: "Nathan", LastName: "Chan", Gender: "M", Age: 24, Location: "MN", Date: new Date(4444,11,11),isChecked: false, ScreenTime: 12}, //created the date as an object to store the date
    {PersonId: 2, FirstName: "Geoff", LastName: "Charles", Gender: "M", Age: 55, Location: "WI", Date: new Date(2018,11,1),isChecked: false, ScreenTime: 3},
    {PersonId: 3, FirstName: "Kevin", LastName: "Hart", Gender: "M", Age: 44, Location: "CA", Date: new Date(2019,11,1),isChecked: false, ScreenTime: 5},
    {PersonId: 4, FirstName: "Sarah", LastName: "Jacobs", Gender: "F", Age: 26, Location: "MN", Date: new Date(1972,3,4),isChecked: false, ScreenTime: 10},
    {PersonId: 5, FirstName: "Zezima", LastName: "Rune", Gender: "M", Age: 59, Location: "PA", Date: new Date(1999,6,20),isChecked: false, ScreenTime: 3},
    {PersonId: 6, FirstName: "Carl", LastName: "Tray", Gender: "M", Age: 12, Location: "OH", Date: new Date(1543,12,25),isChecked: false, ScreenTime: 9},
    {PersonId: 7, FirstName: "Tracy", LastName: "Gorbol", Gender: "F", Age: 77, Location: "NY", Date: new Date(1995,4,30),isChecked: false, ScreenTime: 1},
    {PersonId: 8, FirstName: "Cheyenne", LastName: "Ricardo", Gender: "F", Age: 29, Location: "MI", Date: new Date(2019,11,7),isChecked: false, ScreenTime: 7},
    {PersonId: 9, FirstName: "Donald", LastName: "Trump", Gender: "M", Age: 73, Location: "NY", Date: new Date(1981,5,13),isChecked: false, ScreenTime: 1},
    {PersonId: 10, FirstName: "Bernie", LastName: "Sanders", Gender: "M", Age: 78, Location: "N", Date: new Date(2020,12,12),isChecked: false, ScreenTime: 5},
    {PersonId: 11, FirstName: "Joe", LastName: "Biden", Gender: "M", Age: 76, Location: "PA", Date: new Date(2014,5,12),isChecked: false, ScreenTime: 2},
    {PersonId: 12, FirstName: "Barack", LastName: "Obama", Gender: "M", Age: 58, Location: "HI", Date: new Date(1901,8,9),isChecked: false, ScreenTime: 3},
    {PersonId: 13, FirstName: "Amy", LastName: "Schumer", Gender: "F", Age: 38, Location: "NY", Date: new Date(1945,9,1),isChecked: false, ScreenTime: 8},
    {PersonId: 14, FirstName: "Amy", LastName: "Klobuchar", Gender: "F", Age: 59, Location: "MN", Date: new Date(2002,2,2),isChecked: false, ScreenTime: 6},
    {PersonId: 15, FirstName: "Cory", LastName: "Booker", Gender: "M", Age: 50, Location: "NJ", Date: new Date(2019,9,5),isChecked: false, ScreenTime: 8},
    {PersonId: 16, FirstName: "Mark", LastName: "Sanford", Gender: "M", Age: 59, Location: "SC", Date: new Date(2000,3,17),isChecked: false, ScreenTime: 5},
    {PersonId: 17, FirstName: "Joe", LastName: "Walsh", Gender: "M", Age: 57, Location: "IL", Date: new Date(1963,4,4),isChecked: false, ScreenTime: 5},
    {PersonId: 18, FirstName: "Andrew", LastName: "Yang", Gender: "M", Age: 44, Location: "NY", Date: new Date(1911,11,1),isChecked: false, ScreenTime: 10},
    {PersonId: 19, FirstName: "Vin", LastName: "Diesel", Gender: "M", Age: 52, Location: "CA", Date: new Date(1208,8,6),isChecked: false, ScreenTime: 7},
    {PersonId: 20, FirstName: "Paul", LastName: "Walker", Gender: "M", Age: 40, Location: "CA", Date: new Date(1997,4,13),isChecked: false, ScreenTime: 6}
  ];

//sorting functions that compares two arguments and compares them
SortFirstName(){
this.userData.sort(function(a,b){
  if(a.FirstName < b.FirstName) { return -1; } // if a first name is less than b firstname, will assign it a negative which will put it towards the end of the array sorting
  if(a.FirstName > b.FirstName) { return 1; } //if a first name is greater than b firstname, will assign it a positive which will put it towards the front of the array when sorting
  return 0; // if they are both the same, it will return 0
  //splits the numbers into separate arrays to compare the numbers faster. pivot / quick sort
});}

SortLastName(){
this.userData.sort(function(a,b){
if(a.LastName < b.LastName) {return -1}
if(a.LastName > b.LastName) {return 1;}
return 0;
});}

SortFemaleGender(){
  this.userData.sort(function(a,b){
    if(a.Gender < b.Gender) {return -1}
    if(a.Gender > b.Gender) {return 1;}
    return 0;
    });}

SortMaleGender(){
  this.userData.sort(function(a,b){
    if(a.Gender < b.Gender) {return 1}
    if(a.Gender > b.Gender) {return -1;}
    return 0;
    });}

SortAge(){
this.userData.sort(function(a,b){
     return a.Age - b.Age;
});}

SortLocation(){
  this.userData.sort(function(a,b){  
       if(a.Location < b.Location) {return -1}
       if(a.Location > b.Location) {return 1;}
       return 0;
  });}

  SortDate(){
    this.userData.sort(function(a,b){
         if(a.Date < b.Date) {return 1}
         if(a.Date > b.Date) {return -1;}
       return 0;  
    });
   /*this.userData.reverse();*/ //reverse the order
  }
//if any of the rows are not checked, then uncheck the alldataselected(select all) checkbox
  selectData(){
    for (var i = 0; i < this.userData.length;i++){
    if (this.userData[i].isChecked){
      this.allDataSelected=false;
      return;
    }
  }
  };

//loops through the userData and sets the isChecked property.
  selectedAll(){
    for (var i=0;i<this.userData.length; i++){
      this.userData[i].isChecked = this.allDataSelected;
    }
  }

toggleVisibility(event){
this.marked= event.target.checked;
  let r =this.userData.find( id => {return id.PersonId == event.target.value}) //checks data / row for unique person ID
  r.isChecked = !r.isChecked; // changes boolean value 
}

// isCheckedArray(){
//    for (var i = 0; i < this.userData.length;i++){ //for loop to check if "isChecked" is selected
//     if (this.userData[i].isChecked===true){ 
//  this.userData2.push(this.userData[i]); //push the data into the new array
// }
// }this.data.changeMessage(this.userData2); //inject data into change message observable - which is where components are subscribed to
// }

isCheckedArray(){
const result = this.userData.filter(function(obj){ // using .filter function () that is passing in objects from (userData)
if(obj.isChecked===true){
  return obj;
}//if statement
});//filter function
this.data.changeMessage(result);//push the results to the change message observable.
}//isCheckedArray




 constructor(private data: TableService) { }
  
  ngOnInit(){ }
}
