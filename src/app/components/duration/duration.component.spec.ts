import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';

import { DurationPipe } from '@pipes/duration/duration.pipe';

import { DurationComponent } from './duration.component';

describe('DurationComponent', () => {
  let component: DurationComponent;
  let fixture: ComponentFixture<DurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DurationComponent, DurationPipe],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(DurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event and update model data on input change', () => {
    const newInputValue = 10;

    let emittedValue: number | undefined;
    component.bindModelDataChange.subscribe(value => {
      emittedValue = value;
    });

    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = newInputValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.bindModelData).toBe(newInputValue);
    expect(emittedValue).toBe(newInputValue);
  });
});
