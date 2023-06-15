import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the array sorted in in descending order based on the date key', () => {
    const mockCourses = [
      { id: 1, name: 'name1', date: '2023-03-14T04:39:24+00:00', length: 120, description: 'description' },
      { id: 2, name: 'name2', date: '2023-06-14T04:39:24+00:00', length: 120, description: 'description' },
      { id: 3, name: 'name3', date: '2023-06-10T04:39:24+00:00', length: 120, description: 'description' },
    ];

    const sortedCourses = pipe.transform(mockCourses);
    expect(sortedCourses).toEqual([
      { id: 2, name: 'name2', date: '2023-06-14T04:39:24+00:00', length: 120, description: 'description' },
      { id: 3, name: 'name3', date: '2023-06-10T04:39:24+00:00', length: 120, description: 'description' },
      { id: 1, name: 'name1', date: '2023-03-14T04:39:24+00:00', length: 120, description: 'description' },
    ]);
  });
});
