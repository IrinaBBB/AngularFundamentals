import { Component } from '@angular/core';

@Component({
    selector: 'ngf-events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr />
            <ngf-event-thumbnail
                (eventClick)="handleEventClicked($event)"
                [event]="event"
            ></ngf-event-thumbnail>
        </div>
    `,
})
export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
    };

    handleEventClicked(data): void {
        console.log('received:', data);
    }
}
