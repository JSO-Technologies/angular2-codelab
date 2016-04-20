import {Component, Input, AfterViewInit, ViewEncapsulation} from 'angular2/core';
import {ITechnology} from '../../services/technologies-store/technologies-store';
import {RouterLink} from "angular2/router";

@Component({
    selector: 'theme-card',
    templateUrl: './app/components/theme-card/theme-card.html',
    styleUrls: ['./styles/card.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [RouterLink]
})
export class ThemeCard implements AfterViewInit {
    @Input() theme:ITechnology;

    constructor() {
        this.theme = <ITechnology>{};
    }

    ngAfterViewInit() {
        console.log(this.theme);
    }

}
