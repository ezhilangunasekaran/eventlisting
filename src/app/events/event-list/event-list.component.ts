import { Component, OnInit } from '@angular/core';
import { IEvents } from '../events';
import {EventService} from "../event.service";

@Component({
  selector: 'event-list',
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private _eventService: EventService) {
  }


  // pageTitle:string = 'Event List';
  imageWidth:number =50;
  imageMargin:number =2;
  showImage:boolean =false;
  searchCriteria:string = '';

  events: IEvents[];
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  ngOnInit() {
    this.events = this._eventService.getEvents();
  }
}
