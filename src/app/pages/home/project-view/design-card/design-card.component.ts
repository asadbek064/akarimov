import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints}  from '@angular/cdk/layout';
import { Button } from '../project-view.component';

export interface ImgSrc {
  path: string;
}

@Component({
  selector: 'app-design-card',
  templateUrl: './design-card.component.html',
  styleUrls: ['./design-card.component.scss']
})
export class DesignCardComponent implements OnInit {
  @Input() DesignTitle!: string;
  @Input() CompanyName!: string;
  @Input() ImageSrc!: ImgSrc[];
  @Input() ImageSrc_mobile!: string;
  @Input() DesignDesc!: string;
  @Input() DesignLink!: Button;

  isMobile: boolean;
  constructor( breakpointObserver: BreakpointObserver ) {
    this.isMobile = false;

    // dectec wheter its mobile device
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe( result => {
      this.isMobile = result.matches;
    });

  }

  goToLink(link: string): void {
    window.open(link);
  }
  ngOnInit(): void {
  }
}
