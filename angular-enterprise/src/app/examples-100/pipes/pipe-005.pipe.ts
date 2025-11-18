import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe5'
})
export class Pipe5 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 5: ${value}`;
  }
}
