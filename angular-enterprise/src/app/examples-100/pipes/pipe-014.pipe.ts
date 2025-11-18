import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe14'
})
export class Pipe14 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 14: ${value}`;
  }
}
