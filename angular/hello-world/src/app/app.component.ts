import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elshafei';
  numClick = 0;
buttondisabled:boolean=false;
clickButton =()=>{
  this.numClick++;
this.buttondisabled=true;
}


}
