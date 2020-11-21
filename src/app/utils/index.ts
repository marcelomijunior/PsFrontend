export function isSameDate(date1: Date, date2: Date): boolean {
  const [firstDate] = date1.toISOString().split('T');
  const [secondDate] = date2.toISOString().split('T');
  return firstDate === secondDate;
}
