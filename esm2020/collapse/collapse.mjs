import { Directive, EventEmitter, Input, Output, } from '@angular/core';
import { ngbRunTransition } from '../util/transition/ngbTransition';
import { ngbCollapsingTransition } from '../util/transition/ngbCollapseTransition';
import * as i0 from "@angular/core";
import * as i1 from "./collapse-config";
/**
 * A directive to provide a simple way of hiding and showing elements on the page.
 */
export class NgbCollapse {
    constructor(_element, config, _zone) {
        this._element = _element;
        this._zone = _zone;
        /**
         * If `true`, will collapse the element or show it otherwise.
         */
        this.collapsed = false;
        this.ngbCollapseChange = new EventEmitter();
        /**
         * An event emitted when the collapse element is shown, after the transition. It has no payload.
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the collapse element is hidden, after the transition. It has no payload.
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
        this.animation = config.animation;
    }
    ngOnInit() { this._runTransition(this.collapsed, false); }
    ngOnChanges({ collapsed }) {
        if (!collapsed.firstChange) {
            this._runTransitionWithEvents(this.collapsed, this.animation);
        }
    }
    /**
     * Triggers collapsing programmatically.
     *
     * If there is a collapsing transition running already, it will be reversed.
     * If the animations are turned off this happens synchronously.
     *
     * @since 8.0.0
     */
    toggle(open = this.collapsed) {
        this.collapsed = !open;
        this.ngbCollapseChange.next(this.collapsed);
        this._runTransitionWithEvents(this.collapsed, this.animation);
    }
    _runTransition(collapsed, animation) {
        return ngbRunTransition(this._zone, this._element.nativeElement, ngbCollapsingTransition, { animation, runningTransition: 'stop', context: { direction: collapsed ? 'hide' : 'show' } });
    }
    _runTransitionWithEvents(collapsed, animation) {
        this._runTransition(collapsed, animation).subscribe(() => {
            if (collapsed) {
                this.hidden.emit();
            }
            else {
                this.shown.emit();
            }
        });
    }
}
NgbCollapse.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbCollapse, deps: [{ token: i0.ElementRef }, { token: i1.NgbCollapseConfig }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
NgbCollapse.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NgbCollapse, selector: "[ngbCollapse]", inputs: { animation: "animation", collapsed: ["ngbCollapse", "collapsed"] }, outputs: { ngbCollapseChange: "ngbCollapseChange", shown: "shown", hidden: "hidden" }, exportAs: ["ngbCollapse"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbCollapse, decorators: [{
            type: Directive,
            args: [{ selector: '[ngbCollapse]', exportAs: 'ngbCollapse' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NgbCollapseConfig }, { type: i0.NgZone }]; }, propDecorators: { animation: [{
                type: Input
            }], collapsed: [{
                type: Input,
                args: ['ngbCollapse']
            }], ngbCollapseChange: [{
                type: Output
            }], shown: [{
                type: Output
            }], hidden: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29sbGFwc2UvY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQzs7O0FBR2pGOztHQUVHO0FBRUgsTUFBTSxPQUFPLFdBQVc7SUFpQ3RCLFlBQW9CLFFBQW9CLEVBQUUsTUFBeUIsRUFBVSxLQUFhO1FBQXRFLGFBQVEsR0FBUixRQUFRLENBQVk7UUFBcUMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQXRCMUY7O1dBRUc7UUFDbUIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUU5QixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTFEOzs7O1dBSUc7UUFDTyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUUzQzs7OztXQUlHO1FBQ08sV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFJMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxRQUFRLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxRCxXQUFXLENBQUMsRUFBQyxTQUFTLEVBQWdCO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQzFCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsTUFBTSxDQUFDLE9BQWdCLElBQUksQ0FBQyxTQUFTO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxjQUFjLENBQUMsU0FBa0IsRUFBRSxTQUFrQjtRQUMzRCxPQUFPLGdCQUFnQixDQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLHVCQUF1QixFQUNoRSxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVPLHdCQUF3QixDQUFDLFNBQWtCLEVBQUUsU0FBa0I7UUFDckUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN2RCxJQUFJLFNBQVMsRUFBRTtnQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3dHQXpFVSxXQUFXOzRGQUFYLFdBQVc7MkZBQVgsV0FBVztrQkFEdkIsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQztzSkFVcEQsU0FBUztzQkFBakIsS0FBSztnQkFLZ0IsU0FBUztzQkFBOUIsS0FBSzt1QkFBQyxhQUFhO2dCQUVWLGlCQUFpQjtzQkFBMUIsTUFBTTtnQkFPRyxLQUFLO3NCQUFkLE1BQU07Z0JBT0csTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7bmdiUnVuVHJhbnNpdGlvbn0gZnJvbSAnLi4vdXRpbC90cmFuc2l0aW9uL25nYlRyYW5zaXRpb24nO1xyXG5pbXBvcnQge25nYkNvbGxhcHNpbmdUcmFuc2l0aW9ufSBmcm9tICcuLi91dGlsL3RyYW5zaXRpb24vbmdiQ29sbGFwc2VUcmFuc2l0aW9uJztcclxuaW1wb3J0IHtOZ2JDb2xsYXBzZUNvbmZpZ30gZnJvbSAnLi9jb2xsYXBzZS1jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIEEgZGlyZWN0aXZlIHRvIHByb3ZpZGUgYSBzaW1wbGUgd2F5IG9mIGhpZGluZyBhbmQgc2hvd2luZyBlbGVtZW50cyBvbiB0aGUgcGFnZS5cclxuICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25nYkNvbGxhcHNlXScsIGV4cG9ydEFzOiAnbmdiQ29sbGFwc2UnfSlcclxuZXhwb3J0IGNsYXNzIE5nYkNvbGxhcHNlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIC8qKlxyXG4gICAqIElmIGB0cnVlYCwgY29sbGFwc2Ugd2lsbCBiZSBhbmltYXRlZC5cclxuICAgKlxyXG4gICAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgb25seSB3aGVuIGNsaWNrZWQgb24gdHJpZ2dlcmluZyBlbGVtZW50XHJcbiAgICogb3IgdmlhIHRoZSBgLnRvZ2dsZSgpYCBmdW5jdGlvblxyXG4gICAqXHJcbiAgICogQHNpbmNlIDguMC4wXHJcbiAgICovXHJcbiAgQElucHV0KCkgYW5pbWF0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBJZiBgdHJ1ZWAsIHdpbGwgY29sbGFwc2UgdGhlIGVsZW1lbnQgb3Igc2hvdyBpdCBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgQElucHV0KCduZ2JDb2xsYXBzZScpIGNvbGxhcHNlZCA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgbmdiQ29sbGFwc2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY29sbGFwc2UgZWxlbWVudCBpcyBzaG93biwgYWZ0ZXIgdGhlIHRyYW5zaXRpb24uIEl0IGhhcyBubyBwYXlsb2FkLlxyXG4gICAqXHJcbiAgICogQHNpbmNlIDguMC4wXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKipcclxuICAgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIGNvbGxhcHNlIGVsZW1lbnQgaXMgaGlkZGVuLCBhZnRlciB0aGUgdHJhbnNpdGlvbi4gSXQgaGFzIG5vIHBheWxvYWQuXHJcbiAgICpcclxuICAgKiBAc2luY2UgOC4wLjBcclxuICAgKi9cclxuICBAT3V0cHV0KCkgaGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZiwgY29uZmlnOiBOZ2JDb2xsYXBzZUNvbmZpZywgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbiA9IGNvbmZpZy5hbmltYXRpb247XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgdGhpcy5fcnVuVHJhbnNpdGlvbih0aGlzLmNvbGxhcHNlZCwgZmFsc2UpOyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKHtjb2xsYXBzZWR9OiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIWNvbGxhcHNlZC5maXJzdENoYW5nZSkge1xyXG4gICAgICB0aGlzLl9ydW5UcmFuc2l0aW9uV2l0aEV2ZW50cyh0aGlzLmNvbGxhcHNlZCwgdGhpcy5hbmltYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlcnMgY29sbGFwc2luZyBwcm9ncmFtbWF0aWNhbGx5LlxyXG4gICAqXHJcbiAgICogSWYgdGhlcmUgaXMgYSBjb2xsYXBzaW5nIHRyYW5zaXRpb24gcnVubmluZyBhbHJlYWR5LCBpdCB3aWxsIGJlIHJldmVyc2VkLlxyXG4gICAqIElmIHRoZSBhbmltYXRpb25zIGFyZSB0dXJuZWQgb2ZmIHRoaXMgaGFwcGVucyBzeW5jaHJvbm91c2x5LlxyXG4gICAqXHJcbiAgICogQHNpbmNlIDguMC4wXHJcbiAgICovXHJcbiAgdG9nZ2xlKG9wZW46IGJvb2xlYW4gPSB0aGlzLmNvbGxhcHNlZCkge1xyXG4gICAgdGhpcy5jb2xsYXBzZWQgPSAhb3BlbjtcclxuICAgIHRoaXMubmdiQ29sbGFwc2VDaGFuZ2UubmV4dCh0aGlzLmNvbGxhcHNlZCk7XHJcbiAgICB0aGlzLl9ydW5UcmFuc2l0aW9uV2l0aEV2ZW50cyh0aGlzLmNvbGxhcHNlZCwgdGhpcy5hbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcnVuVHJhbnNpdGlvbihjb2xsYXBzZWQ6IGJvb2xlYW4sIGFuaW1hdGlvbjogYm9vbGVhbikge1xyXG4gICAgcmV0dXJuIG5nYlJ1blRyYW5zaXRpb24oXHJcbiAgICAgICAgdGhpcy5fem9uZSwgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBuZ2JDb2xsYXBzaW5nVHJhbnNpdGlvbixcclxuICAgICAgICB7YW5pbWF0aW9uLCBydW5uaW5nVHJhbnNpdGlvbjogJ3N0b3AnLCBjb250ZXh0OiB7ZGlyZWN0aW9uOiBjb2xsYXBzZWQgPyAnaGlkZScgOiAnc2hvdyd9fSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9ydW5UcmFuc2l0aW9uV2l0aEV2ZW50cyhjb2xsYXBzZWQ6IGJvb2xlYW4sIGFuaW1hdGlvbjogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fcnVuVHJhbnNpdGlvbihjb2xsYXBzZWQsIGFuaW1hdGlvbikuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgaWYgKGNvbGxhcHNlZCkge1xyXG4gICAgICAgIHRoaXMuaGlkZGVuLmVtaXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNob3duLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==