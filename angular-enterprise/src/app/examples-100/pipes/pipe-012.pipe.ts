import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe12'
})
export class Pipe12 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 12: ${value}`;
  }
}
