import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe3'
})
export class Pipe3 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 3: ${value}`;
  }
}
