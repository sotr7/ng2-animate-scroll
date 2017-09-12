import { NgModule } from '@angular/core';
import { AnimateScrollService } from './ng2-animate-scroll.service';
import { AnimateScrollDirective } from './ng2-animate-scroll.directive';
import { AnimateBoxDirective } from './ng2-animate-box.directive';

@NgModule({
    declarations: [AnimateScrollDirective, AnimateBoxDirective],
    exports: [AnimateScrollDirective, AnimateBoxDirective],
    providers: [
        {provide: AnimateScrollService, useClass: AnimateScrollService}
    ]
})
export class Ng2AnimateScrollModule {
}
