import { Component, OnInit, OnDestroy } from '@angular/core';

import { TableService } from "../table/table.service";

@Component({
  selector: 'app-checktable',
  templateUrl: './checktable.component.html',
  styleUrls: ['./checktable.component.css']
})
export class ChecktableComponent implements OnInit {


message:string;

  constructor(private data: TableService) { //creating object allowing the service to inject the data 
   
   }
  ngOnInit() {
this.data.currentMessage.subscribe(message => this.message = message) // subscribe to the current message observable

  }







}

