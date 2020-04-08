export interface ICatch {
  name: string;
  location: string;
  size?: string;
  price: number;
  hours: string;
  months: string;
}

export interface ICatchProp {
  data: any;
  northOrSouth: string;
  sortBy: keyof ICatch;
  setSortBy: (heading: keyof ICatch) => void;
  sortAsc: boolean;
  setSortAsc: (asc: boolean) => void;
  month: number;
  hour: number;
  showOnlyCurrentMonth: boolean;
  showOnlyCurrentHour: boolean;
}
