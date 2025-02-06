import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Click the button to change this message!';

  changeMessage() {
    this.message = 'You have clicked the button!';
  }
}
