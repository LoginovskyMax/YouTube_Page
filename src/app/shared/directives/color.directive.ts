import {
  Directive, ElementRef, Input, OnChanges, OnInit,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
  })
export class ColorDirective implements OnInit {
  @Input() appColor: string | undefined= ''

  private today = new Date()

  private color = ''

  constructor(private div: ElementRef) {}

  ngOnInit() {
    this.differentInDays();
    this.div.nativeElement.style.backgroundColor = this.color;
  }

  private differentInDays(): void {
    if (this.appColor) {
      const publishedDate = new Date(this.appColor);
      const diff = Date.parse(this.today.toDateString()) - Date.parse(publishedDate.toDateString());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      if (days > 180) this.color = 'red';
      if (days < 180 && days >= 30) this.color = 'yellow';
      if (days < 30 && days >= 7) this.color = 'green';
      if (days < 7) this.color = 'blue';
    }
  }
}
