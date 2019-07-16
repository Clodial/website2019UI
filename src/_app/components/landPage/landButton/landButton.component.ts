import {Component, Input} from '@angular/core';

@Component({
    selector: 'land-button',
    templateUrl: './landButton.component.html',
    styleUrls: ['../../../../mainStyle.css',
                './landButton.component.css']
})
export class LandButton{

    @Input() link : string;
    @Input() linkText : string;

    constructor(){
    }

    goToLink(){
        
    }

}