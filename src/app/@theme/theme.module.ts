import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [
    FooterComponent
]

const MODULE = [
    CommonModule,
    MaterialModule
]

@NgModule({
    imports: [ ...MODULE],
    exports: [ ...COMPONENTS],
    declarations: [...COMPONENTS ],
  })
export class ThemeModule { }