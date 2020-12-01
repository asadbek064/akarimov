import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <div fxLayout="column">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class PagesComponent {

}