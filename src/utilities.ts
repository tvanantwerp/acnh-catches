import { ICatch } from './types';

export const monthsStringToNums = (months: string): number[] => {
  return months
    .split('')
    .map((month, i) => (month === 'y' ? i + 1 : -1))
    .filter((month) => month > -1);
};

export const hoursStringToNums = (hours: string): number[] => {
  return hours
    .split('')
    .map((hour, i) => (hour === 'y' ? i : -1))
    .filter((hour) => hour > -1);
};

export const inCurrentMonth = (currentMonth: number, months: string) => {
  const monthsNumbers: number[] = monthsStringToNums(months);
  if (monthsNumbers.includes(currentMonth)) return true;
  return false;
};

export const inCurrentHour = (currentHour: number, hours: string) => {
  const hoursNumbers: number[] = hoursStringToNums(hours);
  if (hoursNumbers.includes(currentHour)) return true;
  return false;
};

export const sortCatches = (
  sortAsc: boolean,
  sortBy: keyof ICatch,
  hour: number,
  month: number,
  a: ICatch,
  b: ICatch
): number => {
  if (
    sortBy === ('hours' as keyof ICatch) ||
    sortBy === ('months' as keyof ICatch)
  ) {
    let currentTime: number = 0;
    if (sortBy === ('hours' as keyof ICatch)) currentTime = hour;
    if (sortBy === ('months' as keyof ICatch)) currentTime = month - 1;
    const relevantA: string = a[sortBy].toString().split('')[currentTime];
    const relevantB: string = b[sortBy].toString().split('')[currentTime];
    if (
      relevantA === (sortAsc ? 'y' : 'n') &&
      relevantB === (sortAsc ? 'n' : 'y')
    )
      return -1;
    if (
      relevantA === (sortAsc ? 'n' : 'y') &&
      relevantB === (sortAsc ? 'y' : 'n')
    )
      return 1;
    return +b['price' as keyof ICatch] - +a['price' as keyof ICatch];
  }
  return sortAsc ? +a[sortBy] - +b[sortBy] : +b[sortBy] - +a[sortBy];
};
