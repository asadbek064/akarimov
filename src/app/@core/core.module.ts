import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { PagesService } from './services/pages.service';
import { SendEmailService } from "./services/send-email.service";

const DATA_SERVICES = [ 
    { provide: PagesService },
    { provide: SendEmailService }
]   

export const APP_CORE_PROVIDERS = [
    ...DATA_SERVICES,
]

@NgModule({
    imports: [
      CommonModule,
    ],
    exports: [],
    declarations: [],
}) export class CoreModule { 
    
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
          ngModule: CoreModule,
          providers: [
            ...APP_CORE_PROVIDERS,
          ],
        };
      }
}