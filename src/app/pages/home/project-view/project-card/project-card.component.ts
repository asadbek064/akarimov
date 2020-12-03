import { Component, Input, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Button } from '../project-view.component';

export interface ImgSrc {
  path: string;
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})

export class ProjectCardComponent implements OnInit {

  @Input() ProjectTitle!: string;
  @Input() CompanyName!: string;
  @Input() ImageSrc!: ImgSrc[];
  @Input() ImageSrc_mobile!: string;
  @Input() ProjectDesc!: string;
  @Input() ProjectLink!:  Button;
  @Input() ProjectGithub!: Button;

  isMobile: boolean;
  constructor( breakpointObserver: BreakpointObserver ) { 
    this.isMobile = false;

    // dectec wheter its mobile device
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe( result => {
      this.isMobile = result.matches
    })

  }

  goToLink(link: string) {
    window.open(link);
  }
  ngOnInit(): void {
  }

}
