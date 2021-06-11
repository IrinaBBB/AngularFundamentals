import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ngf-event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{ event.name }}</h2>
            <div>Date: {{ event.date }}</div>
            <div>Time: {{ event.time }}</div>
            <div>Price: \${{ event.price }}</div>
            <button class="btn btn-primary" (click)="handleClickMe()">
                Click me!
            </button>
        </div>
    `,
})
export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();

    handleClickMe(): void {
        this.eventClick.emit(this.event.name);
    }
}
