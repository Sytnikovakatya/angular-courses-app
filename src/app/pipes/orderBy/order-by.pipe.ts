import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '@interfaces/course.interface';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: Course[]): Course[] {
    return value.sort((a, b) => {
      const date1 = new Date(a.date).getTime();
      const date2 = new Date(b.date).getTime();
      return date2 - date1;
    });
  }
}
