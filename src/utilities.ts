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
