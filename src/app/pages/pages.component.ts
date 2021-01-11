import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <div class="main-view" fxLayout="column">
    <div class="background_effect"></div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class PagesComponent {

}