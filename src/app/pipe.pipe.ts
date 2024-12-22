import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(items: any[], id: number): any[] {
    if (!items) return [];
    return items.filter(item => item.id === id);
  }

}
