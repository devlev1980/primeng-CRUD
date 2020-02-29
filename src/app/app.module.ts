import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {PrimengModule} from './shared/primeng.module';
import {AppRoutingModule} from './app-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import {InputsComponent} from './inputs/inputs.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonsComponent,
        InputsComponent,
        LayoutComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        PrimengModule,
        AppRoutingModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
