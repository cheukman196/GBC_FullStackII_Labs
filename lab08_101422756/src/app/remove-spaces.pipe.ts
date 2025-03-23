import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {
  // should the pipe be RemoveDashesPipe instead?
  transform(value: string): string {
    return `${value.replace(/-/g, ' ')}`;
  }

}
