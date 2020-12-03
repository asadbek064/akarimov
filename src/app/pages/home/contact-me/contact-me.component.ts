import { Component, Input, OnInit } from '@angular/core';
import { PagesService } from '../../../@core/services/pages.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  @Input() openState!: boolean;

  constructor(public pagesService: PagesService) { }

  ngOnInit(): void {
  }

  sendEmail() {
    window.location.reload();
    this.pagesService.sendEmailStatus_Change.next(true);
  }

}
