import { Component ,AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']

})
export class SliderComponent implements AfterViewInit  {
  ngAfterViewInit(): void {
    document.addEventListener("DOMContentLoaded", function() {
      const carouselItems = document.querySelectorAll(".carousel-item");
      carouselItems.forEach(function(item, index) {
        setTimeout(function() {
          item.classList.remove("carousel-item-initial");
        }, index * 1000);
      });
    });
  }
  

}



