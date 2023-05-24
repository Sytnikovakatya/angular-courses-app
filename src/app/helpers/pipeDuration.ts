export default function pipeDuration(duration: number): string {
  let hours = Math.trunc(duration / 60);
  let minutes = duration % 60;
  return hours + 'h' + (minutes < 10 ? '0' + minutes : minutes) + 'min';
}
