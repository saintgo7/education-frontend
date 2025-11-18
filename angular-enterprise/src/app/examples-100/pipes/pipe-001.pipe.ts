import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 1: ${value}`;
  }
}
