import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //added for forms
import {ReactiveFormsModule} from '@angular/forms'//added for forms
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import { Routes, RouterModule } from '@angular/router'; //added for routing
import { HomeComponent } from './home/home.component';
import { ChecktableComponent } from './checktable/checktable.component';
import { BarchartComponent } from './barchart/barchart.component';

import { ChartsModule } from 'ng2-charts';
import { ExcelComponent } from './excel/excel.component';
import { LinechartComponent } from './linechart/linechart.component';
import { WeatherService } from './linechart/weather.service'; //added for data injection from API
import { HttpClientModule } from '@angular/common/http';
import { LchartComponent } from './lchart/lchart.component';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';  //added for data injection from API

//routing 



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    ChecktableComponent,
    BarchartComponent,
    ExcelComponent,
    LinechartComponent,
    LchartComponent,
    FormComponent,
    ReactiveformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule, //added for routing
    ChartsModule,
    HttpClientModule, //added for data injection from API
    ReactiveFormsModule, //added for forms
  ],
  providers: [WeatherService], //added for data injection from API
  bootstrap: [AppComponent]
})
export class AppModule { }
