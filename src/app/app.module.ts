import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//paquete especial para formularios en angular
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //le decimos que necesitamos ese modulo
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
