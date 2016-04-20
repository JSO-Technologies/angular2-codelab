import {Pipe} from "angular2/core";

@Pipe({name: 'mark'})
export class MarkPipe {
    transform(value:boolean):string {
        return value ? '✔' : '✘';
    }
}