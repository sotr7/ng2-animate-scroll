import { NgModule } from '@angular/core';
import { AnimateScrollService } from './ng2-animate-scroll.service';
import { AnimateScrollDirective } from './ng2-animate-scroll.directive';

@NgModule({
    declarations: [AnimateScrollDirective],
    exports: [AnimateScrollDirective],
    providers: [
        {provide: AnimateScrollService, useClass: AnimateScrollService}
    ]
})
export class Ng2AnimateScrollModule {
}
