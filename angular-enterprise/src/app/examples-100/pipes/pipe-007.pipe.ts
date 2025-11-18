import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe7'
})
export class Pipe7 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 7: ${value}`;
  }
}
