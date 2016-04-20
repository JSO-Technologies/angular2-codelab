import {Component, Input} from "angular2/core";

@Component({
    selector: 'theme-card',
    templateUrl: 'app/components/theme-card/theme-card.html'
})
export class ThemeCard {
    @Input() theme;
}