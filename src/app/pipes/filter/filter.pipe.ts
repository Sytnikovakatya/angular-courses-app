import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '@interfaces/course.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Course[], filterString: string): Course[] {
    if (!filterString) return value;

    return value.filter((course: Course) => {
      return JSON.stringify(course.name).toLowerCase().includes(filterString);
    });
  }
}
