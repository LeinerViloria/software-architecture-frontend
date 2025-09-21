
export interface Topic {
  id: string;
  name: string;
  description: string;
  category: string;
  concepts: string[];
  status: 'available' | 'coming-soon';
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
