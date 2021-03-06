import { NgModule } from '@angular/core';
import { Alogy } from './alogy';
export { LimitedSizeQueue } from './queue/LimitedSizeQueue';
export { LocalStorageLogger } from './loggers/LocalStorageLogger';
export { ConsoleLogger } from './loggers/ConsoleLogger';
export { NullLogger } from './loggers/NullLogger';
export { DefaultFormatter } from './formatters/DefaultFormatter';
export { LogLevel } from './core/LogLevel';
export { GoogleAnalyticsLogger } from './loggers/GoogleAnalyticsLogger';
export { Alogy, AlogyLogDestination, LogAPI } from './alogy';
export { Bookkeeper } from './queue/Bookkeeper';
export { Node } from './queue/Node';
export class AlogyModule {
}
AlogyModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    Alogy
                ]
            },] },
];
/** @nocollapse */
AlogyModule.ctorParameters = () => [];
//# sourceMappingURL=index.js.map