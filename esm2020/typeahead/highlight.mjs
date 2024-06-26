import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { regExpEscape, toString, removeAccents } from '../util/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * A component that helps with text highlighting.
 *
 * If splits the `result` text into parts that contain the searched `term` and generates the HTML markup to simplify
 * highlighting:
 *
 * Ex. `result="Alaska"` and `term="as"` will produce `Al<span class="ngb-highlight">as</span>ka`.
 */
export class NgbHighlight {
    constructor() {
        /**
         * The CSS class for `<span>` elements wrapping the `term` inside the `result`.
         */
        this.highlightClass = 'ngb-highlight';
        /**
         * Boolean option to determine if the highlighting should be sensitive to accents or not.
         *
         * This feature is only available for browsers that implement the `String.normalize` function
         * (typically not Internet Explorer).
         * If you want to use this feature in a browser that does not implement `String.normalize`,
         * you will have to include a polyfill in your application (`unorm` for example).
         *
         * @since 9.1.0
         */
        this.accentSensitive = true;
    }
    ngOnChanges(changes) {
        if (!this.accentSensitive && !String.prototype.normalize) {
            console.warn('The `accentSensitive` input in `ngb-highlight` cannot be set to `false` in a browser ' +
                'that does not implement the `String.normalize` function. ' +
                'You will have to include a polyfill in your application to use this feature in the current browser.');
            this.accentSensitive = true;
        }
        const result = toString(this.result);
        const terms = Array.isArray(this.term) ? this.term : [this.term];
        const prepareTerm = term => this.accentSensitive ? term : removeAccents(term);
        const escapedTerms = terms.map(term => regExpEscape(prepareTerm(toString(term)))).filter(term => term);
        const toSplit = this.accentSensitive ? result : removeAccents(result);
        const parts = escapedTerms.length ? toSplit.split(new RegExp(`(${escapedTerms.join('|')})`, 'gmi')) : [result];
        if (this.accentSensitive) {
            this.parts = parts;
        }
        else {
            let offset = 0;
            this.parts = parts.map(part => result.substring(offset, offset += part.length));
        }
    }
}
NgbHighlight.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbHighlight, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgbHighlight.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: NgbHighlight, selector: "ngb-highlight", inputs: { highlightClass: "highlightClass", result: "result", term: "term", accentSensitive: "accentSensitive" }, usesOnChanges: true, ngImport: i0, template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\"><span *ngIf=\"isOdd; else even\" [class]=\"highlightClass\">{{part}}</span><ng-template #even>{{part}}</ng-template></ng-template>", isInline: true, styles: [".ngb-highlight{font-weight:700}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbHighlight, decorators: [{
            type: Component,
            args: [{ selector: 'ngb-highlight', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `<ng-template ngFor [ngForOf]="parts" let-part let-isOdd="odd">` +
                        `<span *ngIf="isOdd; else even" [class]="highlightClass">{{part}}</span><ng-template #even>{{part}}</ng-template>` +
                        `</ng-template>`, styles: [".ngb-highlight{font-weight:700}\n"] }]
        }], propDecorators: { highlightClass: [{
                type: Input
            }], result: [{
                type: Input
            }], term: [{
                type: Input
            }], accentSensitive: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3R5cGVhaGVhZC9oaWdobGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQWEsdUJBQXVCLEVBQWlCLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7O0FBRW5FOzs7Ozs7O0dBT0c7QUFVSCxNQUFNLE9BQU8sWUFBWTtJQVR6QjtRQVlFOztXQUVHO1FBQ00sbUJBQWMsR0FBRyxlQUFlLENBQUM7UUFnQjFDOzs7Ozs7Ozs7V0FTRztRQUNNLG9CQUFlLEdBQUcsSUFBSSxDQUFDO0tBMEJqQztJQXhCQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN4RCxPQUFPLENBQUMsSUFBSSxDQUNSLHVGQUF1RjtnQkFDdkYsMkRBQTJEO2dCQUMzRCxxR0FBcUcsQ0FBQyxDQUFDO1lBQzNHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBQ0QsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RSxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkcsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEUsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9HLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjthQUFNO1lBQ0wsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQzs7eUdBekRVLFlBQVk7NkZBQVosWUFBWTsyRkFBWixZQUFZO2tCQVR4QixTQUFTOytCQUNFLGVBQWUsbUJBQ1IsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxZQUMzQixnRUFBZ0U7d0JBQ3RFLGtIQUFrSDt3QkFDbEgsZ0JBQWdCOzhCQVNYLGNBQWM7c0JBQXRCLEtBQUs7Z0JBUUcsTUFBTTtzQkFBZCxLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFZRyxlQUFlO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7cmVnRXhwRXNjYXBlLCB0b1N0cmluZywgcmVtb3ZlQWNjZW50c30gZnJvbSAnLi4vdXRpbC91dGlsJztcclxuXHJcbi8qKlxyXG4gKiBBIGNvbXBvbmVudCB0aGF0IGhlbHBzIHdpdGggdGV4dCBoaWdobGlnaHRpbmcuXHJcbiAqXHJcbiAqIElmIHNwbGl0cyB0aGUgYHJlc3VsdGAgdGV4dCBpbnRvIHBhcnRzIHRoYXQgY29udGFpbiB0aGUgc2VhcmNoZWQgYHRlcm1gIGFuZCBnZW5lcmF0ZXMgdGhlIEhUTUwgbWFya3VwIHRvIHNpbXBsaWZ5XHJcbiAqIGhpZ2hsaWdodGluZzpcclxuICpcclxuICogRXguIGByZXN1bHQ9XCJBbGFza2FcImAgYW5kIGB0ZXJtPVwiYXNcImAgd2lsbCBwcm9kdWNlIGBBbDxzcGFuIGNsYXNzPVwibmdiLWhpZ2hsaWdodFwiPmFzPC9zcGFuPmthYC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmdiLWhpZ2hsaWdodCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJwYXJ0c1wiIGxldC1wYXJ0IGxldC1pc09kZD1cIm9kZFwiPmAgK1xyXG4gICAgICBgPHNwYW4gKm5nSWY9XCJpc09kZDsgZWxzZSBldmVuXCIgW2NsYXNzXT1cImhpZ2hsaWdodENsYXNzXCI+e3twYXJ0fX08L3NwYW4+PG5nLXRlbXBsYXRlICNldmVuPnt7cGFydH19PC9uZy10ZW1wbGF0ZT5gICtcclxuICAgICAgYDwvbmctdGVtcGxhdGU+YCwgIC8vIHRlbXBsYXRlIG5lZWRzIHRvIGJlIGZvcm1hdHRlZCBpbiBhIGNlcnRhaW4gd2F5IHNvIHdlIGRvbid0IGFkZCBlbXB0eSB0ZXh0IG5vZGVzXHJcbiAgc3R5bGVVcmxzOiBbJy4vaGlnaGxpZ2h0LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdiSGlnaGxpZ2h0IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBwYXJ0czogc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBDU1MgY2xhc3MgZm9yIGA8c3Bhbj5gIGVsZW1lbnRzIHdyYXBwaW5nIHRoZSBgdGVybWAgaW5zaWRlIHRoZSBgcmVzdWx0YC5cclxuICAgKi9cclxuICBASW5wdXQoKSBoaWdobGlnaHRDbGFzcyA9ICduZ2ItaGlnaGxpZ2h0JztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHRleHQgaGlnaGxpZ2h0aW5nIGlzIGFkZGVkIHRvLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIGB0ZXJtYCBpcyBmb3VuZCBpbnNpZGUgdGhpcyB0ZXh0LCBpdCB3aWxsIGJlIGhpZ2hsaWdodGVkLlxyXG4gICAqIElmIHRoZSBgdGVybWAgY29udGFpbnMgYXJyYXkgdGhlbiBhbGwgdGhlIGl0ZW1zIGZyb20gaXQgd2lsbCBiZSBoaWdobGlnaHRlZCBpbnNpZGUgdGhlIHRleHQuXHJcbiAgICovXHJcbiAgQElucHV0KCkgcmVzdWx0Pzogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHRlcm0gb3IgYXJyYXkgb2YgdGVybXMgdG8gYmUgaGlnaGxpZ2h0ZWQuXHJcbiAgICogU2luY2UgdmVyc2lvbiBgdjQuMi4wYCB0ZXJtIGNvdWxkIGJlIGEgYHN0cmluZ1tdYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRlcm06IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBCb29sZWFuIG9wdGlvbiB0byBkZXRlcm1pbmUgaWYgdGhlIGhpZ2hsaWdodGluZyBzaG91bGQgYmUgc2Vuc2l0aXZlIHRvIGFjY2VudHMgb3Igbm90LlxyXG4gICAqXHJcbiAgICogVGhpcyBmZWF0dXJlIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBicm93c2VycyB0aGF0IGltcGxlbWVudCB0aGUgYFN0cmluZy5ub3JtYWxpemVgIGZ1bmN0aW9uXHJcbiAgICogKHR5cGljYWxseSBub3QgSW50ZXJuZXQgRXhwbG9yZXIpLlxyXG4gICAqIElmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGZlYXR1cmUgaW4gYSBicm93c2VyIHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IGBTdHJpbmcubm9ybWFsaXplYCxcclxuICAgKiB5b3Ugd2lsbCBoYXZlIHRvIGluY2x1ZGUgYSBwb2x5ZmlsbCBpbiB5b3VyIGFwcGxpY2F0aW9uIChgdW5vcm1gIGZvciBleGFtcGxlKS5cclxuICAgKlxyXG4gICAqIEBzaW5jZSA5LjEuMFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGFjY2VudFNlbnNpdGl2ZSA9IHRydWU7XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5hY2NlbnRTZW5zaXRpdmUgJiYgIVN0cmluZy5wcm90b3R5cGUubm9ybWFsaXplKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICdUaGUgYGFjY2VudFNlbnNpdGl2ZWAgaW5wdXQgaW4gYG5nYi1oaWdobGlnaHRgIGNhbm5vdCBiZSBzZXQgdG8gYGZhbHNlYCBpbiBhIGJyb3dzZXIgJyArXHJcbiAgICAgICAgICAndGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlIGBTdHJpbmcubm9ybWFsaXplYCBmdW5jdGlvbi4gJyArXHJcbiAgICAgICAgICAnWW91IHdpbGwgaGF2ZSB0byBpbmNsdWRlIGEgcG9seWZpbGwgaW4geW91ciBhcHBsaWNhdGlvbiB0byB1c2UgdGhpcyBmZWF0dXJlIGluIHRoZSBjdXJyZW50IGJyb3dzZXIuJyk7XHJcbiAgICAgIHRoaXMuYWNjZW50U2Vuc2l0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IHRvU3RyaW5nKHRoaXMucmVzdWx0KTtcclxuXHJcbiAgICBjb25zdCB0ZXJtcyA9IEFycmF5LmlzQXJyYXkodGhpcy50ZXJtKSA/IHRoaXMudGVybSA6IFt0aGlzLnRlcm1dO1xyXG4gICAgY29uc3QgcHJlcGFyZVRlcm0gPSB0ZXJtID0+IHRoaXMuYWNjZW50U2Vuc2l0aXZlID8gdGVybSA6IHJlbW92ZUFjY2VudHModGVybSk7XHJcbiAgICBjb25zdCBlc2NhcGVkVGVybXMgPSB0ZXJtcy5tYXAodGVybSA9PiByZWdFeHBFc2NhcGUocHJlcGFyZVRlcm0odG9TdHJpbmcodGVybSkpKSkuZmlsdGVyKHRlcm0gPT4gdGVybSk7XHJcbiAgICBjb25zdCB0b1NwbGl0ID0gdGhpcy5hY2NlbnRTZW5zaXRpdmUgPyByZXN1bHQgOiByZW1vdmVBY2NlbnRzKHJlc3VsdCk7XHJcblxyXG4gICAgY29uc3QgcGFydHMgPSBlc2NhcGVkVGVybXMubGVuZ3RoID8gdG9TcGxpdC5zcGxpdChuZXcgUmVnRXhwKGAoJHtlc2NhcGVkVGVybXMuam9pbignfCcpfSlgLCAnZ21pJykpIDogW3Jlc3VsdF07XHJcblxyXG4gICAgaWYgKHRoaXMuYWNjZW50U2Vuc2l0aXZlKSB7XHJcbiAgICAgIHRoaXMucGFydHMgPSBwYXJ0cztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgICB0aGlzLnBhcnRzID0gcGFydHMubWFwKHBhcnQgPT4gcmVzdWx0LnN1YnN0cmluZyhvZmZzZXQsIG9mZnNldCArPSBwYXJ0Lmxlbmd0aCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=