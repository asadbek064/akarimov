import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PagesService } from '../../../@core/services/pages.service';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.scss']
})
export class DevCardComponent implements OnInit {
  pageChangeStatus = 'animate__animated animate__fadeInDown animate__fast';
  contactMeStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  scrollCount = 0;

  constructor(public pagesService: PagesService) {
    this.pagesService.contactMeStatus_Change.subscribe( newState => {
      this.contactMeStatus.next(newState);
    });

    document.addEventListener('wheel', (e) => {
      if (e.deltaY > 0) { // scroll down
        this.scrollCount++;
        if (this.scrollCount > 4) {
          this.scrollCount = 0; // reset
          this.OpenProject();
        }
      }
    });
  }

  ngOnInit(): void { }




  // tslint:disable-next-line:typedef
  async OpenProject() {
    this.changeToProjectView();
    await this.delay(500);
    this.pagesService.isProjectPage_Change.next(true);
  }

    // tslint:disable-next-line:typedef
    delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  // tslint:disable-next-line:typedef
  changeToProjectView() {
    this.pageChangeStatus = 'animate__animated animate__fadeOutUp animate__faster'
}
  // tslint:disable-next-line:typedef
  async ContactMe() {
    this.pagesService.sendEmailStatus_Change.next(false);
    this.pagesService.contactMeStatus_Change.next(true);
  }
}
