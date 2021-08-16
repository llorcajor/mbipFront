import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdownDirective {
    private isOpen: boolean =false;
    constructor(private _el: ElementRef) { 
    
    }
    
    @HostBinding('class.show') get opened() {
        return this.isOpen;
    }
    @HostListener('click') open() {
        this.isOpen = !this.isOpen;
        if(this.isOpen)
        {
        this._el.nativeElement.querySelector('.dropdown-menu').classList.add('show');
        }
        else
        {
            this._el.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
        }                
    }
    
}