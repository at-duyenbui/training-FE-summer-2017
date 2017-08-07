import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[emptyData]'
})
export class EmptyDataComponent implements OnChanges{
  @Input() emptyData: string;

  constructor(private el: ElementRef){
  }

  ngOnChanges(){
    if(!this.emptyData){
      this.el.nativeElement.innerHTML = 'Empty';
      this.el.nativeElement.className = 'fgray';
    } else{
      this.el.nativeElement.innerHTML = this.emptyData;
      this.el.nativeElement.className = '';
    }
  }
}
