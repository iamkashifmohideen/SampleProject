import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt'
})
export class SqrtPipePipe implements PipeTransform {

  // transform(value: unknown): unknown {
  //   return null;
  // }

  transform(val : number ) :number{
    return Math.sqrt(val);
  }

}
