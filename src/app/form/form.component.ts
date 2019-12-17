import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
// firstname: string;
// lastname: string;
SpecialCharacters = new FormControl('',Validators.pattern('[A-Za-z]'))
//model: any = [];
//model: Array <{firstname:string, lastname:string}>=[];
  model = {
    firstname:"",
    lastname: ""
  }
onSubmit(){
  //this.model.push(this.model);
 //this.model.push({firstname: this.firstname, lastname:this.lastname});

 


//var table = document.getElementById("table");

 //var row = table.insertRow(-1);

var table = (<HTMLTableElement>document.getElementById("table"));
var row = table.insertRow(-1);


 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);


 var newtext = document.createTextNode(this.model.firstname);
 cell1.appendChild(newtext);

 var newtext1 = document.createTextNode(this.model.lastname);
 cell2.appendChild(newtext1);

// this.model.lastname=null;
}

  constructor() { }

  ngOnInit() {
  }

}
