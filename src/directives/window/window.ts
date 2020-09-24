import { Directive } from '@angular/core';

/**
 * Generated class for the WindowDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[window]' // Attribute selector
})
export class WindowDirective {

  get windownRef(){
    return window
  }

  constructor() {
    console.log('Hello WindowDirective Directive');
  }

}
