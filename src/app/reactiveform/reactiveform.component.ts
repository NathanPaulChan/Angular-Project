import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

userprofileForm = new FormGroup({
firstname: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]{1,99}')])),
lastname: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]{1,99}')])),
age: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{1,2}')])),
screentime: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]{1,2}')])),
});
  // firstname: FormControl;
  // lastname: FormControl;
  onSubmit(){
    var fname = this.userprofileForm.get('firstname').value;
    //console.log(fname);
    var lname = this.userprofileForm.get('lastname').value;
    //console.log(lname);
    var age = this.userprofileForm.get('age').value;
    //console.log(age);
    var screentime = this.userprofileForm.get('screentime').value;
    //console.log(screentime);


   // var table = (<HTMLInputElement>document.getElementById(table)).value //cannot read property "null" of insertrow
    //var table = document.getElementById("table"); //  var table = document.getElementById("table")[0]; insertrow only recognizes it with [0] on end? but then makes it undefined and cannot find the table 
    


    //this one - cannot read property 'insertRow' of undefined.

    // var inputValue = document.getElementById('table')["value"];
    // var row2 = inputValue.insertRow(-1);
    // console.log(inputValue);
    // console.log(table)


    //casting?
var inputValue = (<HTMLTableElement>document.getElementById('table'));
var row2 = inputValue.insertRow(-1);

    //table.append(all);
    //table.append(fname, lname, age, screentime);
    //var row = table.insertRow(-1) ;
    var cell1 = row2.insertCell(0);
    var cell2 = row2.insertCell(1);
    var cell3 = row2.insertCell(2);
    var cell4 = row2.insertCell(3);

    var newtext = document.createTextNode(fname);
    cell1.appendChild(newtext);

    var newtext1 = document.createTextNode(lname);
    cell2.appendChild(newtext1);

    var newtext2 = document.createTextNode(age);
    cell3.appendChild(newtext2);

    var newtext3 = document.createTextNode(screentime);
    cell4.appendChild(newtext3);


    var all = this.userprofileForm.value;
    console.warn(all); //output to console
   
    this.userprofileForm.setValue({firstname:'',lastname:'',age:'',screentime:''}); //clear textboxes after submit
  }
  constructor() { }

  ngOnInit() {
   
    //   this.firstname = new FormControl('',  {
    //     validators: Validators.required,
    //     updateOn: 'blur'
    //   }),
    //  this.lastname = new FormControl('',{
    //   validators: Validators.required,
    //   updateOn: 'blur'
    //  })
  }


// onSubmit(){
//   this.firstname.setValue('');
//   this.lastname.setValue('');
// }

}
