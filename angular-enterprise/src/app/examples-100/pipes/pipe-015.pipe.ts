import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe15'
})
export class Pipe15 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Pipe 15: ${value}`;
  }
}
