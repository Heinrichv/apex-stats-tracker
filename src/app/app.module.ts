import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AdComponent } from './components/ad/ad.component';
import { StatsComponent } from './components/stats/stats.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatsService } from './services/stats.service';

@NgModule({
  declarations: [
    AppComponent,
    AdComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    PlatformModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
