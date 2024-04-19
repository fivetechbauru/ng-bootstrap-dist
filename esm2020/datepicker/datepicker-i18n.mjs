import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { formatDate, FormStyle, getLocaleDayNames, getLocaleMonthNames, TranslationWidth } from '@angular/common';
import * as i0 from "@angular/core";
export function NGB_DATEPICKER_18N_FACTORY(locale) {
    return new NgbDatepickerI18nDefault(locale);
}
/**
 * A service supplying i18n data to the datepicker component.
 *
 * The default implementation of this service uses the Angular locale and registered locale data for
 * weekdays and month names (as explained in the Angular i18n guide).
 *
 * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
 * numerals. For other static labels the datepicker uses the default Angular i18n.
 *
 * See the [i18n demo](#/components/datepicker/examples#i18n) and
 * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
 * a custom provider for i18n.
 */
export class NgbDatepickerI18n {
    /**
     * Returns the text label to display above the day view.
     *
     * @since 9.1.0
     */
    getMonthLabel(date) {
        return `${this.getMonthFullName(date.month, date.year)} ${this.getYearNumerals(date.year)}`;
    }
    /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * @since 3.0.0
     */
    getDayNumerals(date) { return `${date.day}`; }
    /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * @since 3.0.0
     */
    getWeekNumerals(weekNumber) { return `${weekNumber}`; }
    /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * @since 3.0.0
     */
    getYearNumerals(year) { return `${year}`; }
    /**
     * Returns the week label to display in the heading of the month view.
     *
     * @since 9.1.0
     */
    getWeekLabel() { return ''; }
}
NgbDatepickerI18n.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbDatepickerI18n, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgbDatepickerI18n.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbDatepickerI18n, providedIn: 'root', useFactory: NGB_DATEPICKER_18N_FACTORY, deps: [{ token: LOCALE_ID }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbDatepickerI18n, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_18N_FACTORY, deps: [LOCALE_ID] }]
        }] });
/**
 * A service providing default implementation for the datepicker i18n.
 * It can be used as a base implementation if necessary.
 *
 * @since 9.1.0
 */
