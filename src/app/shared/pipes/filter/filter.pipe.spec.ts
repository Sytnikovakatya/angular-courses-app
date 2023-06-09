import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter courses based on a provided search term', () => {
    const mockCourses = [
      { id: 1, name: 'name1', date: '2023-06-14T04:39:24+00:00', length: 120, description: 'description' },
      { id: 2, name: 'name2', date: '2023-03-14T04:39:24+00:00', length: 120, description: 'description' },
      { id: 3, name: 'name3', date: '2023-06-10T04:39:24+00:00', length: 120, description: 'description' },
    ];
    const searchTerm = 'name1';
    const filteredArray = pipe.transform(mockCourses, searchTerm);
    expect(filteredArray).toEqual([
      { id: 1, name: 'name1', date: '2023-06-14T04:39:24+00:00', length: 120, description: 'description' },
    ]);
  });

  it('should not filter an array if the search term is empty', () => {
    const mockCourses = [
      { id: 1, name: 'name1', date: '2023-06-14T04:39:24+00:00', length: 120, description: 'description' },
      { id: 2, name: 'name2', date: '2023-03-14T04:39:24+00:00', length: 120, description: 'description' },
      { id: 3, name: 'name3', date: '2023-06-10T04:39:24+00:00', length: 120, description: 'description' },
    ];
    const searchTerm = '';
    const filteredArray = pipe.transform(mockCourses, searchTerm);
    expect(filteredArray).toEqual([
      { id: 1, name: 'name1', date: '2023-06-14T04:39:24+00:00', length: 120, description: 'description' },
      { id: 2, name: 'name2', date: '2023-03-14T04:39:24+00:00', length: 120, description: 'description' },
      { id: 3, name: 'name3', date: '2023-06-10T04:39:24+00:00', length: 120, description: 'description' },
    ]);
  });
});
