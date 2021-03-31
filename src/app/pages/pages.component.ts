import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <div class="main-view" fxLayout="column">
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
})
export class PagesComponent {

}