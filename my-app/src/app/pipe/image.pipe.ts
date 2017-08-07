import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'image'
})
export class DefaulfImage implements PipeTransform {
  transform(src: string): string {
    if(src != ''){
      return src;
    } else{
      return 'https://www.shareicon.net/data/128x128/2016/08/05/689851_man_512x512.png';
    }
  }
}