import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClockComponent } from './clock.component';

describe('ClockComponent', () => {
    let component: ClockComponent;
    let fixture: ComponentFixture<ClockComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ClockComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ClockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
