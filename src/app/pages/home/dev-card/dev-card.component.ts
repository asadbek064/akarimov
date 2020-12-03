import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../@core/services/pages.service';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.scss']
})
export class DevCardComponent implements OnInit {
  pageChangeStatus: string = 'animate__animated animate__fadeInDown animate__fast';
  contactMeStatus: boolean;

  constructor(public pagesService: PagesService) {
    this.contactMeStatus = false;
    this.pagesService.contactMeStatus_Change.subscribe( newState => {
      this.contactMeStatus = newState;
    })
  }

  ngOnInit(): void {
  }


  async OpenProject() {
    this.changeToProjectView();
    await this.delay(500);
    this.pagesService.isProjectPage_Change.next(true);
  }

    delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
  changeToProjectView() {
    this.pageChangeStatus = "animate__animated animate__fadeOutUp animate__faster"
}
  async ContactMe() {
    this.pagesService.sendEmailStatus_Change.next(false);
    this.pagesService.contactMeStatus_Change.next(true);
  }
}
