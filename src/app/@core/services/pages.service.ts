import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PagesService {
    contactMeStatus!: boolean;
    contactMeStatus_Change: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    sendEmail!: boolean;
    sendEmailStatus_Change: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor() {

          this.sendEmailStatus_Change.subscribe( newState => {
            this.sendEmail = newState;
        })

        this.contactMeStatus_Change.subscribe ( newState => {
            this.contactMeStatus = newState;
        })
    }
    
}