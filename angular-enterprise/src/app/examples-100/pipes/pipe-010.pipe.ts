import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe10'
})
export class Pipe10 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 10: ${value}`;
  }
}
