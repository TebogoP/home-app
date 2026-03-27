import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main> 
    <header class="brand-name"> 
      <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true"> 
    </header>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
