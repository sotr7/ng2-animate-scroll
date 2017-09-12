import { Directive, ElementRef, AfterViewInit, Input, Output, EventEmitter, Inject, forwardRef } from '@angular/core';
//import { State, Options } from'./ng2-animate-scroll.interface';

@Directive({
    selector: '[animatebox]'
})
export class AnimateBoxDirective implements AfterViewInit {

    //@Input('animatebox') options: Options;
    @Output('animatebox') output = new EventEmitter();
    classNameSetByAnimateBox: string = '';

    constructor(@Inject(forwardRef(() => ElementRef)) public element: ElementRef) {
    }
    ngAfterViewInit(): void {
          setTimeout(() => {
            //this._processEvent();
          }, 0);
    }
    private _processEvent() {
		/*
        if (!this.options || typeof (this.options) === 'string' || typeof (this.options) === 'number') {
            //no options or incorrect options provided -> proceed with default states
            console.warn('animatebox:', 'Invalid options provided:', this.options);
        }
        else {
            if (typeof (this.options.states) === 'undefined' || !this.options.states.length) {
                //this._applyDefaultStates();
            }
            else {
				
                let stateApplied: boolean = false;
                for (let i = 0; !stateApplied && i < this.options.states.length; i++) {
                    if (this._processState(this.options.states[i])) {
                        stateApplied = true;
                    };
                }
                if (!stateApplied) {
                    //no state matched -> proceed with default states
                    this._applyDefaultStates();
                }
				
            }
        }
		*/
    }
}
