import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() imgsPropaganda: Array<String>;
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;

  indexCarousel = 0;
  timeOut;

  constructor() { }

  ngOnInit(): void {
    this.timeOut = setTimeout(() => {
      this.ds.moveTo(this.indexCarousel);
    }, 2000);
    
  }

  indexChanged(index: number){
    this.indexCarousel= index;
    this.ds.moveTo(index);
  }

  ngOnDestroy(){
    clearTimeout(this.timeOut)
  }


}
