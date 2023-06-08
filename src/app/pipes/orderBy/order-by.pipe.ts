import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '@interfaces/course.interface';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: Course[]): Course[] {
    return value.sort((a, b) => b.date - a.date);
  }
}
