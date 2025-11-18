import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe11'
})
export class Pipe11 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 11: ${value}`;
  }
}
