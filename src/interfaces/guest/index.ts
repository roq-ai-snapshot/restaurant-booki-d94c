import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface GuestInterface {
  id?: string;
  user_id: string;
  favorite_cuisine?: string;
  favorite_restaurant_id: string;
  total_reservations?: number;
  date_created?: any;
  date_updated?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface GuestGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  favorite_cuisine?: string;
  favorite_restaurant_id?: string;
}
