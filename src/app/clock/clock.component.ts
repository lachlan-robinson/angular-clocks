import { Component, Input } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-clock',
    imports: [CommonModule],
    templateUrl: './clock.component.html',
    styleUrl: './clock.component.css',
})
export class ClockComponent implements OnInit, OnDestroy {
    @Input() title!: string;
    @Input() timezone!: string;

    // The date object is used to get the current date and time
    date: Date = new Date();
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;
    milliseconds: number = 0;
    private intervalId: any;

    displayHours: string = '00';
    displayMinutes: string = '00';
    displaySeconds: string = '00';

    clockSize: number = 400; // Default to 400px

    updateTime() {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: this.timezone,
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const parts = formatter.formatToParts(now);

        this.hours = +parts.find((p) => p.type === 'hour')!.value;
        this.minutes = +parts.find((p) => p.type === 'minute')!.value;
        this.seconds = +parts.find((p) => p.type === 'second')!.value;
        this.milliseconds = now.getMilliseconds(); // local milliseconds are fine

        this.displayHours = this.formatWithLeadingZero(this.hours);
        this.displayMinutes = this.formatWithLeadingZero(this.minutes);
        this.displaySeconds = this.formatWithLeadingZero(this.seconds);
    }

    formatWithLeadingZero(value: number): string {
        return value < 10 ? '0' + value : value.toString();
    }

    ngOnInit(): void {
        this.intervalId = setInterval(() => this.updateTime(), 10);
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }
}
