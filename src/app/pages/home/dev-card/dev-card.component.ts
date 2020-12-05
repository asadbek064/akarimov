import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PagesService } from '../../../@core/services/pages.service';
import { MatDialog} from '@angular/material/dialog';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.scss']
})
export class DevCardComponent implements OnInit {
  pageChangeStatus = 'animate__animated animate__fadeInDown animate__fast';
  contactMeStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public pagesService: PagesService, public dialog: MatDialog) {
    this.pagesService.contactMeStatus_Change.subscribe( newState => {
      this.contactMeStatus.next(newState);
    });

  }

  ngOnInit(): void { }


  openDialog() {
    const dialogRef = this.dialog.open(ContactMeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  // tslint:disable-next-line:typedef
   OpenProject() {
    window.scrollTo({top:900, left: 0, behavior: 'smooth'});

  }

  // tslint:disable-next-line:typedef
  ContactMe() {
    this.pagesService.contactMeStatus_Change.next(true);
    this.pagesService.sendEmailStatus_Change.next(false);
    this.openDialog();
  }
}
