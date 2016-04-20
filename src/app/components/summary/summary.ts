import {Component, ViewEncapsulation, Provider, OnInit, Inject} from 'angular2/core';
import {SessionStore} from "../../services/session-store/session-store";
import {IQuestion} from "../../services/question-store/question-store";
import {QuestionCard} from '../question-card/question-card';

@Component({
    templateUrl: 'app/components/summary/summary.html',
    encapsulation: ViewEncapsulation.None,
    directives: [QuestionCard]
})
export class Summary implements OnInit {
    questions:IQuestion[];
    
    constructor() {}
    
    ngOnInit() {
        this.questions = SessionStore.read();
        console.log(this.questions);
    }
}
