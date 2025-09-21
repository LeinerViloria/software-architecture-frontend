
export enum ViewMode {
  GRID = 'grid',
  LIST = 'list'
}

export enum TopicStatus {
  AVAILABLE = 'available',
  COMING_SOON = 'coming-soon'
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  category: string;
  concepts: string[];
  status: TopicStatus;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  topics?: Topic[];
}
