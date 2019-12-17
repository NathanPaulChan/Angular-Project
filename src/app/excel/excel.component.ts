import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 

import {ExcelService} from './excel.service';


@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {
  storeData: any;  
  fileUploaded: File;  
  worksheet: any;  
  val:any;
  download: any;



  uploadedFile(event) {  //this function sets the file to an object
    this.fileUploaded = event.target.files[0];  
    this.readExcel(); //on change, it will execute the readexcel function 
  }  
  readExcel() {  
    let readFile = new FileReader();  //allows reading of files 
    readFile.onload = (e) => {  //onload - when an object is loaded - in this case readFile, it will perform these actions
      this.storeData = readFile.result;  //examines the result property of the instance of FileReader to get the file's contents. saves as an arraybuffer? (result) - result also returns the file's contents.

      //convert data to binary string - why?
      var data = new Uint8Array(this.storeData);  //Uint8Array - an array where each item is an 8 bit (1 byte) unsigned integer. an arraybuffer to keep binary data
      var arr = new Array();  

      for (var i = 0; i != data.length;i++) //for loop that converts all of the data from the array into unicode? why? - to convert it from binary to unicode to string?
      { arr[i] = String.fromCharCode(data[i]); } //fromCharCode() - used to create a string from a sequence of Unicode values

      var bstr = arr.join("");  //Adds all the elements of an array separated by the specified separator string.

      //call / reads XLSX after being converted and joined together (bstr)
      var workbook = XLSX.read(bstr, { type: "binary" });  

      //grabs the first sheet of the excel file. how to get second sheet??
      var first_sheet_name = workbook.SheetNames[0];  
      
      //get worksheet
      this.worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[first_sheet_name]); //XLSX.utils.sheet_to_json converts the worksheet objects to JSON objects
      console.log(this.worksheet);
    }  

   readFile.readAsArrayBuffer(this.fileUploaded);  //starts reading the contents of the file (readAsArrayBuffer) / outputs the data
  }  

  constructor(private excelService:ExcelService) { } //injected the export excel spreadsheet into the constructor so this component has access to the service


  exportAsXLSX(){
    this.excelService.exportAsExcelFile(this.worksheet,'data'); //calling the function from the service and inputting the worksheet data, and calling it "data"
  }
  ngOnInit() {
  }

}
