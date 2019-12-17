import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcelComponent } from './excel/excel.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { ChecktableComponent } from './checktable/checktable.component';
import { BarchartComponent } from './barchart/barchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { LchartComponent } from './lchart/lchart.component';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const appRoutes : Routes = [
  { path: 'excel', component: ExcelComponent },
 { path: 'home', component: HomeComponent },
 { path: 'table', component: TableComponent },
 { path: 'checktable',component: ChecktableComponent},
 { path: 'barchart',component: BarchartComponent},
 {path: 'linechart', component: LinechartComponent},
 {path: 'lchart', component: LchartComponent},
 {path: 'form', component: FormComponent},
 {path: 'reactiveform', component: ReactiveformComponent},
{ path: '**', redirectTo: "home", pathMatch: "full" } // if a path that is entered does not exist - it will default to /home.
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
