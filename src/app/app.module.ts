import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import{HttpClientModule} from '@angular/common/http'
import { freeApiservice } from './emp-form/FreeApi/freeApi.service';

import { NewTableComponent } from './new-table/new-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpFormComponent,
  
    NewTableComponent,
   
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [freeApiservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
