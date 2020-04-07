export interface ICatch {
  name: string;
  location: string;
  size: string;
  price: number;
  hours: string;
  months: string;
}

export interface ICatchProp {
  sortBy: keyof ICatch;
  setSortBy: (heading: keyof ICatch) => void;
  sortAsc: boolean;
  setSortAsc: (asc: boolean) => void;
  showOnlyCurrentMonth: boolean;
  showOnlyCurrentHour: boolean;
}
