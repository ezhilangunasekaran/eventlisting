import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventFilterPipe } from './events/event-filter.pipe';

//services
import { EventService } from './events/event.service'

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
