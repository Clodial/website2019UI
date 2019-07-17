import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'core-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['../../../../mainStyle.css',
                './footer.component.css']
})
export class FooterComponent{

    @HostListener('window:scroll', ['$event'])
    onScroll(event) {
        event.target.bottom = 0;
        event.target.left = 0;
    }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        event.target.bottom = 0;
        event.target.left = 0;
    }
}