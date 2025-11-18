import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe4'
})
export class Pipe4 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 4: ${value}`;
  }
}
