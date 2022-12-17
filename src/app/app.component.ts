import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moments';

  userName = 'Nani';

  userData = {
    email: 'nani@mail.com',
    role: 'admin'
  }
}
