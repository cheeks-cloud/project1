import { Component ,AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']

})
export class SliderComponent   {

  images:any[]=[
    {url:'/assets/images/1.png',alt:'image1'},
    {url:'/assets/images/2.png',alt:'image2'},
   

  ];
  

}



