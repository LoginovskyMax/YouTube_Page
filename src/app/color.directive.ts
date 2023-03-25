import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges{
  today = new Date()
  color = ''
  @Input() appColor:string | undefined= ''
  constructor(private div:ElementRef) {
    
   }

   ngOnChanges(): void {
    this.differentInDays()
    this.div.nativeElement.style.backgroundColor = this.color
   }

   differentInDays(){
    if(this.appColor){
      let publishedDate = new Date(this.appColor)
      let diff = Date.parse(this.today.toDateString()) - Date.parse(publishedDate.toDateString())
      let days = Math.floor(diff/(1000*60*60*24))
      if(days>180)this.color = 'red'
      if(days < 180 && days >=30)this.color = 'yellow'
      if(days < 30 && days >= 7)this.color = 'green'
      if(days < 7)this.color = 'blue'
    }
    

   }
 
}
