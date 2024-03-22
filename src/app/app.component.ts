import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-tasks />
  <main class="container-fluid borda">
    <app-main></app-main>
  </main>
  `,
  styles: `
  .borda {
    height: 100vh;
    background-color: #F2E7D3;
  }
  `
})
export class AppComponent {
  title = 'atividade-de-fixacao-angular';
}
