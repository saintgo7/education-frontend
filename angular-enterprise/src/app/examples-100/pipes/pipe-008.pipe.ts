import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe8'
})
export class Pipe8 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 8: ${value}`;
  }
}
