import { inject } from "@angular/core/testing";

import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PagesService {
    isProjectPage!: boolean;
    isProjectPage_Change: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    contactMeStatus!: boolean;
    contactMeStatus_Change: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    sendEmail!: boolean;
    sendEmailStatus_Change: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor() {
        this.isProjectPage_Change.subscribe( newState => {
            this.isProjectPage = newState;
        })

        this.sendEmailStatus_Change.subscribe( newState => {
            this.sendEmail = newState;
        })
    }
    
}