import { Component, Input, ChangeDetectionStrategy, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationComponent),
      multi: true,
    },
  ],
})
export class DurationComponent implements ControlValueAccessor {
  @Input() valid: boolean | undefined;
  @Input() hasError: boolean | undefined;

  value = '';

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(onChange: (value: string) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLButtonElement;
    if (target) {
      this.value = target.value;
      this.onChange(target.value);
      this.onTouched();
    }
  }

  validate(): { [key: string]: unknown } | null {
    return null;
  }
}
