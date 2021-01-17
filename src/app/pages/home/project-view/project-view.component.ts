import { Component, OnInit, ViewChild } from '@angular/core';
import { PagesService } from '../../../@core/services/pages.service';
import { ImgSrc } from './project-card/project-card.component';
import { _DESIGNS_LIST, _PROJECTS_LIST } from './projects-list';

export interface Button {
  Link: string;
  ButtonStatus: boolean;
}

export interface Projects {
  ProjectTitle: string;
  CompanyName: string;
  ImageSrc: ImgSrc[];
  ImageSrc_mobile: string;
  ProjectDesc: string;
  ProjectLink: Button;
  ProjectGithub: Button;
}

export interface Designs {
  DesignTitle: string;
  CompanyName: string;
  ImageSrc: ImgSrc[];
  ImageSrc_mobile: string;
  DesignDesc: string;
  DesignLink: Button;
}

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  PROJECTS_LIST: Projects[]  = _PROJECTS_LIST;
  DESIGNS_LIST: Designs[] =  _DESIGNS_LIST;

  pageChangeStatus = 'animate__animated animate__fadeInUp animate__fast';
  cardFlexSize!: string;
 

  constructor(public pagesService: PagesService ) { }

  ngOnInit(): void { }

  changeToDevView() {
    window.scrollTo({top:0, left: 0, behavior: 'smooth'});
  }


}
