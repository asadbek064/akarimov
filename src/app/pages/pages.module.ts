import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ThemeModule } from "../@theme/theme.module";
import { MaterialModule } from "../@theme/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ 
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class PagesModule { }
