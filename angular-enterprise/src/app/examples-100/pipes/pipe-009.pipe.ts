import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe9'
})
export class Pipe9 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 9: ${value}`;
  }
}
