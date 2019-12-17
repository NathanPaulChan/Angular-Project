import { async, ComponentFixture, TestBed, inject, tick, fakeAsync} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import {By} from '@angular/platform-browser';
import { TableComponent } from './table.component'; //import table component so the it blocks have access to userData

describe('tablecomponent',()=>{ //a collection of tests
let component: TableComponent;
let fixture: ComponentFixture<TableComponent>;
let de: DebugElement;

beforeEach(async(() => {//this executes before each it block
  TestBed.configureTestingModule({ //main angular testing utility object 
    declarations: [TableComponent], //which component is going to be tested
  })
.compileComponents(); //if not using cli or other web packed based setup - need to compile this. this compiles the html and css
}));

beforeEach(()=>{//this executes before each it block
  fixture=TestBed.createComponent(TableComponent);  //create component in each it block and is stored in fixture.
  component = fixture.componentInstance; //allows access to certain elements like the instance of the element that was created in above line
  de=fixture.debugElement;
  fixture.detectChanges(); //triggers change detection
});

it('should check firstname to be a string',() =>{ //description / human readable of what this test is going to do.
  for(let i = 0; i < component.userData.length;i++){ //for loop to check all of the data in the array
    expect(typeof(component.userData[i].FirstName)).toEqual('string'); //expects the type of string to be in the FirstName column in userData. if not will not succeed
        //changed from userData.FirstName to userData[0].FirstName to userData[i].FirstName
        //userData.FirstName always came back as undefined so had to change to [0] and [i] to go through all of the array
  }
});

it('should check date to be in date format',() =>{ //description / human readable of what this test is going to do.
  for(let i = 0; i < component.userData.length;i++){ //for loop to check all of the data in the array
  expect(Object.prototype.toString.call(component.userData[i].Date)).toEqual('[object Date]'); //used to check the object of type Date as it is a prototype.
  }
});

it('should check lastname to be a string',() =>{ //description / human readable of what this test is going to do.
  for(let i = 0; i < component.userData.length;i++){ //for loop to check all of the data in the array
    expect(typeof(component.userData[i].LastName)).toEqual('string'); //expects the type of string to be in the FirstName column in userData. if not will not succeed
        //changed from userData.FirstName to userData[0].FirstName to userData[i].FirstName
        //userData.FirstName always came back as undefined so had to change to [0] and [i] to go through all of the array
  }
});

it('should check gender to be string',() =>{ //description / human readable of what this test is going to do.
  for(let i = 0; i < component.userData.length;i++){ //for loop to check all of the data in the array
    expect(typeof(component.userData[i].Gender)).toEqual('string'); //expects the type of string to be in the FirstName column in userData. if not will not succeed
        //changed from userData.FirstName to userData[0].FirstName to userData[i].FirstName
        //userData.FirstName always came back as undefined so had to change to [0] and [i] to go through all of the array
  }
});

it('should check age to be a string',() =>{ //description / human readable of what this test is going to do.
  for(let i = 0; i < component.userData.length;i++){ //for loop to check all of the data in the array
    expect(typeof(component.userData[i].Age)).toEqual('number'); //expects the type of string to be in the FirstName column in userData. if not will not succeed
        //changed from userData.FirstName to userData[0].FirstName to userData[i].FirstName
        //userData.FirstName always came back as undefined so had to change to [0] and [i] to go through all of the array
  }
});

it('should check function SortFirstName',() =>{ //description / human readable of what this test is going to do.
  // let userTest =[{FirstName: "Nathan", LastName: "Chan", Gender: "M", Age: 23, Location: "MN", Date: new Date(4444,11,11)}];
    expect(component.SortFirstName).toBeTruthy(); //expects the type of string to be in the FirstName column in userData. if not will not succeed
        //changed from userData.FirstName to userData[0].FirstName to userData[i].FirstName
        //userData.FirstName always came back as undefined so had to change to [0] and [i] to go through all of the array
});

it('should check function SortLastName',() =>{ //description / human readable of what this test is going to do.
  // let userTest =[{FirstName: "Nathan", LastName: "Chan", Gender: "M", Age: 23, Location: "MN", Date: new Date(4444,11,11)}];
    expect(component.SortLastName).toBeTruthy(); //expects the type of string to be in the FirstName column in userData. if not will not succeed
        //changed from userData.FirstName to userData[0].FirstName to userData[i].FirstName
        //userData.FirstName always came back as undefined so had to change to [0] and [i] to go through all of the array
});

it('should check function SortFemaleGender',() =>{ //description / human readable of what this test is going to do.
  // let userTest =[{FirstName: "Nathan", LastName: "Chan", Gender: "M", Age: 23, Location: "MN", Date: new Date(4444,11,11)}];
    expect(component.SortFemaleGender).toBeTruthy(); //expects the type of string to be in the FirstName column in userData. if not will not succeed
        //changed from userData.FirstName to userData[0].FirstName to userData[i].FirstName
        //userData.FirstName always came back as undefined so had to change to [0] and [i] to go through all of the array
});

it('should check function SortMaleGender',() =>{ //description / human readable of what this test is going to do.
  // let userTest =[{FirstName: "Nathan", LastName: "Chan", Gender: "M", Age: 23, Location: "MN", Date: new Date(4444,11,11)}];
    expect(component.SortMaleGender).toBeTruthy(); //expects the type of string to be in the FirstName column in userData. if not will not succeed
        //changed from userData.FirstName to userData[0].FirstName to userData[i].FirstName
        //userData.FirstName always came back as undefined so had to change to [0] and [i] to go through all of the array
});

it('should check function SortAge',() =>{ //description / human readable of what this test is going to do.
  // let userTest =[{FirstName: "Nathan", LastName: "Chan", Gender: "M", Age: 23, Location: "MN", Date: new Date(4444,11,11)}];
    expect(component.SortAge).toBeTruthy(); //expects the type of string to be in the FirstName column in userData. if not will not succeed
        //changed from userData.FirstName to userData[0].FirstName to userData[i].FirstName
        //userData.FirstName always came back as undefined so had to change to [0] and [i] to go through all of the array
});

it('should check function SortLocation',() =>{ //description / human readable of what this test is going to do.
  // let userTest =[{FirstName: "Nathan", LastName: "Chan", Gender: "M", Age: 23, Location: "MN", Date: new Date(4444,11,11)}];
    expect(component.SortLocation).toBeTruthy(); //expects the type of string to be in the FirstName column in userData. if not will not succeed
        //changed from userData.FirstName to userData[0].FirstName to userData[i].FirstName
        //userData.FirstName always came back as undefined so had to change to [0] and [i] to go through all of the array
});

it('should check for h3 tag to conain person table',() =>{ //description / human readable of what this test is going to do.
  // let userTest =[{FirstName: "Nathan", LastName: "Chan", Gender: "M", Age: 23, Location: "MN", Date: new Date(4444,11,11)}];
    expect(de.query(By.css('h3')).nativeElement.innerText).toBe('Person Table'); //expects the type of string to be in the FirstName column in userData. if not will not succeed
        //changed from userData.FirstName to userData[0].FirstName to userData[i].FirstName
        //userData.FirstName always came back as undefined so had to change to [0] and [i] to go through all of the array
  
});

});
