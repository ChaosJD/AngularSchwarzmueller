import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] // with , you can add more stylesheets to it. It is a array. Same game with the template. you have to decide one of them. styles or styleUrls
  styles: [`
    h3{
      color: dodgerblue;
    }

  `]
})
export class AppComponent {
}
