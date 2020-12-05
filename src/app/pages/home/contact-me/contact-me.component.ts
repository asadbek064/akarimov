import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PagesService } from '../../../@core/services/pages.service';
import { SendEmailService } from "../../../@core/services/send-email.service";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  contactMeForm!: FormGroup;

  constructor(  public pagesService: PagesService,
                private emailService: SendEmailService,
                private formBuilder: FormBuilder,
                private _snackBar: MatSnackBar) {  
                  
    }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.contactMeForm = this.formBuilder.group({

      'email': new FormControl(null, Validators.required),
      'message': new FormControl(null, Validators.required),
    });
  }

  sendEmail() {
    this.emailService.postEmail(this.contactMeForm.get('email')?.value, this.contactMeForm.get('message')?.value).subscribe(
      async res => {
        if (res) {
        this.openSnackBar('Message Sent! 🙌', '', 500);
        await this.delay(500);
        this.pagesService.sendEmailStatus_Change.next(true);
        this.pagesService.contactMeStatus_Change.next(false);
        }
      },
      (error) => {
        this.openSnackBar('Wronge Email format Please try again 😢', '', 2500)
      }
    )
  }

  openSnackBar(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: duration,
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}