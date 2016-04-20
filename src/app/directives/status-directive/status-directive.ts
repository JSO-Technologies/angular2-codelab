import {
    Directive,
    ElementRef,
    Renderer,
    Input,
    AfterViewInit
} from 'angular2/core';

@Directive({
    selector: '[status]'
})
export class StatusDirective implements AfterViewInit {
    @Input('status') status;

    constructor(private el:ElementRef,
                private renderer:Renderer) {
    }

    ngAfterViewInit() {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', this.status ? 'green':'red')
    }

}
