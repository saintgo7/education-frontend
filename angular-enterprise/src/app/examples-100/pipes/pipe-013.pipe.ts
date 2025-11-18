import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe13'
})
export class Pipe13 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 13: ${value}`;
  }
}
