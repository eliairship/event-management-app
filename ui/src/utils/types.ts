export enum EXAMPLE_ENUM {
  'example',
}

export interface User {
  id: string;
  identifier?: string;
}

export enum EVENT_STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
}

export interface EventType {
  id: number;
  user_id: number | null;
  name: string | null;
  date: Date | null;
  description: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  status: EVENT_STATUS | null;
  created_at: Date | null;
  completed_at: Date | null;
  deleted_at: Date | null;
}
