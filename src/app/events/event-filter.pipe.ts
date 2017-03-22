import { Pipe, PipeTransform } from '@angular/core';
import { IEvents }  from './events';
@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements  PipeTransform{
  transform(value:IEvents[],args:string[]): IEvents[] {
    let filter: string = args[0] ? args[0].toLowerCase():null;
    return filter? value.filter((event: IEvents)=>
      event.name.toLowerCase().indexOf(filter) != -1): value;
  }

}
