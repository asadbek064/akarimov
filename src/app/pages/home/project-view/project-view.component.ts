import { Component, OnInit, ViewChild } from '@angular/core';
import { PagesService } from '../../../@core/services/pages.service';
import { ImgSrc } from './project-card/project-card.component';

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

  PROJECTS_LIST: Projects[]  = [
    { 
      ProjectTitle: 'PieShares.com',
      CompanyName: 'PieShares, Inc',
      ImageSrc: [
        { path: '/assets/image/pshares_1.png' },
        { path: '/assets/image/pshares_2.png' },
        { path: '/assets/image/pshares_3.png' },
      ],
      ImageSrc_mobile: '/assets/image/pshares_mobile_1.png',
      ProjectDesc: 'Web based marketplace that brings Nonprofits, Businesses and Shoppers together',
      ProjectLink: { Link: 'https://www.pieshares.com/', ButtonStatus: false },
      ProjectGithub: { Link: '', ButtonStatus: true }
    },

    { 
      ProjectTitle: 'Animet.tk',
      CompanyName: 'Personal',
      ImageSrc: [
        { path: '/assets/image/animet_1.png' },
        { path: '/assets/image/animet_2.png' },

      ],
      ImageSrc_mobile: '/assets/image/animet_mobile_1.png',
      ProjectDesc: 'Animet, is an anime cataloging application website. The site provides its users with a like system to find and score anime. Animet provides a large database with over 13,000 anime.',
      ProjectLink: { Link: 'https://www.animet.tk/', ButtonStatus: false },
      ProjectGithub: { Link: 'https://github.com/asadbek064/animet', ButtonStatus: false }
    }
  ];

  DESIGNS_LIST: Designs[] = [
    {
      DesignTitle: 'Logo Design / Ad Design',
      CompanyName: 'MMS EXPRESS',
      ImageSrc: [
        { path: '/assets/image/mms_express_ad.jpg'},
        { path: '/assets/image/mms_express_logo.png'},
      ],
      ImageSrc_mobile: '/assets/image/mms_express_ad.jpg',
      DesignDesc: 'created logo and advert for mms trucking company using adobe illustrator and photoshop.',
      DesignLink: { Link: 'https://f000.backblazeb2.com/file/public-data/MMS_EXPRESS_HIRING_FULL_AD-01.png', ButtonStatus: false},
    },
  ]

  pageChangeStatus = 'animate__animated animate__fadeInUp animate__fast';
  cardFlexSize!: string;
 

  constructor(public pagesService: PagesService ) { }

  ngOnInit(): void { }

  changeToDevView() {
    window.scrollTo({top:0, left: 0, behavior: 'smooth'});
  }


}
