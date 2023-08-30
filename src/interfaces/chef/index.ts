import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface ChefInterface {
  id?: string;
  user_id: string;
  restaurant_id: string;
  specialty: string;
  experience_years: number;
  date_created?: any;
  date_updated?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface ChefGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  restaurant_id?: string;
  specialty?: string;
}
