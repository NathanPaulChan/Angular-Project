import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root',
})


export class TableService {
private messageSource = new BehaviorSubject<any>([]); //created array object for the data for the components to subscribe to. behavior subject allows the components
//to receive the most updated data from the service
currentMessage= this.messageSource.asObservable(); //used by the components

  constructor(private data: TableService) { }



  changeMessage(message: any){ //calls next on the behaviorsubject to change the current value
      this.messageSource.next(message);
  }




  
}