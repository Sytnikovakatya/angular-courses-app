import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { courses } from '@data/courses';
import { Course } from '@shared/interfaces/course.interface';

import { CoursesService } from './courses.service';
import { CourseListComponent } from '@components/courses/course-list/course-list.component';

describe('CoursesService', () => {
  let service: CoursesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{ path: 'courses', component: CourseListComponent }]),
      ],
      providers: [CoursesService],
    });
    service = TestBed.inject(CoursesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get courses', () => {
    service.getCourses().subscribe((courses: Course[]) => {
      expect(courses).toEqual(courses);
    });

    const req = httpMock.expectOne('http://localhost:3004/courses?start=0&count=5');
    expect(req.request.method).toBe('GET');
    req.flush(courses);
  });

  it('should load more courses', () => {
    const amount = 10;

    service.loadMoreCourses(amount).subscribe((courses: Course[]) => {
      expect(courses).toEqual(courses);
    });

    const req = httpMock.expectOne(`http://localhost:3004/courses?start=0&count=${amount}`);
    expect(req.request.method).toBe('GET');
    req.flush(courses);
  });

  it('should search course', () => {
    const term = 'Java';

    service.searchCourse(term).subscribe((courses: Course[]) => {
      expect(courses).toEqual(courses);
    });

    const req = httpMock.expectOne(`http://localhost:3004/courses?textFragment=${term}`);
    expect(req.request.method).toBe('GET');
    req.flush(courses);
  });

  it('should order courses', () => {
    const value = 'id';

    service.orderCourses(value).subscribe((courses: Course[]) => {
      expect(courses).toEqual(courses);
    });

    const req = httpMock.expectOne(`http://localhost:3004/courses?sort=${value}`);
    expect(req.request.method).toBe('GET');
    req.flush(courses);
  });

  it('should create new course', () => {
    const mockCourse = {
      id: 10,
      name: 'New Course',
      date: '2023-09-28T04:39:24+00:00',
      length: 140,
      isTopRated: false,
      description: 'Description',
      authors: [
        {
          id: 8413,
          name: 'Greta',
          lastName: 'Richardson',
        },
      ],
    };

    service.createCourse(mockCourse).subscribe();

    const req = httpMock.expectOne(`http://localhost:3004/courses`);
    expect(req.request.method).toBe('POST');
    req.flush(mockCourse);
  });

  it('should get course by id', () => {
    const mockId = 1;

    service.getCourseById(mockId).subscribe((course: Course) => {
      expect(course).toBe(course);
    });

    const req = httpMock.expectOne(`http://localhost:3004/courses/${mockId}`);
    expect(req.request.method).toBe('GET');
    req.flush(courses);
  });

  it('should update course', () => {
    const mockId = 1;
    const mockCourse = {
      id: 1,
      name: 'New Course',
      date: '2023-09-28T04:39:24+00:00',
      length: 140,
      isTopRated: false,
      description: 'Description',
      authors: [
        {
          id: 8413,
          name: 'Greta',
          lastName: 'Richardson',
        },
      ],
    };

    service.updateCourse(mockId, mockCourse).subscribe(() => {
      expect(courses).toEqual(courses);
    });

    const req = httpMock.expectOne(`http://localhost:3004/courses/${mockId}`);
    expect(req.request.method).toBe('PATCH');
    req.flush(courses);
  });

  it('should remove course', () => {
    const mockId = 1;

    service.removeCourse(mockId).subscribe((course: Course) => {
      expect(course).toBe(course);
    });

    const req = httpMock.expectOne(`http://localhost:3004/courses/${mockId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(courses);
  });
});
