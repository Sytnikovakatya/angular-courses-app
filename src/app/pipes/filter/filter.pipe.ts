import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '@interfaces/course.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Course[], filterString = ''): Course[] {
    if (!value) return [];
    if (!filterString) return value;

    return value.filter(course => {
      return JSON.stringify(course.name).toLowerCase().includes(filterString);
    });
  }
}
