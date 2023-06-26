import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "59" to "59 min"', () => {
    expect(pipe.transform(59)).toBe('59 min');
  });

  it('transforms "60" to "1 hour"', () => {
    expect(pipe.transform(60)).toBe('1 hour');
  });

  it('transforms "90" to "1h 30 min"', () => {
    expect(pipe.transform(90)).toBe('1h 30 min');
  });

  it('transforms "120" to "2 hours"', () => {
    expect(pipe.transform(120)).toBe('2 hours');
  });

  it('transforms "125" to "2h 05 min"', () => {
    expect(pipe.transform(125)).toBe('2h 05 min');
  });
});