export class NgbDatepickerI18nDefault extends NgbDatepickerI18n {
    constructor(_locale) {
        super();
        this._locale = _locale;
        this._monthsShort = getLocaleMonthNames(_locale, FormStyle.Standalone, TranslationWidth.Abbreviated);
        this._monthsFull = getLocaleMonthNames(_locale, FormStyle.Standalone, TranslationWidth.Wide);
    }
    getWeekdayLabel(weekday, width) {
        const weekdaysStartingOnSunday = getLocaleDayNames(this._locale, FormStyle.Standalone, width === undefined ? TranslationWidth.Short : width);
        const weekdays = weekdaysStartingOnSunday.map((day, index) => weekdaysStartingOnSunday[(index + 1) % 7]);
        return weekdays[weekday - 1] || '';
    }
    getMonthShortName(month) { return this._monthsShort[month - 1] || ''; }
    getMonthFullName(month) { return this._monthsFull[month - 1] || ''; }
    getDayAriaLabel(date) {
        const jsDate = new Date(date.year, date.month - 1, date.day);
        return formatDate(jsDate, 'fullDate', this._locale);
    }
}
NgbDatepickerI18nDefault.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbDatepickerI18nDefault, deps: [{ token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Injectable });
NgbDatepickerI18nDefault.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbDatepickerI18nDefault });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbDatepickerI18nDefault, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pMThuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pMThuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQUdoSCxNQUFNLFVBQVUsMEJBQTBCLENBQUMsTUFBTTtJQUMvQyxPQUFPLElBQUksd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7R0FZRztBQUVILE1BQU0sT0FBZ0IsaUJBQWlCO0lBc0JyQzs7OztPQUlHO0lBQ0gsYUFBYSxDQUFDLElBQW1CO1FBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUM5RixDQUFDO0lBU0Q7Ozs7T0FJRztJQUNILGNBQWMsQ0FBQyxJQUFtQixJQUFZLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXJFOzs7O09BSUc7SUFDSCxlQUFlLENBQUMsVUFBa0IsSUFBWSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXZFOzs7O09BSUc7SUFDSCxlQUFlLENBQUMsSUFBWSxJQUFZLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFM0Q7Ozs7T0FJRztJQUNILFlBQVksS0FBYSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7OzhHQWhFakIsaUJBQWlCO2tIQUFqQixpQkFBaUIsY0FEZCxNQUFNLGNBQWMsMEJBQTBCLGtCQUFTLFNBQVM7MkZBQ25FLGlCQUFpQjtrQkFEdEMsVUFBVTttQkFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLDBCQUEwQixFQUFFLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDOztBQW9FM0Y7Ozs7O0dBS0c7QUFFSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsaUJBQWlCO0lBSTdELFlBQXVDLE9BQWU7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFENkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUdwRCxJQUFJLENBQUMsWUFBWSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUFlLEVBQUUsS0FBd0I7UUFDdkQsTUFBTSx3QkFBd0IsR0FDMUIsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEgsTUFBTSxRQUFRLEdBQUcsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RyxPQUFPLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFhLElBQVksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXZGLGdCQUFnQixDQUFDLEtBQWEsSUFBWSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFckYsZUFBZSxDQUFDLElBQW1CO1FBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdELE9BQU8sVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7O3FIQXpCVSx3QkFBd0Isa0JBSWYsU0FBUzt5SEFKbEIsd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBRHBDLFVBQVU7OzBCQUtJLE1BQU07MkJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBMT0NBTEVfSUR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2Zvcm1hdERhdGUsIEZvcm1TdHlsZSwgZ2V0TG9jYWxlRGF5TmFtZXMsIGdldExvY2FsZU1vbnRoTmFtZXMsIFRyYW5zbGF0aW9uV2lkdGh9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TmdiRGF0ZVN0cnVjdH0gZnJvbSAnLi9uZ2ItZGF0ZS1zdHJ1Y3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5HQl9EQVRFUElDS0VSXzE4Tl9GQUNUT1JZKGxvY2FsZSkge1xyXG4gIHJldHVybiBuZXcgTmdiRGF0ZXBpY2tlckkxOG5EZWZhdWx0KGxvY2FsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHNlcnZpY2Ugc3VwcGx5aW5nIGkxOG4gZGF0YSB0byB0aGUgZGF0ZXBpY2tlciBjb21wb25lbnQuXHJcbiAqXHJcbiAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgc2VydmljZSB1c2VzIHRoZSBBbmd1bGFyIGxvY2FsZSBhbmQgcmVnaXN0ZXJlZCBsb2NhbGUgZGF0YSBmb3JcclxuICogd2Vla2RheXMgYW5kIG1vbnRoIG5hbWVzIChhcyBleHBsYWluZWQgaW4gdGhlIEFuZ3VsYXIgaTE4biBndWlkZSkuXHJcbiAqXHJcbiAqIEl0IGFsc28gcHJvdmlkZXMgYSB3YXkgdG8gaTE4biBkYXRhIHRoYXQgZGVwZW5kcyBvbiBjYWxlbmRhciBjYWxjdWxhdGlvbnMsIGxpa2UgYXJpYSBsYWJlbHMsIGRheSwgd2VlayBhbmQgeWVhclxyXG4gKiBudW1lcmFscy4gRm9yIG90aGVyIHN0YXRpYyBsYWJlbHMgdGhlIGRhdGVwaWNrZXIgdXNlcyB0aGUgZGVmYXVsdCBBbmd1bGFyIGkxOG4uXHJcbiAqXHJcbiAqIFNlZSB0aGUgW2kxOG4gZGVtb10oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvZXhhbXBsZXMjaTE4bikgYW5kXHJcbiAqIFtIZWJyZXcgY2FsZW5kYXIgZGVtb10oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvY2FsZW5kYXJzI2hlYnJldykgb24gaG93IHRvIGV4dGVuZCB0aGlzIGNsYXNzIGFuZCBkZWZpbmVcclxuICogYSBjdXN0b20gcHJvdmlkZXIgZm9yIGkxOG4uXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnLCB1c2VGYWN0b3J5OiBOR0JfREFURVBJQ0tFUl8xOE5fRkFDVE9SWSwgZGVwczogW0xPQ0FMRV9JRF19KVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmdiRGF0ZXBpY2tlckkxOG4ge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHdlZWtkYXkgbGFiZWwgdXNpbmcgc3BlY2lmaWVkIHdpZHRoXHJcbiAgICpcclxuICAgKiBAc2luY2UgOS4xLjBcclxuICAgKi9cclxuICBhYnN0cmFjdCBnZXRXZWVrZGF5TGFiZWwod2Vla2RheTogbnVtYmVyLCB3aWR0aD86IFRyYW5zbGF0aW9uV2lkdGgpOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHNob3J0IG1vbnRoIG5hbWUgdG8gZGlzcGxheSBpbiB0aGUgZGF0ZSBwaWNrZXIgbmF2aWdhdGlvbi5cclxuICAgKlxyXG4gICAqIFdpdGggZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDE6ICdtb250aCcgaXMgMT1KYW4gLi4uIDEyPURlYy5cclxuICAgKi9cclxuICBhYnN0cmFjdCBnZXRNb250aFNob3J0TmFtZShtb250aDogbnVtYmVyLCB5ZWFyPzogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBmdWxsIG1vbnRoIG5hbWUgdG8gZGlzcGxheSBpbiB0aGUgZGF0ZSBwaWNrZXIgbmF2aWdhdGlvbi5cclxuICAgKlxyXG4gICAqIFdpdGggZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDE6ICdtb250aCcgaXMgMT1KYW4gLi4uIDEyPURlYy5cclxuICAgKi9cclxuICBhYnN0cmFjdCBnZXRNb250aEZ1bGxOYW1lKG1vbnRoOiBudW1iZXIsIHllYXI/OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHRleHQgbGFiZWwgdG8gZGlzcGxheSBhYm92ZSB0aGUgZGF5IHZpZXcuXHJcbiAgICpcclxuICAgKiBAc2luY2UgOS4xLjBcclxuICAgKi9cclxuICBnZXRNb250aExhYmVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuZ2V0TW9udGhGdWxsTmFtZShkYXRlLm1vbnRoLCBkYXRlLnllYXIpfSAke3RoaXMuZ2V0WWVhck51bWVyYWxzKGRhdGUueWVhcil9YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIGZvciBhIHNwZWNpZmljIGRhdGUuXHJcbiAgICpcclxuICAgKiBAc2luY2UgMi4wLjBcclxuICAgKi9cclxuICBhYnN0cmFjdCBnZXREYXlBcmlhTGFiZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiBhIGRheSB0aGF0IGlzIHJlbmRlcmVkIGluIGEgZGF5IGNlbGwuXHJcbiAgICpcclxuICAgKiBAc2luY2UgMy4wLjBcclxuICAgKi9cclxuICBnZXREYXlOdW1lcmFscyhkYXRlOiBOZ2JEYXRlU3RydWN0KTogc3RyaW5nIHsgcmV0dXJuIGAke2RhdGUuZGF5fWA7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiBhIHdlZWsgbnVtYmVyIHJlbmRlcmVkIGJ5IGRhdGVwaWNrZXIuXHJcbiAgICpcclxuICAgKiBAc2luY2UgMy4wLjBcclxuICAgKi9cclxuICBnZXRXZWVrTnVtZXJhbHMod2Vla051bWJlcjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIGAke3dlZWtOdW1iZXJ9YDsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIGEgeWVhciB0aGF0IGlzIHJlbmRlcmVkIGluIHRoZSBkYXRlcGlja2VyIHllYXIgc2VsZWN0IGJveC5cclxuICAgKlxyXG4gICAqIEBzaW5jZSAzLjAuMFxyXG4gICAqL1xyXG4gIGdldFllYXJOdW1lcmFscyh5ZWFyOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gYCR7eWVhcn1gOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHdlZWsgbGFiZWwgdG8gZGlzcGxheSBpbiB0aGUgaGVhZGluZyBvZiB0aGUgbW9udGggdmlldy5cclxuICAgKlxyXG4gICAqIEBzaW5jZSA5LjEuMFxyXG4gICAqL1xyXG4gIGdldFdlZWtMYWJlbCgpOiBzdHJpbmcgeyByZXR1cm4gJyc7IH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc2VydmljZSBwcm92aWRpbmcgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIGRhdGVwaWNrZXIgaTE4bi5cclxuICogSXQgY2FuIGJlIHVzZWQgYXMgYSBiYXNlIGltcGxlbWVudGF0aW9uIGlmIG5lY2Vzc2FyeS5cclxuICpcclxuICogQHNpbmNlIDkuMS4wXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ2JEYXRlcGlja2VySTE4bkRlZmF1bHQgZXh0ZW5kcyBOZ2JEYXRlcGlja2VySTE4biB7XHJcbiAgcHJpdmF0ZSBfbW9udGhzU2hvcnQ6IHJlYWRvbmx5IHN0cmluZ1tdO1xyXG4gIHByaXZhdGUgX21vbnRoc0Z1bGw6IHJlYWRvbmx5IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5fbW9udGhzU2hvcnQgPSBnZXRMb2NhbGVNb250aE5hbWVzKF9sb2NhbGUsIEZvcm1TdHlsZS5TdGFuZGFsb25lLCBUcmFuc2xhdGlvbldpZHRoLkFiYnJldmlhdGVkKTtcclxuICAgIHRoaXMuX21vbnRoc0Z1bGwgPSBnZXRMb2NhbGVNb250aE5hbWVzKF9sb2NhbGUsIEZvcm1TdHlsZS5TdGFuZGFsb25lLCBUcmFuc2xhdGlvbldpZHRoLldpZGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla2RheUxhYmVsKHdlZWtkYXk6IG51bWJlciwgd2lkdGg/OiBUcmFuc2xhdGlvbldpZHRoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHdlZWtkYXlzU3RhcnRpbmdPblN1bmRheSA9XHJcbiAgICAgICAgZ2V0TG9jYWxlRGF5TmFtZXModGhpcy5fbG9jYWxlLCBGb3JtU3R5bGUuU3RhbmRhbG9uZSwgd2lkdGggPT09IHVuZGVmaW5lZCA/IFRyYW5zbGF0aW9uV2lkdGguU2hvcnQgOiB3aWR0aCk7XHJcbiAgICBjb25zdCB3ZWVrZGF5cyA9IHdlZWtkYXlzU3RhcnRpbmdPblN1bmRheS5tYXAoKGRheSwgaW5kZXgpID0+IHdlZWtkYXlzU3RhcnRpbmdPblN1bmRheVsoaW5kZXggKyAxKSAlIDddKTtcclxuICAgIHJldHVybiB3ZWVrZGF5c1t3ZWVrZGF5IC0gMV0gfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aFNob3J0TmFtZShtb250aDogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0W21vbnRoIC0gMV0gfHwgJyc7IH1cclxuXHJcbiAgZ2V0TW9udGhGdWxsTmFtZShtb250aDogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX21vbnRoc0Z1bGxbbW9udGggLSAxXSB8fCAnJzsgfVxyXG5cclxuICBnZXREYXlBcmlhTGFiZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBqc0RhdGUgPSBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSk7XHJcbiAgICByZXR1cm4gZm9ybWF0RGF0ZShqc0RhdGUsICdmdWxsRGF0ZScsIHRoaXMuX2xvY2FsZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==