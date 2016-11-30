import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CoreModule } from 'ng2-alfresco-core';

import { FormService } from './services/form.service';
import { FauxFormsService } from './services/in-memory.service';
import { RestService } from './services/rest.service';

import {
    DynamicFormComponent,
    AlfrescoLoginComponent
} from './components';

@NgModule({
    bootstrap: [ ],
    declarations: [ AlfrescoLoginComponent,DynamicFormComponent ],
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        InMemoryWebApiModule.forRoot(FauxFormsService),
        ReactiveFormsModule
    ],
    providers: [ FormService, RestService ]
})
export class AppModule {}
