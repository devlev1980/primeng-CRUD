import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {PrimengModule} from './shared/primeng.module';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AddUserComponent } from './dialogs/add-user/add-user.component';
import { EditUserComponent } from './dialogs/edit-user/edit-user.component';
import { YesNoComponent } from './dialogs/yes-no/yes-no.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        AddUserComponent,
        EditUserComponent,
        YesNoComponent,
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
