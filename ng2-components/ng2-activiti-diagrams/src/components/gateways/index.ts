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

import { DiagramGatewayComponent } from './diagram-gateway.component';
import { DiagramExclusiveGatewayComponent } from './diagram-exclusive-gateway.component';
import { DiagramInclusiveGatewayComponent } from './diagram-inclusive-gateway.component';
import { DiagramParallelGatewayComponent } from './diagram-parallel-gateway.component';
import { DiagramEventGatewayComponent } from './diagram-event-gateway.component';

// primitives
export * from './diagram-gateway.component';
export * from './diagram-exclusive-gateway.component';
export * from './diagram-inclusive-gateway.component';
export * from './diagram-parallel-gateway.component';
export * from './diagram-event-gateway.component';

export const DIAGRAM_GATEWAY_DIRECTIVES: any[] = [
    DiagramGatewayComponent,
    DiagramExclusiveGatewayComponent,
    DiagramInclusiveGatewayComponent,
    DiagramParallelGatewayComponent,
    DiagramEventGatewayComponent
];
