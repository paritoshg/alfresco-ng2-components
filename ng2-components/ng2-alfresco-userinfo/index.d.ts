/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ModuleWithProviders } from '@angular/core';
export * from './src/components/user-info.component';
export * from './src/services/bpm-user.service';
export * from './src/services/ecm-user.service';
export declare const USER_INFO_DIRECTIVES: any[];
export declare const USER_INFO_PROVIDERS: any[];
export declare class UserInfoComponentModule {
    static forRoot(): ModuleWithProviders;
}
