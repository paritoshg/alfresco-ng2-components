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
"use strict";
var Rx_1 = require('rxjs/Rx');
var core_1 = require('@angular/core');
var TranslationMock = (function () {
    function TranslationMock() {
        this.onLangChange = new core_1.EventEmitter();
    }
    TranslationMock.prototype.get = function (key, interpolateParams) {
        return Rx_1.Observable.of(key);
    };
    TranslationMock.prototype.addTranslationFolder = function () {
    };
    return TranslationMock;
}());
exports.TranslationMock = TranslationMock;
//# sourceMappingURL=translation.service.mock.js.map