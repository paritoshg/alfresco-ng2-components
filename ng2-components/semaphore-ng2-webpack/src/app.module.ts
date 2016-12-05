import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { FormService } from './services/form.service';
import { FauxFormsService } from './services/in-memory.service';
import { RestService } from './services/rest.service';
import { TranslateModule, TranslateService, TranslateLoader } from 'ng2-translate/ng2-translate';
import {
    AlfrescoTranslationService,
    AlfrescoAuthenticationService,
    AlfrescoSettingsService,
    AlfrescoApiService
} from 'ng2-alfresco-core';

import {
    DynamicFormComponent,
    AlfrescoLoginComponent
} from './components';

@NgModule({
    bootstrap: [ AlfrescoLoginComponent ],
    declarations: [AlfrescoLoginComponent, DynamicFormComponent ],
    imports: [
        HttpModule,
        BrowserModule,
        InMemoryWebApiModule.forRoot(FauxFormsService),
        ReactiveFormsModule, FormsModule, TranslateModule
    ],
    providers: [AlfrescoApiService,AlfrescoAuthenticationService, AlfrescoSettingsService ]
})
export class AppModule {}
