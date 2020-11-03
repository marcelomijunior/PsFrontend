import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SharedModule } from './modules/shared/shared.module';
import { DragScrollModule } from 'ngx-drag-scroll';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    DragScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
