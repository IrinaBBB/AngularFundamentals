import { Component } from '@angular/core';

@Component({
    selector: 'ngf-events-app',
    template: `
        <ngf-navbar></ngf-navbar>
        <ngf-events-list></ngf-events-list>
    `,
})
export class EventsAppComponent {
    title = 'ng-fundamentals';
}
