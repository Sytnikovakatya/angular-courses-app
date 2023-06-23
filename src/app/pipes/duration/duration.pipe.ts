import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    if (value) {
      const hours: number = Math.floor(value / 60);
      const minutes: number = Math.floor(value % 60);

      if (hours === 0 && minutes <= 59) {
        return minutes + ' min';
      } else if (minutes > 0) {
        return hours + 'h ' + (minutes < 10 ? '0' + minutes : minutes) + ' min';
      } else {
        return hours + (hours === 1 ? ' hour' : ' hours');
      }
    } else {
      return '';
    }
  }
}
