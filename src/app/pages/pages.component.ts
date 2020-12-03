import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <div class="main-view" fxLayout="column">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class PagesComponent {

}