export interface IImage {
  description: string;
  downs: number;
  height: number;
  link: string;
  score: number;
  title: string;
  ups: number;
  width: number;
}

export interface FilterState {
  section: string;
  sort: string;
  window: string;
  page: number;
  showViral: boolean;
}
