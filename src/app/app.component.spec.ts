import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => { //this is executed before each block of it
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => { // it should create the app, and the app should basically exist.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance; //gives access to certain elements
    expect(app).toBeTruthy(); //we expect the (app) to be truthy - to exist.
  });

  it(`should have as title 'wipro-assignment-one'`, () => { // we expect this app to have a title property that is equal to wipro-assignment-one
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('wipro-assignment-one'); //we expect the app to have a title property which = wipro-assignment-one
  });


});
