import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSortableModule } from 'ngx-sortable';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DndModule } from 'ng2-dnd';
// import { SortablejsModule } from 'angular-sortablejs';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSortableModule,
    AppRoutingModule,
    DndModule.forRoot()
    // global settings
    // SortablejsModule.forRoot({
    //   animation: 200,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
