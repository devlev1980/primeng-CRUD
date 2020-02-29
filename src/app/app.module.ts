import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {PrimengModule} from './shared/primeng.module';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        PrimengModule,
        AppRoutingModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
