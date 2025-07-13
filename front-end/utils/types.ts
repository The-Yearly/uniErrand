export enum Errandvarients {
  exploreCard = "ExploreCard",
  sideCard = "SideCard",
}
export interface Errands {
  errand_id: number;
  errand_title: string;
  tags?: string[];
  errand_pic?: string;
  errand_desc: string;
  attachments?: string[];
  auth_name: string;
  status: string;
  pay: number;
}

export interface User {
  user_id?: number;
  password: string;
  user_name: string;
  rating?: number;
  user_pic?: string;
  isavailable?: boolean;
  session?: string;
}

export interface contact {
  user_id: number;
  email: string;
  phone: string;
}
