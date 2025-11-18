import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe2'
})
export class Pipe2 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 2: ${value}`;
  }
}
