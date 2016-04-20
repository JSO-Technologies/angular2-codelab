import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from "angular2/router";
import {Home} from './components/home/home';
import {QuestionCard} from './components/question-card/question-card';

@Component({
    selector: 'app',
    templateUrl: 'app/ng2codelab.html',
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
    {path: '/home', name: 'Home', component: Home, useAsDefault: true},
    {path: '/question', name: 'Question', component: QuestionCard}
])
export class Ng2CodelabApp {
    private title:string;

    constructor() {
        this.title = 'Angular 2 Quiz App';
    }

}
