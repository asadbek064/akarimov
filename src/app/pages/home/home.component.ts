import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../@core/services/pages.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    isProjectPage: boolean;
    fadeOutUp  = 'animate__animated animate__fadeOutUp';
    fadeInDown = 'animate__animated animate__fadeInDown';


    constructor(public pagesService: PagesService) {
        this.isProjectPage = false;

        this.pagesService.isProjectPage_Change.subscribe( newState => {
            this.isProjectPage = newState;
        });

        document.addEventListener('wheel', (e) => {
            console.log(document.getElementById('projects')?.scrollTop);

        });
      
    }

    ngOnInit(): void {
        this.isProjectPage = false;
     }



}
