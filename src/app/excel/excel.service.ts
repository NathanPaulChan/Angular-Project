import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const ExcelType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'; //specifies excel_type to a spreadsheet
const ExcelExtension = '.xlsx';



@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  exportAsExcelFile(json: any[], excelFileName: string) { //takes JSON data as an input
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);  //XLSX.utils.sheet_to_json converts the worksheet objects to JSON objects
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName); //inputted saveAsExcelFile into this method so they are both called at the same time when the method is called in another component
  }
  saveAsExcelFile(data: any, fileName: string) {
     const blob: Blob = new Blob([data], {type: ExcelType}); //converts data into type blob and allows the data to be written into the excel sheet via type: ExcelType
     FileSaver.saveAs(blob, fileName + '_expooort_' + new  Date().getTime() + ExcelExtension); //saves the data into the excel spreadsheet as: data_export_date + xlsx
  }

//fix date - when downloading to excel it isnt in date format

//move routing into app-routing.ts
//create a form where you get personal information (adding new information to a table) but person ID will automatically add
//validation for each field in the form
  //maybe create service for validation? or do it in the html

  //create an editable table and it saves it (do this later)
  constructor() { }
  }

  

