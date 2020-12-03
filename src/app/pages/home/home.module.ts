import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ThemeModule } from "../../@theme/theme.module";
import { MaterialModule } from "../../@theme/material.module";
import { HomeComponent } from './home.component';
import { DevCardComponent } from './dev-card/dev-card.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectCardComponent } from './project-view/project-card/project-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IvyCarouselModule} from 'angular-responsive-carousel';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const COMPONENTS = [
    HomeComponent,
    ProjectViewComponent,
    DevCardComponent
]

const MODULES = [
    CommonModule,
    HomeRoutingModule,
    ThemeModule,
    MaterialModule,
    FlexLayoutModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    FormsModule,
]

@NgModule({
    declarations: [ ...COMPONENTS, ProjectCardComponent, ContactMeComponent],
    imports: [ ...MODULES],
})
export class HomeModule { }